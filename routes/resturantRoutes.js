const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const { createResturantController, getAllResturantController, getResturantByIdController } = require('../controllers/resturantController');


const router = express.Router();

//routes
// CRAETE RESTURANT || POST
router.post("/create", authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET API
router.get('/getAllResturants', getAllResturantController);

//GET SINGLE RESTURANTS || GET API
router.get('/get/:id',getResturantByIdController);


module.exports = router;