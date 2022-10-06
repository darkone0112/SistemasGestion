document.getElementById('saludar').addEventListener('click', llamar, false);
function llamar() {
    var input = [];
    var error = 0;
    input = document.getElementsByTagName("input");
    var textred = [];
    textred = document.getElementsByTagName("p");

    for (let i = 0; i < input.length; i++) {
        if (input[i].value == ''){
            error = 1;
            textred[i].style.color = "red";
        }
    }
    if (error == 0) {
        alert("todo bien");
    }else{
        alert("debes rellenar los campo");
    }
    
    

}

    