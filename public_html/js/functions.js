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
    let bitcode = [text.length]
    let ckecksum = 0

    for (let i = 0; i < text.length; i++) {
        ckecksum += parseInt(text.substr(i,text.length))
        if ((ckecksum % 2) === 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
        } else if ((ckecksum % 2) !== 0 && parity === "e") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else if ((ckecksum % 2) === 0 && parity === "o") {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
        } else {
            bitcode[i] = parseInt(text.charCodeAt(i).toString(2) + "0")
        }
        document.getElementById("bits_S-DES_textarea").value += (bitcode[i] + " ")
    }
}
    //console.log(parseInt(document.getElementById("klartext_S-DES").value.toUpperCase().charCodeAt(0).toString(),2).toString())
    //document.getElementById("bits_S-DES").value = parseInt(document.getElementById("klartext_S-DES").value,2).toString()

function initialpermutation() {
    let text = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let parity = document.getElementById("evenoroddparityinput_textarea").value
    let bitcodeOutOfText = [text.length]
    let bitcodeSplitArray = [8]
    let resultArray = [fakultaet(8)]
    let ckecksum = 0

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

    for (let i = 0; i < text.length; i++) {
            ckecksum += parseInt(text.substr(i, text.length))
            if ((ckecksum % 2) === 0 && parity === "e") {
                bitcodeOutOfText[i] = parseInt(text.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
            } else if ((ckecksum % 2) !== 0 && parity === "e") {
                bitcodeOutOfText[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
            } else if ((ckecksum % 2) === 0 && parity === "o") {
                bitcodeOutOfText[i] = parseInt(text.charCodeAt(i).toString(2) + "1")
            } else {
                bitcodeOutOfText[i] = parseInt(text.charCodeAt(i).toString(2) + "0")
            }
            for (let j = 0; j < 8; j++) {
                let bitcodeSplit = bitcodeOutOfText[i].toString().substring(j,j+1)
                console.log(bitcodeSplit)
                bitcodeSplitArray[j] = bitcodeSplit
                parseInt(bitcodeSplit)
            }
            for (let k = 0; k < fakultaet(8); k++) {
                resultArray[k] = permutator(bitcodeSplitArray)
            }
            document.getElementById("initialpermutation_S-DES_textarea").value += resultArray[Math.random()*fakultaet(8)]
    }
}

function runAll() {

}

/* function run(checkbox[true]) {

} // Mit Checkboxes anwählen was angezeigt/ ausgeführt wird und was nicht


 */

// Mails verschicken für Kommunikation miteinander