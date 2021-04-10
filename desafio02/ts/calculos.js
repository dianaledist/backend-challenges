"use strict";
exports.__esModule = true;
var Calculo = /** @class */ (function () {
    function Calculo(num1, num2, eleccion) {
        this.num1 = num1;
        this.num2 = num2;
        this.eleccion = eleccion;
    }
    Calculo.prototype.resultado = function (num1, num2, eleccion) {
        switch (eleccion) {
            case 'sumar':
                var sumar = function (num1, num2) { return num1 + num2; };
                console.log("La suma de los valores " + num1 + " y " + num2 + " es " + sumar(num1, num2));
                break;
            case 'restar':
                var restar = function (num1, num2) { return num1 - num2; };
                console.log("La resta de los valores " + num1 + " y " + num2 + " es " + restar(num1, num2));
                break;
            case 'multiplicar':
                var multiplicar = function (num1, num2) { return num1 * num2; };
                console.log("La multiplicaci\u00F3n de los valores " + num1 + " y " + num2 + " es " + multiplicar(num1, num2));
                break;
            default:
                console.log("Invalid operation: " + eleccion);
                break;
        }
    };
    return Calculo;
}());
exports["default"] = Calculo;
