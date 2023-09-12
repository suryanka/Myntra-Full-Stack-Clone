import {
  Box,
  InputBase,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import React from "react";
import { SearchOutlined } from "@material-ui/icons";

const theme = createTheme();
const SearchContainer = styled(Box)(({theme})=> ({
  display: 'flex',
  width: '60%',
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}))


// `
//   display: flex;
//   width: 60%;
// `;

const SearchBaseContainer = styled(Box)`
  display: inline-block;
  float: right;
  font-size: 14px;
  height: 20px;
  line-height: 24px;
  color: #696e79;
  // -webkit-box-sizing: content-box;
  box-sizing: content-box;
  padding: 8px 10px 10px;
  margin: 0;
  outline: 0;
  border: 1px solid #f5f5f6;
  border-radius: 0 4px 4px 0;
  border-left: 0;
  background: #f5f5f6;
  width: 100%;
`;

const InputSearchBase = styled(InputBase)`
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  padding: 4px 0 5px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  &::placeholder {
    margin-bottom: 12px;
    align-items: center;
    text-align: center;
  }
`;

const SearchIconWrapper = styled(Box)`
  // -webkit-box-sizing: content-box;
  // box-sizing: content-box;
  display: inline-block;
  height: 28px;
  width: 40px;
  text-align: center;
  padding: 8px 0 2px;
  background: #f5f5f6;
  border: 1px solid #f5f5f6;
  border-right: none;
  border-radius: 4px 0 0 4px;
  // position: absolute;
  // left: -41px;
  color: #282c3f;
`;

// const useStyles= makeStyles((theme) => ({
//     placeholder:{
//       alignItems:'center',
//       textAlign:'center'
//     },
//   }))

function Search() {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchOutlined style={{ width: 21, height: 21 }} />
        </SearchIconWrapper>
        <SearchBaseContainer>
          <InputSearchBase placeholder="Search for products, brands and more" />
        </SearchBaseContainer>
      </SearchContainer>
    </ThemeProvider>
  );
}

export default Search;
