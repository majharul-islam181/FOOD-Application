const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createCategoryController, getAllCategoryController } = require("../controllers/categoryController");

const router = express.Router();

//routes
// CRAETE CATEGORY || POST
router.post("/create", authMiddleware, createCategoryController);

//ALL CATEGORY
router.get('/all-category', authMiddleware, getAllCategoryController)



module.exports = router;
