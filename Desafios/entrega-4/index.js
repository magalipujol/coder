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