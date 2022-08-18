const express = require('express')
// const { Router } = express
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// const personas = Router()
// const mascotas = Router()
// let personasArray = []
// let mascotasArray = []

// personas.post('/', (req, res, next) => {
//     const { nombre, edad } = req.body

//     if(!nombre || !edad){
//         res.status(400).send('middleware 1: tus datos no estan completos')
//     }

//     next()
// }, (req, res)=> {
//     listaPersonas.push({nombre, edad})
//     res.send('Persona guardada con exito')
// })

// personas.get('/personas', (req, res)=> {
//     res.send(personasArray)
// })

// mascotas.get('/mascotas', (req, res)=> {
//     res.send(mascotasArray)
// })

// mascotas.post('/mascotas', (req, res)=> {
//     const { nombre, edad } = req.body
//     if (!nombre || !edad) {
//         res.status(400).send('Faltan datos')
//     }
//     mascotasArray.push( {nombre, edad})
//     res.send('mascota guardada con exito')
// })

// app.use('/api', personas)
// app.use('/api', mascotas)

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}${Date.now}`)
    }
})

const upload = multer({ storage: storage })


app.post('/uploadFile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if(!file){
        const error = new Error('No file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

const PORT  = 3000
app.listen(PORT, () => {
    console.log('server on')
})