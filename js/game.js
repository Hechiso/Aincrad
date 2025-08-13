class Game {

  constructor(canvasId, filas, columnas, tileSize = 1) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.filas = filas;
    this.columnas = columnas;
    this.tileSize = tileSize;

    // Inicializar matriz con 0
    this.matriz = [];
    for (let i = 0; i < filas; i++) {
      this.matriz[i] = new Array(columnas).fill(1);
    }
  }

  drawTile(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
  }

  dibujarMatriz() {
    for (let y = 0; y < this.filas; y++) {
      for (let x = 0; x < this.columnas; x++) {
        const tile = this.matriz[y][x];
        const color = tile === 0 ? 'green' : 'brown'; // ejemplo colores según valor
        this.drawTile(x, y, color);
	      
      }
    }
  }
}



var game = new Game('gameCanvas', canvas.height,canvas.width);
//game.dibujarMatriz();



// Convertir la matriz a JSON y guardarla en localStorage
localStorage.setItem("mapa", JSON.stringify(game.matriz));

console.log(localStorage.getItem("mapa"));

