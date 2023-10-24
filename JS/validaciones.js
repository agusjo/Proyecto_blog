//validaciones con Constraint Validation API

//validación nombre
const campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("input", () => {
    campoNombre.setCustomValidity("");
    campoNombre.checkValidity();
    console.log(campoNombre.checkValidity());
});

campoNombre.addEventListener("invalid", () => {
    campoNombre.setCustomValidity("Por favor, ingrese su nombre");
});


//validación mail
const campoMail = document.getElementById("mail");

campoMail.addEventListener("input", () => {
    campoMail.setCustomValidity("");
    campoMail.checkValidity();
    console.log(campoMail.checkValidity());
});

campoMail.addEventListener("invalid", () => {
    campoMail.setCustomValidity("Por favor, ingrese una dirección válida");
});


//validación campo de texto
const campoTexto = document.getElementById("comentario");

campoTexto.addEventListener("input", () => {
    campoTexto.setCustomValidity("");
    campoTexto.checkValidity();
    console.log(campoTexto.checkValidity());
});

campoTexto.addEventListener("invalid", () => {
    campoTexto.setCustomValidity("Por favor, ingrese algún comentario");
});





//enviado del formulario con API formspree
const forms = document.querySelector("form")

const url = "https://formspree.io/f/xrgwjlyw"; //link de API (manda mail con comentario a agusjo13)

forms.addEventListener("submit", handlesubmit)

async function handlesubmit(event){
    event.preventDefault() //cancela evento 
    const form = new FormData(this) //Objeto que me guarda info del comentario (nombre, mail, etc) 
    const response = await fetch (url, {
        method: this.method,
        body: form,
        headers: {'Accept': 'application/json'}
    })
    this.reset()
    alert('Comentario enviado con éxito')    
}
