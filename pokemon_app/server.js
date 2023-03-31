// Load Express -Require statement 
const express = require('express')
const pokemon = require('./models/pokemon')
const index = require('./views/Index')
// Initialize express 
const app = express()
const PORT = 3000


//-(MIDDLEWARE)
app.get('/',(req,res)=>{
    res.send(<h1>Pokemon App</h1>)
})
app.get('/pokemon',(req,res)=>{
    res.render('index',{pokemon})
})

//------(ROUTING)


// Tell app to listen
app.listen(PORT,()=>{
    console.log(`Currently Listening on Port ${PORT}`)
})
