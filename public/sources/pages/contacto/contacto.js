
document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  });

  document.getElementById("confirm-password").addEventListener("click", function () {
    const confirmPasswordField = document.getElementById("contraseña");
    confirmPasswordField.type = confirmPasswordField.type === "password" ? "text" : "password";
  });


  const form = document.getElementById("contactForm");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("contraseña");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    // Verificar si las contraseñas coinciden
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.setCustomValidity("Las contraseñas no coinciden");
    } else {
      confirmPasswordField.setCustomValidity("");
    }


    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    } else {
      event.preventDefault();
      successMessage.style.display = "block";
      setTimeout(() => successMessage.style.display = "none", 3000);
      setTimeout(() => form.reset(), 500);
    }
  });

  confirmPasswordField.addEventListener("input", function () {
    this.setCustomValidity("");
  });
});
