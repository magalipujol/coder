/*
Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrexca una API RESTful de productos.
Crear un espacio público del servidor que contenga un documento index.html con un formulario de ingreso de productos.
En detalle, que incorpore las siguientes rutas:
- Get 'api/productos' que devuelva todos los productos.
- Get 'api/productos/:id' que devuelva un producto en particular. Si el producto no existe, devuelve { error: 'Producto no encontrado' }.
- Post 'api/productos' reciba y agregue un producto, y devuelva el producto agregado con un id asignado.
- Put 'api/productos/:id' actualice un producto en particular.
- Delete 'api/productos/:id' elimine un producto en particular.

Cada producto debe tener el formato: {title: (nombre), precio: (precio), thumbnail: (url al logo o foto del producto), id: (id unico)}
*/

const express = require("express");
const { Router } = express;

const app = express();
const products = Router();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

let allProducts = [];

products.post(
  "/productos",
  (req, res) => {
    const { nombre, precio, thumbnail } = req.body;
    const id = assignId();
    allProducts.push({ nombre, precio, thumbnail, id });
    res.send("Producto guardado con exito");
  }
);

products.get("/productos", (req, res) => {
  res.send(allProducts);
});

products.get("/productos/:id", (req, res, next) => {
  const product = findById(req.params.id)
  if (!product) {
    res.status(400).send(`error: el producto con id ${req.params.id} no existe`)
  }
  },
  (req, res) => {
  const product = findById(req.params.id)
  res.send(product)
});

products.delete("/productos/:id", (req, res, next) => {
  const product = findById(req.params.id)
  if (!product) {
    res.status(400).send(`error: el producto con id ${req.params.id} no existe`)
  }
  next()
},
(req, res) => {
    const product = findById(req.params.id)
    allProducts.splice(allProducts.indexOf(product), 1)
    res.send('producto eliminado correctamente')
  }
)

products.put("productos/:id", (req, res, next) => {
  const product = findById(req.params.id)
  if (!product) {
    res.status(400).send(`error: el producto con id ${req.params.id} no existe`)
  }
  next()
  },
  (req, res) => {
  const product = findById(req.params.id)
  const { nombre, precio, thumbnail } = req.body;
  product.nombre = nombre;
  product.precio = precio;
  product.thumbnail = thumbnail;
  res.send("Producto actualizado con exito");
})

const assignId = () => {
  let id = 1;
  if (allProducts.length > 0) {
    id = allProducts[allProducts.length - 1].id + 1;
  }
  return id;
}

const findById = (id) => {
  let product = allProducts.find(product => product.id == id)
  return product
}

app.use("/api", products);


