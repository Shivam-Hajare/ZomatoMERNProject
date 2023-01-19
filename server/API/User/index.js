import express from "express";
import passport from "passport";

import {ValidateRestaurantCity,ValidateCategory,validateId} from "../../validation/commonValidations"
//Database Model
import { UserModel } from "../../Database/user";

const Router = express.Router();
/*
Route                 /_id
Description           Get an User data
Params                _id
BODY                  none
Access                Public....private
Method                Get
*/
Router.get("/",passport.authenticate('jwt', { session: false }),async(req,res)=>{
    try{
        const {_id}=req.params;

        const getUser =await UserModel.findById(_id);
       return res.json({user:getUser})

    }catch(error){
        return res.status(500).json({ error: error.message });
    }
})

/*
Route                 /_id
Description           Get an User data
Params                _id
BODY                  none
Access                Public
Method                Get
*/

Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;

        await validateId(req.params);
        const getUser =await UserModel.findById(_id);
       return res.json({user:getUser})

    }catch(error){
        return res.status(500).json({ error: error.message });
    }
})

/*
Route                 /update
Description           Update the User data
Params                _userId
BODY                  user data
Access                Public
Method                PUT
*/

Router.put("/update/:_userId",passport.authenticate('jwt', { session: false }),async(req,res)=>{
    try {
        const { userId } = req.params
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            {
                $set: userData
            },
            {
                new: true
            }
        );

        return res.json({user: updateUserData});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})