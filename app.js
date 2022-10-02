// app.js
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
var bodyParser = require('body-parser');
const config = require('config');
const db = config.get('mongoURI');

var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect(db);

var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    source: String,
    pubyear: String,
    doi: String,
    claim: String,
    evidence: String
});

var Article = mongoose.model("Article", articleSchema);

// Connect Database
connectDB();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addarticle", (req, res) => {
    var myData = new Article(req.body);
    myData.save()
        .then((item) => {
            res.send("Article saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));