// const courses = [
//     {id: '1', title: "Javascript"},
//     {id: '2', title: "React"},
//     {id: '3', title: "Node"},
// ]
// export default courses
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    price:{type:Number},
    title:{type:String},
    category:{type:String},
    author:{type:String},
   
})

const CourseModel = mongoose.model("Courses",CourseSchema)

export default CourseModel
