import { db } from "../db/db.js";
import bcrypt from "bcryptjs";
import { User } from "./user.js";
export const register = async (req, res) => {
  const { email, username, password, mobileNumber } = req.body;
  console.log(req.body);
  if (email && username && password && mobileNumber) {
    if (!(await User.exists({ email }))) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const user = new User({ ...req.body, password: hash });
      user.save();
      return res.status(200).json("user has been created");
    } else {
      return res.status(409).json("user already exist!");
    }
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    if (await User.exists({ email })) {
      const user = await User.findOne({ email: email });
      const isCorrectPass = bcrypt.compareSync(password, user.password);
      if (isCorrectPass) {
        console.log(user);
        const data = {
          userId: user._id,
          username: user.username,
          email: user.email,
          mobileNumber: user.mobileNumber,
        };

        res.status(200).json({ data });
      } else {
        res.status(401).json({ err: "Invalid password and Email" });
      }
    } else {
      return res.status(409).json("user dose not exist");
    }
  }
};

export const logout = (req, res) => {
  return res.json({ message: "user logged out" });
};

export const getAllUsers = (req, res) => {
  const q = `select * from users`;
  db.query(q, (err, data) => {
    if (err) return res.json({ message: "something went wrong" });
    else return res.status(200).json(data);
  });
};
