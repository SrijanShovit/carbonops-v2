const UserModel = require("../models/allUsers");
const bcrypt = require("bcryptjs");

const userDetailsController = async (req, res) => {
  try {
    const { role, email, contact, dob, password } = req.body;

    if (!role || !email || !contact || !dob || !password) {
      res.status(400).json({ message: "All fields are required!" });
    } else {
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        res.status(409).json({ message: "User already exists!" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
          role,
          email,
          contact,
          dob,
          password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res
          .status(201)
          .json({ message: "User created successfully!", user: savedUser });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userDetailsController };
