/* Funktionen für die Webseite */

/* Funktionen zur Verschlüsselung */
function copy(){
    document.getElementById("chiffrentext").value = document.getElementById("klartext").value
}

function encode(){

    let text = document.getElementById("klartext").value
    let firstPart = text.substring(0, text.length/2)
    let secondPart = text.substring(text.length/2, text.length)
    document.getElementById("chiffrentext").value = secondPart.concat(firstPart)

}