import React from 'react'

import Burger from '../Burger/Burger'
import classes from './CheckoutSummary.module.css'
import Button from '../ui/Button/Button'

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h2>We hope your burger tastes well!</h2>
            <div style={{width:"100%", margin:"auto"}}>
                <Burger  ingredients={props.ingredients}/>
            </div>
            <Button
                type="Danger"
                clicked={props.checkoutCancelled}>
                    CANCEL
            </Button>
            <Button
                type="Success"
                clicked={props.checkoutContinued}>
                    CONTINUE
            </Button>
        </div>
    )
}

export default checkoutSummary;