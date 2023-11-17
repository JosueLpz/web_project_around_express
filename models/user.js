const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre de usuario es obligatorio"],
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: [true, "La información del usuario es obligatoria"],
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: [true, "El enlace al avatar es obligatorio"],
    validate: {
      validator: function (v) {
        const regex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
        return regex.test(v);
      },
      message: (props) => `${props.value} no es un enlace de avatar válido`,
    },
  },
});

module.exports = mongoose.model("user", userSchema);
