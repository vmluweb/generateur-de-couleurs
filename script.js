// Définition des variables
const body = document.querySelector("body");
const inputText = document.querySelector("#colorText");
const changeBtn = document.querySelector("#btnChange");
const colorRand = document.querySelector("#btnRandom");
const colorRandText = document.querySelector("#textColorRandom");

// Ajout événement click pour modifier backgroundColor
changeBtn.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = inputText.value;
}

// Ajout événement input pour modifier backgroundColor
let colorPalet = document.querySelector("#colorPalet");

colorPalet.addEventListener("input", updateColor);

function updateColor(e) {
  document.body.style.backgroundColor = e.target.value;
}

// Ajout événement click
colorRand.addEventListener("click", changeColorRand);

let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let hexDefault = "#ffffff";

// Fonctionnalités pour créer et modifier backgroundColor:
function changeColorRand() {
  const arrayColor = [];

  for (let i = 0; i < 6; i++) {
    const color = Math.floor(Math.random() * 16);
    arrayColor.push(letters[color]);
  }

  let hexDefault = "#" + arrayColor.join("");
  // Affichage d'un texte dynamique
  colorRandText.style.display = "block";
  colorRandText.innerHTML = hexDefault;
  document.body.style.backgroundColor = hexDefault;
}
