const express = require('express');
const { userController, updateUserController, updateUserPasswordController, resetPasswordController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();
//routes
//Get user || GET
router.get('/get-user', authMiddleware, userController);

//update userInformation
router.post('/update-user', authMiddleware, updateUserController )

//update password
router.post('/update-password', authMiddleware, updateUserPasswordController )

//reset password
router.post('/reset-password', authMiddleware,resetPasswordController)

module.exports = router;
