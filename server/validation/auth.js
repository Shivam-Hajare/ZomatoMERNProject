import joi from "joi"

export const validateSignup=(userData)=>{

    const Schema = joi.object({
        fullname: joi.string().required().min(4),
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
        address: joi.array().items(joi.object({detail: joi.string(), for:joi.string()})),
        phoneNumber: joi.number().min(10).max(10)
    });
    return Schema.validateAsync(userData);
}
//array()-->address is [] thatsway

export const ValidateSignin = (userData) => {

    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).required()
    });

    return Schema.validateAsync(userData);

};