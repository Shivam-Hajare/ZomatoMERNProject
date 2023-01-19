import express from "express";
import { FoodModel } from '../../Database/user'

import {ValidateCategory,validateId} from "../../validation/commonValidations"
const Router = express.Router();

/*
Route                     /
Description               Get all the food based on  a particular restaurant
Params                    _id
Access                    Public
Method                    Get
*/
Router.get("/:id", async (req, res) => {
    try {
        const { _id } = req.params

        await validateId(req.params);
        const foods = FoodModel.findById(_id);

        return res.json({ foods });
    } catch (err) {
        return res.status(500).json({ msg: "err" })
    }
})

Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        
        await validateId(req.params);
        const foods = await FoodModel.find({ restaurant: _id });
        
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /r
Description               Get all the foods based on particular category
Params                    category
Access                    Public
Method                    Get
*/
Router.get("/r/:category", async (req, res) => {
    try {
        
        const {category} = req.params;
        await ValidateCategory(req.params);
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" }
        });
        
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;