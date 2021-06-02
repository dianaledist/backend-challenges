'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _itemRoutes = require('./routes/item.routes.js');

var _itemRoutes2 = _interopRequireDefault(_itemRoutes);

var _index = require('./config/index.js');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_index.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(function (res) {
    return console.log('Conexi\xF3n a mongoose exitosa! \u2728');
}).catch(function (err) {
    return console.log('Error en el servidor!! \u274C ' + err);
});

var app = (0, _express2.default)();
app.use(_express2.default.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render('../views/index.ejs', {
        title: "Desafío Backend 🚀"
    });
});

app.use('/api', (0, _itemRoutes2.default)());

app.get('*', function (req, res) {
    res.render('../views/404.ejs', {
        title: "Error!! ❌"
    });
});

var srv = app.listen(_index.PORT, function () {
    console.log('Servidor http escuchando en el puerto ' + _index.PORT);
});

srv.on("error", function (error) {
    return console.log('Error en servidor ' + error);
});