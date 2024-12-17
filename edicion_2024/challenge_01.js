const string = "URDURUDRUDLLLLUUDDUDUDUDLLRRRR";
const array_string = [...string];

let posicion = 0;

const password = "528934712834";
const array_password = [...password];

const total_posiciones = array_password.length;

array_string.forEach((char) => {
  if (char == "L") {
    if (posicion == 0) posicion = total_posiciones - 1;
    else posicion--;
  } else if (char == "R") {
    if (posicion == total_posiciones - 1) posicion = 0;
    else posicion++;
  } else if (char == "U") {
    if (parseInt(array_password[posicion]) == 9) array_password[posicion] = 0;
    else array_password[posicion]++;
  } else if (char == "D") {
    if (parseInt(array_password[posicion]) == 0) array_password[posicion] = 9;
    else array_password[posicion]--;
  }
});

console.log(array_password.join(""));
