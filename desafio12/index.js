const PORT=8080;
const express=require('express')
const app = express();
const path=require('path')
const router = express.Router();
const server = require('http').Server(app)
const io = require('socket.io')(server)


let PRODUCTS_DB = [];
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.get("/api/productos/vista", (req, res) => {
    res.render('datosform.ejs', { 
        title: "Datos de productos",
        data: PRODUCTS_DB,
        existe: PRODUCTS_DB.length!==0
       });
});

io.on('connection', (socket) => {
    socket.on('products', (producto) => {
      socket.emit('products', producto);
      newProducto = {
          title: producto.title,
          price: producto.price, 
          thumbnail: producto.thumbnail,
          id: PRODUCTS_DB.length + 1,
          socketid: socket.id
      };
      PRODUCTS_DB.push(newProducto)
      console.log(PRODUCTS_DB);
      socket.emit('products', PRODUCTS_DB);
    });

    socket.on('new-product', data => {
        newProducto = {
            title: data.title,
            price: data.price, 
            thumbnail: data.thumbnail,
            id: PRODUCTS_DB.length + 1,
            socketid: socket.id
        };
        PRODUCTS_DB.push(newProducto)
        io.sockets.emit('products', PRODUCTS_DB)
    })
})


app.use(express.static('public'))


app.get('*', (req, res) =>{
    res.sendFile(path.resolve('public/404.html'));
});



const srv = server.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

srv.on("error", error => console.log(`Error en servidor ${error}`))
