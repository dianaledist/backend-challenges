"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var carrito = /** @class */ (function () {
    function carrito(carrito) {
        this.carrito = carrito;
    }
    carrito.prototype.getProducts = function () {
        var productoVista = [];
        if (this.carrito) {
            productoVista = this.carrito.producto;
        } ///VER INTERFACE}
        if (!this.carrito || !this.carrito.producto.length)
            productoVista = [{ error: "no hay productos cargados" }];
        return productoVista;
    };
    carrito.prototype.findOneProduct = function (id) {
        var producto = this.carrito.producto.find(function (prod) { return prod.id === id; }); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        return producto;
    };
    carrito.prototype.addProduct = function (id) {
        ////////////////Archivo////////////
        var prodtxt;
        try {
            prodtxt = JSON.parse(fs_1.default.readFileSync('Productos.txt', 'utf8'));
        }
        catch (err) {
            console.error(err);
        }
        //////////////////////////////
        var selProd = prodtxt.find(function (prod) { return prod.id === id; });
        //console.log("carrito.ts L37",id ,"filter", selProd)
        //   const producto:any = productos.findOneProduct(id)
        this.carrito.producto.push(selProd);
    };
    carrito.prototype.delProduct = function (id) {
        var producto = this.carrito.producto.find(function (prod) { return prod.id === id; }); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        else
            this.carrito.producto.splice(this.carrito.producto.indexOf(producto), 1);
        return producto;
    };
    return carrito;
}());
exports.default = carrito;
