const delay = ret => {for(let i=0; i<ret*3e6; i++);}

function hacerTarea(num) {
    console.log(('haciendo tarea ' + num));
    delay(100)
}

// console.log('iniciando tareas');
// hacerTarea(1);
// hacerTarea(2);
// hacerTarea(3);
// hacerTarea(4);
// console.log('fin de tareas');


function HacerTarea2(num, cb) {
    console.log(('haciendo tarea ' + num));
    setTimeout(cb, 100)
}

// console.log('iniciando tareas');
// HacerTarea2(1, () => {
//     HacerTarea2(2, () => {
//         HacerTarea2(3, () => {
//             HacerTarea2(4, () => {
//                 console.log('fin de tareas');
//             })
//         })
//     })
// })

// console.log('otras tareas...');

/* *************** */
/* file management */
/* *************** */


const fs = require('fs');

try {
    fs.writeFileSync('fyh.txt', new Date().toString());
} catch (error) {
    console.log('no se pudo escribir el archivo   ' + error);
}

// try {
//     const data = fs.readFileSync('fyh.txt', 'utf8');
//     console.log(data);
// } catch {
//     console.log('no se pudo leer el archivo');
// }

// ejemplo con callback para manejar el asincronismo
// fs.readFile('fyh.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('error: ' + err);
//     } else {
//         console.log(data);
//     }
// })

// ejemplo con promesas
// fs.promises.readFile('fyah.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

    // usando async await

    async function leerArchivo2() {
        try {
            const data = await fs.promises.readFile('fyh.txt', 'utf-8')
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    leerArchivo2();

    const fs = require("fs")

    fs.promises.writeFile("./info.txt", "{ author: `Linda` }").then(()=>{
       // console.log('escrito)
    }).catch(err => console.log(err))

    fs.promises.readFile("./info.txt", "utf-8").then((fileData)=>{
        console.log(fileData)
        // modificarlo
        // fs.promises.writeFile('info.txt', ----) escribirlo con las modificaciones
        // fs.promises.writeFile('package.json.coder', ----)  escribir el nuevo archivo
    }).catch(err => console.log(err))
