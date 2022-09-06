import express from 'express';
import { Superficie } from './superficie';
import { Perimetro } from './perimetro';

const app = express();

const superficie:Superficie = new Superficie();
const perimetro:Perimetro = new Perimetro();

app.get('/perimetro/:figura/:param1/:param2', (req, res) => {
    const { figura, param1, param2 } = req.params;
    let result:String;
    switch (figura) {
        case 'cuadrado':
            result = `El perímetro del cuadrado es ${perimetro.cuadrado(Number(param1))}`;
            break;
        case 'rectangulo':
            result = `El perímetro del rectangulo es ${perimetro.rectangulo(Number(param1), Number(param2))}`;
            break;
        case 'circulo':
            result = `El perímetro del círculo es ${perimetro.circulo(Number(param1))}`;
            break;
        default:
            result = 'Figura no reconocida';
            break;
    }
    res.send(result);
})

app.get('/superficie/:figura/:param1/:param2', (req, res) => {
    const { figura, param1, param2 } = req.params;
    let result:String;
    switch (figura) {
        case 'cuadrado':
            result = `La superficie del cuadrado es ${superficie.cuadrado(Number(param1))}`;
            break;
        case 'rectangulo':
            result =`La superficie del rectangulo es ${superficie.rectangulo(Number(param1), Number(param2))}`;
            break;
        case 'circulo':
            result = `La superficie del círculo es ${superficie.circulo(Number(param1))}`;
            break;
        default:
            result = 'Figura no reconocida';
            break;
}

res.send(result);
})


// setting up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('server on');})