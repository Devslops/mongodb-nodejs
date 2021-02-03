let express = require('express')
let mongoose = require('mongoose')
var router = express.Router()

mongoose.Promise = Promise
mongoose.connect('mongodb://dbadmin:root@localhost:27017/db1', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connexion OK");
});



router.get('/resto', (req,res) => { 
    var collection = db.collection('resto'); 
      
    collection.find({}).toArray(function(err, resto) {
        if(err != null) res.json({"erreur": err})
        res.status(200).json(resto)
    });    
});

module.exports = router;