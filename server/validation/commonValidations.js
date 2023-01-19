import joi from "joi"

export const validateId=(id)=>{
    const Schema=joi.object({
        _id:joi.string().required()
    })
    return Schema.validateAsync(id)
}

export const ValidateCategory=(category)=>{
    const Schema=joi.object({
        category:joi.string().required()
    })
    return Schema.validateAsync(category)
}

export const ValidateRestaurantCity = (restaurantObj) => {

    const Schema = joi.object({
       city: joi.string().required()
    });

    return Schema.validateAsync(restaurantObj);

};

export const ValidateRestaurantSearchString = (restaurantObj) => {

    const Schema = joi.object({
       searchString: joi.string().required()
    });

    return Schema.validateAsync(restaurantObj);

};