import * as actionTypes from './actions'

const initialState = {
    ingredients: null,
    totalPrice: 4
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 0.8
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DEFAULT_INGREDIENTS: 
            return {
                ...state,
                ingredients: action.burger.ingredients,
                totalPrice: 4
            }
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.burger.ingredientType]: state.ingredients[action.burger.ingredientType] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.burger.ingredientType]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.burger.ingredientType]: state.ingredients[action.burger.ingredientType] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.burger.ingredientType]
            }
        default: {
            return state;
        }
    }
}

export default reducer;