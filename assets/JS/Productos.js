const productos = [
    { id: 1, nombre: "Elder Ring", precio: 100, imagen: "assets/img/eldenring.jpg" },
    { id: 2, nombre: "Divinity 2", precio: 150, imagen: "assets/img/divinity2.png" },
    { id: 3, nombre: "Battlefield 3", precio: 200, imagen: "assets/img/battlefield.jpg" },
    { id: 4, nombre: "Neon Blood", precio: 200, imagen: "assets/img/NEON_BLOOD.jpg" },
    { id: 5, nombre: "Quake", precio: 200, imagen: "assets/img/QuakeWars.jpg" },
    { id: 6, nombre: "Red Dead Redemption", precio: 200, imagen: "assets/img/RDR.PNG" },
    { id: 7, nombre: "Son of the Forest", precio: 200, imagen: "assets/img/sotf.jpg" },
    { id: 8, nombre: "Terraria", precio: 200, imagen: "assets/img/Terraria.webp" },
    { id: 9, nombre: "finalfantasy.jpg", precio: 200, imagen: "assets/img/finalfantasy.jpg" },
    { id: 10, nombre: "God of War Ragnarok", precio: 200, imagen: "assets/img/GOW.jpg" },
    { id: 11, nombre: "Uncharted", precio: 200, imagen: "assets/img/uncharted.jpg" },
    { id: 12, nombre: "TCG CARD SHOP", precio: 200, imagen: "assets/img/TCG.jpg" },
    { id: 13, nombre: "Palword", precio: 200, imagen: "assets/img/Palworld.jpg" },
    { id: 14, nombre: "Forza Horizon", precio: 200, imagen: "assets/img/Forzahorizon.webp" },
    { id: 15, nombre: "hogwarts", precio: 200, imagen: "assets/img/hogwarts.jpg" },
    { id: 16, nombre: "Quarke Wars", precio: 200, imagen: "assets/img/QuakeWars.jpg" },
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