const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  let queryString = `
  SELECT * FROM funko WHERE title ILIKE '%${req.query.query}%' OR series ILIKE '%${req.query.query}%';
  `;
  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
