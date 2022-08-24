const socket = io.connect("http://localhost:8080");

// acoomodar para que ande
const input = document.querySelector("input")
input.addEventListener("input", () => {
    socket.emit("emitMessages", input.value)
})

socket.on("getMessages", message => {
    // const p = document.createElement("p")
    // p.innerText = message
    // document.body.appendChild(p)
    document.querySelector("p").innerText = message
})