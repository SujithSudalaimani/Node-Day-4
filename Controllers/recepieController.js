import recepies from "../Models/recepieSchema.js";

// create recepies and post method
export const createRecepie = async (req, res) => {
  try {
    const newRecepie = new recepies(req.body); //req.body and assinging in single line
    await newRecepie.save(); // saving data in mongodb
    res
      .status(200)
      .json({ message: "Recepie added successfully", data: newRecepie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all data

export const getAllRecepies = async (req, res) => {
  try {
    const getRecepies = await recepies.find();
    res
      .status(200)
      .json({ message: "Recepies retrieved successfully", data: getRecepies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get data by id

export const getRecepiesById = async (req, res) => {
  try {
    const recepieId = req.params.id;
    const recepieDetail = await recepies.findById(recepieId);
    if (!recepieDetail) {
      return res.status(404).json({ message: "Recepie not found" });
    }
    return res
      .status(200)
      .json({ message: "Recepie Retrieved", data: recepieDetail });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update data and we should id for unique

export const updateRecepie = async (req, res) => {
  try {
    const recepieId = req.params.id;
    const { name, ingredients, quantity, procedure } = req.body;
    // findByIdAndUpdate mongoDB Method
    const result = await recepies.findByIdAndUpdate(
      { _id: recepieId },
      { name, ingredients, quantity, procedure },
      { new: true }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Recepie not found" });
    }
    res
      .status(200)
      .json({ message: "Recepie updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete data and we should id for unique

export const deleteRecepie = async (req, res) => {
  try {
    const recepieId = req.params.id;
    // findByIdAndDelete mongoDB Method
    const result = await recepies.findByIdAndDelete({ _id: recepieId });
    if (!result) {
      res.status(404).json({ message: "recepie not found" });
    }
    // after deleting that particular product by id and i need to show the remaining data
    const recepie = await recepies.find();
    res
      .status(200)
      .json({ message: "Recepie deleted successfully", data: recepie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
