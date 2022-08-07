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
  */

// Ursprüngliche Funktionen:
// Funktionen für SDES
/*
 function convertToBitsSDES() {
    document.getElementById("bits_S-DES_textarea").value = ""
    let textInput = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let parityBitcodeInputText = document.getElementById("evenoroddparityinput_textarea").value
    let bitcodeInputText = []
    let checksumToCalculateParity = 0

    for (let i = 0; i < textInput.length; i++) {
        checksumToCalculateParity += parseInt(textInput.substr(i,textInput.length))
        if ((checksumToCalculateParity % 2) === 0 && parityBitcodeInputText === "e") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
        } else if ((checksumToCalculateParity % 2) !== 0 && parityBitcodeInputText === "e") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "1")
        } else if ((checksumToCalculateParity % 2) === 0 && parityBitcodeInputText === "o") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "1")
        } else if ((checksumToCalculateParity % 2) !== 0 && parityBitcodeInputText === "o"){
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "0")
        } else {
            document.getElementById("bits_S-DES_textarea").value = "parity "
        }
        document.getElementById("bits_S-DES_textarea").value += (bitcodeInputText[i] + " ")
    }
    return bitcodeInputText
}
    //console.log(parseInt(document.getElementById("klartext_S-DES").value.toUpperCase().charCodeAt(0).toString(),2).toString())
    //document.getElementById("bits_S-DES").value = parseInt(document.getElementById("klartext_S-DES").value,2).toString()

function initialpermutationSDES() {
    document.getElementById("initialpermutation_S-DES_textarea").value = ""
    document.getElementById("L-Half_S-DES_textarea").value = ""
    document.getElementById("R-Half_S-DES_textarea").value = ""
    let bitcodeInputText = [] = convertToBits()
    console.log(bitcodeInputText)
    let bits = []

    for (let i = 0; i < bitcodeInputText.length; i++) {
        for (let j = 0; j < 8; j++) {
            bits[j] = parseInt(bitcodeInputText[i].toString().substring(j, j+1))
        }
        document.getElementById("initialpermutation_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()).concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
        document.getElementById("L-Half_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()) + " ")
        document.getElementById("R-Half_S-DES_textarea").value += (bits[3].toString().concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
    }
    return bits
}

function expansionSDES() {
    document.getElementById("expansion_S-DES_textarea").value = ""
    let bitcodeInputText = convertToBitsSDES()
    let bits = [] = initialpermutationSDES()

    for (let i = 0; i < bitcodeInputText.length; i++) {
        document.getElementById("expansion_S-DES_textarea").value += (bits[6].toString().concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()).concat(bits[3].toString()) + " ")
    }
}
*/
// Funktionen für keySDES
/* function permutation10BitKeySDES() {
    document.getElementById("permutation_10bit_key_S-DES_textarea").value = ""
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    document.getElementById("permutation_10bit_key_S-DES_textarea").value = keyBits[2].toString().concat(keyBits[4].toString()).concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[9].toString()).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString())
    return keyBits
}

function onebitrotationSDES() {
    document.getElementById("1-L-Shift_S-DES_key_textarea").value = ""
    let keyBits = [] = permutation10BitKeySDES()
    document.getElementById("1-L-Shift_S-DES_key_textarea").value = keyBits[4].toString().concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[2]).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString()).concat(keyBits[9])
}

function permutation8BitKeySDES() {
    document.getElementById("permutation8bit_S-DES_key_textarea").value = ""
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    document.getElementById("permutation8bit_S-DES_key_textarea").value = keyBits[0].toString().concat(keyBits[6].toString()).concat(keyBits[8]).concat(keyBits[3].toString()).concat(keyBits[7].toString()).concat(keyBits[2].toString()).concat(keyBits[9].toString()).concat(keyBits[5].toString())
} */


// Funktionen für die Website (latest version/ definitiv)

function SDES(Funktion) {
    let textInput = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let parityBitcodeInputText = document.getElementById("evenoroddparityinput_textarea").value
    let bitcodeInputText = []
    let checksumToCalculateParity = 0
    let bits = []

    for (let i = 0; i < textInput.length; i++) {
        checksumToCalculateParity += parseInt(textInput.substr(i, textInput.length))
        if ((checksumToCalculateParity % 2) === 0 && parityBitcodeInputText === "e") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "0") // Funktionen/ Methoden von Grund auf machen
        } else if ((checksumToCalculateParity % 2) !== 0 && parityBitcodeInputText === "e") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "1")
        } else if ((checksumToCalculateParity % 2) === 0 && parityBitcodeInputText === "o") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "1")
        } else if ((checksumToCalculateParity % 2) !== 0 && parityBitcodeInputText === "o") {
            bitcodeInputText[i] = parseInt(textInput.charCodeAt(i).toString(2) + "0")
        } else {
            document.getElementById("bits_S-DES_textarea").value = "parity "
        }
    }
    switch (Funktion) {
        case 1:
            document.getElementById("bits_S-DES_textarea").value = ""
            for (let k = 0; k < textInput.length; k++) {
                document.getElementById("bits_S-DES_textarea").value += (bitcodeInputText[k] + " ")
            }
            break
        case 2:
            document.getElementById("initialpermutation_S-DES_textarea").value = ""
            document.getElementById("L-Half_S-DES_textarea").value = ""
            document.getElementById("R-Half_S-DES_textarea").value = ""
            for (let k = 0; k < textInput.length; k++) {
                for (let j = 0; j < 8; j++) {
                    bits[j] = parseInt(bitcodeInputText[k].toString().substring(j, j+1))
                }
                document.getElementById("initialpermutation_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()).concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
                document.getElementById("L-Half_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()) + " ")
                document.getElementById("R-Half_S-DES_textarea").value += (bits[3].toString().concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
            }
            break
        case 3:
            document.getElementById("expansion_S-DES_textarea").value = ""
            let expandedBitcode = []
            for (let k = 0; k < textInput.length; k++) {
                for (let j = 0; j < 8; j++) {
                    bits[j] = parseInt(bitcodeInputText[k].toString().substring(j, j+1))
                }
                expandedBitcode[k] = bits[6].toString().concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()).concat(bits[3].toString())
                document.getElementById("expansion_S-DES_textarea").value += (expandedBitcode[k] + " ")
            }
            return expandedBitcode
    }
}


function keySDES(Funktion) {
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    switch (Funktion) {
        case 1:
            document.getElementById("permutation_10bit_key_S-DES_textarea").value = ""
            document.getElementById("permutation_10bit_key_S-DES_textarea").value = keyBits[2].toString().concat(keyBits[4].toString()).concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[9].toString()).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString())
            break
        case 2:
            document.getElementById("1-L-Shift_S-DES_key_textarea").value = ""
            document.getElementById("1-L-Shift_S-DES_key_textarea").value = keyBits[4].toString().concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[2]).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString()).concat(keyBits[9])
            break
        case 3:
            document.getElementById("permutation8bit_S-DES_key_textarea").value = ""
            let definiteKeyBitcode = keyBits[0].toString().concat(keyBits[6].toString()).concat(keyBits[8]).concat(keyBits[3].toString()).concat(keyBits[7].toString()).concat(keyBits[2].toString()).concat(keyBits[9].toString()).concat(keyBits[5].toString())
            document.getElementById("permutation8bit_S-DES_key_textarea").value = definiteKeyBitcode
            return definiteKeyBitcode
    }
}

let XOR = [[0,1,1],[1,0,1],[0,0,0],[1,1,0]]

function xorKey() {
    document.getElementById("XOR-key1_S-DES_textarea").value = ""
    let definiteKeyBitcode = []
    let definiteKeyBits = []
    let expandedBitcode = SDES(3)
    let expandedBits = []
    let XORBits = []

    for (let i = 0; i < expandedBitcode.length; i++) {
        definiteKeyBitcode[i] = keySDES(3)
        XORBits[i] = []
        for (let k = 0; k < 8; k++) {
            expandedBits[k] = parseInt(expandedBitcode[i].substring(k, k+1))
            definiteKeyBits[k] = parseInt(definiteKeyBitcode[i].substring(k, k+1))
            if (expandedBits[k] === definiteKeyBits[k]) {
                XORBits[i][k] = 0
            } else {
                XORBits[i][k] = 1
            }
        }
        document.getElementById("XOR-key1_S-DES_textarea").value += (XORBits[i][0].toString().concat(XORBits[i][1].toString()).concat(XORBits[i][2].toString()).concat(XORBits[i][3].toString()).concat(XORBits[i][4].toString()).concat(XORBits[i][5].toString()).concat(XORBits[i][6].toString()).concat(XORBits[i][7].toString()) + " ")
    }
    return XORBits
}

function sBox() {
    document.getElementById("s-box_S-DES_textarea").value = ""
    let XORBits = xorKey()
    let sBox0 = [["01","11","00","11"],["00","10","10","01"],["11","01","01","11"],["10","00","11","10"]]
    let sBox1 = [["00","10","11","10"],["01","00","00","01"],["10","01","01","00"],["11","11","00","11"]]
    let bitsAfterSBox = []
    let bitcodeAfterSBox = []

    for (let i = 0; i < XORBits.length; i++) {

        if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "00" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][0]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "01" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][1]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "10" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][2]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "11" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][3]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "00" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][0]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "01" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][1]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "10" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][2]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "11" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][3]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "00" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][0]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "01" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][1]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "10" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][2]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "11" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][3]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "00" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][0]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "01" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][1]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "10" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][2]
        } else if (XORBits[i][0].toString().concat(XORBits[i][3].toString()) === "11" && XORBits[i][1].toString().concat(XORBits[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][3]
        } else {
            document.getElementById("s-box_S-DES_textarea").value = "previous input "
        }

        if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "00" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][0]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "01" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][1]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "10" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][2]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "11" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][3]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "00" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][0]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "01" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][1]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "10" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][2]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "11" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][3]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "00" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][0]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "01" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][1]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "10" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][2]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "11" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][3]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "00" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][0]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "01" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][1]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "10" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][2]
        } else if (XORBits[i][4].toString().concat(XORBits[i][7].toString()) === "11" && XORBits[i][5].toString().concat(XORBits[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][3]
        } else {
            document.getElementById("s-box_S-DES_textarea").value = "previous input "
        }

        bitcodeAfterSBox[i] = bitsAfterSBox[0].concat(bitsAfterSBox[1])
        document.getElementById("s-box_S-DES_textarea").value += (bitcodeAfterSBox[i] + " ")
    }

    return bitcodeAfterSBox
}

function afterSBox(Funktion) {
    let bitcodeAfterSBox = sBox()
    let bits = []
console.log(bitcodeAfterSBox)
    switch (Funktion) {
        case 1:
            document.getElementById("permutation4bit_S-DES_textarea").value = ""
            for (let k = 0; k < bitcodeAfterSBox.length; k++) {
                for (let j = 0; j < 4; j++) {
                    bits[j] = parseInt(bitcodeAfterSBox[k].toString().substring(j, j+1))
                }
                document.getElementById("permutation4bit_S-DES_textarea").value += (bits[1].toString().concat(bits[3].toString()).concat(bits[2].toString()).concat(bits[0].toString()) + " ")
            }
            break
    }
}

function runAll() {

}

/* function run(checkbox[true]) {

} // Mit Checkboxes anwählen was angezeigt/ ausgeführt wird und was nicht


 */

// Mails verschicken für Kommunikation miteinander