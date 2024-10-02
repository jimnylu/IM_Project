const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Setup MySQL connection
const db = mysql.createConnection({
    host: "localhost", // Fixed the host name
    user: "root",
    password: "",
    database: "signup"
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.log("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Signup Route
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error while signing up:", err);
            return res.json({ status: "Error", message: "Database query error" });
        }
        return res.json({ status: "Success", data });
    });
});

// Login Route
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Error during login:", err);
            return res.json({ status: "Error", message: "Database query error" });
        }
        if (data.length > 0) {
            return res.json({ status: "Success", message: "Login successful" });
        } else {
            return res.json({ status: "Fail", message: "Invalid email or password" });
        }
    });
});

// Start server
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});