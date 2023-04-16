const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
const newImg = require("./models/image");
const ImageRoute = require('./routes/Images');
const UserRoute = require('./routes/Users');
const StoryRoute = require('./routes/Stories');
const Review=require("./routes/Reviews");
const { upload } = require("./utils/helper");
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({limit:'10mb', extended: false }));
app.use(bodyParser.json({limit:'10mb'}));
// app.use(cors({origin: true,credentials: true}));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// app.use(upload.array());
app.use(ImageRoute);
app.use(UserRoute);
app.use(StoryRoute);
app.use(Review);

app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port);
});