import React, { useContext } from "react";
import { useSelector } from "react-redux";
import EmptyBag from "./EmptyBag";
import BagItem from "./BagItem";
import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import BagPrice from "./BagPrice";
import { DataContext } from "../../Context/DataProvider";

const theme = createTheme();

const LeftCartItemContainer = styled(Grid)(({theme})=> ({
  paddingRight: '15px',
  [theme.breakpoints.down('lg')]:{
    marginBottom: 15
  }
}));

// styled(Grid)`
// // user-select: text !important;
// // box-sizing: border-box;
// // display: grid;
// // place-items: center;
// // flex: 50%;
// // width: 100%;
// padding-right: 15px;
// `;

const LeftCartItemContainerTwo = styled(Box)(({theme})=> ({
  marginBottom: '0px',
padding: '12px',
background: '#fff1ec',
border: '1px solid #fff1ec',
borderRadius: '4px',
[theme.breakpoints.down('md')]:{
  width:'max-content',
}
}));
// `
// margin-bottom: 0px;
// padding: 12px;
// background: #fff1ec;
// border: 1px solid #fff1ec;
// border-radius: 4px;
// width: max-content;
// `;

const LeftCartItemContainerThree = styled(Box)`
user-select: text !important;
box-sizing: border-box;
display: block;
font-family: Assistant,Helvetica,Arial,sans-serif!important;
color: #282c3f;
font-size: 13px;
line-height: 1.42857143;
// width: 100%;
`;


const TextContainer = styled(Box)`
padding: 0 0 12px 8px;
position: relative;
color: #282c3f;
`;


const TextContainerOne = styled(Box)`
font-size: 14px;
display: inline-block;
font-weight: 700;
position: relative;
width: 100%;
`;

const RightContainer = styled(Grid)`
// display: grid;
// place-items: center;
// margin-right: 20px;

// flex: 50%;
text-align:left;
`;

const Container = styled(Grid)`
// display: flex;
// place-items: center;
// margin-top: 20px;

padding: 35px 135px;
`;

function Bag() {
  const { cartItems } = useSelector((state) => state.bag);
  // const {paymentSuccessful, setPaymentSuccessful} = useContext(DataContext);
  return (
    <ThemeProvider theme={theme}>
      {cartItems.length
      //  && !paymentSuccessful 
       ?
        <Container container>
          <LeftCartItemContainer item lg={9} md={12} sm={12} xs={12}>
            <LeftCartItemContainerTwo>
              <LeftCartItemContainerThree>
                <TextContainer>
                  <TextContainerOne>You have got 65% off</TextContainerOne>
                  <Box style={{ fontSize: '12px' }}>Get 70% off on 2 item(s)</Box>
                </TextContainer>

                {cartItems.map((item) => (
                  <BagItem item={item} />
                ))}
              </LeftCartItemContainerThree>
            </LeftCartItemContainerTwo>
          </LeftCartItemContainer>
          <RightContainer item lg={3} md={12} sm={12} xs={12}>
            <BagPrice cartItems={cartItems}/>
          </RightContainer>
        </Container>
        : <EmptyBag />}
    </ThemeProvider>
  );
}

export default Bag;
