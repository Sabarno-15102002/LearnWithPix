const Review= require("../models/review");
const multer=require("multer");
const storage = multer.memoryStorage();

exports.upload = multer({
    limits: 1000000,
    fileFilter(req, file, cb) {
        if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|bmp|BMP)$/)) {
            cb(undefined, true);
        }
        else {
            cb(new Error("Please upload only jpg, jpeg or png files"));
            cb(undefined, false);
        }
    }, storage
});

exports.ReviewUpload= async (req,res,next)=>{
    console.log(req.body.name);
    const userReview =new Review({
        name: req.body.name,
        bio: req.body.bio,
        rating: req.body.rating,
        review: req.body.review,
        avatar: req.file.buffer
    });
    try{
        const rev= await userReview.save();
        console.log(rev);
    }
    catch(err){
        console.log(err);
        next(err);
    }
}

exports.getReview= async (req,res,next)=>{
    const userReview= await Review.find();
    try{
        res.status(201).json({
            success: true,
            userReview
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}