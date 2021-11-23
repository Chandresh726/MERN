module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        rollno: String,
        branch: String
      },
      { timestamps: true }
    );
  
    const Student = mongoose.model("student", schema);
    return Student;
};