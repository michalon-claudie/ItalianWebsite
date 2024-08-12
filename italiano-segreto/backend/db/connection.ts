import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

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

export default connection;

//new password for db after expose // 