import * as actiontypes from '../Constants/BagConstant'

export const Bagreducer= (state={cartItems:[]}, action) => {
    switch(action.type){
        case actiontypes.ADD_TO_CART:{
            const item = action.payload;
            console.log(`Printing item in BagReducer: ${{item}}`);
            const exist = state.cartItems.find(product => product.id===item.id);

            if(exist){
                return {...state, cartItems: state.cartItems.map((data)=> 
                (
                    data.product===exist.product? item: data
                )) }
            }
            else{
                return {...state, cartItems: [...state.cartItems, item]}
                // console.log(`Printing CartItems in BagReducer: ${{state.cartItems}}`);
            }
            

        }
        case actiontypes.REMOVE_FROM_CART:{
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)};
        }
        default:
            return state;
    }
}