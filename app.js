const express = require("express");
const app = express();

const usersRouter = require("./routes/users");
// const cardRouter = require("./routes/card");

const { PORT = 3000 } = process.env;

app.use("/users", usersRouter);
// app.use("/", (req, res) => {
//   res.send(`<h1>Error 404<h1>`);
// });
// app.use("/card", cardRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
