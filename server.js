const express = require('express');
const app = express();

app.get('/costs', (req, res)=>{
    res.sendFile(__dirname + '/costs.json');
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.listen(80 || process.env.PORT, (err)=>{
    if (err)
        throw err;
    
    console.log("On");
});