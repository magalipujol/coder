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
        const allObjects = this.getAll();
        const allIds = []
        allObjects.forEach(object => {
            allIds.push(object.id);
        });
        if (allObjects.length() != 0) {
            return allObjects[allObjects.length() - 1];
        } else {
            return 0;
        }
    }

    assignId(objeto) {
        objeto.id = this.getLastId + 1;
    }

    save(objeto) {
        this.assignId(objeto)
        return new Promise((resolve, reject) => {
            fs.writeFile(this.archivo, JSON.stringify(objeto), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(objeto);
                }
            })})
        }
    }