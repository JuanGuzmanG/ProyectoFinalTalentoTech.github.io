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

// Contenedor de las tarjetas
const cardsContainer = document.querySelector(".cards");

// Renderizar productos (puede recibir un conjunto filtrado de productos)
function renderizarProductos(listaProductos = productos) {
  cardsContainer.innerHTML = ""; // Limpiar el contenedor

  listaProductos.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card", "p-3");

      card.innerHTML = `
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button class="btn btn-primary" data-id="${producto.id}"><a style="text-decoration: none; color: #ffff;" href="Compras.html">Comprar</a></button>
          </div>
      `;

      cardsContainer.appendChild(card);
  });
}

// Capturar checkboxes y filtrar productos
const filtros = document.querySelectorAll(".form-check-input");

function filtrarProductos() {
  const categoriasSeleccionadas = Array.from(filtros)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

  const productosFiltrados = categoriasSeleccionadas.length > 0
      ? productos.filter(producto => categoriasSeleccionadas.includes(producto.categoria))
      : productos;

  renderizarProductos(productosFiltrados);
}

// Asignar eventos de cambio a los checkboxes
filtros.forEach(checkbox => {
  checkbox.addEventListener("change", filtrarProductos);
});

// Renderizar todos los productos al cargar la página
renderizarProductos();
