class Organismo {
  constructor(nombre) {
    this.nombre = nombre;
    this.velocidad = this.aleatorio(1, 10);
    this.experiencia = 0;
    this.hambre = this.aleatorio(0, 100);
    this.posicion = {
      x: this.aleatorio(0, mapaAncho), // mapaAncho debe estar definido en tu juego
      y: this.aleatorio(0, mapaAlto)
    };
    this.fuerza = this.aleatorio(1, 20);
    this.nivel = 1;
    this.salud = this.aleatorio(50, 100);
    this.tipo = this.tipoAleatorio();
  }

  aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  tipoAleatorio() {
    const tipos = ['herbívoro', 'carnívoro', 'omnívoro'];
    return tipos[Math.floor(Math.random() * tipos.length)];
  }
}

