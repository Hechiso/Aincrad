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
        if (r < 0.6) {
          this.matriz[i][j] = 1; // terreno normal
        } else if (r < 0.75) {
          this.matriz[i][j] = 2; // árbol
        } else if (r < 0.9) {
          this.matriz[i][j] = 3; // roca
        } else {
          this.matriz[i][j] = 4; // agua
        }
      }
    }
//-----------------------------------------------
	this.offsetX = 0;
	this.offsetY = 0;
//-------------------------------------------------
        // Evento de rueda del ratón para cambiar el tamaño
        this.canvas.addEventListener("wheel", (event) => {

		const mouseX = event.offsetX;
		const mouseY = event.offsetY;

		// Escala antigua antes de cambiar tileSize
		const oldTileSize = this.tileSize;

      			if (event.deltaY < 0) {
        		// Rueda hacia arriba → aumentar tamaño
        		this.tileSize = Math.min(this.tileSize + 1, 50);
      			}else{
	      			if(this.tileSize>=8){
        				this.tileSize = Math.max(this.tileSize - 1, 1);
	      			}else{
	      			}
      			}
//--------------------------------------------------------------------------------------------------------
			this.offsetX = mouseX - ((mouseX - this.offsetX) * (this.tileSize / oldTileSize));
			this.offsetY = mouseY - ((mouseY - this.offsetY) * (this.tileSize / oldTileSize));
//--------------------------------------------------------------------------------------------------------
     			 this.dibujarMatriz();
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
    		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpia el canvas antes de dibujar
    			for (let y = 0; y < this.filas; y++) {
      				for (let x = 0; x < this.columnas; x++) {
        				const tile = this.matriz[y][x];
        				const colores = {
          					1: 'green',      // terreno
          					2: 'darkgreen',  // árbol
          					3: 'gray',       // roca
          					4: 'blue'        // agua
        				};

        				const color = colores[tile] || 'brown'; // valor por defecto
        				this.drawTile(x, y, color);

      }
    }
  }
}

// Crear juego
var game = new Game('gameCanvas', canvas.height/8, canvas.width/8);

// Guardar en localStorage
localStorage.setItem("mapa", JSON.stringify(game.matriz));
console.log(localStorage.getItem("mapa"));
console.log(game.tileSize);

