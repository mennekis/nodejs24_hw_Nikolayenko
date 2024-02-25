const express = require("express");

const router = require("express").Router();
const { validateUser, validateUserId } = require("../utils/validator");

let users = [];

/* { username: 'John Smith',  email: 'johnsmith32@server.com' } */
function generateUserId() {
   return users.length > 0
      ? Math.max(...users.map((user) => user.userId)) + 1
      : 1;
}

router.post("/", validateUser, (req, resp) => {
   const { username, email } = req.body;
   const userId = generateUserId();
   users.push({ userId, username, email });
   resp.status(201).json({
      message: "User created successfull",
      userId: userId,
   });
});

router.get("/", async (req, resp) => {
   try {
      resp.status(200).json(users);
   } catch (error) {
      resp.status(500).json({ message: "Internal Server Error" });
   }
});

router.get("/:userId", validateUserId, (req, resp) => {
   const { userId } = req.params;
   if (!users[userId]) {
      return resp.status(404).json({
         message: "User not found",
      });
   }
   resp.status(200).json(users[userId]);
});

router.delete("/:userId", validateUserId, (req, resp) => {
   const { userId } = req.params;
   const numericUserId = Number.parseInt(userId, 10);

   const userIndex = users.findIndex((user) => user.userId === numericUserId);

   if (userIndex !== -1) {
      users.splice(userIndex, 1);
      resp.status(204).end();
   } else {
      resp.status(404).json({
         message: "User not found",
      });
   }
});

module.exports = {
   router,
   users,
};
