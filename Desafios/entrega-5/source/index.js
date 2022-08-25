/* Utilizando la misma API de productos del proyecto anterior, construir un web server (no REST) que tenga:
    a) un formulario de carga de productos en la ruta raíz (configurar la ruta /productos para recibir el POST y redirigir al mismo formulario)
    b) una vista de productos cargados en la ruta GET /productos
    c) ambas páginas contarán con un botón que redirija a la otra

Hacer lo mismo utilizando los tres motores de plantllas (handlebars, pug y ejs)
*/

const express = require('express');
// TODO chequear por quee hay dos, y que ruta va
const { router, productos } = require('./routes');

const { engine } = require('express-handlebars')
const ejs = require('ejs');
const pug = require('pug');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
})

// configuración para el motor de plantillas handlebars
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')


// configuración para el motor de plantillas pug
// app.set('view engine', 'pug')

// configuración para el motor de plantillas ejs
// app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('api/productos', router)

app.get('/', (req, res) => {
    res.render('form')
})

app.get('/productos', (req, res) => {
    res.render('productos', { array: productos })
})

