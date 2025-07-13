const mongoose = require("mongoose");

//Write missing codes here
const schema = new mongoose.Schema({
  title:    { type: String, required: true },
  content:  { type: String, required: true },
  img_url:  { type: String, required: false },
});

const BlogModel = mongoose.model("Blog", schema);

module.exports = BlogModel;