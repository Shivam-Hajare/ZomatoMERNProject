import express from "express";
const Router = express.Router();
import passport from "passport";

import { OrderModel, UserModel } from "../../Database/allModels"

/*
Route                 /
Description           Get all the orders based on _id
Params                _id
Access                private
Method                GET
*/

Router.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { user } = req;

        const getOrder = OrderModel.findOne({ user: user._id })
        if (!getOrder)
            return res.status(500).json({ msg: "no order found" });

        return res.status(200).json({ orders: getOrder })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route                 /new
Description           Add new order
Params                _id
Access                private
Method                GET
*/
Router.get("/new", passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            { user: user._id },
            {
                $push: {
                    orderDetails: orderDetails
                }
            }
        )
        return res.status(200).json({ orders: addNewOrder })

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;