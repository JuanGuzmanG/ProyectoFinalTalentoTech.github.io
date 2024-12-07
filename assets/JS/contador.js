
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
                contador.innerHTML = "Visitas: " + visitas;
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
