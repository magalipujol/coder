// 1. Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los
// siguientes endpoints en el puerto 8080:
// Ruta get '/productos' que devuelva un array con los productos disponibles.
// ruta get '/productoRandom' que devuelva un producto aleatorio.
// incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor
// antes de inicial el servidor colocar en el archivo 'productor.txt' tres productos
// formato link a repo en github y url de proyecto en glitch

const express = require('express');
const Contenedor = require('../entrega-2/Contenedor.js');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));

let contenedor = new Contenedor('productos.txt');

app.get('/', (request, response) => {
    response.sendFile('../public/index.html');
});

app.get('/productos', async (request, response) => {
    response.send(await contenedor.getAll());
})

app.get('/productoRandom', async (request, response) => {
    let productos = await contenedor.getAll();
    let producto = productos[Math.floor(Math.random() * productos.length)];
    response.send(producto)
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

