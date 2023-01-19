import express from "express"

import passport from "passport";
//env variable
require("dotenv").config();

//Database conection
import ConnectDB from "./Database/connection.js";

// config 
import routeConfig from "./config/route.config";
routeConfig(passport);

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
 import Menu from "./API/Menu";
// import Image from "./API/Image";
// import Order from "./API/Order";
// import Review from "./API/Review";


const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));

zomato.use(passport.initialize());
zomato.use(passport.session());



zomato.get("/",(req,res)=>{
    res.json({msg:"server is running"})
})

zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
//zomato.use("/order",Order);


zomato.listen(4000,()=>{
    ConnectDB().then(()=>console.log("Server is up and running and DB connected"))
    .catch((err)=>console.log(err))
})
//npm run dev
