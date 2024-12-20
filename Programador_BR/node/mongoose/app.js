const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')

mongoose.connect('mongodb://127.0.0.1:27017/newlinks', { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => { console.log("Banco carregado"); })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))