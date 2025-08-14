class Game {
  constructor(canvasId, filas, columnas, tileSize = 8) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.filas = filas;
    this.columnas = columnas;
    this.tileSize = tileSize;
    this.matriz = [];

    for (let i = 0; i < filas; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < columnas; j++) {
        let r = Math.random();
        if (r < 0.6) this.matriz[i][j] = 1; // terreno normal
        else if (r < 0.75) this.matriz[i][j] = 2; // árbol
        else if (r < 0.9) this.matriz[i][j] = 3; // roca
        else this.matriz[i][j] = 4; // agua
      }
    }

    this.offsetX = 0;
    this.offsetY = 0;

    // --- Variables para arrastre ---
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // Evento de rueda para zoom
    this.canvas.addEventListener("wheel", (event) => {
      event.preventDefault(); // evitar scroll de la página

      const mouseX = event.offsetX;
      const mouseY = event.offsetY;
      const oldTileSize = this.tileSize;

      if (event.deltaY < 0) {
        this.tileSize = Math.min(this.tileSize + 1, 50);
      } else {
        if (this.tileSize >= 8) {
          this.tileSize = Math.max(this.tileSize - 1, 1);
        }
      }

      this.offsetX = mouseX - ((mouseX - this.offsetX) * (this.tileSize / oldTileSize));
      this.offsetY = mouseY - ((mouseY - this.offsetY) * (this.tileSize / oldTileSize));
      this.dibujarMatriz();
    });

    // --- Eventos para arrastre ---
    this.canvas.addEventListener("mousedown", (event) => {
      this.isDragging = true;
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    this.canvas.addEventListener("mousemove", (event) => {
      if (this.isDragging) {
        const dx = event.clientX - this.lastMouseX;
        const dy = event.clientY - this.lastMouseY;
        this.offsetX += dx;
        this.offsetY += dy;
        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
        this.dibujarMatriz();
      }
    });
  }

  drawTile(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * this.tileSize + this.offsetX,
      y * this.tileSize + this.offsetY,
      this.tileSize,
      this.tileSize
    );
  }

  dibujarMatriz() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let y = 0; y < this.filas; y++) {
      for (let x = 0; x < this.columnas; x++) {
        const tile = this.matriz[y][x];
        const colores = {
          1: 'green',
          2: 'darkgreen',
          3: 'gray',
          4: 'blue',
	  5: 'red'
        };
        const color = colores[tile] || 'brown';
        this.drawTile(x, y, color);
      }
    }
  }


agregarOrganismo() {
    // Escoge una posición aleatoria
    const x = Math.floor(Math.random() * this.columnas);
    const y = Math.floor(Math.random() * this.filas);

    // Coloca un 5 en esa posición
    this.matriz[y][x] = 5;

    // Guardar la matriz actualizada
    localStorage.setItem("mapa", JSON.stringify(this.matriz));

    // Redibuja para mostrarlo
    this.dibujarMatriz();
}




}

// Crear juego
var game = new Game('gameCanvas', canvas.height / 8, canvas.width / 8);

// Guardar en localStorage

console.log(localStorage.getItem("mapa"));
console.log(game.tileSize);

