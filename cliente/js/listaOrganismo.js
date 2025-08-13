const listaOrganismos = [];

function crearOrganismo(nombre) {
  const organismo = new Organismo(nombre);
  listaOrganismos.push(organismo);
  console.log('Nuevo organismo creado:', organismo);
  
  // Aquí puedes actualizar la UI o guardar en localStorage
}

