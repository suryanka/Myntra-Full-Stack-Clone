import {applyMiddleware, combineReducers, createStore} from "redux"
import { getProductDetailsReducer, getProductsReducer } from "./Reducers/productReducer"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Bagreducer } from "./Reducers/BagReducer";

const reducer= combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    bag: Bagreducer,
});

const middleware= [thunk];

const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
store.dispatch({ type: '@@redux-devtools/CLEAR' });
export default store;