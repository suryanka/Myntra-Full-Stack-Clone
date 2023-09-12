import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../Redux/Actions/ProductActions';
import { Grid} from '@mui/material';
import  Box  from '@mui/material/Box';
import ProductDetail from './ProductDetail';

function Detailview() {

    const dispatch= useDispatch();
    const {id}= useParams();

    const {loading, product}= useSelector((state)=> state.getProductDetails);

    useEffect(()=> {
        dispatch(getProductDetails(id));
    },[dispatch, id])

  return (
    <Box 
    style={{marginTop: '55px'}}
    >
      {product && Object.keys(product).length && (
        <Grid container>

        <Grid item lg={8.3} md={8.3} sm={8} xs={12} style={{padding: '1px'}}>

          <img src={product.detailUrl} style={{padding: '2px'}}/>
          <img src={product.detailUrl}  style={{padding: '2px'}}/>
        </Grid>

        <Grid item lg={3.7} md={3.7} sm={8} xs={12}>
          <ProductDetail product={product}/>
        </Grid>

      </Grid>
      )}
    </Box>
  )
}

export default Detailview