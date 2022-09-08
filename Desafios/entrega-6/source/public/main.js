const socket = io.connect();


// funciones para tabla de productos
const guardarProducto = async () => {
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value
    const thumbnail = document.getElementById('thumbnail').value

    try {
        const data = { nombre, precio, thumbnail}
        const response = await fetch('/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json'},
        })
        const result = await response.json()
        socket.emit('nuevo-producto', data)
        return result

    } catch (error) {
        let err = new Error(error)
        return err
    }
}

// socket para tabla de productos
// descomentar para que funcione
// function obtenerTemplateChat(productos) {
//   return fetch("templates/productos-tabla.hbs")
//     .then((response) => response.text())
//     .then((template) => {
//       const templateCompiled = Handlebars.compile(template);
//       return templateCompiled({ productos });
//     });
// }

// socket.on("productos", async (productos) => {
//     console.log('llegaron products');
//   const html = await obtenerTemplateChat(productos);
//   document.getElementById("products").innerHTML = html;
// });


// funciones para chat
function obtenerTemplateChat(mensajes) {
  return fetch("templates/chat.hbs")
    .then((response) => response.text())
    .then((template) => {
      const templateCompiled = Handlebars.compile(template);
      return templateCompiled({ mensajes });
    });
}

socket.on("chat", async (mensajes) => {
    console.log('nuevo mensaje');
  const html = await obtenerTemplateChat(mensajes);
  document.getElementById("complete-chat").innerHTML = html;
});
