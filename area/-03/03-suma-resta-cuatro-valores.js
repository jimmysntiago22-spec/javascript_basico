//=============================================================
// ejercicio 3: sumar 4 valores y restar el ultimo
// Leer 4 valores, sumarlos y a la suma resarle elultimo valor.
//=============================================================

//buscamos en el html los 4 imputs y la caja del resultado (por id)
const inputPrimero = document.getElementById("primervalor");
const inputSegundo = document.getElementById("segundovalor");
const inputTercero = document.getElementById("tercervalor");
// const inputCuarto = document.getElementById("cuartovalor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
  //si falta algun valor no se calcuala
  if (inputPrimero.value === "" || inputSegundo.value === "" || inputTercero.value === "") {
    cajaResultado.textContent = "Escribe los 3 valores";
    return;
  }

  //lo que se escribe en un imput es un texto: Number() convierte el texto a numero
  const primervalor = Number(inputPrimero.value);
  const segundovalor = Number(inputSegundo.value);
  const tercervalor = Number(inputTercero.value);
  // const cuartovalor = Number(inputCuarto.value);

  //sumamos los 4 valores
  const sumavalores = primervalor + segundovalor + tercervalor;

  //a la susa total se le resta el ultimo valor
  // const resultadoresta = sumavalores - cuartovalor;

  //mostramos el resultados en la pagina
  cajaResultado.innerHTML =
    "suma de los 4 valores: <b>" + sumavalores + "</b><br>"
}

//cada vez que se escribe en cualquier imput se vuelve a calcular
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
// inputCuarto.addEventListener("input", calcular);