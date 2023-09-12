import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../Services/api";
import {useNavigate} from 'react-router-dom';
import { DataContext } from "../../Context/DataProvider";

const Component = styled(Box)({
  backgroundColor: "#f6dcdc",
  display: "grid",
  placeItems: "center",
  marginLeft: "0px",
  marginRight: "0px",
  paddingTop: "60px",
  paddingBottom: "100px",
  overflow: "hidden",
  overflowX: "hidden",
  paddingLeft: 0,
  paddingRight: 0,
  //   height:'100vh',
  //   width:'100vw',
});

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  overflow: "hidden",
  overflowX: "hidden",
  //     height:'60vh',
  //   width:'80vw',
  marginLeft: "0px",
  marginRight: "0px",
  paddingLeft: 0,
  paddingRight: 0,
});

const LoginContainer = styled(Box)({
  padding: "40px 30px 0px 30px",
  textAlign: "left",
});
const LoginText = styled(Typography)`
  font-family: Assistant;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const TextInput = styled(TextField)`
  border: 1px solid #d4d5d9;
  font-size: 14px;
  padding: 11px 12px;
  line-height: 16px;
  height: auto;
  color: #282c3f;
`;

const Text = styled(Typography)`
  margin: 0 0 21px;
  color: rgba(40, 44, 63, 0.8);
`;

const InnerText = styled("span")({
  cursor: "pointer",
  color: "#ff3c6f",
  fontWeight: "700",
});

const LoginButton = styled(Button)`
  cursor: pointer;
  background-color: #ff3f6c;
  text-align: center;
  padding: 12px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
  margin-bottom: 30px;
`;

const accountLoginInitials = {
  phoneNumber: "",
  password: "",
};

const accountSignUpInitials = {
  phoneNumber: "",
  password: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your email and mobile number to get started",
  },
};

function Login() {
  const { account, setAccount } = useContext(DataContext);
  const [accountValue, toggleAccount] = useState(accountInitialValues.login);
  const [login, setLogin] = useState(accountLoginInitials);
  const [signup, setSignUp] = useState(accountSignUpInitials);
  const [error, setError] = useState(false);
  const imgurl =
    "//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg";
    const navigate= useNavigate();
  const loginUser = async () => {
    let response= await authenticateLogin(login);
    console.log(response);

    if( response?.status === 200){
      setAccount(true)
      navigate('/');
    }
    else{
      setError(true);
    }
  };
 
  const signUpUser = async() => {
    let response = await authenticateSignup(signup);
    if(!response){
      return;
    }
    setAccount(true)
    navigate('/');
  }

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  }

  const toggleLogin = () => {
    toggleAccount(accountInitialValues.login);
  }

  const onValueChange = (e) => {
    setLogin({ ...login,[e.target.name]:e.target.value});
  } 

  const onInputChange = (e) => {
    setSignUp({ ...signup,[e.target.name]:e.target.value});
  } 


  const inputStyle = {
    fontSize: "14px",
    // padding: '11px 12px',
    lineHeight: "16px",
    height: "auto",
    color: "#282c3f",
    border: "1px solid #d4d5d9",
  };

  const borderStyle = {
    fontSize: "15px",
  };

  return (
    <Component>
      <Container>
        <img src={imgurl} alt="myntraLoginLogo" style={{ height: "180px" }} />

        {accountValue.view === "login" ? (
          <LoginContainer>
            <LoginText>
              Login{" "}
              {/* <span
                    style={{ fontSize: "16px", fontWeight: 400, color: "#535766" }}
                  >
                    Or
                  </span>{" "}
                  Signup */}
            </LoginText>

            <TextField
              variant="outlined"
              label="+91 | Mobile Number"
              InputProps={{ style: inputStyle }}
              InputLabelProps={{ style: borderStyle }}
              style={{
                width: "100%",
                borderRadius: "0px",
                marginBottom: "20px",
              }}
              name= "phoneNumber"
              onChange={(e) => {
                onValueChange(e);
              }}
            />

            <TextField
              variant="outlined"
              label="Enter Password"
              InputProps={{ style: inputStyle }}
              InputLabelProps={{ style: borderStyle }}
              style={{
                width: "100%",
                borderRadius: "0px",
                marginBottom: "20px",
              }}
              name="password"
              onChange={(e) => {
                onValueChange(e);
              }}
            />
            <Text>
              By continuing, I agree to the <InnerText>Terms of Use</InnerText>{" "}
              & <InnerText>Privacy Policy</InnerText>
            </Text>
            <LoginButton onClick={loginUser}> Login </LoginButton>
            {error && <Text>
              Please give correct username and password
            </Text>}
            <Text>
              New to Myntra?<InnerText onClick={toggleSignUp}> Sign Up</InnerText>
            </Text>
          </LoginContainer>
        ) : (
          <LoginContainer>
            <LoginText>
              Login{" "}
              {/* <span
              style={{ fontSize: "16px", fontWeight: 400, color: "#535766" }}
            >
              Or
            </span>{" "}
            Signup */}
            </LoginText>

            <TextField
              variant="outlined"
              label="+91 | Mobile Number"
              InputProps={{ style: inputStyle }}
              InputLabelProps={{ style: borderStyle }}
              style={{
                width: "100%",
                borderRadius: "0px",
                marginBottom: "20px",
              }}
              name= "phoneNumber"
              onChange={(e) => {
                onInputChange(e);
              }}
            />

            <TextField
              variant="outlined"
              label="Enter Password"
              InputProps={{ style: inputStyle }}
              InputLabelProps={{ style: borderStyle }}
              style={{
                width: "100%",
                borderRadius: "0px",
                marginBottom: "20px",
              }}
              name="password"
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <Text>
              By continuing, I agree to the <InnerText>Terms of Use</InnerText>{" "}
              & <InnerText>Privacy Policy</InnerText>
            </Text>
            <LoginButton onClick={signUpUser}> Signup </LoginButton>
            <Text>
              Back to <InnerText onClick={toggleLogin}> Login</InnerText>
            </Text>
          </LoginContainer>
        )}
      </Container>
    </Component>
  );
}

export default Login;
