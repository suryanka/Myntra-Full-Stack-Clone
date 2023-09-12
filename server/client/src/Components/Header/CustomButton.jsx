import {
  AccountCircle,
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  PowerSettingsNew,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import {
  Badge,
  Box,
  Menu,
  MenuItem,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme();

const Conatainer = styled(Box)(({ theme }) => ({
  display: "flex",
  lineHeight: 0,
  height: 40,
  // margin: 20px 30px 0 10px;
  padding: 20,
  //   padding-bottom: 20px;
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

// `
//   display: flex;
//   line-height: 0;
//   height: 40px;
//   // margin: 20px 30px 0 10px;
//   padding: 20px;
//   //   padding-bottom: 20px;
// `;

const ChildContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  color: "black",
  margin: "0 5px 0 5px",
});

const ProfDesc = styled(Typography)`
  color: #000;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  padding-top: 10px;
  line-height: 6px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

function CustomButton() {
  // const {paymentSuccessful, setPaymentSuccessful} = useContext(DataContext);
  const { account, setAccount } = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const loginUser = () => {};

  const logoutUser = () => {
    setAccount(false);
  };
  const {cartItems}= useSelector(state => state.bag);

  
  return (
    
    <ThemeProvider theme={theme}>
      <Conatainer style={{ textAlign: "center", alignItems: "center" }}>
        <ChildContainer style={{ textAlign: "center", alignItems: "center" }}>
          <AccountCircleOutlined onClick={handleClick} />
          <ProfDesc component="span">Profile</ProfDesc>

          <Menu
            id="basic-menu"
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            style={{ marginTop: "5px" }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                // logoutUser();
                !account ? loginUser() : logoutUser();
              }}
            >
              <PowerSettingsNew color="primary" fontSize="small" />
              {!account ? (
                <Link to={`login/`} style={{ textDecoration: "none" }}>
                  <Text>Login</Text>
                </Link>
              ) : (
                <Text onClick={logoutUser}>Logout</Text>
              )}
            </MenuItem>
          </Menu>
        </ChildContainer>
        <ChildContainer style={{ textAlign: "center", alignItems: "center" }}>
          <FavoriteBorderOutlined />
          <ProfDesc component="span">Wishlist</ProfDesc>
        </ChildContainer>
        <Link to="/bag" style={{color:'inherit', textDecoration:'none'}}>
          <ChildContainer style={{ textAlign: "center", alignItems: "center" }}>
            {/* { !paymentSuccessful ?<ShoppingCartOutlined />:
            <Badge  badgeContent={cartItems.length} color="error">
            <ShoppingCartOutlined />
            </Badge>} */}
            <Badge  badgeContent={cartItems.length} color="error">
            <ShoppingCartOutlined />
            </Badge>
            <ProfDesc component="span">Bag</ProfDesc>
          </ChildContainer>
        </Link>
      </Conatainer>
    </ThemeProvider>
  );
}

export default CustomButton;
