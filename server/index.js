const express = require("express");
const app = express();
const cors = require("cors");
const port = 3200;
app.use(cors());
// app.use(express.json());
app.get("/api/message", (req, res) => {
  res.send("hellp api");
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
app.listen(port, () => {
  console.log("server is running");
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
