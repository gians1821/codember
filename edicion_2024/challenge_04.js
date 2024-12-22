const fs = require("fs");

const contenido = fs.readFileSync("./txts/network.txt", "utf-8").slice(2, -2);

const conexiones = contenido.split("],[");

const nodos = [];

for (const conexion of conexiones) {
  const valores = conexion.split(",");

  if (nodos.length == 0) {
    nodos.push(valores[0]);
    nodos.push(valores[1]);
  } else if (nodos.length >= 1) {
    if (
      !nodos.some((nodo) => {
        return nodo == valores[0];
      })
    )
      nodos.push(valores[0]);

    if (
      !nodos.some((nodo) => {
        return nodo == valores[1];
      })
    )
      nodos.push(valores[1]);
  }
}

const listas = [];

for (const nodo of nodos) {
  const lista = [];
  lista.push(parseInt(nodo));

  let ultimo_nodo = nodo;

  for (const conexion of conexiones) {
    const valores = conexion.split(",");

    let valor_inicial = parseInt(valores[0]);
    let valor_final = parseInt(valores[1]);

    if (ultimo_nodo == valor_inicial) {
      lista.push(valor_final);

      ultimo_nodo = valor_final;
    }
  }

  listas.push(lista);
}

const numeros_eliminados = [];
numeros_eliminados.push(11);

for (const lista of listas) {
  if (lista.length >= 3) {
    for (const nodo of lista) {
      if (!numeros_eliminados.includes(nodo)) numeros_eliminados.push(nodo);
    }
  }
}

// console.log(conexiones);
// console.log(listas_filtradas);

const nuevos_nodos = nodos.filter((nodo) => {
  return !numeros_eliminados.includes(parseInt(nodo));
});

let rpta = "submit ";

for (const nodo of nuevos_nodos) {
  rpta += `${nodo},`;
}

rpta = rpta.slice(0, -1);

// console.log(nodos);
// console.log(nuevos_nodos);
// console.log(conexiones);
// console.log(listas);
// console.log(numeros_eliminados);
console.log(rpta);
