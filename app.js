const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//Templete
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static(path.join("public")));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Leosbel Hernandez",
    titulo: "Curso de Nodejs",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Leosbel Hernandez",
    titulo: "Curso de Nodejs",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Leosbel Hernandez",
    titulo: "Curso de Nodejs",
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(8080);
