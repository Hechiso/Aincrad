
function crearOrganismo(nombre) {

    // Recuperar lista de organismos existentes
    let listaOrganismos = JSON.parse(localStorage.getItem("organismos")) || [];


	const organismo = new Organismo(nombre);
  listaOrganismos.push(organismo);
  console.log('Nuevo organismo creado:', organismo);
  
    // Guardar en localStorage
    localStorage.setItem("organismos", JSON.stringify(listaOrganismos));

console.log("Organismos guardados:", listaOrganismos);

}

