"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Productos = /** @class */ (function () {
    function Productos(productos) {
        this.productos = productos;
    }
    Productos.prototype.prodBD = function () {
        return this.productos;
    };
    Productos.prototype.addProduct = function (prod, io) {
        var nombre = prod.nombre, descripcion = prod.descripcion, codigo = prod.codigo, foto = prod.foto, precio = prod.precio, stock = prod.stock;
        var id = (this.productos.length + 1).toString();
        var timestammp = new Date();
        var producto = {
            id: id,
            timestammp: timestammp,
            nombre: nombre,
            descripcion: descripcion,
            codigo: codigo,
            foto: foto,
            precio: precio,
            stock: stock,
        };
        io.sockets.emit('products', producto);
        this.productos.push(producto);
    };
    Productos.prototype.getProducts = function () {
        var productoVista = this.productos; ///VER INTERFACE
        if (!this.productos.length)
            productoVista = [{ error: "no hay productos cargados" }];
        return productoVista;
    };
    Productos.prototype.findOneProduct = function (id) {
        var producto = this.productos.find(function (prod) { return prod.id === id; }); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        return producto;
    };
    Productos.prototype.updateProduct = function (prod, idn) {
        var timestammp = prod.timestammp, nombre = prod.nombre, descripcion = prod.descripcion, codigo = prod.codigo, foto = prod.foto, precio = prod.precio, stock = prod.stock;
        var id = idn;
        var productoAct = {
            id: id,
            timestammp: timestammp,
            nombre: nombre,
            descripcion: descripcion,
            codigo: codigo,
            foto: foto,
            precio: precio,
            stock: stock,
        };
        var producto = this.productos.find(function (prod) { return prod.id === id; }); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        else {
            this.productos.splice(this.productos.indexOf(producto), 1, productoAct);
            producto = productoAct;
        }
        return producto;
    };
    Productos.prototype.delProduct = function (id) {
        var producto = this.productos.find(function (prod) { return prod.id === id; }); ///VER INTERFACE///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        else
            this.productos.splice(this.productos.indexOf(producto), 1);
        return producto;
    };
    return Productos;
}());
exports.default = Productos;
