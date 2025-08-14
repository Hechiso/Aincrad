// mover en un tick
function moverOrganismo(org, filas, columnas) {
    // Genera un desplazamiento aleatorio: -1, 0, 1
    const dx = Math.floor(Math.random() * 3) - 1;
    const dy = Math.floor(Math.random() * 3) - 1;

    let nuevaX = org.posicion.x + dx;
    let nuevaY = org.posicion.y + dy;

    // Limitar a los bordes de la matriz
    nuevaX = Math.max(0, Math.min(columnas - 1, nuevaX));
    nuevaY = Math.max(0, Math.min(filas - 1, nuevaY));

    org.posicion.x = nuevaX;
    org.posicion.y = nuevaY;
}

