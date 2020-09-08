import React from 'react'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../ui/Button/Button'

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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button type="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
}

export default orderSummary