module.exports = app => {
    const students = require("./student.controller");
  
    var router = require("express").Router();
  
    // Create a new student
    router.post("/", students.create);

    // Retrieve all students
    router.get("/", students.findAll);

        // Update a student with id
    router.put("/:id", students.update);

    app.use('/api/students', router);
};