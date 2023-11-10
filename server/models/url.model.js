const mongoose = require("mongoose")

const urlSchema = mongoose.Schema(
  {
    original: String,
    shortened: String,
    expireBy: Date,
  },
  {
    timestamps: true,
  }
)

const Url = mongoose.model("url", urlSchema)

module.exports = Url
