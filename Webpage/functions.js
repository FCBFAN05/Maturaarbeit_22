/* Funktionen für die Webseite */

/* Funktionen zur Verschlüsselung */
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
    let clearText = document.getElementById("klartext_caesar").value
    let movement = parseInt(document.getElementById("verschiebung_caesar").value)
    let cipherText = ""

    let ascii = [clearText.length]
    for (let i=0; i<clearText.length; i++) {
        ascii[i] = clearText.charCodeAt(i)
    }
    for (let i=0; i<ascii.length; i++) {
        cipherText += String.fromCharCode(ascii[i]+movement)
    }
    document.getElementById("chiffrentext_caesar").value = cipherText
}