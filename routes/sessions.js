import express from "express";
const router = express.Router();
import Sessions from "../models/Sessions.js";
import { verifyToken } from "../middleware/verifytoken.js";

router.get("/all-sessions", verifyToken, async (req, res) => {
  try {
    const list = await Sessions.find();

    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
});

router.post("/book-session", verifyToken, async (req, res) => {
  try {
    const username = req.username;

    const bookedSess = await Sessions.findOneAndUpdate(
      { session: req.body.session },
      { $set: { bookedBy: username } },
      { new: true }
    );
    res.status(200).json(bookedSess);
  } catch (err) {
    console.log(err);
  }
});

router.get("/pending-sessions", verifyToken, async (req, res) => {
  try {
    const pendingSess = await Sessions.find({ bookedBy: { $ne: null } });

    res.status(200).json(pendingSess);
  } catch (err) {
    console.log(err);
  }
});

export default router;
