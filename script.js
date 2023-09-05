const URL = "https://jsonplaceholder.typicode.com/users";

const formulario = document.querySelector("#formulario");


formulario.addEventListener("submit", function(e){
  e.preventDefault();
  const contForm = new FormData(formulario);
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