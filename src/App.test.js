import App from './App';
import {shallow} from  'enzyme';
import {findByTestAttr, testStore} from  '../Utils/index';
import React from 'react';

const setUp=(initialState ={})=>{
    const store = testStore(initialState);
const wrapper = shallow(<App store = {store}/>).childAt(0).dive();
console.log(wrapper.debug());
    return wrapper;
}

describe('App component', ()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            posts: [{
                title: 'example title', 
                body : "text"
            },
            {
                title: 'example title 2', 
                body : "text"
            },
            {
                title: 'example title 3', 
                body : "text"
            } 
            ]
        };
        wrapper = setUp(initialState);
    });
    it('should render without errors', ()=>{
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
})