const foodModel = require("../models/foodModel");
const foodSchema = require("../models/foodModel");

//CREATE FOOD
const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingCount,
    } = req.body;
    //validate
    if (!title || !price) {
      return res.status(404).send({
        success: false,
        message: "Title and Price is required.",
      });
    }

    const food = new foodSchema({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingCount,
    });

    await food.save();
    res.status(200).send({
      success: true,
      message: "Successfully added food",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Food APi",
    });
  }
};

//GET SINGLE FOODS BY ID
const getFoodByIdController = async (req, res) => {
  try {
    //get id
    const foodId = req.params.id;
    //validate id
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "Food id is required.",
      });
    }
    //get food
    const food = await foodModel.findById(foodId);
    //validate
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No food found!",
      });
    }
    res.status(200).send({
      success: true,
      message: "Food found successfully",

      food: {
        name: food.title,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Food APi",
    });
  }
};

//GET ALL FOOD
const getAllFoodController = async (req, res) => {
  try {
    //find foods
    const foods = await foodModel.find({});
    //validate
    if (!foods) {
      res.status(404).send({
        success: false,
        message: "No foods found!",
      });
    }
    res.status(200).send({
      success: true,
      message: "Found food successfully",
      totalFoods: foods.length,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Food APi",
    });
  }
};

//GET  FOODS BY  RESTURANT ID
const getFoodByResturantController = async (req, res) => {
  try {
    //get id
    const resturantId = req.params.id;
    //validate id
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Food id is required.",
      });
    }
    //get food
    const resturant_food = await foodModel.find({ resturant: resturantId });
    //validate
    if (!resturant_food) {
      return res.status(404).send({
        success: false,
        message: "No food found!",
      });
    }
    res.status(200).send({
      success: true,
      message: "Food By resturant found successfully",

      resturant: resturant_food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Resturant Food APi",
    });
  }
};

//UPDATE FOOD BY ID
const updateFoodController = async (req, res) => {
  try {
    //get id
    const { id: foodId } = req.params;
    //validate
    if (!foodId)
      return res
        .status(404)
        .send({ success: false, message: "No food id was found!" });

    const food = await foodModel.findById(foodId);
    //validate
    if (!food)
      return res
        .status(404)
        .send({ success: false, message: "No food found." });

    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingCount,
    } = req.body;

    const updateFood = await foodModel.findByIdAndUpdate(
      foodId,
      {
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvailable,
        resturant,
        rating,
        ratingCount,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Updated successfully",
      updateFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Food APi",
    });
  }
};

module.exports = {
  createFoodController,
  getFoodByIdController,
  getAllFoodController,
  getFoodByResturantController,
  updateFoodController,
};
