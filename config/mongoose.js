//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var DBuri = 'mongodb://0.0.0.0:27017/hospital_api';
// const client = new MongoClient(DBuri);

//Get the default connection
var db = mongoose.connection;
mongoose.connect(DBuri , {useNewUrlParser:true, useUnifiedTopology: true});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//console log if the connection is successful
db.once('open',function(){
    console.log('Connected to MongoDb');
});

module.exports = db;



