const bcrypt = require("bcrypt");
const User = require("../models/user");
const Joi = require("joi");
// const jwt = require('jsonwebtoken');
const { registerSchema, loginSchema } = require("../utils/userValidation");
const saltRounds = 10;

exports.registerUser = (req, res) => {
  const { name, email, password, age, isStudent } = req.body;
  console.log(req.body);
  const result = registerSchema.validate({ name, email, password, age });
  if (!result.error) {
    // Check for existing user
    User.findOne({ email: email }).then((user) => {
      if (user) return res.status(400).json("User already exists");

      //New User created
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        isStudent: req.body.isStudent,
      });

      //Password hashing
      bcrypt.genSalt(saltRounds, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          else {
            newUser.password = hash;
            // Save user
            newUser
              .save()
              .then(res.json("Registration Successful"))
              .catch((err) => console.log(err));
          }
        })
      );
    });
  } else {
    res.status(422).json(result.error.details[0].message);
  }
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // basic validation
  try {
    const result = loginSchema.validate({ email, password });
    if (!result.error) {
      //check for existing user
      User.findOne({ email: email }).then((user) => {
        if (!user) return res.status(400).json("Incorrect Email or Password");

        // Validate password
        bcrypt.compare(password, user.password).then((isMatch) => {
          console.log(isMatch);
          if (!isMatch) {
            // throw new Error('Error found');
            return res.status(400).send("Incorrect Email or Password");
          }
          const token = user.generateAuthToken();
          let data = {
            token: token,
            isStudent: user.isStudent,
            message: "logged in successfully",
          };
          console.log(token);
          res.status(200).send(JSON.stringify(data));
        });
      });
    } else {
      console.log(result.error);
      res.status(422).json(result.error.details[0].message);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAccount = async (req, res, next) => {
  try {
    const id = req.body.userid;
    const Account = await User.findOne({ _id: id });
    console.log(req.user);
    console.log(Account);
    res.status(201).json({
      success: true,
      message: "Found!",
      Account
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
