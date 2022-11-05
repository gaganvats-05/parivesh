const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    role: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "prod" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
