const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

console.log(DB_USER)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) {
      console.error('Error connecting to the database:', error);
      return;
  }
  console.log('Connected to the database.');
});

module.exports=connection;

//new password for db after expose // 