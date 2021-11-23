const express = require("express");

const app = express();

const db = require("./dbconnection");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./student.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});