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
var PORT = 8080;
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs').promises;
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* let producto: Producto = {
    title: "",
    price: "",
    thumbnail: "",
    id: 0,
    socketid: ""
} */
var PRODUCTS_DB = [];
var CHAT_DB = [];
app.use('/api', router);
app.get("/api/productos/vista", function (req, res) {
    res.render('../views/layout.ejs', {
        title: "Datos de productos",
        data: PRODUCTS_DB,
        existe: PRODUCTS_DB.length !== 0,
        message: CHAT_DB
    });
});
io.on('connection', function (socket) {
    socket.on('productos', function (producto) {
        io.emit('productos', producto);
        var newProducto = {
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            id: PRODUCTS_DB.length + 1,
            socketid: socket.id
        };
        PRODUCTS_DB.push(newProducto);
        console.log(PRODUCTS_DB);
    });
    socket.on('cliente-mensaje', function (message) { return __awaiter(void 0, void 0, void 0, function () {
        var messageFile, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    io.emit('server-mensaje', message);
                    messageFile = {
                        email: message.email,
                        timestamp: message.timestamp,
                        mensaje: message.mensaje
                    };
                    CHAT_DB.push(messageFile);
                    console.log("Mensajes totales back");
                    console.log(CHAT_DB);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs.writeFile("messages.txt", JSON.stringify(CHAT_DB))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log('Error en la escritura del archivo ❌', err_1.error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
app.use(express.static('public'));
app.get('*', function (req, res) {
    res.sendFile(path.resolve('public/404.html'));
});
var srv = server.listen(PORT, function () {
    console.log("Servidor http escuchando en el puerto " + server.address().port);
});
srv.on("error", function (error) { return console.log("Error en servidor " + error); });
