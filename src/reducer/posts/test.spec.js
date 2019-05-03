import {types}  from '../../actions/types';
import postsReducer  from './reducer';
describe('Post reducer', ()=>{
    it('should return default state ', ()=>{
        const   newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    })
    it('should return new state if receiving type', ()=>{
        const state = [{title: 'test 1'}, {title: 'test2'}, {title: 'test3'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS, 
            payload: state
        });
        expect(newState).toEqual(state);
    })
});