const express = require("express");
require('dotenv').config();
const router = express.Router();
const { registerUser, loginUser, logoutUser, authChecker, getAccount } = require("../controllers/AuthController");
const { registerLimiter, loginLimiter } = require("../utils/rateLimiter");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

// Registers a new User
// router.post("/register",registerLimiter, registerUser );
router.post("/register", registerUser );

// Logs In a User, creates session in mongo store
// and returns a cookie containing sessionID, also called "session-id"
router.post("/login", loginUser );
// router.post("/login",loginLimiter, loginUser );

// Log out user by deleting session from store
// and deleting cookie on client side
// Needs cookie containing sessionID to be attached to request
// router.delete("/logout", logoutUser );

// Check if user is Authenticated by reading session data
// Needs cookie containing sessionID
// router.get("/authchecker", authChecker );
router.post("/account",getAccount);

router.get("/decodejwt/:token",async(req,res) => {
    // const token = req.params.token;
    // console.log(token);
    // // const token = req.headers.authorization.split(' ')[1];
    // const decoded =  jwt.verify(token,process.env.SESS_SECRET);
    // const id = decoded._id;
    // console.log(decoded._id);
    // const userData = await User.findOne({_id : id});
    // // console.log(userData.schema.obj.name);
    // console.log(userData.isStudent);
    // res.send(userData.isStudent)
    // // const claims = (token.split('.')[1]);
    // // console.log(claims);
    // // console.log(claims.iat);
    // // const {iat} = claims;
    // // console.log(iat);
});

module.exports = router;