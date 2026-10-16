//imprimir 5 veces la palabra sena

//siclo for (para)
for (let contador = 1; contador <= 5; contador++) {
  //contador =1 -> valor inicial
  //contador <= 5 -> al final de cada vueta, contador aumenta en 1
  console.log("SENA"); //esto se imprime en cada una de las 5 vueltas
}

// ciclo while (mientras)
console.log("----ciclo Do-while----")
let contadorwhile = 1
while (contadorwhile <=5) {
  //se evalua condicion antes de emtrar a epetir rl bloque
  console.log("SENA");
  contadorwhile++; //muy importante: si no se incrementa s crea un ciclo infinito
}

console.log ("---- ciclo Do-while ----");
let contadorDowhile = 1;
do{
  console.log("SENA")
  contadorDowhile++;
} while (contadorDowhile <= 5)