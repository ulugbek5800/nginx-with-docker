const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/info', (req, res) => {
    res.json({ message: 'This is a Node.JS backend to serve static frontend files!'});
});

// Serve static files from the frontend (css, images)
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
    console.log("Request served by node app");
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});