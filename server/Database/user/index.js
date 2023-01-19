import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    phoneNumber: [{ type: Number }],
    address: [{ detail: { type: String }, for: { type: String } }],
},
    {
        timestamps: true
    });
//token generation
UserSchema.methods.generateJwtToken = async function () {
    try{
        let mytoken = jwt.sign({ user: this._id.toString() }, "QWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLqdcsdvrgbdbdfvbrgvsdvdbdr");
       //console.log(mytoken);
        return mytoken;
    }catch(err){
        console.log(err);

    }
};

//chaking by enail phone and password
UserSchema.statics.findEmailAndPhone = async ({ email, phoneNumber }) => {
    //check whether the email exists
    const checkUserByEmail = await UserModel.findOne({ email })
    //check whether the Phone exists
    const checkUserByPhone = await UserModel.findOne({ phoneNumber })
    // if user already exists,
    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exist in user")
    }
    return false;
}
UserSchema.statics.findByEmailAndPassword = async ({email, password}) => {
    const user = await UserModel.findOne({ email })
    if (!user) {
        throw new Error("User does not exist");
    }
    //comapreing password with database hashed password
    const doesPasswordMatch =  bcrypt.compare(password, user.password)
    if (!doesPasswordMatch)
        throw new Error("Invalid Credentials")

    return user;

}
UserSchema.pre("save", function (next) {
    const user = this;

    //is password is modidied
    if (!user.isModified("password"))
        return next();

    //generate bcrypt and salting
    bcrypt.genSalt(5, (err, salt) => {
        if (err) return next(err)

        //hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning the hashed password
            user.password = hash;
            return next();
        })

    })
})
export const UserModel = mongoose.model("Users", UserSchema);