// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const PORT = 3000;
// app.post("/", (req, res) => {
//   console.log(req);
//   res.send("hello World");
// });
// app.listen(PORT, () => {
//   console.log("server listening on port" + PORT);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   const token = jwt.sign("your-secret-key", {
//     expiresIn: "1h",
//   });
//   const requestBody = req.body;
//   console.log(requestBody);
//   res.send(token);
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors"); // Import cors module

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// // Allow all origins
// app.use(cors());

// app.post("/api/user/login", (req, res) => {
//   const requestBody = req.body;
//   console.log(JSON.stringify(requestBody));
//   res.send(JSON.stringify("fdsfsfdsf"));
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const secretKey = "your-secret-key";
  const dataToEncode = req.body;

  const token = jwt.sign(dataToEncode, secretKey);

  console.log(dataToEncode);
  res.send(token);
  console.log(token);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
