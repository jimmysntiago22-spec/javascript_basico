

const n = 5

console.log("----ciclo para----");
let factorialFor = 1;
for (let i = 1; i <= n; i) {
  factorialFor *= i;
}
console.log(`el factorial de ${n} es: "`, factorialFor);