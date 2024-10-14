document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Simulación de registro
    document.getElementById("registerMessage").innerText = "¡Registro exitoso! Bienvenido, " + newUsername + ".";
    document.getElementById("registerMessage").style.color = "green";

    // Limpiar el formulario
    document.getElementById("registerForm").reset();
});