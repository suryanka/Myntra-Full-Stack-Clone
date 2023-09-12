import { Box, Button, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import {
    Favorite,
    FavoriteBorderOutlined,
    ShoppingBag,
    ShoppingBasket,
} from "@material-ui/icons";
import { addToCart } from "../../Redux/Actions/BagActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DataContext } from "../../Context/DataProvider";

const Container = styled(Box)`
  min-height: 820px;
  // width: 42%;
  float: left;
  padding: 0 0 0 30px;
  // -webkit-box-sizing: border-box;
  box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  text-align: left;
`;

const Childcontainer = styled(Box)`
  padding: 0 0 10px;
`;

const Title = styled(Typography)`
  margin-top: 0;
  margin-bottom: 0;
  color: #282c3f;
  padding: 0 20px 0 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

const Tagline = styled(Typography)`
  color: #535665;
  padding: 5px 20px 14px 0;
  font-size: 20px;
  opacity: 0.8;
  font-weight: 400;
`;

const RatingParent = styled(Box)`
  user-select: text !important;
  box-sizing: inherit;
  display: block;
  width: auto;
  border-bottom: 1px solid #d4d5d9;
`;

const Image = styled("img")({
    margin: "0 -8px 0 -2px",
    backgroundPosition: "-171px -28px",
    width: "24px",
    height: "24px",
});

const RatingChild = styled(Box)`
  margin-bottom: 12px;
  // display: -webkit-box;
  // display: -ms-flexbox;
  display: flex;
  // -webkit-box-pack: center;
  // -ms-flex-pack: center;
  justify-content: center;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  align-items: center;
  // width: -webkit-fit-content;
  // width: -moz-fit-content;
  width: fit-content;
  height: 29px;
  padding: 8px;
  border: 1px solid #eaeaec;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: #282c3f;
`;

const Mod = styled(Box)`
  margin-left: 8px;
  margin-top: -2px;
  color: #d4d5d9;
  width: 1px;
`;

const RatingsText = styled(Box)`
  margin-left: 8px;
  font-weight: 400;
  color: #535766;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`;

const ParentTypo = styled(Typography)`
  color: #696e79;
  font-size: 14px;
  margin-top: 14px;
  margin-bottom: 5px;
  display: inline-block;
`;

const CostSpan = styled(Box)`
  color: #282c3f;
  margin-right: 12px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
`;

const MrpSpan = styled(Box)`
  height: 22px;
  opacity: 0.8;
  font-size: 20px;
  line-height: 1.2;
  color: #282c3f;
  margin-right: 12px;
`;

const DiscountSpan = styled(Box)`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ff905a;
`;

const IncTax = styled(Typography)`
  color: #03a685;
  font-weight: 700;
  font-size: 14px;
  display: block;
  margin: 5px 10px 0 0;
`;

const SizeContainer = styled(Box)`
  margin: 0 0 10px;
  position: relative;
  line-height: 1;
  display: flex;
`;

const SizeText = styled(Typography)`
  display: inline-block;
  font-size: 16px;
  margin: 0;
  font-weight: 700;
  line-height: 1;
  box-sizing: inherit;
`;

const ChartText = styled(Box)`
  outline: 0;
  background-color: transparent;
  border: 0;
  letter-spacing: 0.5px;
  text-align: right;
  padding: 0 0 5px;
  color: #ff3e6c;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-left: 20px;
`;

const XButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #bfc0c6;
  border-radius: 50px;
  padding: 0;
  min-width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  color: #282c3f;
  // -webkit-box-flex: 0;
  // -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  position: relative;
  margin-right: 5px;
`;

const XButtonText = styled(Typography)`
  margin: 0;
  font-size: 14px;
  padding: 0 8px;
  font-weight: 700;
`;

const TwoButton = styled(Button)`
  align-items: center;
  padding: 15px 0;
  text-align: center;
  margin-top: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  // background-color: #ff3e6c;
  // border: 1px solid #ff3e6c;
  // color: #fff;
  -webkit-box-flex: 3;
  -ms-flex: 3;
  flex: 3;
  text-align: center;
  width: 100%;
  margin-right: 3%;
`;

const PincodeContainer = styled(Box)`
  position: static;
  background-color: #fff;
  height: auto;
  margin-top: 30px;
  font-family: Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
`;

const DelOpt = styled(Typography)`
color: #282c3f;
font-size: 16px;
margin: 0;
font-weight: 700;
text-transform: uppercase;
display: block;
margin-block-start: 1.33em;
margin-block-end: 1.33em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
`;

const FormDel = styled('form')({
    margin: '16px 0 0',
    padding: '0',
    position: 'relative',
    marginTop: '0em',
    fontFamily: 'Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
})

const InputText = styled('input')({
    borderRadius: '5px',
    border: '1px solid #d4d5d9',
    WebkitBoxShadow: '0',
    boxShadow: '0',
    padding: '10px',
    fontSize: '16px',
    minWidth: '160px',
    outline: '0',
    width: '250px',
    margin: '0'
})

const InputSubmit = styled('input')({
    outline: '0',
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: '700',
    backgroundColor: '#fff',
    border: '0',
    color: '#ff3e6c',
    textTransform: 'capitalize',
    position: 'relative',
    left: '-60px',
    backgroundColor: 'transparent',
})

const PinDeliveryText = styled(Typography)`
font-size: 13px;
color: #282c3f;
margin: 8px 0 0;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`;

const TextComponent= styled(Box)
`
box-sizing: inherit;
display: block;
font-family: Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
`;

const TextContainer= styled(Box)
`
margin: 20px 0 0;
box-sizing: inherit;
font-family: Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
`;

const Textwrapper = styled(Box)`
color: #282c3f;
font-size: 16px;
margin: 0;
padding: 0;
position: relative;
`;

const TextBox= styled(Box)`
margin: 5px 0;
display: inline-block;
width: 90%;
vertical-align: top;
`;


function ProductDetail({ product }) {
    // const {paymentSuccessful, setPaymentSuccessful} = useContext(DataContext);
    const {id} = product;
    const quantity= useState(1); 
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const addToBag= ()=> {
        console.log(`Printing Id in add to bag function ${id}`);
        dispatch(addToCart(id, quantity));
        // setPaymentSuccessful(false);
        navigate('/bag');
    }
    return (
        <Container>
            <Childcontainer>
                <Title
                // style={{float: 'left'}}
                >
                    {product.title}
                </Title>
                <Tagline>{product.tagline.longTagline}</Tagline>
                <RatingParent>
                    <RatingChild>
                        <div>4.3</div>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxw_ibth_00akIcFUkkWG0t1mqFLJmUEc2sTXXS4&s" />
                        <Mod>|</Mod>
                        <RatingsText>"32" "Ratings"</RatingsText>
                    </RatingChild>
                </RatingParent>

                <ParentTypo
                // style={{ float:'left'}}
                >
                    <CostSpan component="span">
                        <strong>₹{product.price.cost}</strong>
                    </CostSpan>

                    <MrpSpan component="span">MRP</MrpSpan>
                    <MrpSpan component="span">
                        <strike>₹{product.price.mrp}</strike>
                    </MrpSpan>

                    <DiscountSpan component="span">
                        ({product.price.discount} off)
                    </DiscountSpan>
                </ParentTypo>
                <IncTax
                // style={{ float:'left'}}
                >
                    inclusive of all taxes
                </IncTax>
            </Childcontainer>

            <Box style={{ margin: "10px 0 24px" }}>
                <SizeContainer>
                    <SizeText component="h4">SELECT SIZE</SizeText>
                    <ChartText component="span">SIZE CHART</ChartText>
                </SizeContainer>
                <Box style={{ margin: "10px 10px 10px 0" }}>
                    <Box
                        style={{
                            position: "relative",
                            boxSizing: "inherit",
                            fontSize: "13px",
                        }}
                    >
                        <XButton>
                            <XButtonText> XXL </XButtonText>
                        </XButton>
                        <XButton>
                            <XButtonText> 3XL </XButtonText>
                        </XButton>
                        <XButton>
                            <XButtonText> 4XL </XButtonText>
                        </XButton>
                        <XButton>
                            <XButtonText> 5XL </XButtonText>
                        </XButton>
                    </Box>
                </Box>

                <Box style={{ display: "flex" }} onClick={addToBag}>
                    <TwoButton
                        style={{
                            backgroundColor: "#ff3e6c",
                            border: "1px solid #ff3e6c",
                            color: "#fff",
                        }}
                    >
                        <ShoppingBasket style={{ margin: "-2px 0px -2px" }} />
                        <Box component="span"> ADD TO BAG</Box>
                    </TwoButton>
                    <TwoButton
                        style={{
                            backgroundColor: "#fff",
                            border: "1px solid #d4d5d9",
                            color: "#282c3f",
                        }}
                    >
                        <FavoriteBorderOutlined style={{ margin: "-2px 8px" }} />
                        <Box component="span"> WISHLIST</Box>
                    </TwoButton>
                </Box>
                <div
                    style={{
                        marginTop: "23px",
                        borderTop: "1.5px solid rgb(234, 234, 236)",
                    }}
                ></div>
            </Box>
            <PincodeContainer>
                <DelOpt component="h4">DELIVERY OPTIONS</DelOpt>

                <FormDel>
                    <InputText type="text" placeholder="Enter pincode" />
                    <InputSubmit type="submit" value="Check" />
                    <PinDeliveryText>
                        Please enter PIN code to check delivery time &amp; Pay on Delivery
                        Availability
                    </PinDeliveryText>
                </FormDel>
            </PincodeContainer>

            <TextComponent>
                <TextContainer>
                    <Textwrapper>
                        <TextBox>100% Original Products</TextBox>
                    </Textwrapper>
                    <Textwrapper>
                        <TextBox>Pay on delivery might be available</TextBox>
                    </Textwrapper>
                    <Textwrapper>
                        <TextBox>Easy 14 days returns and exchanges</TextBox>
                    </Textwrapper>

                    <Textwrapper>
                        <TextBox>Try & Buy might be available</TextBox>
                    </Textwrapper>
                </TextContainer>
            </TextComponent>
        </Container>
    );
}

export default ProductDetail;
