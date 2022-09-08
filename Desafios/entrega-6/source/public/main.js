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
      // emit to all clients
      const result = await response.json()
      return result

    } catch (error) {
      let err = new Error(error)
    }
    socket.emit('nuevo-producto', { nombre, precio, thumbnail })
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

const guardarMensaje = async () => {
  const username = document.getElementById('username').value
  const mensaje = document.getElementById('mensaje').value

  try {
    const data = { username, mensaje }
    const response = await fetch('/mensajes', {
      method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json'},
      })
      const result = await response.json()
      return result

    } catch (error) {
      let err = new Error(error)
    }

    socket.emit('nuevo-mensaje', data)
}

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
