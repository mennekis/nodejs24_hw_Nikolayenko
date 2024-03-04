const express = require("express");
const morgan = require("morgan");

const router = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan(":method :url :status"));

app.use("/users", router);

app.listen(PORT, () => {
   console.log("express server running on [3000]");
});
