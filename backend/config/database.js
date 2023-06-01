import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aditi@1759',
    database: 'product'
});
  
export default db;