//set up todo model blueprint that is stored in db
//set structure of data going to our db
//once created mongo gives unique user id to each doc
const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

//exports this as model giving it name Todo to build TodoSchema in db
//default name "Todo" will be name of collection by mongoose
//it sets it as pluarl = todos, if dont set 3rd aruguement for the name
module.exports = mongoose.model("Todo", TodoSchema);
