// user ka data b ase ka schema likhna hoga

import mongoose from "mongoose";

const userSchmea = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("User", userSchmea);
export default User;
