const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('handlebars', engine());
// setting up handlebars
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

// setting up endpoints
app.get('/', (req, res) => {
    res.render('datos', {nombre: 'John', apellido: 'Dou'});
})
// setting up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('server on');})