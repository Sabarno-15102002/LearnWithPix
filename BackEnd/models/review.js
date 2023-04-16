const mongoose=require('mongoose');
const reviewSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required : true
        },
        bio: {
            type: String,
            required :true
        },
        rating:{
            type: Number,
            required:true
        },
        review: {
            type: String,
            require: true
        },
        avatar: {
            type: Buffer,
            required: true
        }

});

const Review=mongoose.model('Review',reviewSchema);
module.exports=Review;