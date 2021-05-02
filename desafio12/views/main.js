const socket = io.connect();
const tabla = document.getElementById('products');
const form = document.getElementById('form');
const title = document.getElementById('title');
const price = document.getElementById('price');
const thumbnail = document.getElementById('thumbnail');

socket.on('products', data => {
    // console.log(data);
    render(data);
});


function render(data) {
    const html = data.map((producto, index) => {
        const item = document.createElement('tr');
        return(`<tr><td>${producto.title} </td>` +
        `<td>${producto.price}</td>` +
        `<td><img src="${producto.thumbnail}" alt="${producto.title}" style="max-width:90px;"></td>`+`<td>${producto.socketid}</td></tr>`)
    }).join(" ");
    document.getElementById('products').innerHTML = html;
}

function addProduct(e) {
    const prod = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        thumbnail: document.getElementById('thumbnail').value,
    };

socket.emit('new-product', prod);

document.getElementById('title').value = '';
document.getElementById('price').value = '';
document.getElementById('thumbnail').value = '';

return false;

}