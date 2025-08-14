// Recuperar el mapa guardado (incluye organismos si los hay)
const mapaGuardado = JSON.parse(localStorage.getItem("mapa"));

// Esperar a que la página cargue
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCargar");

  btn.addEventListener("click", () => {
    if (typeof game !== "undefined" && typeof game.dibujarMatriz === "function") {
      
      // Restaurar la matriz guardada
      if (Array.isArray(mapaGuardado)) {
        game.matriz = mapaGuardado;
      } else {
        console.warn("No hay mapa válido en localStorage");
      }

      // Dibujar la matriz (ya incluye organismos)
      game.dibujarMatriz();

    } else {
      console.error("El objeto 'game' o el método 'dibujarMatriz' no está definido");
    }
  });
});

