import axios from "axios";
import * as actiontypes from "../Constants/productConstant.js";

const url = "https://vercel.com/suryanka/myntra-full-stack-clone-backend/";

export const getProducts = () => async (dispatch) => {
  try {
    let response = await axios.get(`${url}/products`);
    let { data }= response;
    console.log("Printing data inside productactions in redux", data);
    dispatch({type: actiontypes.GET_PRDUCTS_SUCCESS, payload: data})
  } catch (error) {
    dispatch({ type: actiontypes.GET_PRDUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {

  try {
    let response= await axios.get(`${url}/products/${id}`);
    let {data} = response;
    dispatch({type: actiontypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: actiontypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message})
  }
}
