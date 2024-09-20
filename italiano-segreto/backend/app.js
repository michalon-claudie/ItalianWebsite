const express = require('express');
const db = require('./connection'); 
const app = express();
const port = 3001; 

app.use(express.json());

app.get('/api/cities', (req, res) => {
  const sql = 'SELECT * FROM cities';

  db.query(sql, [], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error' });
    }
    console.log('Query result:', result);
    res.json(result);
  });
});


app.listen(port, () => {
  console.log(`Express's server listening to port ${port}`);
});
