const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");

dotenv.config();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Error:", err.message);
  });

// Routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("server started at port 3000");
});
