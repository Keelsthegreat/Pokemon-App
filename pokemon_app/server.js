// Load Express -Require statement 
const express = require('express')


// Initialize express 
const app = express()
const PORT = 3000


//-(MIDDLEWARE)
app.get('/',(req,res)=>{
    res.send(<h1>Home</h1>)
})

app.get('/pokemon',(req,res) =>{
    res.send(<h1>pokemon</h1>)   
})
//------(ROUTING)


// Tell app to listen
app.listen(PORT,()=>{
    console.log(`Currently Listening on Port ${PORT}`)
})
