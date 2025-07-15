const inputEmail = document.getElementById("inputMail");
const button = document.getElementById("button");
const errorMessage = document.getElementById("error-message");



function validateEmail(correo) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}


function handleSubmit(event) {
    event.preventDefault(); // No actualiza la pagina al dar clic en submit

    const data = Object.fromEntries(new FormData(event.target)); // Crea un objeto cuyos atributos son clave valor

    if (!validateEmail(data.email)) { //Valida es el dato es un correo 
        inputEmail.classList.add("error"); // si no es correo agrega la clase de error y modifica el input
        errorMessage.classList.remove('invisible');
    } else {
        sessionStorage.setItem("email", data.email)
        window.location.href = "success.html";
    }
}

form.addEventListener('submit', handleSubmit);

