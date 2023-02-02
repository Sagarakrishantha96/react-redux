import { combineReducers } from 'redux';
import {productsReducer, selectedProductReducer} from "./productsReducer";

const reducers= combineReducers({
    allproducts: productsReducer,
    product : selectedProductReducer,
});

export default reducers;