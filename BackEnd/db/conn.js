const mongoose = require("mongoose");
const { MongoURI } = require("../config/database");


// // mongoose.model.exports = {conn_image,conn_story,conn_user};
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("MongoDB Connection is established");
}).catch((e) => {
    console.log(MongoURI);
})

// mongodb+srv://admin-sabarno-ananya:learnwithpix123@user-db.mew5quf.mongodb.net/?retryWrites=true&w=majority