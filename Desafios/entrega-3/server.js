// 1. Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los
// siguientes endpoints en el puerto 8080:
// Ruta get '/productos' que devuelva un array con los productos disponibles.
// ruta get '/productoRandom' que devuelva un producto aleatorio.
// incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor
// antes de inicial el servidor colocar en el archivo 'productor.txt' tres productos
// formato link a repo en github y url de proyecto en glitch

const express = require('express');
const { Contenedor } = require('../entrega-2/Contenedor.js');
const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Hola mundo</h1>')
})

let visitas = 0;
app.get('/productos', (request, response) => {
    response.send(``)
})

app.get('/fyh', (request, response) => {
    const date = new Date().toString()
    response.send(date)
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    `Servidor excuchando en el puerto ${PORT}`
})

