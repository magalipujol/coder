const http = require('http');

/* Servidor con http */
// const getMensaje = () => {
//     const horaActual = new Date().getHours()
//     if (6 < horaActual <= 12) {
//         return 'buenos días'
//     }
//     else if (12 < horaActual <= 19) {
//         return 'buenas tardes'
//     }
//     else{
//         return 'buenas noches'
//     }
// }

// const server = http.createServer((request, response) => {
//     response.end(getMensaje())
// })

// const connectedServer = server.listen(8080, () => {
//     console.log(
//       `Servidos Http escuchando en el puerto ${connectedServer.address().port}`
//     );
//   });


/* Express */

const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Hola mundo</h1>')
})

let visitas = 0;
app.get('/visitas', (request, response) => {
    response.send(`cantidad de visitas: ${++visitas}`)
})

app.get('/fyh', (request, response) => {
    const date = new Date().toString()
    response.send(date)
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    `Servidor excuchando en el puerto ${PORT}`
})


