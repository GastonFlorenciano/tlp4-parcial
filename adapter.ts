interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
}

class InventarioViejo {

  public devices: { nombre: string, tipo: string, estado: string }[] = [];

  addItem(nombre: string, tipo: string, estado: string): void {
    this.devices.push({ nombre, tipo, estado })
  }

  getItems() {
    return this.devices;
  }
}

class AdaptadorInventario implements Inventario {
  constructor(private inventarioViejo: InventarioViejo) { }
  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.addItem(nombre, tipo, estado);
  }
  listarEquipos() {
    return this.inventarioViejo.getItems()
  }
}

export function adapter() {
  const inventarioViejo = new InventarioViejo();
  const adaptador = new AdaptadorInventario(inventarioViejo);
  adaptador.agregarEquipo("Router Cisco", "Red", "disponible")
  console.log(adaptador.listarEquipos())
}