document.getElementById('btn').addEventListener('click', llamar, false);
function llamar(){
    /* document.write(document.getElementById('name').value); */
    document.getElementById("textred").style.color = "red";
    let contenido = document.getElementById("name").value;
    document.getElementById("displayText").innerHTML = contenido;
}