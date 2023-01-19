import express from 'express'
import { UserModel } from '../../Database/user'
import {validateSignup,ValidateSignin} from "../../validation/auth"
const Router = express.Router();

Router.post("/signup",async(req,res)=>{
    try{
        await validateSignup(req.body.credentials)
         // used statics in User model so we are using methods here to access it.
        await UserModel.findEmailAndPhone(req.body.credentials)
        
        const newUser=await UserModel.create(req.body.credentials)
         //JWT Auth Token
        const token = newUser.generateJwtToken();
        console.log(token);
        
        return res.status(200).json({msg:"new user created"})
    }catch(error)
    {
        return res.status(500).json({ error: error.message });
    }
})

Router.post("/signin", async (req, res) => {
    try {
        //await ValidateSignin(req.body.credentials);
        await ValidateSignin(req.body.credentials)

        // const {  email, password } = req.body.credentials;
        // does user exixts
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
            
            //JWT Auth Token
            const token =await user.generateJwtToken();
            console.log(token);
            // const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");
            
            return res.status(200).json({token, status: "Success"});
            
        } catch (error) {
            console.log("err");
            return res.status(500).json({ error: error.message });
        }
    });
export default Router;
