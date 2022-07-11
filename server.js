// Start the server using express
const express = require("express");
const app = express();

// Route for the front end
const { animals } = require("./data/animals");

// End of the code stuff
app.get("/api/animals", (req, res) => {
  res.json("Animals!");
});

app.listen(3001, () => {
  console.log("API server now on port 3001");
});
