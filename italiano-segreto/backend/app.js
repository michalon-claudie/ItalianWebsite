const express = require('express');
const db = require('./connection'); 
const app = express();
const port = 3001; 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs:', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Serveur Express en écoute sur le port ${port}`);
});
