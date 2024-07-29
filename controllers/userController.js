const userModels = require("../models/userModels");

const userController = async (req, res) => {
  try {
    //find user
    const user = await userModels.findById({ _id: req.body.id });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
      });
    }
    //hiding passsword
    user.password = undefined;
    //res
    res.status(200).send({
      success: true,
      message: "User found Sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error In get user api",
      error,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    //find user
    const user = await userModels.findById({ _id: req.body.id });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    //update user
    const { userName, email, phone } = req.boy;

    if (userName) user.userName = userName;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    //save
    await user.save();
    res.status(200).send({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status().send({
      success: false,
      message: "Failed to update User",
      error
    });
  }
};

module.exports = { userController, updateUserController };
