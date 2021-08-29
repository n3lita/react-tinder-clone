const mongoose = require("mongoose");
const Cards = require('./dbCards')
require("dotenv").config();
const express = require("express");
const Cors = require("cors");




//App Config
const app = express();
const port = process.env.PORT || 8001

// Middlewares
app.use(express.json());
app.use(Cors());

//DB Config
require("./db.config")

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello world!"));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on port ${port}`));
