// Boton Hamburguesa del Navbar

const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

// Evento para Boton Hamburguesa de Navbar Movile

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado')
    barras.forEach(elemento => {
        elemento.classList.toggle('animado')
    })
})

// Funcion asincrona para traer los elementos del JSON y mostrar los productos

async function obtenerProductos() {
    return (await fetch('productos.json')).json();
}

// Carrito de compras

let btnCarrito = document.getElementById("btnCarrito");
let seccionCarrito = document.getElementById("seccionCarrito");

let carrito = [];

btnCarrito.addEventListener('click', () => {
    seccionCarrito.classList.toggle("active")
})

//Lista de Productos y filtros

let listaDeProductos = document.getElementById("listaDeProductos");
// let listaDeProductos = document.getElementById("listaDeProductos");
// let listaDeProductos = document.getElementById("listaDeProductos");
// let listaDeProductos = document.getElementById("listaDeProductos");
// let listaDeProductos = document.getElementById("listaDeProductos");

let todosLosProductos = document.querySelector(".todosLosProductos")
let teclados = document.querySelector(".teclados")
let mouse = document.querySelector(".mouse")
let auriculares = document.querySelector(".auriculares")
let monitores = document.querySelector(".monitores")

obtenerProductos().then(productos => {
    productos.forEach((producto) => {
        listaDeProductos.innerHTML += `
            <div class="card bg-secondary producto" style="max-width: 20rem;">
                <img src="./img/${producto.img}" class="card-img-top" alt=${producto.nombre}></img>
                <div class="nombre card-header titulo-producto" id="nombre">${producto.nombre}</div>
                <div class="card-body">
                    <h4 class="card-title">${producto.marca}</h4>
                    <p class="precio card-text" id="precio">Precio: $<span id="span">${producto.precio}</span></p>
                    <p class="card-text">Stock: <span>${producto.stock}</span></p>
                    <button class="btn btn-primary btnAgregar" data-id="${producto.id}">Comprar</button>
                </div>
            </div>
        `
    })

    teclados.addEventListener('click', () => {
        let arrayFiltrado = productos.filter(producto => producto.articulo === "Teclado")
        arrayFiltrado.forEach((elemento) => {
            listaDeProductos.innerHTML = `
                <div class="card bg-secondary producto" style="max-width: 20rem;">
                    <img src="./img/${elemento.img}" class="card-img-top" alt=${elemento.nombre}></img>
                    <div class="nombre card-header titulo-producto" id="nombre">${elemento.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <p class="precio card-text" id="precio">Precio: $<span id="span">${elemento.precio}</span></p>
                        <p class="card-text">Stock: <span>${elemento.stock}</span></p>
                        <button class="btn btn-primary btnAgregar" data-id="${elemento.id}">Comprar</button>
                    </div>
                </div>
        `
        })
    })

    let btnAgregar = document.querySelectorAll(".btnAgregar");
    
    btnAgregar.forEach((e) => {
        e.addEventListener('click', (e) => {
            let cardProducto = e.target.parentElement.parentElement;
            sumarCarrito(cardProducto);
        })
    })
})






const sumarCarrito = (cardProducto) => {
    let producto = {
        nombre: cardProducto.querySelector(".nombre").textContent,
        precio: Number(cardProducto.querySelector(".precio span").textContent),
        cantidad: 1,
        img: cardProducto.querySelector("img").src,
        id: Number(cardProducto.querySelector("button").getAttribute("data-id"))
    }

    let productoEncontrado = carrito.find((elemento) => elemento.id === producto.id)

    if (productoEncontrado) {
        productoEncontrado.cantidad++
    } else {
        carrito.push(producto)
    }

    mostrarCarrito()
};

const mostrarCarrito = () => {
    seccionCarrito.innerHTML = ""
    carrito.forEach(producto => {
        let {imagen, nombre, precio, cantidad, id} = producto;
        seccionCarrito.innerHTML += `
            <div class="card bg-secondary producto" style="max-width: 10rem;">
                <img src="${imagen}" class="card-img-top" alt=${nombre}></img>
                <div class="nombre card-header titulo-producto" id="nombre">${nombre}</div>
                <div class="card-body">
                    <p class="card-text">Cantidad: ${cantidad}</p>
                    <p class="precio card-text" id="precio">Precio: $${precio}</p>
                    <p class="card-text">Subtotal: $${precio * cantidad}</p>
                    <button class="btn btn-primary btnRestar" data-id="${id}">-</button>
                    <button class="btn btn-primary btnBorrar" data-id="${id}">Borrar</button>
                </div>
            </div>
        `
    })
/*
    let btnRestar = document.querySelector(".btnRestar");
    let btnBorrar = document.querySelector(".btnBorrar");

    btnRestar.addEventListener('click', (e) => {
        restarProducto(e.target.getAttribute("data-id"))
    })

    btnBorrar.addEventListener('click', (e) => {
        borrarProducto(e.target.getAttribute("data-id"))
    })*/
}
/*
const restarProducto = (productoRestar) => {
    let productoEncontrado = carrito.find(elemento => elemento.id === Number(productoRestar))
    if (productoEncontrado) {
        productoEncontrado.cantidad--
        if (productoEncontrado.cantidad === 0) {
            productoEncontrado.cantidad = 1
        }
    }
}
*/

const botonesCarrito = (e) => {
    e.preventDefault()
    carrito.addEventListener("click", (e) => {
        if (e.target.classList.contains("btnRestar")) {
            console.log("restar");
        }
        if (e.target.classList.contains("btnBorrar")) {
            console.log("borrar");
        }
    })
}

botonesCarrito()

// Registro de usuarios

class User {
    constructor(user, email, password) {
        this.user = user;
        this.email = email;
        this.password = password;
    }

    loguearse() {
        console.log(`${this.user} se logueo correctamente`)
    }
}

let arrayUsuarios = []

if (localStorage.getItem('usuarios')) {
    arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
}

let formulario = document.getElementById("formulario")

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = document.getElementById("idUser").value
    let email = document.getElementById("idEmail").value
    let password = document.getElementById("idPassword").value

    if (!arrayUsuarios.some(usuarioEnArray => usuarioEnArray.email == email || usuarioEnArray.user == user)) {
        const usuarioLogueado = new User(user, email, password)
        arrayUsuarios.push(usuarioLogueado)
        usuarioLogueado.loguearse()
        localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
        formulario.reset()
    } else {
        console.log("Este usuario ya fue registrado.")
    }
})
