import React, {Component} from 'react'
import {connect} from 'react-redux'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/ui/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId)
    }

    render() {
        let order = <Spinner />;

        if(!this.props.loading) {
            const orders = [];
            const fetchedOrders = this.props.orders;
            for(let index in fetchedOrders) {
                const currentOrder = fetchedOrders[index];
                orders.push(<Order 
                                key={currentOrder.id} 
                                ingredients={currentOrder.ingredients}
                                price={currentOrder.price} />);
            }
            order = <div>
                        {orders}
                    </div>
        }

        return order;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        error: state.order.error,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders,axios));