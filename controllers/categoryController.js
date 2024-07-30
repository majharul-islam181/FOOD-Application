const categoryModel = require("../models/categoryModel");

const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    //validate
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "Please Provide category name/titile",
      });
    }

    //create category
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    // Fetch all categories
    const allCategories = await categoryModel.find();

    res.status(200).send({
      success: true,
      messsage: "New Category added successfully!.",
      allCategories,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res
        .status(400)
        .json({ message: "Category name should be unique" });
    }
    res.status(500).send({
      success: false,
      message: "Error in Creating Category API",
      error,
    });
  }
};

module.exports = { createCategoryController };
