export class FSModel {
    id;
    nombre;
    descripcion;
    timestamp;
    codigo;
    precio;
    foto;
    stock;

    get id() {
        return this.id;
    }

    constructor(id, item) {
        this.id = id + 1;
        this.nombre = item.nombre;
        this.descripcion = item.descripcion;
        this.timestamp = item.timestamp;
        this.codigo = item.codigo;
        this.precio = item.precio;
        this.foto = item.foto;
        this.stock = item.stock;

        console.log(item);
    }

}