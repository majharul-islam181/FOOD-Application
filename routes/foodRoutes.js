const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createFoodController, getFoodByIdController, getAllFoodController, getFoodByResturantController } = require("../controllers/foodController");

const router = express.Router();


//ROUTES
//CREATE FOOD
router.post('/create', authMiddleware, createFoodController)

//GET ALL FOOD
router.get('/getAll', getAllFoodController)

//GET SINGLE FOOD BY ID
router.get('/getFood/:id', getFoodByIdController)

//GET FOOD BY RESTURANT
router.get('/getByResturant/:id',getFoodByResturantController)


module.exports = router;