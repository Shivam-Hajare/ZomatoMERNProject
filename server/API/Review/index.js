import express from "express";
import passport from "passport";

const Router = express.Router();

import { ReviewModel } from "../../Database/allModels"

/*
Route                 /:resid
Description           get all reviews
Params                resid
BODY                  Review Object
Access                Public
Method                Get
*/
Router.get("/resId", async (req, res) => {
    try {
        const {resId}=req.params
        const reviews = await ReviewModel.find({restaurants:resId}).sort({
            createdAt:-1

        })
        return res.status(200).json({reviews})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
/*
Route                 /new
Description           Add new review of food
Params                None
BODY                  Review Object
Access                Public
Method                POSt
*/

Router.post("/new", passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const {_id}=req.user;
        const {reviewData}=req.body;

        const newReview = await ReviewModel.create({...reviewData,user:_id})

        return res.status(200).json({newReview })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route                 /delete
Description           Delete a review
Params                _id
Access                Public
Method                Delete
*/
Router.delete("/delete/:_id", passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const {user}=req;
        const {_id}=req.params;
       const data= await ReviewModel.findOneAndDelete({
            _id:_id,
            user:user._id
        })
        return res.json({review: "Successfully Deleted Review",data});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


export default Router;





