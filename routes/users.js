const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const userPath = path.join(__dirname, '../data/users.json');

const fileReadError = (err, res, defaultMessage, statusCode) => {
  console.error('Error al leer el archivo:', err);
  res.status(statusCode).send(defaultMessage);
};

router.get('/', (req, res) => {
  fs.readFile(userPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      fileReadError(
        err,
        res,
        'Ha ocurrido un error, intente de nuevo más tarde',
        500,
      );
      return;
    }
    res.send(data);
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(userPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      fileReadError(
        err,
        res,
        'Usuario no encontrado, intente de nuevo más tarde',
        404,
      );
      return;
    }
    const { id } = req.params;
    const users = JSON.parse(data);
    const user = users.find((user) => user._id === id);
    res.send(user);
  });
});

module.exports = router;
