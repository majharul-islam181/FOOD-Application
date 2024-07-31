const foodSchema = require('../models/foodModel')

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
    if(!title || !price){
        return res.status(404).send({
            success: false,
            message: "Title and Price is required."
        })
    };

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
    })



  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Food APi",
    });
  }
};

module.exports = { createFoodController };
