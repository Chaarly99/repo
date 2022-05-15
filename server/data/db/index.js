const mongoose = require('mongoose')

const username = "Chaaarly99";
const password = "fepegetafe3";
const cluster = "clustermongo.vyxdd";
const dbname = "Per4mance";

mongoose.connection.on('connected', function() {
    // Hack the database back to the right one, because when using mongodb+srv as protocol.
    if (mongoose.connection.client.s.url.startsWith('mongodb+srv')) {
        mongoose.connection.db = mongoose.connection.client.db('Per4mance');
        console.log('Connection to MongoDB established.')
    }
});
    mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
