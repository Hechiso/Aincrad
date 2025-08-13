// Recuperar el mapa aunque se cierre y reabra el navegador
const mapaGuardado = JSON.parse(localStorage.getItem("mapa"));
console.log(mapaGuardado);


    // Esperar a que la página cargue
    document.addEventListener("DOMContentLoaded", () => {
      // Buscar el botón
      const btn = document.getElementById("btnCargar");

      // Asignar el evento click
      btn.addEventListener("click", () => {
        if (typeof game !== "undefined" && typeof game.dibujarMatriz === "function") {
          game.dibujarMatriz();
        } else {
          console.error("El objeto 'game' o el método 'dibujarMatriz' no está definido");
        }
      });
    });
