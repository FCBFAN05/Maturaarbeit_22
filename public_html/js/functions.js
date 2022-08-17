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

function xorKey() { // XOR-Verrechnung mit dem Schlüssel
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
let XOR = [[0,1,1],[1,0,1],[0,0,0],[1,1,0]]
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

function XOR(Input1, Input2) { // XOR-Verrechnung mit Ausgabe der Bits in einem 2-dimensionalen Array
    let XORBits = []
    let bitsInput1 = []
    let bitsInput2 = []
    for (let i = 0; i < Input1.length; i++) {
        XORBits[i] = []
        for (let j = 0; j < Input1[0].length; j++) {
            bitsInput1[i] = Input1[i].substring(j, j + 1)
            bitsInput2[i] = Input2[i].substring(j, j + 1)
            if (bitsInput1[j] === bitsInput2[j]) {
                XORBits[i][j] = 0
            } else {
                XORBits[i][j] = 1
            }
        }
    }
    return XORBits
}

function permutation(bitcode, permutation) {
    switch (permutation) {
        case "IP":

    }
}

function SDES(Funktion) {
    let textInput = document.getElementById("klartext_S-DES_textarea").value.toUpperCase()
    let bitcodeInputText = []
    let bits = []
    let expandedBitcode = []
    let bitcodeAfterFirstTurn = []
    let bitcodeAfterInitialPermutation = []
    let XORBits = []
    let bitcodeAfterSBox = []
    let bitsAfterSBox = []
    let encryptedBitcode = []
    let firstDefiniteKeyBitcode = []
    let secondDefiniteKeyBitcode = []
    let bitcodeAfterSecondTurn = []
    let bitcodeRightHalf = []
    let bitcodeLeftHalf = []
    let decryptedBitcode = []

    for (let i = 0; i < textInput.length; i++) { // Umwandlung des Texts in Bits mit Hilfe des ASCII-Codes (Buchstabe für Buchstabe) und Erzeugung des Paritätsbits
        if (textInput.charCodeAt(i).toString(10) < 64)
            bitcodeInputText[i] = "00".concat(textInput.charCodeAt(i).toString(2)) // Funktionen/ Methoden von Grund auf machen
        else if (textInput.charCodeAt(i).toString(10) < 128)
            bitcodeInputText[i] = "0".concat(textInput.charCodeAt(i).toString(2))
        else
            bitcodeInputText[i] = "not defined"
    }
    switch (Funktion) {
        case 1: // Ausgabe des Klartexts in Bits
            document.getElementById("bits_S-DES_textarea").value = ""
            for (let k = 0; k < textInput.length; k++) {
                document.getElementById("bits_S-DES_textarea").value += (bitcodeInputText[k] + " ")
            }
            break
        case 2: // Initiale Permutation
            document.getElementById("initialpermutation_S-DES_textarea").value = ""
            document.getElementById("L-Half_S-DES_textarea").value = ""
            document.getElementById("R-Half_S-DES_textarea").value = ""
            for (let k = 0; k < textInput.length; k++) {
                for (let j = 0; j < 8; j++) {
                    bits[j] = bitcodeInputText[k].toString().substring(j, j + 1)
                }
                bitcodeAfterInitialPermutation[k] = bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()).concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString())
                document.getElementById("initialpermutation_S-DES_textarea").value += (bitcodeAfterInitialPermutation[k] + " ")
                document.getElementById("L-Half_S-DES_textarea").value += (bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString()) + " ")
                document.getElementById("R-Half_S-DES_textarea").value += (bits[3].toString().concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()) + " ")
            }
            return bitcodeAfterInitialPermutation
        case 3: // Expansion (1. Durchgang)
            document.getElementById("expansion_S-DES_textarea").value = ""
            for (let k = 0; k < textInput.length; k++) {
                for (let j = 0; j < 8; j++) {
                    bits[j] = bitcodeInputText[k].toString().substring(j, j + 1)
                }
                expandedBitcode[k] = bits[6].toString().concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()).concat(bits[3].toString())
                document.getElementById("expansion_S-DES_textarea").value += (expandedBitcode[k] + " ")
            }
            return expandedBitcode
        case 4: // XOR-Verrechnung mit Schlüssel
            document.getElementById("XOR-key1_S-DES_textarea").value = ""
            expandedBitcode = SDES(3)
            for (let k = 0; k < expandedBitcode.length; k++) {
                firstDefiniteKeyBitcode[k] = keySDES(3)
            }
            XORBits = XOR(expandedBitcode, firstDefiniteKeyBitcode)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("XOR-key1_S-DES_textarea").value += (XORBits[j][0].toString().concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()).concat(XORBits[j][4].toString()).concat(XORBits[j][5].toString()).concat(XORBits[j][6].toString()).concat(XORBits[j][7].toString()) + " ")
            }
            return XORBits
        case 5: // Ausgabe S-Box-Verrechnung
            document.getElementById("s-box_S-DES_textarea").value = ""
            bitcodeAfterSBox = sBoxSDES(SDES(4))
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("s-box_S-DES_textarea").value += (bitcodeAfterSBox[j] + " ")
            }
            break
        case 6: // 4-Bit-Permutation (1. Durchgang)
            document.getElementById("permutation4bit_S-DES_textarea").value = ""
            bitcodeAfterSBox = sBoxSDES(SDES(4))
            for (let k = 0; k < textInput.length; k++) {
                for (let j = 0; j < 4; j++) {
                    bitsAfterSBox[j] = bitcodeAfterSBox[k].substring(j, j + 1)
                }
                bitcodeAfterFirstTurn[k] = bitsAfterSBox[1].toString().concat(bitsAfterSBox[3].toString()).concat(bitsAfterSBox[2].toString()).concat(bitsAfterSBox[0].toString())
                document.getElementById("permutation4bit_S-DES_textarea").value += (bitcodeAfterFirstTurn[k] + " ")
            }
            return bitcodeAfterFirstTurn
        case 7: // XOR-Verrechnung mit linker Hälfte vom Anfang (1. Durchgang)
            document.getElementById("XOR-L-Half_S-DES_textarea").value = ""
            bitcodeAfterInitialPermutation = SDES(2)
            bitcodeAfterFirstTurn = SDES(6)
            for (let k = 0; k < textInput.length; k++) {
                bitcodeLeftHalf[k] = bitcodeAfterInitialPermutation[k].substring(0, 4)
            }
            XORBits = XOR(bitcodeAfterFirstTurn, bitcodeLeftHalf)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("XOR-L-Half_S-DES_textarea").value += (XORBits[j][0].toString().concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()) + " ")
            }
            return XORBits
        case 8: // Zweiter Durchgang (nach SWAP) und inverse initiale Permutation
            document.getElementById("inverseinitialpermutation_S-DES_textarea").value = ""
            XORBits = SDES(7)
            bitcodeAfterInitialPermutation = SDES(2)
            bitcodeAfterFirstTurn = SDES(7)
            for (let j = 0; j < textInput.length; j++) {
                // Expansion 2. Durchgang (nur expandedBitcode)
                expandedBitcode[j] = XORBits[j][3].toString().concat(XORBits[j][0].toString()).concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()).concat(XORBits[j][0].toString())
                secondDefiniteKeyBitcode[j] = keySDES(4)
            }
            bitcodeAfterSBox = sBoxSDES(XOR(expandedBitcode, secondDefiniteKeyBitcode)) // S-Box-Verrechnung und XOR-Verrechnung mit Schlüssel
            for (let k = 0; k < textInput.length; k++) {
                bitcodeRightHalf[k] = bitcodeAfterInitialPermutation[k].substring(4, 8)
                for (let l = 0; l < 4; l++) {
                    bitsAfterSBox[l] = bitcodeAfterSBox[k].substring(l, l + 1)
                }
                bitcodeAfterSecondTurn[k] = bitsAfterSBox[1].toString().concat(bitsAfterSBox[3].toString()).concat(bitsAfterSBox[2].toString()).concat(bitsAfterSBox[0].toString())
            }
            XORBits = XOR(bitcodeAfterSecondTurn, bitcodeRightHalf) // XOR-Verrechnung mit R-Half-S-DES
            for (let m = 0; m < textInput.length; m++) { // Inverse Initiale Permutation
                encryptedBitcode[m] = XORBits[m][3].toString().concat(XORBits[m][0].toString()).concat(XORBits[m][2].toString()).concat(bitcodeAfterFirstTurn[m][0]).concat(bitcodeAfterFirstTurn[m][2]).concat(XORBits[m][1].toString()).concat(bitcodeAfterFirstTurn[m][3]).concat(bitcodeAfterFirstTurn[m][1])
                document.getElementById("inverseinitialpermutation_S-DES_textarea").value += (encryptedBitcode[m] + " ")
            }
            return encryptedBitcode
        case 9: // Ausgabe in Zeichen
            document.getElementById("chiffrentext_S-DES_textarea").value = ""
            encryptedBitcode = SDES(8)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("chiffrentext_S-DES_textarea").value += String.fromCharCode(parseInt(encryptedBitcode[j], 2))
            }
            break
        case 10:
            document.getElementById("bitcodeDechiffriert_S-DES_textarea").value = ""
            encryptedBitcode = SDES(8)
            for (let k = 0; k < textInput.length; k++) {
                for (let j = 0; j < 8; j++) {
                    bits[j] = encryptedBitcode[k].toString().substring(j, j + 1)
                }
                expandedBitcode[k] = bits[6].toString().concat(bits[3].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString()).concat(bits[3].toString())
            }
            bitcodeAfterSBox = sBoxSDES(XOR(expandedBitcode, keySDES(4)))
            for (let k = 0; k < textInput.length; k++) {
                for (let l = 0; l < 4; l++) {
                    bitsAfterSBox[l] = bitcodeAfterSBox[k].substring(l, l + 1)
                }
                bitcodeAfterFirstTurn[k] = bitsAfterSBox[1].toString().concat(bitsAfterSBox[3].toString()).concat(bitsAfterSBox[2].toString()).concat(bitsAfterSBox[0].toString())
                bitcodeLeftHalf[k] = bits[1].toString().concat(bits[5].toString()).concat(bits[2].toString()).concat(bits[0].toString())
            }
            XORBits = XOR(bitcodeAfterFirstTurn, bitcodeLeftHalf)
            for (let k = 0; k < textInput.length; k++) {
                expandedBitcode[k] = XORBits[k][3].toString().concat(XORBits[k][0].toString()).concat(XORBits[k][1].toString()).concat(XORBits[k][2].toString()).concat(XORBits[k][1].toString()).concat(XORBits[k][2].toString()).concat(XORBits[k][3].toString()).concat(XORBits[k][0].toString())
            }
            bitcodeAfterSBox = sBoxSDES(XOR(expandedBitcode, keySDES(3))) // S-Box-Verrechnung und XOR-Verrechnung mit Schlüssel
            for (let k = 0; k < textInput.length; k++) {
                for (let l = 0; l < 4; l++) {
                    bitsAfterSBox[l] = bitcodeAfterSBox[k].substring(l, l + 1)
                }
                bitcodeAfterSecondTurn[k] = bitsAfterSBox[1].toString().concat(bitsAfterSBox[3].toString()).concat(bitsAfterSBox[2].toString()).concat(bitsAfterSBox[0].toString())
                bitcodeRightHalf[k] = bits[3].toString().concat(bits[7].toString()).concat(bits[4].toString()).concat(bits[6].toString())
            }
            XORBits = XOR(bitcodeAfterSecondTurn, bitcodeRightHalf) // XOR-Verrechnung mit R-Half-S-DES
            for (let m = 0; m < textInput.length; m++) { // Inverse Initiale Permutation
                decryptedBitcode[m] = XORBits[m][3].toString().concat(XORBits[m][0].toString()).concat(XORBits[m][2].toString()).concat(bitcodeAfterFirstTurn[m][0]).concat(bitcodeAfterFirstTurn[m][2]).concat(XORBits[m][1].toString()).concat(bitcodeAfterFirstTurn[m][3]).concat(bitcodeAfterFirstTurn[m][1])
                document.getElementById("bitcodeDechiffriert_S-DES_textarea").value += (decryptedBitcode[m] + " ")
            }
            return decryptedBitcode
        case 11:
            document.getElementById("textDechiffriert_S-DES_textarea").value = ""
            decryptedBitcode = SDES(10)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("textDechiffriert_S-DES_textarea").value += String.fromCharCode(parseInt(decryptedBitcode[j], 2))
            }
            break
    }
}


function keySDES(Funktion) { // Schlüsselerzeugung
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = parseInt(mainKey.substring(j, j + 1))
    }
    switch (Funktion) {
        case 1: // 10-Bit-Permutation (erster Schlüssel)
            document.getElementById("permutation_10bit_key_S-DES_textarea").value = ""
            document.getElementById("permutation_10bit_key_S-DES_textarea").value = keyBits[2].toString().concat(keyBits[4].toString()).concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[9].toString()).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString())
            break
        case 2: // 1-Bit-Links-Shift (erster Schlüssel)
            document.getElementById("1-L-Shift_S-DES_key_textarea").value = ""
            document.getElementById("1-L-Shift_S-DES_key_textarea").value = keyBits[4].toString().concat(keyBits[1].toString()).concat(keyBits[6].toString()).concat(keyBits[3].toString()).concat(keyBits[2]).concat(keyBits[0].toString()).concat(keyBits[8].toString()).concat(keyBits[7].toString()).concat(keyBits[5].toString()).concat(keyBits[9])
            break
        case 3: // Ausgabe Erster Schlüssel (8-Bit-Permutation)
            document.getElementById("permutation8bit_S-DES_key_textarea").value = ""
            let firstDefiniteKeyBitcode = keyBits[0].toString().concat(keyBits[6].toString()).concat(keyBits[8]).concat(keyBits[3].toString()).concat(keyBits[7].toString()).concat(keyBits[2].toString()).concat(keyBits[9].toString()).concat(keyBits[5].toString())
            document.getElementById("permutation8bit_S-DES_key_textarea").value = firstDefiniteKeyBitcode
            return firstDefiniteKeyBitcode
        case 4: // Ausgabe Zweiter Schlüssel (Bits nach der 10-Bit-Permutation schriftlich rotiert (s.unten) und danach die 8-Bit-Permutation durchgeführt
            // Nach der Rotation: 1,6,3,2,4, 8,7,5,9,0
            return keyBits[8].toString().concat(keyBits[3].toString()).concat(keyBits[7]).concat(keyBits[2].toString()).concat(keyBits[5].toString()).concat(keyBits[4].toString()).concat(keyBits[0].toString()).concat(keyBits[9].toString())
    }
}

function sBoxSDES(Input) { // Verrechnung mit den beiden S-Boxen des Simple-DES
    let sBox0 = [["01","11","00","11"],["00","10","10","01"],["11","01","01","11"],["10","00","11","10"]]
    let sBox1 = [["00","10","11","10"],["01","00","00","01"],["10","01","01","00"],["11","11","00","11"]]
    let bitsAfterSBox = []
    let bitcodeAfterSBox = []

    for (let i = 0; i < Input.length; i++) {
        if (Input[i][0].toString().concat(Input[i][3].toString()) === "00" && Input[i][1].toString().concat(Input[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][0]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "01" && Input[i][1].toString().concat(Input[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][1]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "10" && Input[i][1].toString().concat(Input[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][2]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "11" && Input[i][1].toString().concat(Input[i][2].toString()) === "00") {
            bitsAfterSBox[0] = sBox0[0][3]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "00" && Input[i][1].toString().concat(Input[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][0]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "01" && Input[i][1].toString().concat(Input[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][1]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "10" && Input[i][1].toString().concat(Input[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][2]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "11" && Input[i][1].toString().concat(Input[i][2].toString()) === "01") {
            bitsAfterSBox[0] = sBox0[1][3]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "00" && Input[i][1].toString().concat(Input[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][0]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "01" && Input[i][1].toString().concat(Input[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][1]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "10" && Input[i][1].toString().concat(Input[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][2]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "11" && Input[i][1].toString().concat(Input[i][2].toString()) === "10") {
            bitsAfterSBox[0] = sBox0[2][3]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "00" && Input[i][1].toString().concat(Input[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][0]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "01" && Input[i][1].toString().concat(Input[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][1]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "10" && Input[i][1].toString().concat(Input[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][2]
        } else if (Input[i][0].toString().concat(Input[i][3].toString()) === "11" && Input[i][1].toString().concat(Input[i][2].toString()) === "11") {
            bitsAfterSBox[0] = sBox0[3][3]
        }

        if (Input[i][4].toString().concat(Input[i][7].toString()) === "00" && Input[i][5].toString().concat(Input[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][0]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "01" && Input[i][5].toString().concat(Input[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][1]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "10" && Input[i][5].toString().concat(Input[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][2]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "11" && Input[i][5].toString().concat(Input[i][6].toString()) === "00") {
            bitsAfterSBox[1] = sBox1[0][3]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "00" && Input[i][5].toString().concat(Input[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][0]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "01" && Input[i][5].toString().concat(Input[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][1]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "10" && Input[i][5].toString().concat(Input[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][2]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "11" && Input[i][5].toString().concat(Input[i][6].toString()) === "01") {
            bitsAfterSBox[1] = sBox1[1][3]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "00" && Input[i][5].toString().concat(Input[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][0]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "01" && Input[i][5].toString().concat(Input[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][1]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "10" && Input[i][5].toString().concat(Input[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][2]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "11" && Input[i][5].toString().concat(Input[i][6].toString()) === "10") {
            bitsAfterSBox[1] = sBox1[2][3]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "00" && Input[i][5].toString().concat(Input[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][0]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "01" && Input[i][5].toString().concat(Input[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][1]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "10" && Input[i][5].toString().concat(Input[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][2]
        } else if (Input[i][4].toString().concat(Input[i][7].toString()) === "11" && Input[i][5].toString().concat(Input[i][6].toString()) === "11") {
            bitsAfterSBox[1] = sBox1[3][3]
        }

        bitcodeAfterSBox[i] = bitsAfterSBox[0].concat(bitsAfterSBox[1])
    }

    return bitcodeAfterSBox
}



function runAll() {
    }

/* function run(checkbox[true]) {

} // Mit Checkboxes anwählen was angezeigt/ ausgeführt wird und was nicht


 */

// Mails verschicken für Kommunikation miteinander