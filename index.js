const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


require('./connection/conn')

app.get('/',(req,res)=>{
    res.send('Hello from the server side')
})

app.listen(port,()=>{
    console.log(`server is listen ${port}`)
})