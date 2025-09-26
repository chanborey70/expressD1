import courses from '../models/courses.js'

function logger(req, res, next) {
    console.log("Incoming request", req.rawHeaders?.[3])
    next()
}

function autherize(req, res, next) {
    if (req.query.user === "borey") {
        return next()
    }
    return res.status(401).json({
        message: "Unauthorized"
    })
}

// Express error-handling middleware must have 4 parameters
function errorHandler(err, req, res, next) {
    const status = err?.status || 500
    const message = err?.message || 'Internal Server Error'
    return res.status(status).json({ message })
}

function checkId(req, res, next) {
    const id = req.params.id
    const course = courses.find((item) => item.id === id)
    if (!course) {
        return res.status(404).json({
            message: "Course not found"
        })
    }
    return next()
}

export { logger, autherize, errorHandler, checkId }