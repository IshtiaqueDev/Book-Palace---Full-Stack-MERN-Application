const Joi = require("joi");

const bookSchemaValidate=Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    imageUrl:Joi.string().required(),
    author:Joi.string().required(),
    postedOn:Joi.date()
});


module.exports=bookSchemaValidate;