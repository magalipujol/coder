// const guardarProducto = async () => {
//     const nombre = document.getElementById('nombre').value
//     const precio = document.getElementById('precio').value
//     const thumbnail = document.getElementById('thumbnail').value

//     try {
//         const data = { nombre, precio, thumbnail}
//         const response = await fetch('/productos', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: { 'Content-Type': 'application/json'},
//         })
//         const result = await response.json()
//         return result

//     } catch (error) {
//         let err = new Error(error)
//         return err
//     }
// }

const socket = io.connect();

function obtenerTemplateProductos(productos) {
    return fetch('templates/productos-tabla.hbs').then((response) => {
        response.text
    })
    .then((template) => {
        const templateCompiled = Handlebars.compile(template)
        return templateCompiled({ productos })
    });
}



socket.on("productos", async productos => {
    const html = await obtenerTemplateProductos(productos);
    document.getElementById('products').innerHTML = html;
})

console.log("script funcionando");