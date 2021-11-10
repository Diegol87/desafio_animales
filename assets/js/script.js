class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(nuevoTipo) {
        this._tipo = nuevoTipo;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(nuevoNombre) {
        this._nombreMascota = nuevoNombre;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }

    datosMascota() {
        return `El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`
    }
}

let formulario = document.querySelector("#formulario");
let nombre = document.querySelector("#propietario");
let telefono = document.querySelector("#telefono");
let direccion = document.querySelector("#direccion");
let nombreMascota = document.querySelector("#nombreMascota");
let tipoAnimal = document.querySelector("#tipo");
let enfermedad = document.querySelector("#enfermedad");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    let mascota = new Mascota()

    mascota.tipo = tipoAnimal.value
    mascota.nombreMascota = nombreMascota.value
    mascota.enfermedad = enfermedad.value
    mascota.nombre = nombre.value
    mascota.direccion = direccion.value
    mascota.telefono = parseInt(telefono.value)

    console.log(mascota.datosPropietario())
    console.log(mascota.datosMascota())

    document.querySelector("#datosP").innerHTML = mascota.datosPropietario()
    document.querySelector("#datosM").innerHTML = mascota.datosMascota()
})




