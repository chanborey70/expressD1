// commonJS vs ES6
// CJS,require , const express = require('express')
// ES6,import , import express from 'express'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

/**
 *  Middleware
 * Authentication
 * Authorization
 * Logging
 * Error Handling
 
 */

function logger(req,res,next){
    console.log(req.rawHeaders[1])
    console.log(req.rawHeaders[3])

    console.log("Incoming request")
    // example request unauthorized user

    // return res.status(401).send("Unauthorized")
    // if(req.query.user === "borey"){
    //     next()
    // }else{
    //     res.status(401).send("Unauthorized")
    // }
    next()
}
function autherize(req,res,next){
    return res.status(404).json({
        message: "Unauthorized"
    })
}
    

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
app.use(logger)



// app.get('/courses',logger, (req,res)=>{ 
    app.get('/courses', (req,res)=>{ // without middleware
   return res.status(202) .send("Hello World")
})

// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))

app.post('/courses',autherize,(req,res)=>{
    console.log(req.body)
   return res.json(req.body)
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
    return res.send("Hello World 2")
    
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
    return res.status(201).send(req.body)

})
// request with parameters
app.get('/users/:id', (req,res)=>{
    console.log(req.params.id)
    // res.send("User ID: " + req.params.id)
    const user = database.users.find(user => user.id === req.params.id)
    if(user){
        return res.json(user)
    }else{
        return res.status(404).send("User not found")
    }

})
// return all users
app.get('/users', (req,res)=>{
    return res.json(database.users)
})

// Server
app.listen(4000, ()=>{
    console.log("Server running on port 4000")
})
