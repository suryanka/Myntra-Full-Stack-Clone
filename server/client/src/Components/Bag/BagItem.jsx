import styled from "@emotion/styled";
import { Close, ClosedCaption, Height } from "@material-ui/icons";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/BagActions";

// const Image = styled("img")({
//   fill: "#ff3f6c",
//   background: "#fff",
//   borderRadius: "2px",
// });

const Container = styled(Box)`
display: flex;
background: #fff;
    font-size: 14px;
    border: 1px solid #eaeaec;
    border-radius: 4px;
    position: relative;
    padding: 12px 12px 0;
    margin-top: 5px;
}
`;

const RightContainer = styled(Box)`
  min-height: 97px;
  width: 100%;
  text-decoration: none;
  padding-bottom: 0;
  margin-right: 6px;
  margin-left: 6px;
  text-align: left;
  font-size: 14px;
  color: #282c3f;
`;

function BagItem({ item }) {
  console.log(`Item.detailurl in BagItem : ${item.detailUrl}`);
  const dispatch = useDispatch();
  const removeItemFromCart=(id)=>{
    dispatch(removeFromCart(id));
  }
  return (
    <Container>
      <Box>
        <img src={item.detailUrl} style={{ height: 150 }} />
      </Box>
      <RightContainer>
        <Box>
          <Box
            style={{
              width: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              fontWeight: "700",
              marginBottom: "4px",
            }}
          >
            {item.title}
          </Box>
          <Typography
            style={{
            //   display: "grid",
              textDecoration: "none",
              paddingBottom: "0",
              marginRight: "6px",
              //   width: "80%",
              overflow: "hidden",
                textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: "16px",
            }}
          >
            {item.tagline.longTagline}
          </Typography>
        </Box>
        <Box
          style={{ marginTop: "2px", display: "flex", flexDirection: "row" }}
        >
          <Box
            style={{
              fontSize: "12px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "62%",
              display: "inline",
              color: "#94969f",
            }}
          >
            {" "}
            Sold by: Supercom Net
          </Box>
        </Box>
        <Box
          style={{
            padding: "8px 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Box
            style={{ display: "flex", flexWrap: "wrap", marginRight: "8px" }}
          >
            <Box
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                padding: "2px 8px",
                background: "#f5f5f6",
                color: "#282c3f",
                fontWeight: "700",
                cursor: "pointer",
                marginRight: "12px",
                borderRadius: "2px",
                lineHeight: "16px",
              }}
            >
              <Box component="span">Size:XL </Box>
            </Box>
            <Box
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                padding: "2px 8px",
                background: "#f5f5f6",
                color: "#282c3f",
                fontWeight: "700",
                cursor: "pointer",
                borderRadius: "2px",
                lineHeight: "16px",
              }}
            >
              <Box component="span"> Qty:1</Box>
            </Box>
          </Box>
          <Box
            style={{
              fontSize: "10px",
              padding: "1px 4px",
              display: "flex",
              whiteSpace: "nowrap",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2px",
              color: "#ff5722",
              fontWeight: "700",
              border: "1px solid #ff5722",
            }}
          >
            7 left
          </Box>
        </Box>
        <Box style={{ display: "flex" }}>
          <Box
            style={{
              fontWeight: "700",
              display: "inline-block",
              color: "#282c3f",
            }}
          >
            <Box>₹{item.price.cost}</Box>
          </Box>
          <Box style={{ color: "#94969f", padding: "0 8px" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
        </Box>
        <Box>
          <Box
            style={{
              display: "inline-flex",
              fontSize: "12px",
              paddingTop: "8px",
            }}
          >
            <Box  style={{marginLeft: '6px',}}>
              <Box component="span"  style={{fontWeight: '700'}}> 14 days </Box>
              return available
            </Box>
          </Box>
        </Box>
      </RightContainer>
      <Box style={{textAlign:'right', width: 16, height: 16, cursor: 'pointer'}}
      onClick={()=> removeItemFromCart(item.id)}>
        {/* <img src='http://www.w3.org/2000/svg'/> */}
        <Close style={{fontSize: 20}}/>
      </Box>
    </Container>
  );
}

export default BagItem;
