const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    maxLength: 40,
  },
  description: {
    type: String,
    minLength: 30,
    maxLength: 1000,
  }, 
  about: {
    type: String,
    minLength: 30,
    maxLength: 1000,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrls: [String],
  category: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Speaker", speakerSchema);