const User = require("../models/userModel");
const errorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

// Register User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "Sample_id", url: "profilePicUrl" },
  });

  sendToken(user, 201, res);
});

//Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(errorHandler(401, "Please Enter Email & Password"));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(errorHandler(401, "Invalid Email or Password"));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(errorHandler(401, "Invalid Email or Password"));
  }

  sendToken(user, 200, res);
});

//Logout user

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res
    .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
    .status(200)
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});
