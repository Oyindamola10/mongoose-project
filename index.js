const express = require('express');

const mongoose = require('mongoose')

const routes = require('./routes')

const port = 8083;

const dbUrl = "mongodb+srv://samiatadegbenro:Ajike0405@cluster0.si0nhde.mongodb.net/?retryWrites=true&w=majority"

mongoose 
   .connect(dbUrl, {useNewUrlParser: true})
   .then(() =>{
    const app = express();
    app.use(express.json());
    app.use('/api', routes);

    app.listen(port, () =>{
        console.log(`server running on : ${port}`)
    });
   })