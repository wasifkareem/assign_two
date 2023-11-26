import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  session: { type: String, required: true },
  warden: { type: String, required: true },
  day: { type: String, required: true },
  duration: { type: String, required: true },
  bookedBy: { type: String, default: null },
  time: { type: String, required: true },
});

const Session = mongoose.model("Session", SessionSchema);
export default Session;
