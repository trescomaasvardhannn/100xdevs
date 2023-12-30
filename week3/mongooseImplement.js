const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
app.use(express.json());
mongoose.connect(
  "mongodb+srv://vardhan:vajani12@cluster0.sniikzk.mongodb.net/?retryWrites=true&w=majority"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(400).send("Username already exist");
  } else {
    const User1 = new User({ name: name, email: email, password: password });
    User1.save();

    res.json({
      msg: "User created successfully",
    });
  }
});

app.listen(3000);
