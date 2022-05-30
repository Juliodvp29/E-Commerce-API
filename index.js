const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const cartRoutes = require("./routes/cart");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Error:", err.message);
  });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("server started at port 3000");
});
