document.getElementById("mostrar").addEventListener("click", mostrar, false)
document.getElementById("agregar").addEventListener("click", agregar, false)
const cor = "https://cors-anywhere.herokuapp.com/"
function mostrar(){
    let data =""
    console.log("ojo")
    fetch(cor+"https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i<data.length; i++) {
            document.getElementById("tabla").innerHTML += "<tr>"+"<td>"+data[i].id+"</td>"+"<td>"+data[i].name+"</td>"+"<td>"+data[i].salary+"</td>"+"</tr>"
        }    
    })
    console.log(data)
}
function agregar(){
    nombre = document.getElementById("nombre").value
    salario = document.getElementById("salario").value
    data1 ={
        name:nombre,
        salary:salario
    }
    opciones={
        method: 'POST',
        body:JSON.stringify(data1),
        header:{
            'Content-Type': 'application/json'
        }
    }
    console.log(data1)
    fetch(cor+'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees' , opciones)
}