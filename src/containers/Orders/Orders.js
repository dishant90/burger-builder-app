import React, {Component} from 'react'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

    state={
        orders: null,
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for(let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                console.log('Fetched Orders: ' + fetchedOrders)
                this.setState({loading: false, orders: fetchedOrders})
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    render() {

        const orders = [];
        const fetchedOrders = this.state.orders;

        for(let index in fetchedOrders) {
            const currentOrder = fetchedOrders[index];
            orders.push(<Order 
                            key={currentOrder.id} 
                            ingredients={currentOrder.ingredients}
                            price={currentOrder.price} />);
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);