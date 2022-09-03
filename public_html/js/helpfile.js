function keySDES(Funktion) { // Schlüsselerzeugung
    let mainKey = document.getElementById("main key_S-DES_textarea_input").value
    let keyBits = []

    for (let j = 0; j < 10; j++) {
        keyBits[j] = mainKey.substring(j, j + 1)
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
            return keyBits[8].toString().concat(keyBits[3].toString()).concat(keyBits[7].toString()).concat(keyBits[2].toString()).concat(keyBits[5].toString()).concat(keyBits[4].toString()).concat(keyBits[0].toString()).concat(keyBits[9].toString())
    }
}