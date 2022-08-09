const fs = require('fs');

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }

    // devuelve un array con todos los objetos presentes en el archivo
    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.archivo, 'utf8');
            if (contenido.length == 0) {
                return [];
            }
            else {
                const response = JSON.parse(contenido);
                return response;
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    // recibe un id y devuelve el objeto con ese id
    async getById(id) {
        try {
            const allArchivos = await this.getAll();
            const objeto = allArchivos.find(p => p.id == id);
            return objeto;
        }
        catch (error) {
            throw new Error(error);
        }
    }

    // recibe un objeto, lo guarda en el archivo, devuelve id asignado
    // tomar en consideracion el contenido previo del archivo
    async save(objeto) {
        try {
            const allArchivos = await this.getAll();

            const ids = allArchivos.map(a => a.id);
            const id = Math.max(...ids) + 1;
            objeto.id = id;
            allArchivos.push(objeto);
            await fs.promises.writeFile(this.archivo, JSON.stringify(allArchivos), 'utf8');
            return id;
        }
        catch (error) {
            throw new Error(error);
        }
    }

    async deleteById(id) {
        try {
            const allArchivos = await this.getAll();
            const objeto = allArchivos.find(p => p.id == id);
            const index = allArchivos.indexOf(objeto);
            allArchivos.splice(index, 1);
            await fs.promises.writeFile(this.archivo, JSON.stringify(allArchivos), 'utf8');
        }
        catch (error) {
            throw new Error(error);
        }
    }

    async deleteAll() {
        try {
            const allArchivos = [];
            await fs.promises.writeFile(this.archivo, JSON.stringify(allArchivos), 'utf8');
        }
        catch (error) {
            throw new Error(error);
        }
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


async function main() {
    let contenedor = new Contenedor('productos.txt');

    await contenedor.deleteAll();
    await contenedor.save(galletitas);
    console.log(await contenedor.getAll());
    await contenedor.save(pan);
    console.log(await contenedor.getAll());

}

main();