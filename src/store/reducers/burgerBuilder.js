import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 0.8
}

const loadDefaultIngredients = (state, action) => {
    return updateObject(state, {ingredients: {
        salad: action.burger.ingredients.salad,
        bacon: action.burger.ingredients.bacon,
        cheese: action.burger.ingredients.cheese,
        meat: action.burger.ingredients.meat
    },
    building: false,
    totalPrice: 4,
    error: false})
}

const loadDefaultIngredientsFailure = (state, action) => {
    return updateObject(state, {error: true})
}

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.burger.ingredientType]: state.ingredients[action.burger.ingredientType] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.burger.ingredientType],
        building: true};
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIng = {[action.burger.ingredientType]: state.ingredients[action.burger.ingredientType] - 1};
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.burger.ingredientType],
        building: true};
    return updateObject(state, updatedSt)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DEFAULT_INGREDIENTS: return loadDefaultIngredients(state, action)
        case actionTypes.LOAD_DEFAULT_INGREDIENTS_FAILURE: return loadDefaultIngredientsFailure(state, action)
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        default: return state
    }
}

export default reducer;