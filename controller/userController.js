const User = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const saveUser = await newUser.save();
    // res.status(200).json({ message: saveUser });
    res.status(200).json({ message: "User created Successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ message: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user not found" });
    }
    let updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // res.status(200).json(updateData);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not Found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user delete Successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
};
