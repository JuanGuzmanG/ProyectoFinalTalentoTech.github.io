// Datos de ejemplo
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

let carrito = [];

const cardsContainer = document.querySelector(".cards");
const carritoDOM = document.getElementById("carrito");
const totalDOM = document.getElementById("total");
const botonVaciar = document.getElementById("boton-vaciar");
const cartCounter = document.getElementById("cart-counter"); // Referencia al contador

function renderizarProductos() {
  productos.forEach((producto) => {
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

function agregarProducto(event) {
  const idProducto = parseInt(event.target.dataset.id);
  const producto = productos.find((prod) => prod.id === idProducto);
  const productoExistente = carrito.find((prod) => prod.id === idProducto);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
  actualizarContadorCarrito(); // Actualizamos el contador
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

  actualizarCarrito();
  actualizarContadorCarrito(); // Actualizamos el contador después de eliminar un producto
}

botonVaciar.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  actualizarContadorCarrito(); // Reseteamos el contador al vaciar el carrito
});

function actualizarContadorCarrito() {
  const totalProductos = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
  cartCounter.textContent = totalProductos; // Actualiza el número de productos en el carrito
  cartCounter.style.display = totalProductos > 0 ? "inline" : "none"; // Ocultar si está vacío
}

renderizarProductos();
