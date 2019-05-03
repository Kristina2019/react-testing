import moxios from 'moxios';
import{testStore} from './../../Utils/index';
import {fetchPost} from '../actions/index';
describe('fetchPosts action', ()=>{
    beforeEach(()=>{
        moxios.install();
        
    });

    afterEach(()=>{
        moxios.uninstall();
    })
    test('store is updated correctly', ()=>{
        const expectedState = [{
            title: 'Example title 1', 
            body: 'Some Text'
        }, 
        {
            title: 'Example title 1', 
            body: 'Some Text'
        }, 
        {
            title: 'Example title 1', 
            body: 'Some Text'
        }];
        const store = testStore();
        moxios.wait(()=>{
            const requests = moxios.requests.mostRecent();
            requests.respondWith({
                status: 200, 
                response: expectedState
            })
        });
        return store.dispatch(fetchPost())
        .then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})