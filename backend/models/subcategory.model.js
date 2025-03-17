const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  mainCategory: { type: mongoose.Schema.Types.ObjectId, ref: "MainCategory" },
});


//http://localhost:5000/api/v1/maincategory
const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;