import React from "react";
import Carousel from "react-multi-carousel";
import { BannerData } from "../../Constants/Data";
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const theme = createTheme();

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "280px",
  [theme.breakpoints.down("lg")]: {
    objectFit: "cover",
  },
}));

function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <Box style={{ height: "280px", width: "100%" }}>
        <Carousel
          // style={{background : '#000'}}
          //   style={{ height: "280px", width: "100%" }}
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {BannerData.map((data) => (
            <Image src={data.url} alt="bannerImage" />
          ))}
        </Carousel>
      </Box>
    </ThemeProvider>
  );
}

export default Banner;
