import React from 'react';
import {findByTestAttr, checkProps} from '../../../Utils/index';
import {shallow} from 'enzyme';
import SharedButton from './index';
describe('shared button', ()=>{
    describe('checking prop types', ()=>{
        it('should not throw warning', ()=>{
            const expectedProps = {
                buttonText: 'Example', 
                emitEvent: ()=>{}
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });
    describe('shared button renders', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                buttonText: 'Example', 
                emitEvent: ()=>{

                }
            };
            wrapper = shallow(<SharedButton {...props}/>)
        });
        it('it should  render a button', ()=>{
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    });
});