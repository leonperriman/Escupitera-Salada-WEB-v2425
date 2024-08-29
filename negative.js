const usuario = localStorage.getItem("usuario");
//console.log(usuario);
const notas = window.UsuariosEscupi[usuario].negativos;

document.getElementById("nombre3").innerHTML = usuario;

// console.log(localStorage.getItem('usuario'));

document.getElementById("td1").innerHTML = notas["t1"];
document.getElementById("td2").innerHTML = notas["t2"];
document.getElementById("td3").innerHTML = notas["t3"];
document.getElementById("td4").innerHTML = notas["t4"];
