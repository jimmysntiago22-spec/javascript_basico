//calcular la ganacia del vendedor
//sumar la gancia del valor el veiculo = precio base
//calcular el impuesto (6%) sobre el precio  de venta
// sumar el precio de venta + impuesto = ganancia del vendedor

//valores definidos directamente por el enunciado del taller
const valorVehiculo = 35000000; //valor base del vehiculo
const pocentajeGanancia = 12;
const impuesto = 6;

//paso 1: calcular cuento dinero gana el vendedor
const gananciaVendedor = (valorvehiculo * pocentajeGanancia) / 100;

//paso 2: el precio de venta es valor dsssel vehiculo mas la gancia
const precioVenta = valorvehiculo + gananciaVendedor;

//paso 3: calcular el impuesto sobre el precio de venta
const impuestoVenta = (precioVenta * impuesto) / 100;

// paso 4: el costo total que paga el comprador es el precio de venta + impuesto
const costoTotal = precioVenta + impuestoVenta;

console.log("valor del vehiculo: $", valorVehiculo);
console.log("porcentaje de ganancia: ", pocentajeGanancia, "%");
console.log("ganancia del vendedor: $", gananciaVendedor);
console.log("precio de venta antes de impuestos: $", precioVenta);
console.log("porcentaje de impuesto: ", impuesto, "%");
console.log("impuestos sobre la venta: $", impuestoVenta);
console.log("costo total: $", costoTotal);
