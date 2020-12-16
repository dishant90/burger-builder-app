import React from 'react'
import {configure, shallow} from 'enzyme';
import Apapter from 'enzyme-adapter-react-16'

import NavigationItem from './NavigationItem/NavigationItem';
import NavigationItems from './NavigationItems';

configure({adapter: new Apapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })

    it('should show two navigation items if unauthenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })

    it('should show three navigation items if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
    
    it('should show Logout navigation item if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    })
})