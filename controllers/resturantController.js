const resturantModel = require("../models/resturantModel");

// CREATE RESTURANT
const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "please provide title and address",
      });
    }
    const newResturant = new resturantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });

    await newResturant.save();

    res.status(201).send({
      success: true,
      message: "New Resturant Created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Resturant api",
      error,
    });
  }
};


//ALL RESTURANTS
const getAllResturantController =async(req, res)=>{
  try {
    //get resturants
    const resturants = await resturantModel.find({});
    //validate
    if(!resturants){
      return res.status(404).send({
        success: false,
        message: "No resturants found!"
      })
    }
    res.status(200).send({
      success:true,
      message: "Resturants Founds Successfully",
      totalCount: resturants.length,
      resturants
      
    })
    
  } catch (error) {

    console.log(error);
    res.status(500).send({
      success:false,
      message: "Error on get all resturants api",
      error,
    })
    
  }

}

module.exports = {
    createResturantController,
    getAllResturantController,
  };