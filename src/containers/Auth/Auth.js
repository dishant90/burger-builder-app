import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import classes from './Auth.module.css'
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'
import Spinner from '../../components/ui/Spinner/Spinner'
import * as actions from '../../store/actions/index'
import {updateObject, checkValidity} from '../../shared/utility'

class Auth extends Component {

    state={
        formIsValid: false,
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email Address'
                },
                value: '',
                valid: false,
                validation: {
                    required: true
                },
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                valid: false,
                validation: {
                    required: true
                },
                touched: false
            }
        },
        isSignUp: true
    }

    componentDidMount() {
        if(!this.props.buildingBurger && this.props.authRedirectPath !== "/") {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedInputElement = updateObject(this.state.controls[inputIdentifier], { //Object Deep Cloning
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.controls[inputIdentifier].validation),
            touched: true
        })

        const updatedControls = updateObject(this.state.controls, {
            [inputIdentifier]: updatedInputElement
        })

        let formIsValid = true;
        for(let formElementIdentifier in updatedControls) {
            formIsValid = updatedControls[formElementIdentifier].valid && formIsValid;
        }

        this.setState({
            controls: updatedControls,
            formIsValid: formIsValid
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault(); // to prevent page reloading
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }

    handleSignUpMode = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp}
        })
    }

    render() {
        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = (
            <form onSubmit={this.handleFormSubmit}>
                {formElementsArray.map(formElement => <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangeHandler(event,formElement.id)}
                    />
                )}
                <Button disabled={!this.state.formIsValid} type="Success" clicked={this.orderHandler}>SUBMIT</Button>
            </form>
        );

        if(this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;
        if(this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>
        }

        let authRedirect = null;
        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                {form}
                <Button type='Danger' clicked={this.handleSignUpMode}>SWITCH TO {this.state.isSignUp ? 'SIGN IN' : 'SIGN UP'} </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.bgrBldr.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);