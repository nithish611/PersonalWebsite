const express = require('express');
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public"));
// app.use('/',express.static(path.join(__dirname, 'public')));


app.get('/' , (req, res)=>{
        res.sendFile(__dirname + '/index.html');
});

app.listen(3000, (req,res)=>{
    console.log("3000 Listening");
})
