const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./model/userschema");

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("Connected to MongoDB");

  const newUser = new User({
    name: "Laksh",
    email: "laksh@google.com",
    age: 19
  });

  return newUser.save();
})
.then((user) => {
  console.log("User inserted:", user);
  return User.find();
})
.then((users) => {
  console.log("All users:", users);
})
.catch((err) => {
  console.error("Error:", err);
})
.finally(() => {
  mongoose.connection.close();
});