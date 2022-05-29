const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("Hello World");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send(`Hello ${username}`);
});

module.exports = router;
