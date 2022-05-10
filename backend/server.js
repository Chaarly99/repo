const express = require('express');
const cors = require('cors');
const moongose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
moongose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = moongose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})