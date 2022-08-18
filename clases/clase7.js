// npm init
// npm install express
// npm install nodemon


const { response, request } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const frase = 'Hola mundo cómo están'

// // devuelve la frase en forma completa en un campo 'frase'
// app.get('/api/frase', (request, response) => {
//     response.send(frase)
// })

// // devuelve por numero de orden la letra dentro de esa frase en un campo 'letra'
// app.get('/api/letras/:num', (request, response) => {
//     const num = request.params.num;
//     const letra = frase.charAt(num);
//     response.send(letra)
// })

// //devuelve por número de orden la palabra dentro de esa frase en un campo 'palabra'
// app.get('/api/palabras/:num', (request, response) => {
//     const { num } = request.params;
//     const palabra = frase.split(' ')[num];
//     response.json({ palabra });
// })


// agrega middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let usuarios = []

// crear un usuario
app.post('/usuario', (request, response) => {
    const data = request.body

    if (!data) {
        response.sendStatus(400)
    }

    usuarios.push(data)
    response.send(data)
});

// listar todos los usuarios
app.get('/usuarios', (request, response) => {
    response.send(usuarios)
});

// traer un usuario específico
app.get('/usuario/:id', (request, response) => {

});

// eliminar todos los usuarios
app.delete('/usuarios', (request, response) => {

});

// eliminar un usuario específico
app.delete('/usuario/:id', (request, response) => {

});

// modificar un usuario específico
app.put('/usuario/:id', (request, response) => {

});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
