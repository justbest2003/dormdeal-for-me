const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const MainCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  image: { type: String, required: true },
  subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
});

const MainCategoryModel = model("MainCategory", MainCategorySchema);
module.exports = MainCategoryModel;
