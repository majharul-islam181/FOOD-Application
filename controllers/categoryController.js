const categoryModel = require("../models/categoryModel");

//CREATE CATEGORY
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

//GET ALL CATEGORY
const getAllCategoryController = async (req, res) =>{


    try {
        //get category
        const allCategories = await categoryModel.find({});
        //validate
        if(!allCategories){
            return res.status(404).send({
                success: false,
                message: "No category found",
            })
        }
        res.status(200).send({
            success:true,
            message: "All category found successfully",
            category: allCategories.length,
            allCategories,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get all category API",
            error,
        })
        
    }

}

module.exports = { createCategoryController, getAllCategoryController };
