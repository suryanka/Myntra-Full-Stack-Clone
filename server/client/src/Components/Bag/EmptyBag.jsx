import { Box, styled } from "@mui/material";
import React from "react";

const Image = styled("img")({
  background: "none",
  height: "165px",
  width: "146px",
});

const Container = styled(Box)`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 130px;
  padding-bottom: 100px;
`;
const LightTextBox = styled(Box)`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: 30px;
  line-height: 1.42857143;
  color: #424553;
`;

const Text = styled(Box)`
  font-size: 14px;
  color: #7e818c;
`;

const WishListConatiner = styled(Box)`
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
`;

const WishListText = styled(Box)`
  background: #fff;
  color: #ff3f6c;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid #ff3f6c;
  display: inline-block;
  padding: 10px;
`;

function EmptyBag() {
  const imgUrl =
    "https://constant.myntassets.com/checkout/assets/img/empty-bag.png";
  return (
    <Container>
      <Image src={imgUrl} />
      <LightTextBox>Hey, it feels so light!</LightTextBox>
      <Text>There is nothing in your bag. Let's add some items.</Text>

      <WishListConatiner>
        <WishListText>ADD ITEMS FROM WISHLIST</WishListText>
      </WishListConatiner>
    </Container>
  );
}

export default EmptyBag;
