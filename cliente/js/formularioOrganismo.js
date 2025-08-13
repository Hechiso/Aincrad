document.getElementById('btnOrganismo').addEventListener('click', () => {
  const contenedor = document.getElementById('contenedorFormulario');
  
  // Limpiar contenido previo
  contenedor.innerHTML = '';
  
  // Crear formulario
  const form = document.createElement('form');
  form.id = 'formOrganismo';
  
  // Crear input para el nombre
  const inputNombre = document.createElement('input');
  inputNombre.type = 'text';
  inputNombre.name = 'nombre';
  inputNombre.placeholder = 'Nombre del organismo';
  inputNombre.required = true;
  
  // Crear botón de envío
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Guardar';
  
  // Agregar elementos al formulario
  form.appendChild(inputNombre);
  form.appendChild(submitBtn);
  
  // Agregar formulario al contenedor
  contenedor.appendChild(form);
  
form.addEventListener('submit', (e) => {
   e.preventDefault();
  const nombre = inputNombre.value.trim();
  if(nombre) {
    crearOrganismo(nombre);
    game.agregarOrganismo();

    // reemplaza el formulario por un mensaje
    const mensaje = document.createElement('p');
    mensaje.textContent = `Organismo "${nombre}" creado!`;
    form.replaceWith(mensaje);
  }

});



});

