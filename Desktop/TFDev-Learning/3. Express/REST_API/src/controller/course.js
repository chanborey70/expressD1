import courses from '../models/courses.js'

/**
 * Controller for create course is a specific function that handles a specific request
 */

// create course
function createCourse(req,res){
    const newCourse = {
        id: req.body.id,
        title: req.body.title,
    }
    const exist = courses.some((item)=>{
        return item.id === newCourse.id
    })
    if(exist){
        return res.status(400).json({
            message: "Course already exists"
        })
    }
    courses.push(newCourse)
    return res.json(
        {
            message: "Course created successfully",
            item:newCourse
        })
}

// get course by id
function getCourseById(req,res){
    const id = req.params.id
    const course = courses.find((item)=>{
        return item.id === id
    })
    if(!course){
        return res.status(404).json({
            message: "Course not found"
        })
    }
    return res.json(course)
}  

// get all courses
function getAllCourses(req,res){
    return res.json(courses)
}
// delete course
function deleteCourse(req,res){
    const id = req.params.id
    const courseIndex = courses.findIndex((item)=> item.id === id)
    if(courseIndex === -1){
        return res.status(404).json({
            message: "Course not found"
        })
    }
    const [deleted] = courses.splice(courseIndex, 1)
    return res.json({
        message: "Course deleted successfully",
        item: deleted
    })
}

export { createCourse, getCourseById, getAllCourses, deleteCourse }