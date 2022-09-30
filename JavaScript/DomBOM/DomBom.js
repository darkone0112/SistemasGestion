document.getElementById('btn').addEventListener('click', llamar, false);
function llamar(){
    var e = document.getElementById("mySelect");
    var value = e.value
    var estilo = document.getElementById("textred").style;
    switch (value) {
        case "red":
            estilo.color = "red";
            break;
        case "blue": 
            estilo.color = "blue";
        break;
        case "green":
            estilo.color = "green";
        break;
        default:
            break;
    }
    var negrita = document.getElementById("negrita").checked;
    var cursiva = document.getElementById("cursiva").checked;
    var tachado = document.getElementById("tachado").checked;
    if (negrita == true) {
        document.getElementById("textred").style.fontWeight = "bold";
    }
    if (cursiva == true) {
        document.getElementById("textred").style.fontStyle= "italic";
    }
    if (tachado == true) {
        document.getElementById("textred").style.textDecoration = "line-through";
    }
    /* document.write(document.getElementById('name').value); */
    let contenido = document.getElementById("name").value;
    /* document.getElementById("displayText").innerHTML = contenido; */
    document.getElementById("textred").innerHTML = contenido;
}