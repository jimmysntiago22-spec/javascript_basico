//equilatero = los tres lados iguales
//isoceles = dos lados iguales
//escaleno = los tres lados diferentes

const ladoA = 5;
const ladoB = 5;
const ladoC = 8;

//primero validamos que ningun lado sea cero o negativo
if ( ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
   connsole.log("los lados deben ser mayores que cero")
   //es el operador "o" basta con que una de lass condiciones se cumpla
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
//regla geometrica: la suma de los lados siempre debe ser mayor que el tercer lado, si no, no se puede formar un trinangulo real
console.log(" los valoresno forman un triangulo valido")
} else if (ladoA === ladoB && ladoB === ladoC){
  //"&&" es el operador "y" las condiciones verdaderas deben seer evaluadas
  console.log("el triangulo es equilatero")
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
  // si no es equilatero, pero dos lados son iguales, entonces es isoceles
console.log("el triangulo es isoceles")
} else {
  // si no see cumple ninguna de las condiciones anteriores es decir que todos los lados son distintos
console.log("el triangulo es escaleno")
}