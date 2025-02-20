document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    // Selección de los campos
    const usuario = document.getElementById('usuario');
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmarContraseña = document.getElementById('contraseña');
    const termsCheckbox = document.getElementById('termsCheckbox');

    const usuarioError = document.getElementById('usuarioError');
    const nombreError = document.getElementById('nombreError');
    const apellidoError = document.getElementById('apellidoError');
    const correoError = document.getElementById('correoError');
    const contraseñaError = document.getElementById('contraseñaError');
    const confirmaContraseñaError = document.getElementById('confirmaContraseñaError');

    // Función para mostrar el mensaje de error
    function showError(element, messageElement) {
        messageElement.style.display = 'block';
        element.classList.add('is-invalid');
    }

    // Función para ocultar el mensaje de error
    function hideError(element, messageElement) {
        messageElement.style.display = 'none';
        element.classList.remove('is-invalid');
    }

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    // Alternar la visibilidad de la contraseña al hacer clic en el ojo
    const togglePassword = document.getElementById('toggle-password');
    const confirmPassword = document.getElementById('confirm-password');

    togglePassword.addEventListener('click', function () {
        // Alternar el tipo de input para la contraseña
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    });

    confirmPassword.addEventListener('click', function () {
        // Alternar el tipo de input para confirmar la contraseña
        if (confirmarContraseña.type === 'password') {
            confirmarContraseña.type = 'text';
        } else {
            confirmarContraseña.type = 'password';
        }
    });

    // Validación del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        // Validar campos vacíos
        if (!usuario.value.trim()) {
            showError(usuario, usuarioError);
            isValid = false;
        } else {
            hideError(usuario, usuarioError);
        }

        if (!nombre.value.trim()) {
            showError(nombre, nombreError);
            isValid = false;
        } else {
            hideError(nombre, nombreError);
        }

        if (!apellidos.value.trim()) {
            showError(apellidos, apellidoError);
            isValid = false;
        } else {
            hideError(apellidos, apellidoError);
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            showError(email, correoError);
            isValid = false;
        } else {
            hideError(email, correoError);
        }

        if (!password.value.trim()) {
            showError(password, contraseñaError);
            isValid = false;
        } else {
            hideError(password, contraseñaError);
        }

        // Validar que las contraseñas coincidan
        if (password.value !== confirmarContraseña.value) {
            showError(confirmarContraseña, confirmaContraseñaError);
            isValid = false;
        } else {
            hideError(confirmarContraseña, confirmaContraseñaError);
        }

        // Validar términos y condiciones
        if (!termsCheckbox.checked) {
            alert("Debes aceptar los términos y condiciones.");
            isValid = false;
        }

        // Si todo es correcto, mostrar mensaje de éxito
        if (isValid) {
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.reset();  // Opcional: limpiar el formulario
            }, 3000); // Mostrar el mensaje durante 3 segundos
        }
    });
});
