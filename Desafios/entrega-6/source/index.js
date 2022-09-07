const express = require("express");
const { router, productos } = require("./api.js");
const { engine } = require("express-handlebars");
const path = require("path");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const PORT = process.env.PORT || 3000;

const connectedServer = httpServer.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});

app.engine(".hbs", engine({ extname: ".hbs" }));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

app.get("/", (req, res) => {
  res.render("table", { productos: productos });
});

app.get("/form", (req, res) => {
  res.render("form", { productos: productos });
});


// borrar esta variable
let products = [
    {
      nombre: "labradorcito",
      precio: "1000 mimos x día",
      thumbnail: "https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg",
      id: 1,
    },
  ];


io.on("connection", (socket) => {
  console.log("new user connected");

  socket.emit("productos", products);

});

connectedServer.on("error", (error) => console.log(`error: ${error}`));
