
window.onload = function () {
    // Verifica si el almacenamiento local (localStorage) está disponible
    if (typeof (Storage) !== "undefined") {
        // Verifica si la clave "visitas" existe en el LocalStorage
        if (!localStorage.getItem('visitas')) {
            // Si no existe, inicializa la visita en 0
            localStorage.setItem('visitas', 0);
        }

        // Incrementa la visita
        var visitas = parseInt(localStorage.getItem('visitas')) + 1;
        localStorage.setItem('visitas', visitas);

        // Muestra el número de visitas
        function mostrarVisitas() {
            // Obtiene el elemento con id 'contador' y muestra las visitas
            var contador = document.getElementById('contador');
            if (contador) {
                contador.innerHTML = visitas;
            } else {
                console.log("");
            }
        }

        // Llama a la función para mostrar las visitas
        mostrarVisitas();

    } else {
        console.log("El almacenamiento local no está disponible.");
    }
}


function actualizarContadorGlobal() {
const cartCounter = document.getElementById("cart-counter"); // Referencia al contador en la página
if (cartCounter) {
const carritoGuardado = localStorage.getItem("carrito"); // Obtenemos el carrito guardado
const carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];

// Calculamos el total de productos en el carrito
const totalProductos = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);

// Actualizamos el texto del contador
cartCounter.textContent = totalProductos;

// Ocultamos o mostramos el contador según el número de productos
cartCounter.style.display = totalProductos > 0 ? "inline" : "none";
}
}

// Llamar a la función al cargar la página
actualizarContadorGlobal();