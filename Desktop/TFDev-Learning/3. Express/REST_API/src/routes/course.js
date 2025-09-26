import express from 'express'
import { createCourse, getCourseById, getAllCourses, deleteCourse } from '../controller/course.js'
const router = express.Router()


router.post('/', createCourse)
router.get('/:id', getCourseById)
router.get('/', getAllCourses)
router.delete('/:id', deleteCourse)
export default router

     