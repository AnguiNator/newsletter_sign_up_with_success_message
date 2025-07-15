const correo = sessionStorage.getItem("email");
const span = document.getElementById("userEmail");
const dismiss = document.getElementById("dismiss");

span.innerText = correo;

dismiss.addEventListener('click', () => {
    window.location.href = "index.html";
});
