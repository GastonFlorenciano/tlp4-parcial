interface Observador {
    actualizar(equipo: Equipo): void;
}

export class Soporte implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.estado}`);
    }
}

export class Equipo {
    private observadores: Observador[] = [];
    public estado: string

    constructor(
        public nombre: string,
        public tipo: string,
        estado: string
    ) {
        this.estado = estado;
    }

    agregarObservador(obs: Observador): void {
        this.observadores.push(obs);
    }

    eliminarObservador(obs: Observador): void {
        this.observadores = this.observadores.filter(o => o !== obs);
    }

    cambiarEstado(nuevoEstado: string) {
        this.estado = nuevoEstado;
        this.notificar()
    }

    notificar(): void {
        this.observadores.forEach(o => o.actualizar(this));
    }
}

export function observer() {
    const soporte = new Soporte()
    const equipo = new Equipo("Notebook HP", "Portátil", "disponible")
    equipo.agregarObservador(soporte)
    equipo.cambiarEstado("en reparación")
}
