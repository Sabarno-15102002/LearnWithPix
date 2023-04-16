const express= require('express');
const { ReviewUpload, getReview } = require('../controllers/ReviewController');
const router =express.Router();
const {upload} = require('../utils/helper');

router.post("/uploadreview",upload.single("avatar"),ReviewUpload);
router.get("/getreview",getReview);

module.exports=router;