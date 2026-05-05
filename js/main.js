// CAPTURAR ELEMENTOS DOM
const formularioThais = document.querySelector('#formularioThais')


//VARIABLES Y EVENTO
formularioThais.addEventListener("submit", function (event) {
    let valido = true;


    const nombre = formularioThais.elements["nombre"];
    const apellidos = formularioThais.elements["apellidos"];
    const edad = formularioThais.elements["edad"];
    const sexo = formularioThais.elements["sexo"];
    const email = formularioThais.elements["email"];
    const tel = formularioThais.elements["tel"];


    if (nombre.value.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        valido = false;
    }

    if (apellidos.value.length < 5) {
        alert("El apellido debe tener al menos 5 caracteres.");
        valido = false;
    }

    if (edad.value < 18) {
        alert("Debes tener al menos 18 años.");
        valido = false;
    }

    if (email.value === "") {
        event.preventDefault();
        alert("Por favor, ingresa un email válido.");
        valido = false;
    }
 
    if (tel.value.length < 9) {
        alert("El teléfono debe tener al menos 9 caracteres.");
        valido = false;
    }

    if (!valido) {
        event.preventDefault();
    }
});
