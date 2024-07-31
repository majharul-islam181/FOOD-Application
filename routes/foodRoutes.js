const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createFoodController, getFoodByIdController, getAllFoodController } = require("../controllers/foodController");

const router = express.Router();


//ROUTES
//CREATE FOOD
router.post('/create', authMiddleware, createFoodController)

//GET ALL FOOD
router.get('/getAll', authMiddleware, getAllFoodController)

//GET SINGLE FOOD BY ID
router.get('/getFood/:id', authMiddleware, getFoodByIdController)


module.exports = router;