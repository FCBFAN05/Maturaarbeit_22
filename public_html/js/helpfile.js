function SDES(Funktion) {
    let textInput = document.getElementById("klartext_S-DES_textarea").value
    let bitcodeInputText = []
    let expandedBitcode = []
    let bitcodeAfterFirstTurn = []
    let bitcodeAfterInitialPermutation = []
    let XORBits = []
    let XORBits2  = []
    let bitcodeAfterSBox = []
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
            bitcodeAfterInitialPermutation = permute(bitcodeInputText, "IP_S-DES")
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("initialpermutation_S-DES_textarea").value += (bitcodeAfterInitialPermutation[j] + " ")
                document.getElementById("L-Half_S-DES_textarea").value += (bitcodeAfterInitialPermutation[j].substring(0,4) + " ")
                document.getElementById("R-Half_S-DES_textarea").value += (bitcodeAfterInitialPermutation[j].substring(4,8)+ " ")
            }
            return bitcodeAfterInitialPermutation
        case 3: // Expansion (1. Durchgang)
            document.getElementById("expansion_S-DES_textarea").value = ""
            let rHalfAfterInitialPermutation = []
            bitcodeAfterInitialPermutation = SDES(2)
            for (let j = 0; j < textInput.length; j++) {
                rHalfAfterInitialPermutation[j] = bitcodeAfterInitialPermutation[j].substring(4,8)
            }
            expandedBitcode = permute(rHalfAfterInitialPermutation, "EP_8bit")
            for (let k = 0; k < textInput.length; k++) {
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
            bitcodeAfterFirstTurn = permute(bitcodeAfterSBox, "P4_S-DES")
            for (let k = 0; k < textInput.length; k++) {
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
            for (let j = 0; j < textInput.length; j++) {
                // Expansion 2. Durchgang (nur expandedBitcode)
                expandedBitcode[j] = XORBits[j][3].toString().concat(XORBits[j][0].toString()).concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()).concat(XORBits[j][0].toString())
                secondDefiniteKeyBitcode[j] = keySDES(4)
                bitcodeRightHalf[j] = bitcodeAfterInitialPermutation[j].substring(4,8)
            }
            bitcodeAfterSBox = sBoxSDES(XOR(expandedBitcode, secondDefiniteKeyBitcode)) // S-Box-Verrechnung und XOR-Verrechnung mit Schlüssel
            bitcodeAfterSecondTurn = permute(bitcodeAfterSBox, "P4_S-DES")
            XORBits2 = XOR(bitcodeAfterSecondTurn, bitcodeRightHalf) // XOR-Verrechnung mit R-Half-S-DES
            for (let m = 0; m < textInput.length; m++) { // Inverse Initiale Permutation
                encryptedBitcode[m] = XORBits2[m][3].toString().concat(XORBits2[m][0].toString()).concat(XORBits2[m][2].toString()).concat(XORBits[m][0]).concat(XORBits[m][2]).concat(XORBits2[m][1].toString()).concat(XORBits[m][3]).concat(XORBits[m][1])
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
            bitcodeAfterInitialPermutation = permute(encryptedBitcode, "IP_S-DES")
            for (let i = 0; i < textInput.length; i++) {
                bitcodeRightHalf[i] = bitcodeAfterInitialPermutation[i].substring(4,8)
                secondDefiniteKeyBitcode[i] = keySDES(4)
            }
            expandedBitcode = permute(bitcodeRightHalf, "EP_8bit")
            bitcodeAfterSBox = sBoxSDES(XOR(expandedBitcode, secondDefiniteKeyBitcode))
            bitcodeAfterFirstTurn = permute(bitcodeAfterSBox, "P4_S-DES")
            for (let j = 0; j < textInput.length; j++) {
                bitcodeLeftHalf[j] = bitcodeAfterInitialPermutation[j].substring(0,4)
            }
            XORBits = XOR(bitcodeAfterFirstTurn, bitcodeLeftHalf)
            for (let k = 0; k < textInput.length; k++) {
                expandedBitcode[k] = XORBits[k][3].toString().concat(XORBits[k][0].toString()).concat(XORBits[k][1].toString()).concat(XORBits[k][2].toString()).concat(XORBits[k][1].toString()).concat(XORBits[k][2].toString()).concat(XORBits[k][3].toString()).concat(XORBits[k][0].toString())
                bitcodeRightHalf[k] = bitcodeAfterInitialPermutation[k].toString().substring(4,8)
                firstDefiniteKeyBitcode[k] = keySDES(3)
            }
            bitcodeAfterSBox = sBoxSDES(XOR(expandedBitcode, firstDefiniteKeyBitcode)) // S-Box-Verrechnung und XOR-Verrechnung mit Schlüssel
            bitcodeAfterSecondTurn = permute(bitcodeAfterSBox, "P4_S-DES")
            XORBits2 = XOR(bitcodeAfterSecondTurn, bitcodeRightHalf) // XOR-Verrechnung mit R-Half-S-DES
            for (let m = 0; m < textInput.length; m++) { // Inverse Initiale Permutation
                decryptedBitcode[m] = XORBits2[m][3].toString().concat(XORBits2[m][0].toString()).concat(XORBits2[m][2].toString()).concat(XORBits[m][0]).concat(XORBits[m][2]).concat(XORBits2[m][1].toString()).concat(XORBits[m][3]).concat(XORBits[m][1])
                document.getElementById("bitcodeDechiffriert_S-DES_textarea").value += (decryptedBitcode[m] + " ")
            }
            console.log(decryptedBitcode)
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

function troesch(Funktion) {
    let textInput = document.getElementById("klartext_troesch_verschluesselungstechnik_textarea").value
    let bitcodeInputText = []
    let expandedBitcode = []
    let bitcodeAfterFirstTurn = []
    let bitcodeAfterInitialPermutation = []
    let XORBits = []
    let bitcodeAfterSBox = []
    let encryptedBitcode = []
    let firstDefiniteKeyBitcode = []
    let secondDefiniteKeyBitcode = []
    let bitcodeAfter8bit = []
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
            document.getElementById("bits_troesch_verschluesselungstechnik_textarea").value = ""
            for (let k = 0; k < textInput.length; k++) {
                document.getElementById("bits_troesch_verschluesselungstechnik_textarea").value += (bitcodeInputText[k] + " ")
            }
            break
        case 2: // Initiale Permutation
            document.getElementById("initialpermutation_troesch_verschluesselungstechnik_textarea").value = ""
            document.getElementById("L-Half_troesch_verschluesselungstechnik_textarea").value = ""
            document.getElementById("R-Half_troesch_verschluesselungstechnik_textarea").value = ""
            bitcodeAfterInitialPermutation = permute(bitcodeInputText, "IP_S-DES")
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("initialpermutation_troesch_verschluesselungstechnik_textarea").value += (bitcodeAfterInitialPermutation[j] + " ")
                document.getElementById("L-Half_troesch_verschluesselungstechnik_textarea").value += (bitcodeAfterInitialPermutation[j].substring(0,4) +" ")
                document.getElementById("R-Half_troesch_verschluesselungstechnik_textarea").value += (bitcodeAfterInitialPermutation[j].substring(4,8) + " ")
            }
            return bitcodeAfterInitialPermutation
        case 3: // Expansion (1. Durchgang)
            document.getElementById("expansion_troesch_verschluesselungstechnik_textarea").value = ""
            bitcodeAfterInitialPermutation = troesch(2)
            let rHalfAfterInitialPermutation = []
            for (let j = 0; j < textInput.length; j++) {
                rHalfAfterInitialPermutation[j] = bitcodeAfterInitialPermutation[j].substring(4,8)
            }
            expandedBitcode = permute(rHalfAfterInitialPermutation, "EP_8bit")
            for (let k = 0; k < textInput.length; k++) {
                document.getElementById("expansion_troesch_verschluesselungstechnik_textarea").value += (expandedBitcode[k] + " ")
            }
            return expandedBitcode
        case 4: // XOR-Verrechnung mit Schlüssel
            document.getElementById("XOR-key1_troesch_verschluesselungstechnik_textarea").value = ""
            expandedBitcode = troesch(3)
            for (let k = 0; k < textInput.length; k++) {
                firstDefiniteKeyBitcode[k] = keyTroesch(4)
            }
            XORBits = XOR(expandedBitcode, firstDefiniteKeyBitcode)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("XOR-key1_troesch_verschluesselungstechnik_textarea").value += (XORBits[j][0].toString().concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()).concat(XORBits[j][4].toString()).concat(XORBits[j][5].toString()).concat(XORBits[j][6].toString()).concat(XORBits[j][7].toString()) + " ")
            }
            return XORBits
        case 5: // 8-bit-Permutation
            XORBits = troesch(4)
            for (let j = 0; j < textInput.length; j++) {
                bitcodeAfter8bit[j] = XORBits[j][1].concat(XORBits[j][6]).concat(XORBits[j][4]).concat(XORBits[j][2]).concat(XORBits[j][7]).concat(XORBits[j][0]).concat(XORBits[j][5]).concat(XORBits[j][3])
                document.getElementById("permutation8bit_troesch_verschluesselungstechnik_textarea").value += (bitcodeAfter8bit[j] + " ")
            }
            return bitcodeAfter8bit

        case 6: // Ausgabe S-Box-Verrechnung
            document.getElementById("s-box_troesch_verschluesselungstechnik_textarea").value = ""
            bitcodeAfterSBox = sBoxTroesch(troesch(5))
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("s-box_troesch_verschluesselungstechnik_textarea").value += (bitcodeAfterSBox[j] + " ")
            }
            break
        case 7: // 4-Bit-Permutation (1. Durchgang)
            document.getElementById("permutation4bit_troesch_verschluesselungstechnik_textarea").value = ""
            bitcodeAfterSBox = sBoxTroesch(troesch(5))
            bitcodeAfterFirstTurn = permute(bitcodeAfterSBox, "P4_troesch")
            for (let k = 0; k < textInput.length; k++) {
                document.getElementById("permutation4bit_troesch_verschluesselungstechnik_textarea").value += (bitcodeAfterFirstTurn[k] + " ")
            }
            return bitcodeAfterFirstTurn
        case 8: // XOR-Verrechnung mit linker Hälfte vom Anfang (1. Durchgang)
            document.getElementById("XOR-L-Half_troesch_verschluesselungstechnik_textarea").value = ""
            bitcodeAfterInitialPermutation = troesch(2)
            bitcodeAfterFirstTurn = troesch(7)
            for (let k = 0; k < textInput.length; k++) {
                bitcodeLeftHalf[k] = bitcodeAfterInitialPermutation[k].substring(0, 4)
            }
            XORBits = XOR(bitcodeAfterFirstTurn, bitcodeLeftHalf)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("XOR-L-Half_troesch_verschluesselungstechnik_textarea").value += (XORBits[j][0].toString().concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()) + " ")
            }
            return XORBits
        case 9: // Zweiter Durchgang (nach SWAP) und inverse initiale Permutation
            document.getElementById("inverseinitialpermutation_troesch_verschluesselungstechnik_textarea").value = ""
            XORBits = troesch(8)
            bitcodeAfterInitialPermutation = troesch(2)
            bitcodeAfterFirstTurn = troesch(7)
            for (let j = 0; j < textInput.length; j++) {
                // Expansion 2. Durchgang (nur expandedBitcode)
                expandedBitcode[j] = XORBits[j][3].toString().concat(XORBits[j][0].toString()).concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][1].toString()).concat(XORBits[j][2].toString()).concat(XORBits[j][3].toString()).concat(XORBits[j][0].toString())
                secondDefiniteKeyBitcode[j] = keyTroesch(4)
                bitcodeRightHalf[j] = bitcodeAfterInitialPermutation[j].toString().substring(4, 8)
            }
            XORBits = XOR(expandedBitcode, secondDefiniteKeyBitcode)
            for (let j = 0; j < textInput.length; j++) {
                bitcodeAfter8bit[j] = XORBits[j][1].concat(XORBits[j][6]).concat(XORBits[j][4]).concat(XORBits[j][2]).concat(XORBits[j][7]).concat(XORBits[j][0]).concat(XORBits[j][5]).concat(XORBits[j][3])
            }
            bitcodeAfterSBox = sBoxTroesch(bitcodeAfter8bit) // S-Box-Verrechnung und XOR-Verrechnung mit Schlüssel
            bitcodeAfterSecondTurn = permute(bitcodeAfterSBox, "P4_S-DES")
            XORBits = XOR(bitcodeAfterSecondTurn, bitcodeRightHalf) // XOR-Verrechnung mit R-Half-S-DES
            for (let m = 0; m < textInput.length; m++) { // Inverse Initiale Permutation
                encryptedBitcode[m] = bitcodeAfterFirstTurn[m][3].concat(XORBits[m][2]).concat(XORBits[m][0]).concat(bitcodeAfterFirstTurn[m][0]).concat(XORBits[m][3]).concat(bitcodeAfterFirstTurn[m][3]).concat(XORBits[m][1]).concat(bitcodeAfterFirstTurn[m][1])
                document.getElementById("inverseinitialpermutation_troesch_verschluesselungstechnik_textarea").value += (encryptedBitcode[m] + " ")
            }
            return encryptedBitcode
        case 10: // Ausgabe in Zeichen
            document.getElementById("chiffrentext_troesch_verschluesselungstechnik_textarea").value = ""
            encryptedBitcode = troesch(9)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("chiffrentext_troesch_verschluesselungstechnik_textarea").value += String.fromCharCode(parseInt(encryptedBitcode[j], 2))
            }
            break
        case 11:
            document.getElementById("bitcodeDechiffriert_troesch_verschluesselungstechnik_textarea").value = ""
            encryptedBitcode = troesch(9);
            bitcodeAfterInitialPermutation = permute(encryptedBitcode, "IP_troesch");
            expandedBitcode = permute(bitcodeAfterInitialPermutation, "EP_8bit");
            bitcodeAfterSBox = sBoxTroesch(XOR(expandedBitcode, keyTroesch(4)));
            bitcodeAfterFirstTurn = permute(bitcodeAfterSBox, "P4_troesch");
            for (let j = 0; j < textInput.length; j++) {
                bitcodeLeftHalf[j] = encryptedBitcode[j].toString().substring(0, 4);
            }
            XORBits = XOR(bitcodeAfterFirstTurn, bitcodeLeftHalf)
            for (let k = 0; k < textInput.length; k++) {
                expandedBitcode[k] = XORBits[k][3].toString().concat(XORBits[k][0].toString()).concat(XORBits[k][1].toString()).concat(XORBits[k][2].toString()).concat(XORBits[k][1].toString()).concat(XORBits[k][2].toString()).concat(XORBits[k][3].toString()).concat(XORBits[k][0].toString())
            }
            bitcodeAfterSBox = sBoxTroesch(XOR(expandedBitcode, keyTroesch(3))) // S-Box-Verrechnung und XOR-Verrechnung mit Schlüssel
            bitcodeAfterSecondTurn = permute(bitcodeAfterSBox, "P4_troesch")
            for (let l = 0; l < textInput.length; l++) {
                bitcodeRightHalf[l] = encryptedBitcode[l].toString().substring(4,8)
            }
            XORBits = XOR(bitcodeAfterSecondTurn, bitcodeRightHalf) // XOR-Verrechnung mit R-Half-S-DES
            for (let m = 0; m < textInput.length; m++) { // Inverse Initiale Permutation
                decryptedBitcode[m] = bitcodeAfterFirstTurn[m][3].concat(XORBits[m][2]).concat(XORBits[m][0]).concat(bitcodeAfterFirstTurn[m][0]).concat(XORBits[m][3]).concat(bitcodeAfterFirstTurn[m][3]).concat(XORBits[m][1]).concat(bitcodeAfterFirstTurn[m][1])
                document.getElementById("bitcodeDechiffriert_troesch_verschluesselungstechnik_textarea").value += (decryptedBitcode[m] + " ")
            }
            return decryptedBitcode
        case 12:
            document.getElementById("textDechiffriert_troesch_verschluesselungstechnik_textarea").value = ""
            decryptedBitcode = SDES(10)
            for (let j = 0; j < textInput.length; j++) {
                document.getElementById("textDechiffriert_troesch_verschluesselungstechnik_textarea").value += String.fromCharCode(parseInt(decryptedBitcode[j], 2))
            }
            break
    }
}