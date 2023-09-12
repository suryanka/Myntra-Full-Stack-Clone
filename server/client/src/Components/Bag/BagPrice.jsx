import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../Redux/Actions/BagActions";
import { DataContext } from "../../Context/DataProvider";
// import { displayRazorpay } from "../../RazorFunctions";

function BagPrice({ cartItems }) {
  // const {paymentSuccessful, setPaymentSuccessful} = useContext(DataContext);
  const { account, setAccount } = useContext(DataContext);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const navigate= useNavigate();

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  //
  
  const url= 'http://localhost:8000';
const logo='https://static.toiimg.com/thumb/msid-95055581,width-400,resizemode-4/95055581.jpg';
 function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

async function displayRazorpay() {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const result = await axios.post(`${url}/payment/orders`, {amount: price + discount + 99});

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_test_Y5adyDbHlxSvX0", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Suryanka's Myntra",
    description: "Test Transaction",
    image: { logo },
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(
        `${url}/payment/success`,
        data
      );
      
      // navigate('http://localhost:3000/');
      alert("Payment is successfully done.");
      // setPaymentSuccessful(true);
      // {
      //   cartItems.map((item)=> (
      //     // console.log("Removing items")
      //     removeFromCart(item.id)
      //   ))
      // }
    },
    prefill: {
      name: "Suryanka Ghosh",
      email: "SuryankaGhosh@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Suryanka Ghosh Corporate Office",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}


  //
  return (
    <Box
      style={{
        verticalAlign: "top",
        display: "inline-block",
        width: "100%",
        padding: "24px 16px 24px 16px",
        textAlign: 'left',
        border: '1px solid black',
      }}
    >
      <Box style={{ marginBottom: "16px" }}>
        <Box
          style={{
            fontSize: "12px",
            fontWeight: "700",
            margin: "24px 0 16px",
            color: "#535766",
          }}
        >
          PRICE DETAILS ({cartItems.length} Item)
        </Box>
        <Box style={{ fontSize: "14px" }}>
          <Box style={{ marginBottom: "12px", lineHeight: "16px" }}>
            <Box component="span">Total MRP</Box>
            <Box component="span" style={{ float: "right" }}>
              ₹{price}
            </Box>
          </Box>
          <Box style={{ marginBottom: "12px", lineHeight: "16px" }}>
            <Box component="span">Discount on MRP</Box>
            <Box component="span" style={{ float: "right", color: "#03a685" }}>{
              discount<0?<Box>-₹{-discount}</Box> :<Box>-₹{discount}</Box>
            }
              
            </Box>
          </Box>
          <Box style={{ marginBottom: "12px", lineHeight: "16px" }}>
            <Box component="span">Coupon Discount</Box>
            <Box
              component="span"
              style={{
                fontSize: "14px",
                color: "#ff3f6c",
                cursor: "pointer",
                float: "right",
              }}
            >
              {" "}
              Apply Coupon
            </Box>
          </Box>
          <Box style={{ marginBottom: "12px", lineHeight: "16px" }}>
            <Box component="span">
              {" "}
              Convenience Fee
              <Box component="span"> Know More</Box>
            </Box>
            <Box component="span" style={{ float: "right" }}>
              ₹99
            </Box>
          </Box>
          <Box
            style={{
              fontWeight: "700",
              fontSize: "15px",
              paddingTop: "16px",
              borderTop: "1px solid #eaeaec",
              color: "#3e4152",
              lineHeight: "16px",
            }}
          >
            <Box component="span"> Total Amount</Box>
            <Box component="span" style={{ float: "right" }}>
              {/* {price + discount + 99} */}
              ₹500
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button
          style={{
            width: "100%",
            letterSpacing: "1px",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "2px",
            borderWidth: "0px",
            padding: "10px 16px",
            backgroundColor: "rgb(255, 63, 108)",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            marginBottom: 5
          }}
          onClick={()=> {
            console.log(`Value of account in onClick is : ${account}`);
            if(!account){
              
              return 0;
            }
            displayRazorpay()
            // account && displayRazorpay()
          }}
        >
          PLACE ORDER
        </Button>
      </Box>
      { !account && <Box style={{
                fontSize: "14px",
                color: "#ff3f6c",
                cursor: "pointer",
                float: "left",
              }}>
        Please login to place order
      </Box>}
    </Box>
  );
}

export default BagPrice;
