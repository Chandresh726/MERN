const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/students_db";
db.students = require("./student.model.js")(mongoose);

module.exports = db;