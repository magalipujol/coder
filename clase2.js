class Libro{
    constructor (nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    }
}

class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        const libroNuevo = new Libro(nombre, autor)
        this.libros.push(libroNuevo)
    }

    getBookNames() {
        let nombresLibros = [];
        this.libros.forEach(libro => {
            nombresLibros.push(libro.nombre)
        });
        return nombresLibros
    }
}

const nuevoUsuario = new Usuario('agus', 'diaz', [new Libro('Encarta', 'Microsoft')], [])

nuevoUsuario.getFullName(); // devuelve 'agus diaz'
nuevoUsuario.addMascota('michi')
nuevoUsuario.addMascota('michifus')
nuevoUsuario.countMascotas() // devuelve 2
nuevoUsuario.addBook('Wikipedia', 'Fundación Wikimedia')
nuevoUsuario.getBookNames(); // devuelve ['Encarta', 'Wikipedia']

