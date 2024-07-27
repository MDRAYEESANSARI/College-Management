const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., your HTML, CSS, JS)
app.use(express.static('public'));

// Route to handle form submissions
app.post('/submit-attendance', (req, res) => {
    console.log(req.body);  // Logs form data to the console
    res.send('Attendance data received!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});





const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./attendance.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS attendance (id INTEGER PRIMARY KEY, studentName TEXT, date TEXT, status TEXT)");
});
