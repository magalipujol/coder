const { Router } = require("express");

const router = Router();

let allProducts = [
  {
    nombre: "labradorcito",
    precio: "1000 mimos x día",
    thumbnail: "https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg",
    id: 1,
  },
];

let allMensajes = [];

router.post("/mensajes", (req, res) => {
  const { username, mensaje } = req.body;
  const newMensaje = { username, mensaje };
  allMensajes.push(newMensaje);
  res.send(`nuevo mensaje de ${username}: ${mensaje}`);
})

router.post("/productos", (req, res) => {
  const { nombre, precio, thumbnail } = req.body;
  const id = assignId();
  allProducts.push({ nombre, precio, thumbnail, id });
  res.send("Producto guardado con exito");
});

router.get("/productos", (req, res) => {
  res.send(allProducts);
});

router.get("/mensajes", (req, res) => {
  res.send(allMensajes);
});

router.get(
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

router.delete(
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
  router: router,
  productos: allProducts,
  mensajes: allMensajes
};
