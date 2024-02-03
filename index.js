
//Here we are creating an application(the server) and will deploy
require('dotenv').config()
const express = require('express') //require module syntax
//or
// import express from "express"
const app = express() // app is a powerful variable and we will be able to use as app.anything as app variable contains now express module.
// Express k saare functionality humne uthake leli
const port = 4000 // server kahi listen karega and that communication will take place via ports,there are many virtual ports also and some are free

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('jyotidotlaxmi')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at Coffee and Code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Coffe and Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})