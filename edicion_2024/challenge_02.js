const fs = require("fs");

const contenido = fs.readFileSync("./txts/log.txt", "utf-8");

const lineas = contenido.split("\n");

let c_true = 0;
let c_false = 0;

const analizar = (linea) => {
  array_linea = [...linea];
  let ultimo_numero = "0".charCodeAt(0) - 1;
  let ultimo_char = "a".charCodeAt(0) - 1;
  for (const car of linea) {
    ascii_car = car.charCodeAt(0);
    if (ascii_car >= 65 && ascii_car <= 90) return 0; // Ninguna mayúscula
    if (ascii_car >= ultimo_numero) ultimo_numero = ascii_car;
    else return 0;
    // if (ascii_car >= 48 && ascii_car <= 57) {
    //   //es un número
    //   if (ascii_car >= ultimo_numero) ultimo_numero = ascii_car;
    //   else return 0;
    // } else if (ascii_car >= 97 && ascii_car <= 122) {
    //   //es una letra
    //   if (ascii_car >= ultimo_char) ultimo_char = ascii_car;
    //   else return 0;
    // } else return 0;
  }
  return 1;
};

lineas.forEach((linea) => {
  const resultado = analizar(linea);
  if (resultado == 1) c_true++;
  else c_false++;
});

console.log("true: " + c_true);
console.log("false: " + c_false);
