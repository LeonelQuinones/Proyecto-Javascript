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

let todosLosProductos = document.querySelector(".todosLosProductos");
let teclados = document.querySelector(".teclados");
let mouse = document.querySelector(".mouse");
let auriculares = document.querySelector(".auriculares");
let monitores = document.querySelector(".monitores");

obtenerProductos().then(productos => {
    productos.forEach((producto) => {
        listaDeProductos.innerHTML += `
            <div class="card bg-secondary producto">
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

    // Filtros

    todosLosProductos.addEventListener('click', () => {
        obtenerProductos().then(productos => {
            let arrayTodos = productos;
            listaDeProductos.innerHTML = ""
            arrayTodos.forEach((elemento) => {
                const cardTodos = document.createElement("div")
                cardTodos.classList.add("card", "bg-secondary", "producto")
                cardTodos.innerHTML = `
                    <img src="./img/${elemento.img}" class="card-img-top" alt=${elemento.nombre}></img>
                    <div class="nombre card-header titulo-producto" id="nombre">${elemento.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <p class="precio card-text" id="precio">Precio: $<span id="span">${elemento.precio}</span></p>
                        <p class="card-text">Stock: <span>${elemento.stock}</span></p>
                        <button class="btn btn-primary btnAgregar" data-id="${elemento.id}">Comprar</button>
                    </div>
                `
                listaDeProductos.appendChild(cardTodos)
            })
        })
    })

    teclados.addEventListener('click', () => {
        obtenerProductos().then(productos => {
            let arrayTeclados = productos.filter(producto => producto.articulo === "Teclado");
            listaDeProductos.innerHTML = ""
            arrayTeclados.forEach((elemento) => {
                const cardTeclado = document.createElement("div")
                cardTeclado.classList.add("card", "bg-secondary", "producto")
                cardTeclado.innerHTML = `
                    <img src="./img/${elemento.img}" class="card-img-top" alt=${elemento.nombre}></img>
                    <div class="nombre card-header titulo-producto" id="nombre">${elemento.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <p class="precio card-text" id="precio">Precio: $<span id="span">${elemento.precio}</span></p>
                        <p class="card-text">Stock: <span>${elemento.stock}</span></p>
                        <button class="btn btn-primary btnAgregar" data-id="${elemento.id}">Comprar</button>
                    </div>
                `
                listaDeProductos.appendChild(cardTeclado)
            })
        })
    })

    mouse.addEventListener('click', () => {
        obtenerProductos().then(productos => {
            let arrayMouse = productos.filter(producto => producto.articulo === "Mouse");
            listaDeProductos.innerHTML = ""
            arrayMouse.forEach((elemento) => {
                const cardMouse = document.createElement("div")
                cardMouse.classList.add("card", "bg-secondary", "producto")
                cardMouse.innerHTML = `
                    <img src="./img/${elemento.img}" class="card-img-top" alt=${elemento.nombre}></img>
                    <div class="nombre card-header titulo-producto" id="nombre">${elemento.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <p class="precio card-text" id="precio">Precio: $<span id="span">${elemento.precio}</span></p>
                        <p class="card-text">Stock: <span>${elemento.stock}</span></p>
                        <button class="btn btn-primary btnAgregar" data-id="${elemento.id}">Comprar</button>
                    </div>
                `
                listaDeProductos.appendChild(cardMouse)
            })
        })
    })

    auriculares.addEventListener('click', () => {
        obtenerProductos().then(productos => {
            let arrayAuriculares = productos.filter(producto => producto.articulo === "Auriculares");
            listaDeProductos.innerHTML = ""
            arrayAuriculares.forEach((elemento) => {
                const cardAuriculares = document.createElement("div")
                cardAuriculares.classList.add("card", "bg-secondary", "producto")
                cardAuriculares.innerHTML = `
                    <img src="./img/${elemento.img}" class="card-img-top" alt=${elemento.nombre}></img>
                    <div class="nombre card-header titulo-producto" id="nombre">${elemento.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <p class="precio card-text" id="precio">Precio: $<span id="span">${elemento.precio}</span></p>
                        <p class="card-text">Stock: <span>${elemento.stock}</span></p>
                        <button class="btn btn-primary btnAgregar" data-id="${elemento.id}">Comprar</button>
                    </div>
                `
                listaDeProductos.appendChild(cardAuriculares)
            })
        })
    })

    monitores.addEventListener('click', () => {
        obtenerProductos().then(productos => {
            let arrayMonitores = productos.filter(producto => producto.articulo === "Monitor");
            listaDeProductos.innerHTML = ""
            arrayMonitores.forEach((elemento) => {
                const cardMonitores = document.createElement("div")
                cardMonitores.classList.add("card", "bg-secondary", "producto")
                cardMonitores.innerHTML = `
                    <img src="./img/${elemento.img}" class="card-img-top" alt=${elemento.nombre}></img>
                    <div class="nombre card-header titulo-producto" id="nombre">${elemento.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <p class="precio card-text" id="precio">Precio: $<span id="span">${elemento.precio}</span></p>
                        <p class="card-text">Stock: <span>${elemento.stock}</span></p>
                        <button class="btn btn-primary btnAgregar" data-id="${elemento.id}">Comprar</button>
                    </div>
                `
                listaDeProductos.appendChild(cardMonitores)
            })
        })
    })

    let btnAgregar = document.querySelectorAll(".btnAgregar");

    let funcionCarrito = () => {
        btnAgregar.forEach((e) => {
            e.addEventListener('click', (e) => {
                let cardProducto = e.target.parentElement.parentElement;
                sumarCarrito(cardProducto);
            })
        })
    }

    funcionCarrito()
})



const sumarCarrito = (cardProducto) => {
    let producto = {
        nombre: cardProducto.querySelector(".nombre").textContent,
        precio: Number(cardProducto.querySelector(".precio span").textContent),
        cantidad: 1,
        id: Number(cardProducto.querySelector("button").getAttribute("data-id"))
    };

    let productoEncontrado = carrito.find((elemento) => elemento.id === producto.id);

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
        let {nombre, precio, cantidad, id} = producto;
        seccionCarrito.innerHTML += `
            <div class="card bg-secondary producto">
                <img src="./img/img-carrito.png" class="card-img-top" alt=${nombre}></img>
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
}


// Productos en Oferta

moment.locale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});

let hoyFecha = moment().format('dddd Do MMMM YYYY')

let botonOfertas = document.getElementById("botonOfertas");
let divOfertas = document.getElementById("divOfertas");
let fechaMoment = document.getElementById("fechaMoment")

botonOfertas.addEventListener('click', () => {
    fechaMoment.innerHTML += `
        <h2 class="fecha">Estas son las ofertas disponibles del día ${hoyFecha}</h2>
    `
    
    obtenerProductos().then(productos => {
        let arrayOfertas = productos.filter(producto => producto.oferta === true);
        arrayOfertas.forEach((elemento) => {
            divOfertas.innerHTML += `
                <div class="card bg-secondary producto">
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
})


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

let arrayUsuarios = [];

if (localStorage.getItem('usuarios')) {
    arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
}

let formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = document.getElementById("idUser").value;
    let email = document.getElementById("idEmail").value;
    let password = document.getElementById("idPassword").value;

    if (!arrayUsuarios.some(usuarioEnArray => usuarioEnArray.email == email || usuarioEnArray.user == user)) {
        const usuarioLogueado = new User(user, email, password)
        arrayUsuarios.push(usuarioLogueado)
        usuarioLogueado.loguearse()
        localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
        swal({
            title: "Usuario logueado correctamente",
            icon: "success",
            timer: 3000,
        })
        formulario.reset()
    } else {
        swal({
            title: "Error! Usuario ya registrado",
            icon: "error",
            timer: 3000,
        })
    }
})

