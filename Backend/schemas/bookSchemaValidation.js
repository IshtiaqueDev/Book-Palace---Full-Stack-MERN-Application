const Joi = require("joi");

const bookSchema=Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    imageUrl:Joi.string().required(),
    author:Joi.string().required(),
});


const validateBook=(req,res,next)=>{
    const result=bookSchema.validate(req.body);
    if(result.error){
        return next(new Error(result.error.details[0].message));
    }
    next()
}

module.exports=validateBook;