import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {BurgerBuilder} from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/ui/Spinner/Spinner'

configure({adapter: new Adapter()})

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onIngredientsLoad={() => {}} />)
    })

    it('should render <BuildControls /> when ingredients are received', () => {
        wrapper.setProps({ingredients: {salad: 0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })

    it('should render <Burger /> when ingredients are received', () => {
        wrapper.setProps({ingredients: {salad: 0}})
        expect(wrapper.find(Burger)).toHaveLength(1)
    })

    it('should render <OrderSummary /> when ingredients are received', () => {
        wrapper.setProps({ingredients: {salad: 0}})
        expect(wrapper.find(OrderSummary)).toHaveLength(1)
    })

    it('should render <Spinner /> by default', () => {
        wrapper.setProps({ingredients: null})
        expect(wrapper.find(Spinner)).toHaveLength(1)
    })

    it('should render <Spinner /> when page is loading', () => {
        wrapper.setProps({ingredients: null})
        wrapper.setState({loading: true})
        expect(wrapper.find(Spinner)).toHaveLength(2)
    })
})