import React, {Component} from 'react'
import { connect } from 'react-redux'

import axios from '../../axios-orders'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/ui/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/ui/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actionTypes from '../../store/actions'


class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            },0);
    
        return sum > 0;
    }

    componentDidMount() {
        let self = this;
        axios.get("https://react-my-burger-80991.firebaseio.com/ingredients.json")
            .then(response => {
                return self.props.onIngredientsLoad(response.data);
            })
            .catch(error => {this.setState({error: true})})
        
    }


    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {

        this.props.history.push({
            pathname: '/checkout'
        });
        
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded at this moment... </p> : <Spinner />

        if(this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls 
                        addIngredient={this.props.onAddIngredient}
                        removeIngredient={this.props.onRemoveIngredient}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchasable(this.props.ingredients)}
                        ordered={this.purchaseHandler}
                        price={this.props.totalPrice} />
                </Aux>
            );
            orderSummary = <OrderSummary
                price={this.props.totalPrice}
                ingredients={this.props.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} hide={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsLoad: (defaultIngredients) => dispatch({type: actionTypes.LOAD_DEFAULT_INGREDIENTS, burger: {ingredients: defaultIngredients}}),
        onAddIngredient: (ingredientType) => dispatch({ type: actionTypes.ADD_INGREDIENT, burger: {ingredientType: ingredientType} }),
        onRemoveIngredient: (ingredientType) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, burger: {ingredientType: ingredientType} })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));