// commonJS vs ES6
// CJS,require , const express = require('express')
// ES6,import , import express from 'express'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()
// create application/json parser
const jsonParser = bodyParser.json()

// mock database
const database = {
    users: [
        {id: 'sdfds-v3323432', name: "Borey",email: "borey@gmail.com"},
        {id: 'sdfds-d34444', name: "Seng",email: "seng@gmail.com"},
        {id: 'sdfds-gf1234', name: "Houng",email: "houng@gmail.com"},
    ]
}
app.use(express.json())
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))

app.post('/courses',jsonParser,(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})
// Call back function

// function rootResponse(req, res){
//     // log request origin and client ip
//     console.log('Requset From:',req.ip)
//     console.log('Requset Hostname:',req.hostname)
//     // send response
//     res.send("Hello World")
// }

// Route
// app.get('/', rootResponse)
app.get('/', (req, res)=>{
    console.log('Requset From:',req.ip)
    console.log('Requset Hostname:',req.hostname)
    res.send("Hello World 2")
    
})

app.get('/test', (req,res)=>{

    res.json({
        name: "Test",
        age: 20
    })
    // res.send("Test URL")
    // res.status(201).send("Test2")
    // res.status(500).send("Test2")
    // res.status(404).send("Test2")
    // res.status(401).send("Test2")
    // res.status(403).send("Test2")
    // res.status(402).send("Test2")
})
app.post('/test', (req,res)=>{
    console.log(req.body)
    // res.status(201).send("Post URL")
    res.status(201).send(req.body)

})
// request with parameters
app.get('/users/:id', (req,res)=>{
    console.log(req.params.id)
    // res.send("User ID: " + req.params.id)
    const user = database.users.find(user => user.id === req.params.id)
    if(user){
        res.json(user)
    }else{
        res.status(404).send("User not found")
    }

})
// return all users
app.get('/users', (req,res)=>{
    res.json(database.users)
})

// Server
app.listen(4000, ()=>{
    console.log("Server running on port 4000")
})
