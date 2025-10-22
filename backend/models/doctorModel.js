import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  exp: String,
  spec: String,
  time: String,
  day: String,
  gender: String,
  rating: Number,
  available: Boolean,
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
