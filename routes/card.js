// const router = require('express').Router();
// const fs = require('fs');
// const path = require('path');

// const cardPath = path.join(__dirname, '../data/card.json');

// const fileReadError = (err, res, defaultMessage, statusCode) => {
//   console.error('Error al leer el archivo:', err);
//   res.status(statusCode).send(defaultMessage);
// };

// router.get('/', (req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'application/json',
//   });
//   const cardReader = fs.createReadStream(cardPath, { encoding: 'utf8' });

//   cardReader.pipe(res);
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   const rawData = fs.readFileSync(cardPath, { encoding: 'utf8' });
//   const cards = JSON.parse(rawData);

//   const cardId = cards.find((card) => card._id === id);

//   if (cardId) {
//     res.status(200).send(cardId);
//   } else {
//     fileReadError(
//       err,
//       res,
//       'Carta no encontrada, intente de nuevo más tarde',
//       404,
//     );
//   }
// });

// module.exports = router;
