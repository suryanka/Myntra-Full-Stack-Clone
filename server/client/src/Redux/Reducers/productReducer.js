import * as actiontypes from '../Constants/productConstant'
export const getProductsReducer = (state = {products: []}, action) => {

    switch(action.type){
        case actiontypes.GET_PRDUCTS_SUCCESS:
            return {products: action.payload};
        case actiontypes.GET_PRDUCTS_FAIL:
            return {error: action.payload};
        default:
            return state;

    }
}

export const getProductDetailsReducer =(state = {product: {}}, action )=>
{
    switch(action.type){
        case actiontypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false, product: action.payload
            };
        case actiontypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false, product: action.payload
            };
        default:
            return state;
    }
}