import React from "react";
import { AppBar, Box, ThemeProvider, Toolbar, createTheme, styled } from "@mui/material";
import HeaderHeading from "./HeaderHeading";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  position: sticky;
  top: 0;
  color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  overflow: hidden;
`;
const theme= createTheme();
const MyntraLogo = styled("img")(({theme})=> ({
  width: 60,
  // [theme.breakpoints.down('lg')]:{
  //   objectFit: 'cover',
  // }
}))

// ({
//   // height: 20,
//   width: 60,
// });

const HeaderLeft = styled(Box)(({theme})=>
({
  display: "flex",
  flex: "60%",
  [theme.breakpoints.down('lg')]: {
    flex:'90%',
  },
  [theme.breakpoints.down('md')]: {
    flex:'100%',
  },
}));

const HeaderRight = styled(Box)(({theme})=> ({
  display: "flex",
  flex: "40%",
  [theme.breakpoints.down('lg')]: {
    flex:'10%',
  }

}))

// ({
//   display: "flex",
//   flex: "40%",
// });
function Header() {

  const navigate= useNavigate();
  const imgUrl =
    "https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png";

  const clickOnLogo = ()=> {
    navigate('/');
  }
  return (
    <ThemeProvider theme={theme}>
    <StyledHeader>
      <Toolbar
        style={{ textAlign: "center", alignItems: "center", width: "100%" }}
      >
        <HeaderLeft style={{ textAlign: "center", alignItems: "center" }}>
          <Box style={{ marginLeft: "4%", float: "left", height: "inherit" }}
          onClick= {clickOnLogo}>
            <MyntraLogo src={imgUrl} alt="Myntra_Logo" />
          </Box>

          <Box style={{ display: "flex", float: "left" }}>
            <HeaderHeading item="Men" />
            <HeaderHeading item="Women" />
            <HeaderHeading item="Kids" />
            <HeaderHeading item="Home & Living" />
            <HeaderHeading item="Beauty" />
            <HeaderHeading item="Studio" />
          </Box>
        </HeaderLeft>

        <HeaderRight style={{ textAlign: "center", alignItems: "center" }}>
          <Search />
          <CustomButton />
        </HeaderRight>
      </Toolbar>
    </StyledHeader>
    </ThemeProvider>
  );
}

export default Header;
