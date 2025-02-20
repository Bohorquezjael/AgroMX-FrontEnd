
function guardarUsuario(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const userData = {
    usuario: document.getElementById("usuario").value,
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellidos").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    contraseña: document.getElementById("contraseña").value,

  };


  // Convertir el objeto en formato JSON
  const userDataJSON = JSON.stringify(userData);

  // Almacenar el objeto en el localStorage
  localStorage.setItem("userData", userDataJSON);

  console.log("Usuario nuevo registrado:", userData);

  // Mostrar mensaje de éxito
  document.getElementById("successMessage").style.display = "block";
}

// Asociar la función al evento submit del formulario
document.getElementById("contactForm").addEventListener("submit", guardarUsuario);

