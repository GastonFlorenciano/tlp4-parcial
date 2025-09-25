interface Producto {
    detalles(): string;
}

class Notebook implements Producto {

    tipo: string
    nombre: string
    ram: string
    procesador: string

    constructor(
        tipo: string,
        nombre: string,
        ram: string,
        procesador: string
    ) {
        this.tipo = tipo
        this.nombre = nombre
        this.ram = ram
        this.procesador = procesador

    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Producto {

    tipo: string
    nombre: string
    ram: string
    procesador: string

    constructor(
        tipo: string,
        nombre: string,
        ram: string,
        procesador: string
    ) {
        this.tipo = tipo
        this.nombre = nombre
        this.ram = ram
        this.procesador = procesador

    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor implements Producto {

    tipo: string
    nombre: string
    ram: string
    procesador: string

    constructor(
        tipo: string,
        nombre: string,
        ram: string,
        procesador: string
    ) {
        this.tipo = tipo
        this.nombre = nombre
        this.ram = ram
        this.procesador = procesador

    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}



export default class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Producto {
        if (tipo === "Notebook") return new Notebook(tipo, nombre, ram, procesador);
        if (tipo === "Desktop") return new Desktop(tipo, nombre, ram, procesador);
        if (tipo === "Servidor") return new Servidor(tipo, nombre, ram, procesador);
        throw new Error("Tipo no reconocido");
    }
}

export function factory(){
    const factory = new EquipoFactory()
    const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon")
    console.log(server.detalles())
}