const express = require('express');
const db = require('./connection'); 
const app = express();
const port = 3001; 

app.use(express.json());

app.get('/api/images/:id', (req, res) => {
  const imageId = req.params.id;
  const sql = 'SELECT picture FROM pictures WHERE id = ?';

  db.query(sql, [imageId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length > 0) {
      res.json(result[0]);  // Envoie l'URL au front-end
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  });
});


app.listen(port, () => {
  console.log(`Express's server listening to port ${port}`);
});
