import React from 'react';
import Headline from './index.js';
import './styles.scss';
import {shallow} from 'enzyme';


import {findByTestAttr} from './../../../Utils/index';

const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('headline component', ()=>{

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