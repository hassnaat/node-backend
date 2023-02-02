const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection is open');
});

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));


app.listen(6000, () => {
    console.log('Server started on port 6000');
});

