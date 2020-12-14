import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

const setDefaultIngredients = (defaultIngredients) => {
    return {
        type: actionTypes.LOAD_DEFAULT_INGREDIENTS,
        burger: {
            ingredients: defaultIngredients
        }
    }
}

const ingredientLoadFailure = () => {
    return {
        type: actionTypes.LOAD_DEFAULT_INGREDIENTS_FAILURE
    }
}

export const loadIngredients = () => {
    return (dispatch) => {
        axios.get("https://react-my-burger-80991.firebaseio.com/ingredients.json")
            .then(response => {
                return dispatch(setDefaultIngredients(response.data));
            })
            .catch(error => {
                return dispatch(ingredientLoadFailure());
            })
    }
}

export const addIngredient = (ingredientType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        burger: {
            ingredientType: ingredientType
        }
    }
}

export const removeIngredient = (ingredientType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        burger: {
            ingredientType: ingredientType
        }
    }
}