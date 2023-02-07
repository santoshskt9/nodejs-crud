const { createUser, getUserById, getUsers, updateUser, deleteUser } = require('./user.controller');
const router = require('express').Router();

router.get("/", getUsers)
router.post("/", createUser);
router.get("/:id", getUserById);
router.patch("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;