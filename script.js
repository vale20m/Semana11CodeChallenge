const URL = "https://jsonplaceholder.typicode.com/users";

const formulario = document.querySelector("#formulario");

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fechaNac = document.querySelector("#fechaNac");

let contForm = {
  nombre: null,
  apellido: null,
  fechaNac: null
}

formulario.addEventListener("submit", function(e){
  e.preventDefault();
  contForm.nombre = nombre.value;
  contForm.apellido = apellido.value;
  contForm.fechaNac = fechaNac.value;
  fetch(URL, {
      method: "POST",
      body: JSON.stringify(contForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

});