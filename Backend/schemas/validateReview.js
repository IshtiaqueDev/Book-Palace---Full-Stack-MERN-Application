const Joi=require("joi");

const reviewSchema=Joi.object({
    comment:Joi.string().required(),
    rating:Joi.number().min(1).max(5).default(1)
});


const validateReviews=(req,res,next)=>{
    const result=reviewSchema.validate(req.body);
    if(result.error){
        return next(new Error(result.error.details[0].message))
    }
    next();
}
module.exports=validateReviews;