const express = require("express");
const router = express.Router();
const { validateUser, validateUserId } = require("../utils/validator");

const {
   addUser,
   getUserById,
   deleteUserById,
   getAllUsers,
} = require("../utils/userService");

router.post("/", validateUser, (req, resp) => {
   const { body } = req;
   addUser(body);
   resp.status(201).json(body);
});

router.get("/", validateUser, async (req, resp) => {
   const users = await getAllUsers();
   resp.json(users);
});

router.get("/:userId", validateUserId, async (req, resp) => {
   const userData = await getUserById(req.params.userId);
   if (userData.length) {
      resp.json(userData);
   } else {
      resp.status(400).send("User didn`t found");
   }
});

router.deleteUserById("/:userId", validateUserId, async (req, resp) => {
   const userData = await getUserById(req.params.userId);
   if (userData.length) {
      await deleteUserById(req.params.userId);
      resp.status(204).end();
   } else {
      resp.status(404).json({ message: "User not found" });
   }
});

module.exports = { router };
