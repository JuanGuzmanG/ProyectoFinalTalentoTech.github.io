const productos = [
  { id: 1, nombre: "Elder Ring", precio: 100, categoria: "accion", imagen: "assets/img/eldenring.jpg" },
  { id: 2, nombre: "Divinity 2", precio: 150, categoria: "aventura", imagen: "assets/img/divinity2.png" },
  { id: 3, nombre: "Battlefield 3", precio: 200, categoria: "disparos", imagen: "assets/img/battlefield.jpg" },
  { id: 4, nombre: "Neon Blood", precio: 200, categoria: "accion", imagen: "assets/img/NEON_BLOOD.jpg" },
  { id: 5, nombre: "Quake", precio: 200, categoria: "disparos", imagen: "assets/img/QuakeWars.jpg" },
  { id: 6, nombre: "Red Dead Redemption", precio: 200, categoria: "aventura", imagen: "assets/img/RDR.PNG" },
  { id: 7, nombre: "Son of the Forest", precio: 200, categoria: "rolplay", imagen: "assets/img/sotf.jpg" },
  { id: 8, nombre: "Terraria", precio: 200, categoria: "simulacion", imagen: "assets/img/Terraria.webp" },
];

let carrito = [];

// Referencias del DOM
const cardsContainer = document.querySelector(".cards");
const carritoDOM = document.getElementById("carrito");
const totalDOM = document.getElementById("total");
const botonVaciar = document.getElementById("boton-vaciar");
const cartCounter = document.getElementById("cart-counter");
const filtros = document.querySelectorAll(".form-check-input"); // Checkboxes para filtrar

// Función para cargar el carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
    actualizarContadorCarrito();
  }
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Renderizar productos con opción de filtrado
function renderizarProductos(listaProductos = productos) {
  cardsContainer.innerHTML = "";

  listaProductos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card", "p-3");

    card.innerHTML = `
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <button class="btn btn-primary" data-id="${producto.id}">Agregar</button>
      </div>
    `;

    cardsContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-primary").forEach((boton) =>
    boton.addEventListener("click", agregarProducto)
  );
}

// Filtrar productos según categorías seleccionadas
function filtrarProductos() {
  const categoriasSeleccionadas = Array.from(filtros)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const productosFiltrados = categoriasSeleccionadas.length > 0
    ? productos.filter(producto => categoriasSeleccionadas.includes(producto.categoria))
    : productos;

  renderizarProductos(productosFiltrados);
}

// Agregar evento de cambio a los checkboxes
filtros.forEach(checkbox => {
  checkbox.addEventListener("change", filtrarProductos);
});

// Funciones del carrito (sin cambios significativos)
function agregarProducto(event) {
  const idProducto = parseInt(event.target.dataset.id);
  const producto = productos.find((prod) => prod.id === idProducto);
  const productoExistente = carrito.find((prod) => prod.id === idProducto);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarritoEnLocalStorage();
  actualizarCarrito();
  actualizarContadorCarrito();
}

function actualizarCarrito() {
  carritoDOM.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "align-items-center");

    li.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail" style="width: 50px; margin-right: 10px;" />
      <div>
        <div>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</div>
        <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
      </div>
    `;
    carritoDOM.appendChild(li);

    li.querySelector(".btn-danger").addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((sum, prod) => sum + prod.precio * prod.cantidad, 0);
  totalDOM.textContent = total;
}

function eliminarProducto(event) {
  const index = parseInt(event.target.dataset.index);

  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    carrito.splice(index, 1);
  }

  guardarCarritoEnLocalStorage();
  actualizarCarrito();
  actualizarContadorCarrito();
}

botonVaciar.addEventListener("click", () => {
  carrito = [];
  guardarCarritoEnLocalStorage();
  actualizarCarrito();
  actualizarContadorCarrito();
});

function actualizarContadorCarrito() {
  const totalProductos = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
  cartCounter.textContent = totalProductos;
  cartCounter.style.display = totalProductos > 0 ? "inline" : "none";
}

// Cargar el carrito y renderizar productos al inicio
cargarCarritoDesdeLocalStorage();
renderizarProductos();
