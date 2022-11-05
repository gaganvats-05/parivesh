const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { companyName, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });

    // if student already exists
    if (existingUser) {
      return res.json({ message: "User already existed" });
    }

    // hash the password
    let hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      companyName,
      email,
      role,
      password: hashedPassword,
    });
    await newUser.save();

    return res
      .status(200)
      .json({ email: email, password: password, message: "" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    // if email is not found in the database then throw error
    if (!existingUser) {
      return res.json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // if password is incorrect then throw error
    if (!isPasswordCorrect) {
      return res.json({ message: "Invalid Credentials" });
    }
    // if email and password is correct then generate token
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "sEcReT",
      { expiresIn: "10h" }
    );

    return res.status(200).json({
      result: {
        companyName: existingUser.companyName,
        role: existingUser.role,
        email: existingUser.email,
      },
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { signUp, login };
