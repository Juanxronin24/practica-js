document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de verificación de credenciales
    const validUsername = "usuario";
    const validPassword = "contraseña";

    if (username === validUsername && password === validPassword) {
        document.getElementById("responseMessage").innerText = "¡Inicio de sesión exitoso!";
        document.getElementById("responseMessage").style.color = "green";
    } else {
        document.getElementById("responseMessage").innerText = "Nombre de usuario o contraseña incorrectos.";
        document.getElementById("responseMessage").style.color = "red";
    }

    // Limpiar el formulario
    document.getElementById("loginForm").reset();
});

// Manejo del clic en el botón de registro
document.getElementById("registerButton").addEventListener("click", function() {
    // Aquí puedes redirigir a una página de registro o mostrar un mensaje
    alert("Esta funcionalidad aún no está implementada.");
});

// Manejo del clic en el botón de registro
document.getElementById("registerButton").addEventListener("click", function() {
    // Redirigir a la página de registro
    window.location.href = "register.html";
});

