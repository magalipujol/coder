const express = require('express');
const pug = require('pug');
const app = express();

// seteo de pug
app.set('views', './views'); // carpeta donde estan las vistas
app.set('view engine', 'pug'); // este es el motor de plantillas encargado de renderizar las vistas

app.get('/', (req, res) => {
    res.render('hello.pug', {  mensaje: 'Hola mundo' });
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
} );