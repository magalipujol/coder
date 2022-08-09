// npm init
// npm install express
// npm install nodemon


const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const frase = 'Hola mundo cómo están'

// devuelve la frase en forma completa en un campo 'frase'
app.get('/api/frase', (request, response) => {
    response.send(frase)
})

// devuelve por numero de orden la letra dentro de esa frase en un campo 'letra'
app.get('/api/letras/:num', (request, response) => {
    const num = request.params.num;
    const letra = frase.charAt(num);
    response.send(letra)
})

//devuelve por número de orden la palabra dentro de esa frase en un campo 'palabra'
app.get('/api/palabras/:num', (request, response) => {
    const { num } = request.params;
    const palabra = frase.split(' ')[num];
    response.json({ palabra });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
