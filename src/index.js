const express = require('express');
const bodyparser = require('body-parser');
const route = require('./route/route.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());

const url = "mongodb+srv://DaivyaMishra:YomJ4NmVOzwwYYD6@cluster0.k25widm.mongodb.net/group31-Database"
mongoose.connect(url,{useNewUrlParser: true,}).then(()=>console.log('MongoDB is connected')).catch(err => console.log(err));

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
    console.log('express app running on PORT' + (process.env.PORT || 3000))
});



