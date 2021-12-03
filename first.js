const form = document.querySelector("#formulario"); //peguei o formulario

form.addEventListener("submit", function (e) {
  //adicionei um "escutador de evento"
  e.preventDefault(); // previni o default
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura"); // capturei os inputs

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value); //converti para numero

  if (!peso) {
    setResultado("Peso inválido", false); // fiz um comparativo para receber true ou false number
    return;
  }
  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura); // criei uma funcção para calcular o imc
  const nivelImc = getNivelImc(imc); // criei uma função para receber o nivel do imc

  const msg = `Seu IMC é ${imc} (${nivelImc})`; // criei a mensagem
  setResultado(msg, true); // mandei resetar o setup com a flague true
});

function getNivelImc(imc) {
  //função com um array de mensagem
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) return nivel[5]; // comparado o nivel para envio da mensagem
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

//função para calcular o imc
function getImc(peso, altura) {
  const imc = peso / altura ** 2;

  return imc.toFixed(2);
}

function criaP() {
  //função para criar o html <p></p>
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  //função que recebe uma mensagem e compara se o resultado é valido
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""; //zera o html

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
