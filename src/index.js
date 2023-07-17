let formulario = document.querySelectorAll(".texbox");
let validation = document.getElementById("btn-formulario");
let msjAlert = document.querySelectorAll(".notification");

function validarCampo() {
  formulario.forEach((respuesta, i) => {
    addEventListener("change", function () {
      if (respuesta.value.length > 0) {
        formulario[i].classList.add("valid");
        msjAlert[i].textContent = "";
      } else {
        formulario[i].classList.remove("valid");
        msjAlert[i].textContent = "campo obrigatório";
      }
    });
  });
}

validation.addEventListener("click", function () {
  for (let i = 0; i < formulario.length; i++) {
    let validationForm = formulario[i].value;
    if (validationForm.length > 0) {
      formulario[i].classList.add("valid");
      msjAlert[i].textContent = "";
    } else {
      formulario[i].classList.remove("valid");
      msjAlert[i].textContent = "campo obrigatório";
    }
  }
  validarCampo();
});
