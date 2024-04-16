const contador = document.querySelector("h1");
const iniciaButton = document.querySelector(".button-init-counter");
const paraButton = document.querySelector(".button-stop-counter");
const limpaButton = document.querySelector(".button-clear-counter");
const upTen = document.querySelector(".button-up10-counter");
const downTen = document.querySelector(".button-down10-counter");
const doubleSpeed = document.querySelector(".button-upup-counter");
const downSpeed = document.querySelector(".button-downdown-counter");
const atualSpeed = document.querySelector(".atualSpeed");

// styles costumize
const chooseColor1 = document.querySelector(".chooseColorBack");
const chooseColor2 = document.querySelector(".chooseColorCounter");
const backgColor = document.querySelector(".backgroundColor");
const numberColor = document.querySelector(".numberColor");

backgColor.addEventListener("click", () => {
  console.log(chooseColor1.value);
  document.body.style.backgroundColor = chooseColor1.value;
});

numberColor.addEventListener("click", () => {
  console.log(chooseColor2.value + "2");
  contador.style.color = chooseColor2.value;
});

//  options
let numberCount = 0;
let wordPerSec = 0;
let numberSpeed = 0;

function contadorTeste() {
  numberCount++;
  contador.textContent = numberCount;
}

let contagem;
iniciaButton.addEventListener("click", () => {
  contagem = setInterval(contadorTeste, 1000);
  wordPerSec++;
  atualSpeed.textContent = `Speed: ${cliques} número p/s`;
});

paraButton.addEventListener("click", () => {
  clearInterval(contagem);
});

limpaButton.addEventListener("click", () => {
  numberCount = 0;
  contador.textContent = 0;
});

upTen.addEventListener("click", () => {
  numberCount += 10;
  contador.textContent = numberCount;
});

let cliques = 1;

downTen.addEventListener("click", () => {
  numberCount -= 10;
  if (numberCount <= 0) {
    numberCount = 0;
  }
  contador.textContent = numberCount;
});

doubleSpeed.addEventListener("click", () => {
  let number = 0;
  numberSpeed += 1;
  if (numberSpeed) {
    let speedZada = setInterval(() => {
      numberCount += 1;
    }, 1000);
  }
  if ((number = 0)) {
    clearInterval(speedZada);
  }
  cliques += 1;
  atualSpeed.textContent = `Speed: ${cliques} número(s) p/s`;
});

downSpeed.addEventListener("click", () => {
  if (numberSpeed) {
    let speedZada = setInterval(() => {
      numberCount -= 1;
    }, 1000);
    if (cliques === 1) {
      clearInterval(speedZada);
    }
  }
  // number = 0;
  if (cliques > 1) {
    cliques -= 1;
    if (cliques <= 0) {
      cliques = 1;
      clearInterval(speedZada);
    }
  }
  atualSpeed.textContent = `Speed: ${cliques} número(s) p/s`;
});
