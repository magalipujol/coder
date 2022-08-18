// calback es una función que se envía como argumento a otra función, y se ejecuta
const operacion = (valor1, valor2, func) => func(valor1, valor2)

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

// console.log("suma: " + operacion(1, 2, suma));
// console.log("resta: " + operacion(1, 2, resta));
// console.log("multiplicacion: " + operacion(1, 2, multiplicacion));
// console.log("division: " + operacion(1, 2, division));
// console.log("modulo: " + operacion(1, 2, modulo));

const ejempliCallback = (err, result) => {
    if (err){
        // do something
    } else {
        // do another thing
    }
}

function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo / divisor)
        }
    })
}

// dividir(10, 2)
//     .then(response => response)
//     .then(response => response / 2)
//     .then(response => console.log(response))
//     .catch(error=> {
//         console.log(error);
//     })



