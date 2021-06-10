const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json())

app.post('/cookies', (req,res) =>{
    
})

app.get('/cookies', (req,res) =>{

})

app.delete('/cookies/:nombre', (req,res) =>{

})



app.listen(5000, () => { console.log("running")});