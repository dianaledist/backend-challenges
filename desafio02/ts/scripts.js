"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
console.log(">> INICIO --> Desafio 2");
;
var operacion = function (num1, num2, eleccion) {
    return new Promise(function (resolve, reject) {
        Promise.resolve().then(function () { return require("./calculos"); }).then(function (Calculo) {
            var operacionCalculo = new Calculo["default"](num1, num2, eleccion);
            resolve(operacionCalculo.resultado(num1, num2, eleccion));
        })["catch"](console.error);
    });
};
function operaciones(opers) {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, _i, opers_1, datos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function (datos) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (setTimeout(function () {
                                        operacion(datos.num1, datos.num2, datos.eleccion);
                                    }, 1000))];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, opers_1 = opers;
                    _a.label = 1;
                case 1:
                    if (!(_i < opers_1.length)) return [3 /*break*/, 4];
                    datos = opers_1[_i];
                    return [5 /*yield**/, _loop_1(datos)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function ingresoDatos() {
    return __awaiter(this, void 0, void 0, function () {
        var lote1, lote2, lote3, lote4, lotesDePrueba;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lote1 = {
                        num1: 10,
                        num2: 20,
                        eleccion: "sumar"
                    };
                    lote2 = {
                        num1: 30,
                        num2: 20,
                        eleccion: "restar"
                    };
                    lote3 = {
                        num1: 50,
                        num2: 10,
                        eleccion: "multiplicar"
                    };
                    lote4 = {
                        num1: 50,
                        num2: 10,
                        eleccion: "alguna"
                    };
                    lotesDePrueba = [lote1, lote2, lote3, lote4];
                    return [4 /*yield*/, operaciones(lotesDePrueba)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
ingresoDatos();
