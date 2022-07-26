/* Funktionen für die Webseite */

/* Funktionen zur Verschlüsselung */

/* Beispiel-Funktionen:

function copy(){
    document.getElementById("L-Half_S-DES-u").value = document.getElementById("L-Half_S-DES").value
}

function encode(){

    let text = document.getElementById("klartext").value
    let firstPart = text.substring(0, text.length/2)
    let secondPart = text.substring(text.length/2, text.length)
    document.getElementById("chiffrentext").value = secondPart.concat(firstPart)

}

 */

function fakultaet(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

function xor() {

}


function caesar(){
    let clearText = document.getElementById("klartext_caesar_textarea").value // Namen anschreiben --> WElches Element die Variable vertritt
    let movement = parseInt(document.getElementById("verschiebung_caesar_textarea").value)
    let cipherText = ""
    let ascii = [clearText.length]

    for (let i=0; i<clearText.length; i++) {
        ascii[i] = clearText.toUpperCase().charCodeAt(i)
        let newChar = ((ascii[i]+movement-65)%26)+65
        console.log(newChar)
        cipherText += String.fromCharCode(newChar)
        console.log(cipherText)
    }
    document.getElementById("chiffrentext_caesar_textarea").value = cipherText
}

function convertToBits() {
    document.getElementById("bits_S-DES_textarea").value = ""
    let text = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let parity = document.getElementById("evenoroddparityinput_textarea").value
    let bitcode = []
    let checksum = 0

    for (let i = 0; i < text.length; i++) {
        checksum += parseInt(text.substr(i,text.length))
        if ((checksum % 2) === 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
        } else if ((checksum % 2) !== 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((checksum % 2) === 0 && parity === "o") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((checksum % 2) !== 0 && parity === "o"){
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0")
        } else {
            document.getElementById("bits_S-DES_textarea").value = "parity "
        }
        document.getElementById("bits_S-DES_textarea").value += (bitcode[i] + " ")
    }
}
    //console.log(parseInt(document.getElementById("klartext_S-DES").value.toUpperCase().charCodeAt(0).toString(),2).toString())
    //document.getElementById("bits_S-DES").value = parseInt(document.getElementById("klartext_S-DES").value,2).toString()

function initialpermutation() {
    document.getElementById("initialpermutation_S-DES_textarea").value = ""
    document.getElementById("L-Half_S-DES_textarea").value = ""
    document.getElementById("R-Half_S-DES_textarea").value = ""
    let text = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let parity = document.getElementById("evenoroddparityinput_textarea").value
    let bitcode = []
    let checksum = 0
    let bits = []

    for (let i = 0; i < text.length; i++) {
        checksum += parseInt(text.substr(i,text.length))
        if ((checksum % 2) === 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
        } else if ((checksum % 2) !== 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((checksum % 2) === 0 && parity === "o") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((checksum % 2) !== 0 && parity === "o"){
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0")
        } else {
            document.getElementById("bits_S-DES_textarea").value = "parity "
        }
        for (let j = 0; j < 8; j++) {
            bits[j] = parseInt(bitcode[i].toString().substring(j, j+1))
        }
        document.getElementById("initialpermutation_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()).concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
        document.getElementById("L-Half_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()) + " ")
        document.getElementById("R-Half_S-DES_textarea").value += (bits[3].toString().concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
    }
}

function expansion() {
    document.getElementById("expansion_S-DES_textarea").value = ""
    let text = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let parity = document.getElementById("evenoroddparityinput_textarea").value
    let bitcode = []
    let checksum = 0
    let bits = []

    for (let i = 0; i < text.length; i++) {
        checksum += parseInt(text.substr(i, text.length))
        if ((checksum % 2) === 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
        } else if ((checksum % 2) !== 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((checksum % 2) === 0 && parity === "o") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((checksum % 2) !== 0 && parity === "o") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0")
        } else {
            document.getElementById("bits_S-DES_textarea").value = "parity "
        }
        for (let j = 0; j < 8; j++) {
            bits[j] = parseInt(bitcode[i].toString().substring(j, j + 1))
        }
        document.getElementById("expansion_S-DES_textarea").value += (bits[6].toString().concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString().concat(bits[3].toString())) + " ")
    }
}

function permutation10BitKey() {
    document.getElementById("permutation_10bit_key_S-DES_textarea").value = ""
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    document.getElementById("permutation_10bit_key_S-DES_textarea").value = keyBits[2].toString().concat(keyBits[4].toString()).concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[9].toString()).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString())
}

function onebitrotation() {
    document.getElementById("1-L-Shift_S-DES_key_textarea").value = ""
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    document.getElementById("1-L-Shift_S-DES_key_textarea").value = keyBits[4].toString().concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[2]).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString()).concat(keyBits[9])
}

function permutation8BitKey() {
    document.getElementById("permutation8bit_S-DES_key_textarea").value = ""
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    document.getElementById("permutation8bit_S-DES_key_textarea").value = keyBits[0].toString().concat(keyBits[6].toString()).concat(keyBits[8]).concat(keyBits[3].toString()).concat(keyBits[7].toString()).concat(keyBits[2].toString()).concat(keyBits[9].toString()).concat(keyBits[5])
}

function runAll() {

}

/* function run(checkbox[true]) {

} // Mit Checkboxes anwählen was angezeigt/ ausgeführt wird und was nicht


 */

// Mails verschicken für Kommunikation miteinander