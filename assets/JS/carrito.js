// Datos de ejemplo (puedes obtenerlos desde un servidor o archivo JSON)
const productos = [
    { id: 1, nombre: "Elder Ring", precio: 100, imagen: "assets/img/eldenring.jpg" },
    { id: 2, nombre: "Divinity 2", precio: 150, imagen: "assets/img/divinity2.png" },
    { id: 3, nombre: "Battlefield 3", precio: 200, imagen: "assets/img/battlefield.jpg" },
    { id: 4, nombre: "Neon Blood", precio: 200, imagen: "assets/img/NEON_BLOOD.jpg" },
    { id: 5, nombre: "Quake", precio: 200, imagen: "assets/img/QuakeWars.jpg" },
    { id: 6, nombre: "Red Dead Redemption", precio: 200, imagen: "assets/img/RDR.PNG" },
    { id: 7, nombre: "Son of the Forest", precio: 200, imagen: "assets/img/sotf.jpg" },
    { id: 8, nombre: "Terraria", precio: 200, imagen: "assets/img/Terraria.webp" },
  ];
  
  
  // Carrito de compras
  let carrito = [];
  
  // Referencias al DOM
  const cardsContainer = document.querySelector(".cards");
const carritoDOM = document.getElementById("carrito");
const totalDOM = document.getElementById("total");
const botonVaciar = document.getElementById("boton-vaciar");

// Renderizar productos en .cards
function renderizarProductos() {
  productos.forEach((producto) => {
    // Crear tarjeta
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

    // Agregar tarjeta al contenedor
    cardsContainer.appendChild(card);
  });

  // Añadir eventos de clic a los botones de "Agregar al carrito"
  document.querySelectorAll(".btn-primary").forEach((boton) =>
    boton.addEventListener("click", agregarProducto)
  );
}

// Agregar producto al carrito
function agregarProducto(event) {
  const idProducto = parseInt(event.target.dataset.id);
  const producto = productos.find((prod) => prod.id === idProducto);

  carrito.push(producto);
  actualizarCarrito();
}

// Actualizar carrito en el DOM
function actualizarCarrito() {
  // Limpiar el carrito antes de redibujarlo
  carritoDOM.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "align-items-center");

    li.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail" style="width: 50px; margin-right: 10px;" />
      <div>
        <div style="flex-grow: 1; width: 70px">
        ${producto.nombre} - $${producto.precio}
        </div>
        <button style="margin-left: 10px" class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
      </div>
    `;
    carritoDOM.appendChild(li);

    // Evento para eliminar productos
    li.querySelector(".btn-danger").addEventListener("click", eliminarProducto);
  });

  // Actualizar el total
  const total = carrito.reduce((sum, prod) => sum + prod.precio, 0);
  totalDOM.textContent = total;
}

// Eliminar producto del carrito
function eliminarProducto(event) {
  const index = parseInt(event.target.dataset.index);
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Vaciar el carrito
botonVaciar.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

// Inicializar
renderizarProductos();
  