var express = require('express');
var app = express();

const PORT = process.env.PORT || 5000

app.get("/", (req, res, next) => {
    res.json(["Test Goon Squad"])
})

app.get("/team", (req, res, next) => {
    res.json(["Josue", "Pranav", "Calvin", "Zeeshan"])
})

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}")
})