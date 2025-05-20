import mongoose from "mongoose";

const recepieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  procedure: {
    type: String,
    required: true,
  },
});

const recepies = mongoose.model("recepies", recepieSchema);
export default recepies;
