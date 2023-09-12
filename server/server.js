import express from "express";
import router from "./Router/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import  connection  from "./Database/db.js";
import DefaultData from "./default.js";


const app= express();

const corsOptions = {
    origin: ["https://myntra-full-stack-clone-frontend.vercel.app",'https://api.razorpay.com'],
  methods: ["POST", "GET"],
    credentials: true,
    //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
dotenv.config();
app.use(cors(corsOptions))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);
app.use(express.json({ extended: false }));

const username= process.env.MONGO_USERNAME;
const password= process.env.MONGO_PASSWORD;
const url = `mongodb+srv://${username}:${password}@myntra-clone.5bpuxfp.mongodb.net/?retryWrites=true&w=majority
`;

connection(url);
const port = process.env.port || 8000;

app.listen(port, ()=> {
    console.log(`Server is running successfullly on port ${port}`);
});

DefaultData();
