import fakestoreapi from "../../api/fakeStoreApi"
import {ActionTypes} from "../contants/action-types";

export const fetchProducts = () => async (dispatch)=>{
        const response= await fakestoreapi.get("/products");
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data});
    };
export const fetchProduct = (id) => async (dispatch)=>{
        const response= await fakestoreapi.get(`/products/${id}`);
        dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data});
    };
export const setProducts =(products) =>{
    return {  // return to productReducer
        type: ActionTypes.SET_PRODUCTS,
        payload: products,  
    }
}
export const selectedProducts =(product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeselectedProducts =(product) =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product,
    }
}



