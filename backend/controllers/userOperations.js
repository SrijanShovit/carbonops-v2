const dbMethods = require("../config/DBMethods");
const bcrypt = require("bcryptjs");
const salt = 8;
const createUser = async (req, res) => {
  const { email, contact, dob, password, role } = req.body;

  try {
    const isUserExist = await dbMethods.findUserByEmail(email);
    if (isUserExist.length > 0) {
      return res.status(404).json({ error: "User Already Exists." });
    }
    bcrypt.hash(password, salt, async (err, hashedPassword) => {
      if (!err) {
        const data = { email, password: hashedPassword, contact, role, dob };
        const user = await dbMethods.createUser(data);
        console.log(user);
        if (user.status === "error") {
          return res.status(404).json({ error: "Something went wrong!" });
        }
        return res
          .status(200)
          .json({ message: "User created successfully", user });
      } else {
        return res.status(404).json({ error: "Something went wrong!" });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

const userControllers = {
  createUser,
};

module.exports = userControllers;
