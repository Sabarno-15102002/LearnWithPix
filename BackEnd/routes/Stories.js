const express = require('express');
const router = express.Router();
const {upload} = require('../utils/helper');
const {getStory,StoryUpload} = require('../controllers/StoryController');


router.post("/storyupload", upload.array("images",10),StoryUpload);

router.get("/storyupload",getStory);

module.exports = router;