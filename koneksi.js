var mysql = require("mysql");

// koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  pass: "",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql terkoneksi");
});

module.exports = conn;
