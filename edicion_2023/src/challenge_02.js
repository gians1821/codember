let message2 = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

console.log(message2.charAt(0))
console.log(message2.length)

function readMessage(message) {
    let number = 0;
    let string = "";
    for (let i = 0; i < message.length; i++) {
        const element = message[i];
        switch (element) {
            case '&': string += number; break;
            case '#': number++; break;
            case '@': number--; break;
            case '*': number = number * number; break;
        }
    }
    return string
}

document.querySelector("#respuesta2").innerHTML = readMessage(message2)
