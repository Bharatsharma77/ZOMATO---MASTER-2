//env variable
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";



//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";



//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize() );
zomato.use(passport.session() );


//passport configuration
googleAuthConfig(passport);

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);




zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));


zomato.listen(5000, ()=>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));

