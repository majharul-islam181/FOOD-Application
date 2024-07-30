const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createCategoryController } = require("../controllers/categoryController");

const router = express.Router();

//routes
// CRAETE CATEGORY || POST
router.post("/create", authMiddleware, createCategoryController);



module.exports = router;
