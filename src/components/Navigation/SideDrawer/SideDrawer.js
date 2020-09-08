import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Logo from '../../ui/Logo/Logo'
import Backdrop from '../../ui/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} hide={props.close} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    )
}

export default sideDrawer;