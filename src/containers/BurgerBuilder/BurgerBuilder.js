import React, {Component} from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const oldPrice = this.state.totalPrice;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = newCount;
        const newPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        console.log('Old quantity ' + oldCount + ' of ingredient ' + type)
        console.log('New price: ' + newPrice)
        console.log('New quantity ' + newCount + ' of ingredient ' + type)
    }

    removeIngredientHandler(type) {

    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;