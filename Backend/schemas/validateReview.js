const Joi=require("joi");

const reviewSchemaValidation=Joi.object({
    comment:Joi.string().required(),
    rating:Joi.number().required().min(1).max(5)
});

module.exports=reviewSchemaValidation;