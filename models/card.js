const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const validateE =
//   /^(http|https):\/\/(www\.)?[a-zA-Z0-9-._~:/?%#[]@!$&'()*+,;=]*(#)?$/;

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre de usuario es obligatorio"],
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: [true, "El enlace de las tarjetas es obligatorio"],
    // validate: {
    //   validator: function (v) {
    //     return validateE.test(v);
    //   },
    //   message: (props) => `${props.value} no es un enlace de válido`,
    // },
  },
  owner: {
    required: [true, "El Id es obligatorio"],
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  likes: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("card", cardSchema);
