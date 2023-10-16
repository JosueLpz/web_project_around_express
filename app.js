const express = require("express");
const app = express();

const usersRouter = require("./routes/users");
// const cardRouter = require("./routes/card");

const { PORT = 3000 } = process.env;

app.use("/", usersRouter);
// app.use("/card", cardRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
