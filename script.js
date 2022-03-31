const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado')
    barras.forEach(elemento => {
        elemento.classList.toggle('animado')
    })
})

let listaDeProductos = document.getElementById("listaDeProductos");

async function obtenerProductos() {
    const response = await fetch('productos.json')
    return await response.json()
}

obtenerProductos().then(productos => {
    productos.forEach((producto) => {
        listaDeProductos.innerHTML += `
            <div class="card bg-secondary producto" style="max-width: 20rem;">
                <img src="./img/${producto.img}" class="card-img-top" alt=${producto.nombre}>
                <div class="card-header">${producto.nombre}</div>
                <div class="card-body">
                    <h4 class="card-title">${producto.marca}</h4>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                    <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                </div>
            </div>
        `
    })
})