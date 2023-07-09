const express = require ("express");
const app = express();

const path = require('path'); 
app.use(express.static('public'));


app.get('/',function(req,res) {
    res.send("lero lero");});

app.get('/home', (req,res) => {
    res.sendFile (path.join(__dirname, '/views/home.html'))});



app.listen(3030 ,() => console.log('sevidor corriendo'));