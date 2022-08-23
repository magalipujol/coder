const express = require("express");
const { Server: HttpServer} = require("http")
const { Server: IOServer } = require("socket.io");
const { consumers } = require("stream");


const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

io.on("connection", socket => console.log("Nueva conexión"))

app.use(express.static("public"));

const connectedServer = httpServer.listen(8080, () => {
    console.log("Server running on port 8080");
})

connectedServer.on("error", error => console.log)