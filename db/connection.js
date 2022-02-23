const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  
  user: "dmschwerd",
  
  password: "root",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;