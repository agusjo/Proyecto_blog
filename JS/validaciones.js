//validación nombre
const campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("input", () => {
  campoNombre.setCustomValidity("");
  campoNombre.checkValidity();
  console.log(campoNombre.checkValidity());
});

campoNombre.addEventListener("invalid", () => {
  campoNombre.setCustomValidity("Por favor, ingrese su nombre.");
});


//validación mail
const campoMail = document.getElementById("mail");

campoMail.addEventListener("input", () => {
  campoMail.setCustomValidity("");
  campoMail.checkValidity();
  console.log(campoMail.checkValidity());
});

campoMail.addEventListener("invalid", () => {
  campoMail.setCustomValidity("Por favor, ingrese una dirección válida.");
});