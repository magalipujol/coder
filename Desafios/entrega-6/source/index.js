/*
Consigna 1: Modificar el último entregable para que disponga de un canal de websocket que permita representar, por debajo del formulario de ingreso, una tabla con la lista de productos en tiempo real.

    Puede haber varios clientes conectados simultáneamente y en cada uno de ellos se reflejarán los cambios que se realicen en los productos sin necesidad de recargar la vista.
    Cuando un cliente se conecte, recibirá la lista de productos a representar en la vista.

*/
const express = require('express');
const { router, productos } = require('./api.js');
const { engine } = require('express-handlebars');
const path = require('path');
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer);
const app = express();
const PORT = process.env.PORT || 3000;

const connectedServer = app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
})

app.engine('.hbs', engine({ extname: '.hbs' }))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

app.get('/', (req, res) => {
    res.render('table', { productos: productos })
})

app.get('/form', (req, res) => {
    res.render('form', { productos: productos })
})

io.on("connection", async (socket) => {
    console.log('new user connected');

    socket.emit('productos', productos);

    // acá debería usar la función de GuardarProducto de main.js
    socket.on('new-product', async (data) => {
        await guardarProducto(data);
        io.sockets.emit('productos', productos);
    })
})

connectedServer.on("error", error => console.log(`error: ${error}`))

// funciones auxiliares

const guardarProducto = async () => {
    console.log("se llamó a guardarProducto desde index.js");
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value
    const thumbnail = document.getElementById('thumbnail').value

    try {
        const data = { nombre, precio, thumbnail}
        const response = await fetch('/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json'},
        })
        const result = await response.json()
        return result

    } catch (error) {
        let err = new Error(error)
        return err
    }
}
