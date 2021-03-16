const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/courses", (req, res) => {
  return res.json(["Curso 01", "Curso 02", "Curso 03"]);
});

app.post("/courses", (req, res) => {
  return res.json(["Curso 01", "Curso 02", "Curso 03", "Curso 04"]);
});

app.put("/courses/:id", (req, res) => {
  return res.json(["Curso 001", "Curso 02", "Curso 03", "Curso 04"]);
});

app.path("/courses/:id", (req, res) => {
  return res.json(["Curso 001", "Curso 002", "Curso 03", "Curso 04"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 001", "Curso 002", "Curso 04"]);
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
