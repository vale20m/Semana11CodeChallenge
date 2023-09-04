const URL = "https://jsonplaceholder.typicode.com/users";

const formulario = document.querySelector("#formulario");
const enviar = document.querySelector("#enviar");
const resultado = document.querySelector("#resultado");

enviar.addEventListener("click", function(e){
    e.preventDefault;
    const contForm = new FormData(formulario);
    for (const [key, value] of contForm) {
        resultado.innerHTML += `<br>${key}: ${value}`;
    }
    fetch("https://jsonplaceholder.typicode.com/users", {
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