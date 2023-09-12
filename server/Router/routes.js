import express from "express";
import { userLogin, userSignup } from "../Controller/user-controller.js";
import { getProducts, getProductsById } from "../Controller/product-controller.js";
import { razorPayment } from "../Controller/razor-controller.js";

const router= express.Router();

router.post('/login', userLogin);
router.post('/signup', userSignup);
router.get('/products', getProducts);
router.get('/products/:id', getProductsById );
router.post('/payment/orders', razorPayment);
router.post('/payment/success', razorPayment);
export default router;