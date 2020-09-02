import React from 'react'

import Aux from '../../../hoc/Auxiliary'

const orderSummary = (props) => {

    const displayIngredients = Object.keys(props.ingredients)
        .map( ingKey => {
            return (<li key={ingKey}>
                        <span style={{textTransform: 'capitalize'}}>
                            {ingKey}
                        </span>: {props.ingredients[ingKey]}
                    </li>)
        })

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {displayIngredients}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default orderSummary