import {applyMiddleware, createStore} from 'redux'
import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import {logger} from 'redux-logger';


const rootReducer= combineReducers({
    cake: cakeReducer,
     icecream:icecreamReducer
})

const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));


export default store;