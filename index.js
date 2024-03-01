require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const routes = require('./routes/trips');
const resRoutes = require('./routes/reservations')
var bodyParser = require('body-parser')
const mongoString = process.env.DATABASE_URL;


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use('/api', routes)
app.use('/api',resRoutes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})