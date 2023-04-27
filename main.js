
const inputs = document.querySelectorAll(".input");
const submit = document.querySelector("#btn");



inputs.forEach(function (item) {
  submit.addEventListener("click", (e) => {
    
    console.log(item.value)
    if (item.value === "") {
      e.preventDefault();
      mensagemDeErro(item, "Preencha o campo vazio!");
    } else {
      mensagemDeSucesso(item);
    }
  });
});

function mensagemDeErro(input, msg) {
  const form = input.parentElement;
  const small = form.querySelector("small");

  small.innerHTML = msg;
  form.className = "form error";
}

function mensagemDeSucesso(input) {
  const form = input.parentElement;

  form.className = "form sucess";
}
