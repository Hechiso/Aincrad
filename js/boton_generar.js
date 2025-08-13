    // Esperar a que la página cargue
    document.addEventListener("DOMContentLoaded", () => {
      // Buscar el botón
      const btn = document.getElementById("btnGenerarMapa");

      // Asignar el evento click
      btn.addEventListener("click", () => {
        if (typeof game !== "undefined" && typeof game.dibujarMatriz === "function") {
          game.dibujarMatriz();
        } else {
          console.error("El objeto 'game' o el método 'dibujarMatriz' no está definido");
        }
      });
    });

