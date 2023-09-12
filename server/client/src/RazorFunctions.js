import axios from 'axios';
import { useNavigate } from "react-router-dom";


const url= 'http://localhost:8000';
const logo='https://static.toiimg.com/thumb/msid-95055581,width-400,resizemode-4/95055581.jpg';
export function loadScript(src) {
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

export async function displayRazorpay() {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const result = await axios.post(`${url}/payment/orders`);

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
    
      alert(result.data.msg);
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
