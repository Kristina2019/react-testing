import checkPropTypes from 'check-prop-types';
import {middlewares} from '../src/store';
import {applyMiddleware, createStore} from 'redux';
import rootReducer  from '../src/reducer/index';
export const findByTestAttr =(component, attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
export const checkProps = (component, expectedProps)=>{
    const wrapper = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return wrapper;
}

export const testStore = (initialState)=>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}