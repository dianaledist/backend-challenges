const http = require('http')
const app = http.createServer(managePetitions)
const PORT = 8080


const showPetitions = () => {
    const id= getId()
    const title=getTitle()
    const price=getPrice()
    const thumbnail=getThumbnail()
     
    const informacion = {
        id,
        title,
        price,
        thumbnail,
    }
    return JSON.stringify(informacion)
}

function getId() {
    return parseInt(Math.random() * 10) + 1
}

function getTitle() {
    return `Producto ${parseInt(Math.random() * 10) + 1}`
}

function getPrice() {
    return `$${((Math.random() * 9999.99) + 1).toFixed(2)}`
}

function getThumbnail() {
    return `Foto ${parseInt(Math.random() * 10) + 1}`
}

function managePetitions(req, res) {
    res.end(`<div style="background: rgb(233, 153, 206);"><h1 style="text-align: center;">Desafio 5</h1>
    <h2 style="text-align: center;">Diana Di Stefano - Backend Coderhouse</h2></div>

    <p>Consigna</p>
    <ul>
    <li>Desarrollar un servidor en node.js que con cada requerimiento devuelva como resultado un objeto con las siguientes caracteristicas:</li>
    <li>{id: (numero aleatorio entre 1 y 10),
    title: "Producto " + (numero aleatorio entre 1 y 10),
    price: (numero aleatorio entre 0.00 y 9999.99),
    thumbnail: "Foto " + (numero aleatorio entre 1 y 10)}</li>
    <li>Dicho servidor se aloja en glitch.com</li>
    </ul>
    <p><u><strong>Refresh for a new request: </strong></u></p> <h3>${showPetitions()}</h3>`)
}

const server = app.listen(PORT, () => {
    console.log(`Servidor Http conectado al puerto ${server.address().port}`)
})