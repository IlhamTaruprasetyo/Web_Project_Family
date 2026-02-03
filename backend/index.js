const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Laragon default kosong
  database: "trah_db",
});

db.connect((err) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    console.log("Database connected");
  }
});

app.post("/login", (req, res) => {
  console.log("BODY:", req.body); // 👈 WAJIB ADA

  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ success: false });
  }

  const sql = "SELECT * FROM users WHERE username=? AND password=?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log("SQL ERROR:", err);
      return res.status(500).json({ success: false });
    }

    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

app.listen(3000, () => {
  console.log("Backend running di http://localhost:3000");
});
