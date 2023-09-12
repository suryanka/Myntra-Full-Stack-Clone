import { Box, ThemeProvider, createTheme, styled } from "@mui/material";
import React, { useEffect } from "react";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductActions";
import Slide from "./Slide";

const theme = createTheme();

const Image = styled("img")(({theme})=> ({
  height: "auto",
  width: "100%",
  [theme.breakpoints.down('lg')]: ({
    objectFit: 'cover',
  })
}))

// ({
//   // position: 'absolute',
//   // top: '0',
//   // bottom: '0',
//   // left: '0',
//   // right: '0',
//   height: "auto",
//   width: "100%",
//   // -webkit-transition: 'all .2s ease-in-out',
//   transition: "all .2s ease-in-out",
// });

function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Banner />
        <Image
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/29/0ba11573-6632-4005-9b1d-2385a6fbdcc81693288033416-OMG--Deals.jpg"
          draggable="false"
          alt="omg-deals image"
        />
        <Box>
          <Slide products={products} />
          <Slide products={products} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
