import express from "express";
import Auth from "../models/Auth.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await Auth.findOne({
      userName: req.body.userName,
      password: req.body.password,
    });
    if (!user) {
      res.status(500).json("Invalid Credentials!");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC);
    const { password, ...others } = user._doc;
    res.status(200).json({ token, others });
  } catch (err) {
    console.log(err);
  }
});

export default router;
