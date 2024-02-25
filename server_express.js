const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs/promises");
const { router, users } = require("./routes/users");

const app = express();
const PORT = 3000;
const usersFilePath = path.join(__dirname, "users.json");

const jsonBodyParse = express.json();

app.use(jsonBodyParse);
app.use(morgan(":method :url :status"));

app.use("/users", router);

async function loadUsersFromFile() {
   try {
      await fs.access(usersFilePath);
      const data = await fs.readFile(usersFilePath, "utf-8");
      users.push(...JSON.parse(data));
   } catch (err) {
      if (err.code === "ENOENT") {
         await fs.writeFile(usersFilePath, "[]", "utf-8");
      } else {
         console.error("Error loading users from file:", err.message);
      }
   }
}

process.on("SIGINT", async () => {
   try {
      await fs.writeFile(
         usersFilePath,
         JSON.stringify(users, null, 2),
         "utf-8"
      );
      console.log("Users data saved to file");
      process.exit(0);
   } catch (err) {
      console.error("Error saving users to file:", err.message);
      process.exit(1);
   }
});
app.listen(PORT, async () => {
   await loadUsersFromFile();
   console.log("express server running on [3000]");
});
