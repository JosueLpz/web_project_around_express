const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb');

const usersRouter = require('./routes/users');
const cardRouter = require('./routes/card');

const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardRouter);

app.use((req, res, next) => {
  res.status(404).send(`
    <style>
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 70px;
        color: red;
      }
    </style>
    <h1 class="title">Error 404</h1>
  `);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Ocurrió un error interno en el servidor' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
