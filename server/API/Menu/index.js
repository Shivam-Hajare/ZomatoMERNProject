import express from "express";
const Router = express.Router();

import {ValidateRestaurantCity,ValidateCategory,validateId} from "../../validation/commonValidations"

import {MenuModel,ImageModel, FoodModel} from "../../Database/allModels"


/*
Route                     /list
Description               Get the list of menus of a particular restaurant.
Params                    _id
Access                    Public
Method                    Get
*/
Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        
        await validateId(req.params);
        const menus = await MenuModel.findOne({ _id });
        
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /image
Description               Get menu image based on restaurant id
Params                    _id
Access                    Public
Method                    Get
*/

Router.get("/image/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        
        await validateId(req.params);
        const menus = await ImageModel.findById(_id);
        if(!menus)
        return res.status(500).json({ msg:"Menu img not found" });
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default Router;