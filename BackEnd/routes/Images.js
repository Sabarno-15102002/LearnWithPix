const express = require('express');
const router = express.Router();
const multer = require('multer');
const newImg = require("../models/image");

const storage = multer.memoryStorage();
const upload = multer({
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

router.post("/imgupload", upload.single("image"), async (req, res) => {
    // console.log(req.file);
    const Img = new newImg({
        name: req.body.title,
        img: req.file.buffer
    });

    try {
        const pro = await Img.save();
        res.json(pro);
    } catch (err) {
        res.status(400).json({ error: "could not post shoe info", err });
    }
});

router.get("/imgupload", async (req, res) => {
    try{
        const images = await newImg.find({});
        res.set("Content-Type", "image/jpg");
        res.send(images);
    }
    catch(err){
        res.send("No Avatar Found");
    }
});

module.exports = router;