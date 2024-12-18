const fs = require("fs");

const contenido = fs.readFileSync("./txts/trace.txt", "utf-8");

const lineas = contenido.split("\n");

let contador_total_pasos = 0;
let ultimo_contador_pasos;

for (const linea of lineas) {
  let contador_pasos = 0;
  let posicion_actual = 0;
  let pasos = linea.split(" ");
  let posiciones_totales = pasos.length;

  while (posicion_actual >= 0 && posicion_actual < posiciones_totales) {
    let aux = posicion_actual;
    posicion_actual += parseInt(pasos[posicion_actual]);
    pasos[aux]++;
    contador_pasos++;
  }
  contador_total_pasos += contador_pasos;
  ultimo_contador_pasos = contador_pasos;
}

console.log(contador_total_pasos + "-" + ultimo_contador_pasos);
