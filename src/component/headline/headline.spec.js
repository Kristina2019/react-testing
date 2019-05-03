import React from 'react';
import Headline from './index.js';
import './styles.scss';
import {shallow} from 'enzyme';

import checkPropTypes from 'check-prop-types';
import {findByTestAttr, checkProps} from './../../../Utils/index';

const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('headline component', ()=>{

    describe('Checking Prop types', ()=>{
        it('it should  not throw warning', ()=>{
            const expectedProps = {
                header: 'Test header', 
                desc: "Test description", 
                tempArr: [{
                    fName: 'Test fname', 
                    lName: 'Test lname', 
                    email: 'test@email.com', 
                    age: 26, 
                    onlineStatus: false
                }]
            };
                const propsError = checkProps(Headline, expectedProps);
                expect(propsError).toBeUndefined();
            
        })
    });

    describe('Have props', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'Test Header', 
                desc : 'Test Desc'
            };
            wrapper = setUp(props);
        });
        it('Should rnder without error', ()=>{
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });
        it('Should render a Header 1', ()=>{
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });
        it('should render a description', ()=>{
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        });
    })
    describe('Have NO props', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });
        it('should not render', ()=>{
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    })
});