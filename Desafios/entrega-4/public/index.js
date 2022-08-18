function postProduct() {
    var product = {
        nombre: document.getElementById("inputNombre").value,
        precio: document.getElementById("inputPrecio").value,
        thumbnail: document.getElementById("inputUrl").value
    };

    fetch('/api/productos', {
        method: 'POST',
        body: JSON.stringify(product)
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
        //.catch(err => {
        //     console.log(err);
        // }).finally(() => {
        //     document.getElementById("inputNombre").value = "";
        //     document.getElementById("inputPrecio").value = "";
        //     document.getElementById("inputUrl").value = "";
        // })
}