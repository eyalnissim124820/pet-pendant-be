const express = require('express')
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
app.use(cors())

const pet_route = require('./routes/pet_route');
app.use('/pets', pet_route);

async function init() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, { dbName: "pet_adoption" });
        if (connection.connections[0].host) {
            console.log('Connected to DB');
            app.listen(PORT, () => {
                console.log('Listening on port ' + PORT);
            });
        }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

init()

module.exports = app;