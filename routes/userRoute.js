const express = require("express");

const {
  createUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserByID);
router.put("/update/user/:id", updateUser);
router.delete("/delete/user/:id", deleteUser);
module.exports = router;
