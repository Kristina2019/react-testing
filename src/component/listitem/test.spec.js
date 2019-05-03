import React from 'react';
import {shallow} from 'enzyme';
 import {findByTestAttr, checkProps} from '../../../Utils/index';

 import ListItem from './index';

 describe("list item component", ()=>{

    describe('list item checking prop types', ()=>{
        it('should not throw a warning', ()=>{
            const expectedProps = {
                title: "example title", 
                description: "example description"
            };
            const errorProps = checkProps(ListItem, expectedProps);
            expect(errorProps).toBeUndefined();
        })
    });
    describe('component renders', ()=>{
        
        let wrapper;
        beforeEach(()=>{
            const props ={
                title: "example titil", 
                description: "example description "
            }
            wrapper = shallow(<ListItem {...props} />)
        });
        it('should render without err', ()=>{
            const component = findByTestAttr(wrapper, 'listitemcomponent');
            expect(component.length).toBe(1);
        })
        it('should rende a title', ()=>{
            const title = findByTestAttr(wrapper, 'title');
            expect(title.length).toBe(1);
        })
        it('should render a description', ()=>{
            const description =findByTestAttr(wrapper, 'description');
            expect(description.length).toBe(1);
        })

    });
    describe('should not render',()=>{
        let wrapper;
        beforeEach(()=>{
            const props ={
                description: 'Some text'
            };
            wrapper = shallow(<ListItem {...props}/>);

        });
        it("Component", ()=>{
            const component =  findByTestAttr(wrapper, 'listitemcomponent');
            expect(component.length).toBe(0);
        })
    })
 })