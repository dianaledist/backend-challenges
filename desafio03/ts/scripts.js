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
console.log('>> INICIO --> Desafio 3');
function mostrarPalabras(texto, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var textoParrafo, _loop_1, _i, textoParrafo_1, palabra;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    textoParrafo = texto.split(" ");
                    _loop_1 = function (palabra) {
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                        setTimeout(function () {
                                            resolve(console.log(palabra));
                                        }, 1000);
                                    })];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, textoParrafo_1 = textoParrafo;
                    _a.label = 1;
                case 1:
                    if (!(_i < textoParrafo_1.length)) return [3 /*break*/, 4];
                    palabra = textoParrafo_1[_i];
                    return [5 /*yield**/, _loop_1(palabra)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    callback(textoParrafo.length);
                    return [2 /*return*/];
            }
        });
    });
}
function enviarParrafos() {
    return __awaiter(this, void 0, void 0, function () {
        var totalPalabras, contarPalabras;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalPalabras = 0;
                    contarPalabras = function (cantidadPalabras) { totalPalabras += cantidadPalabras; };
                    return [4 /*yield*/, mostrarPalabras("1. Hola persona humana!", contarPalabras)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, mostrarPalabras("2. Estás ingresando a un océano de códigos y bits", contarPalabras)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, mostrarPalabras("3. Que disfrutes mucho tu experiencia en formato 0 y 1", contarPalabras)];
                case 3:
                    _a.sent();
                    console.log("Cantidad de palabras: " + totalPalabras);
                    console.log(">> PROCESO COMPLETO --> Desafio 3");
                    return [2 /*return*/];
            }
        });
    });
}
enviarParrafos();
