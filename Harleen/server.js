const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


require('./endpoint')(app)


var PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`)
})