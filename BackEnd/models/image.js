const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    name: String,
    img: Buffer
});

const newImg = mongoose.model('Image', imageSchema);
module.exports = newImg;