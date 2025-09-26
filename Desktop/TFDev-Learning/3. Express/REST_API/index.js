import express from "express"
import bodyParser from "body-parser"
import courseRouter from "./src/routes/course.js"
import { logger, errorHandler } from "./src/middlewares/index.js"

const app = express()

// Parse JSON bodies (you may use bodyParser.json() as alternative)
app.use(express.json())

// Middlewares
app.use(logger)

// Routes
app.use("/courses", courseRouter)

// Error handler should be last
app.use(errorHandler)
// CJS,require , const express = require('express')
// ES6,import , import express from 'express'
// import bodyParser from 'body-parser'
// import express from 'express'
// import asyncHandler from 'express-async-handler';




// const app = express()



// const courses = [
//     {id: '1', title: "Javascript"},
//     {id: '2', title: "React"},
//     {id: '3', title: "Node"},
// ]
// function getDB(){
//     // error while executing
//     throw new Error("Database connection failed")
// }
/**
 *  Middleware
 * Authentication
 * Authorization
 * Logging
 * Error Handling
 
 */

// function logger(req,res,next){
//     console.log(req.rawHeaders[1])
//     console.log(req.rawHeaders[3])

//     console.log("Incoming request")
    // example request unauthorized user

    // return res.status(401).send("Unauthorized")
    // if(req.query.user === "borey"){
    //     next()
    // }else{
    //     res.status(401).send("Unauthorized")
    // }
    // next()
// }
// function autherize(req,res,next){
//     return res.status(404).json({
//         message: "Unauthorized"
//     })
// }

// function checkId(req,res,next){
//  const id = req.params.id
//  const course = courses.find((item)=>
//     {return item.id === id})
//     if(!course){
//         return res.status(404).json({
//             message: "Course not found"
//         })
//     }
//     next()
// }
    

// create application/json parser
// const jsonParser = bodyParser.json()

// mock database
// const database = {
//     users: [
//         {id: 'sdfds-v3323432', name: "Borey",email: "borey@gmail.com"},
//         {id: 'sdfds-d34444', name: "Seng",email: "seng@gmail.com"},
//         {id: 'sdfds-gf1234', name: "Houng",email: "houng@gmail.com"},
//     ]
// }
// app.use(express.json())
// app.use(bodyParser.json())
// app.use(logger)


/**
 * GET all courses
 
 */
// app.get('/courses',logger, (req,res)=>{ 
//     app.get('/courses', (req,res)=>{ // without middleware
//         console.log(req.query)
//         // connect to database and past query to database
//         return res.status(202) .send("Hello World")
// })

// app.get('/db',asyncHandler(async (req,res)=>{
//     const db = getDB()
//     return res.status(200).json(db)
// }))
//     (req,res)=>{
//     try {
//         const db = getDB()
//         return res.status(200).json(db)
//     } catch (error) {
//         return res.status(500).json({
//             message: error.message
//         })
//     }
// })
/**
 * GET course by id
 */
// app.get('/courses/:id',checkId,autherize, (req,res)=>{ // with multiple middleware
    // app.get('/courses/:id',checkId, (req,res)=>{

    // console.log(req.params.id)

//     const  id = req.params.id
//     const course = courses.find((item)=>
//         {return item.id === id })
//     return res.json(course)
// })
// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))

// app.post('/courses',autherize,(req,res)=>{
//     console.log(req.body)
//    return res.json(req.body)
// })
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
// app.get('/',(req, res)=>{
//     console.log('Requset From:',req.ip)
//     console.log('Requset Hostname:',req.hostname)
//     return res.send("Hello World 2")
    
// })

// app.get('/test', (req,res)=>{

//     res.json({
//         name: "Test",
//         age: 20
//     })
    // res.send("Test URL")
    // res.status(201).send("Test2")
    // res.status(500).send("Test2")
    // res.status(404).send("Test2")
    // res.status(401).send("Test2")
    // res.status(403).send("Test2")
    // res.status(402).send("Test2")
// })
// app.post('/test', (req,res)=>{
//     console.log(req.body)
//     // res.status(201).send("Post URL")
//     return res.status(201).send(req.body)

// })
// // request with parameters
// app.get('/users/:id', (req,res)=>{
//     console.log(req.params.id)
//     // res.send("User ID: " + req.params.id)
//     const user = database.users.find(user => user.id === req.params.id)
//     if(user){
//         return res.json(user)
//     }else{
//         return res.status(404).send("User not found")
//     }

// })
// return all users
// app.get('/users', (req,res)=>{
//     return res.json(database.users)
// })
// Server
app.listen(4000, ()=>{
    console.log("Server running on port 4000")
})
