const express = require("express");
const app = express();

const usersRouter = require("./routes/users");
const cardRouter = require("./routes/card");

const { PORT = 3000 } = process.env;

app.use("/users", usersRouter);
app.use("/card", cardRouter);
app.use("/", (req, res) => {
  res.send(`
  <style>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  color: red;
}  
</style>
  <h1 class="title">Error 404<h1>`);
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
