const express = require('express');
const { userController, updateUserController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();
//routes
//Get user || GET
router.get('/get-user', authMiddleware, userController);

//update userInformation
router.post('/update-user', authMiddleware, updateUserController )

module.exports = router;
