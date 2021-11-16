let dia = Number(prompt("desde que dia quiere averiguar?"));
while (dia < 1 || dia > 31) {
  dia = Number(prompt("desde que dia quiere averiguar?"));
}
let mes: number = Number(prompt("desde que mes quiere averiguar?"));
while (mes < 1 || mes > 12) {
  mes = Number(prompt("desde que mes quiere averiguar?"));
}
let año: number = Number(prompt("de que año quiere averiguar?"));

let arreglo: number[] = new Array(12);
arreglo[0] = 31;
if (año % 4 === 0 && año % 100 !== 0) {
  arreglo[1] = 29;
} else {
  arreglo[1] = 28;
}
arreglo[2] = 31;
arreglo[3] = 30;
arreglo[4] = 31;
arreglo[5] = 30;
arreglo[6] = 31;
arreglo[7] = 31;
arreglo[8] = 30;
arreglo[9] = 30;
arreglo[10] = 31;
arreglo[11] = 31;

function sumar() {
  let cantidadTotal: number = 0;
  let i: number = 0;
  for (i = mes - 1; i < 12; i++) {
    cantidadTotal = cantidadTotal + arreglo[i];
  }
  console.log(arreglo);
  let diasTotal: number = cantidadTotal - dia;
  console.log("faltan ", diasTotal, "dias para que termine el año");
}
sumar();
