const { Router } = require("express");

const products = Router();

let allProducts = [];

products.post("/productos", (req, res) => {
  const { nombre, precio, thumbnail } = req.body;
  const id = assignId();
  allProducts.push({ nombre, precio, thumbnail, id });
  res.send("Producto guardado con exito");
});

products.get("/productos", (req, res) => {
  res.send(allProducts);
});

products.get(
  "/productos/:id",
  (req, res, next) => {
    const product = findById(req.params.id);
    if (!product) {
      res
        .status(400)
        .send(`error: el producto con id ${req.params.id} no existe`);
    }
  },
  (req, res) => {
    const product = findById(req.params.id);
    res.send(product);
  }
);

products.delete(
  "/productos/:id",
  (req, res, next) => {
    const product = findById(req.params.id);
    if (!product) {
      res
        .status(400)
        .send(`error: el producto con id ${req.params.id} no existe`);
    }
    next();
  },
  (req, res) => {
    const product = findById(req.params.id);
    allProducts.splice(allProducts.indexOf(product), 1);
    res.send("producto eliminado correctamente");
  }
);

// TODO arreglar el put para que funcione
products.put(
  "productos/:id",
  (req, res, next) => {
    const product = findById(req.params.id);
    if (!product) {
      res
        .status(400)
        .send(`error: el producto con id ${req.params.id} no existe`);
    }
    next();
  },
  (req, res) => {
    const product = findById(req.params.id);
    const { nombre, precio, thumbnail } = req.body;
    product.nombre = nombre;
    product.precio = precio;
    product.thumbnail = thumbnail;
    res.send("Producto actualizado con exito");
  }
);


// funciones auxiliares
const assignId = () => {
  let id = 1;
  if (allProducts.length > 0) {
    id = allProducts[allProducts.length - 1].id + 1;
  }
  return id;
};

const findById = (id) => {
  let product = allProducts.find((product) => product.id == id);
  return product;
};

module.exports = {
    router: products,
    productos: allProducts
};
