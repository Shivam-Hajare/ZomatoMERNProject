import express from 'express'
import { RestaurantModel } from '../../Database/user'
import {ValidateRestaurantCity,ValidateCategory,validateId} from "../../validation/commonValidations"
const Router = express.Router();

/*
Route                     /
Description               Get all the restaurants details
Params                    None
Access                    Public
Method                    Get
*/
Router.get("/",async(req,res)=>{
    try{
        const {city}=req.query;
        
        await ValidateRestaurantCity(city);
        const restaurants = await RestaurantModel.find({city})
        if(restaurants.length==0)
        {
            return res.status(500).json({error:"No restaurant found in this city"})
        }
        return res.json({restaurants})
    }catch(error)
    {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route                     /
Description               Get a particular restaurant details based on the _id
Params                    None
Access                    Public
Method                    Get
*/
Router.get("/:id", async (req, res) => {
    try {
        //await ValidateRestaurantId(req.params);

        const { _id } = req.params;
        
        await validateId(req.params);
        const restaurant = await RestaurantModel.findOne({ _id });
        if (!restaurant)
        return res.status(404).json({ error: "Restaurant not found" });
        
        return res.json({ restaurant});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /search
Description               Get restaurant details search
Params                    searchString
Access                    Public
Method                    Get
*/
Router.get("/search/:searchString", async (req, res) => {
    try {
       // await ValidateRestaurantId(req.params);
        const {searchString}=req.params;
        
        await 
        await validateId(req.params);(req.params);
        const restaurant=await RestaurantModel.find({name:{$regex:searchString,$options:"i"}})
        if(restaurant.length==0)
        {
            return res.status(500).json({error:"No restaurant found in this city"})
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default Router;