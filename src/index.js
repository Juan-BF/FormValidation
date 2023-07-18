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





// ja de tanto fazer este codigo investigando poco, practicando para entender consegui fazer um poco mais compacto. mais o codigo de encima foi o primero que saio.

/*

function reglaIf(parametro, i) {
  if (parametro.value.length > 0) {
    formulario[i].classList.add("valid");
    msjAlert[i].textContent = "";
  } else {
    formulario[i].classList.remove("valid");
    msjAlert[i].textContent = "campo obrigatório";
  }
}



validation.addEventListener("click", function () {
  formulario.forEach((parametro2, i) => {
    reglaIf(parametro2, i);
    formulario[i].addEventListener("change", function () {
      reglaIf(parametro2, i);
    });
  });
});


*/
