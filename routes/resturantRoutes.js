const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const { createResturantController, getAllResturantController } = require('../controllers/resturantController');


const router = express.Router();

//routes
// CRAETE RESTURANT || POST
router.post("/create", authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET API
router.get('/getAllResturants', authMiddleware,getAllResturantController)


module.exports = router;