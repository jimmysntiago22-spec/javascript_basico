let a, b;
let c, d;

let suma, resta, multiplicacion, division, potencia;

//ontener los datos atraves del suario
a = prompt("Ingrese el primer numero");
b = prompt("Ingrese el segundo numero");

//resultados de las operaciones
suma = Number(a) + Number(b);
document.writeln('la suma es: ' + suma + '<br>');
console.log("la suma es: ", suma);

resta = Number(a) - Number(b);
document.writeln('la resta es: ' + resta + '<br>');
console.log("la resta es: ", resta);

multiplicacion = Number(a) * Number(b);
document.writeln('la multiplicacion es: ' + multiplicacion + '<br>');
console.log("la multiplicacion es: ", multiplicacion);

division = Number(a) / Number(b);
document.writeln('la division es: ' + division + '<br>');
console.log("la division es: ", division);

potencia = Number(a) ** Number(b);
document.writeln('la potencia es: ' + potencia + '<br>');
console.log("la potencia es: ", potencia);
