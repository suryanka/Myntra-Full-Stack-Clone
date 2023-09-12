import { Box, Typography, createTheme, styled } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom'

const Container=styled(Box)`
display: flex;`;

const ProductContainer= styled(Box)`
  // height: 280px;
  // width: 100%;
  padding: 30px;
`;

const theme= createTheme();

const Image= styled('img')(({theme})=> ({
  [theme.breakpoints.down('lg')]:{
    objecctFit: 'cover',
  }
}))

function Slide({ products }) {
  return (
    <Container>
      {products.map((product) => (
        <Link to= {`products/${product.id}`}
        style={{textDecoration: 'none', color:'inherit'}}>
        <ProductContainer>
          <Image src={product.url} style={{height: '280px', width: '100%'}}/>
          <Typography style={{ fontSize: 16, color: '#282c3f', fontWeight: 600 }}>{product.title}</Typography>
          <Typography style={{ fontSize: 14}}>{product.tagline.shortTagline}</Typography>
          <Typography>
            <Box component="span" style={{ fontSize: 14 }}>
              ₹{product.price.cost}
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#878787" }}>
              <strike>₹{product.price.mrp}</strike>
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#388e3c" }}>
              {product.price.discount}
            </Box>
            &nbsp;&nbsp;&nbsp;
          </Typography>
        </ProductContainer>
        </Link>
      ))}
    </Container>
  );
}

export default Slide;
