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
}

renderizarProductos();