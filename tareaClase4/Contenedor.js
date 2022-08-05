const fs = require('fs');

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.archivo, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            } );
        } );
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.archivo, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let objetos = JSON.parse(data);
                    let objeto = objetos.find(p => p.id == id);
                    resolve(objeto);
                }
            } );
        } );
    }

    getLastId() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.archivo, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    if (!data) {
                        resolve(0);
                    }
                    else {
                        let objetos = JSON.parse(data);
                        let lastId = objetos[objetos.length - 1].id;
                        resolve(lastId);
                    }
                }
            } );
        } );
    }

    async assignId(objeto) {
        objeto.id = await this.getLastId() + 1;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.archivo, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            } );
        } );
    }

    async save(objeto) {
        await this.assignId(objeto)
        return new Promise((resolve, reject) => {
            fs.appendFile(this.archivo, JSON.stringify(objeto), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(objeto);
                }
            })})
        }

    deleteById(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.archivo, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let objetos = JSON.parse(data);
                    let objeto = objetos.find(p => p.id == id);
                    objetos.splice(objetos.indexOf(objeto), 1);
                    fs.writeFile(this.archivo, JSON.stringify(objetos), (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(objeto);
                        }
                    } );
                }
            } );
        } );
    }

    deleteAll() {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.archivo, '', (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            } );
        } );
    }
}

let galletitas = {
    nombre: 'las recetas de la abuela',
    precio: 2
}

let pan = {
    nombre: 'el pan de la abuela',
    precio: 1
}

let contenedor = new Contenedor('productos.txt');

contenedor.save(galletitas).then(() => {
    contenedor.save(pan).then(() => {}).catch(err => console.log(err));

}).catch(err => console.log(err));
contenedor.getAll().then(data => { console.log(data) } );