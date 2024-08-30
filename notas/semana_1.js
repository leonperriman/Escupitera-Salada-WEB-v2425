const usuario = localStorage.getItem("usuario");

const notas = window.UsuariosEscupi[usuario].notas.semana_1;

document.getElementById("n-l").innerHTML = notas["L"];
document.getElementById("n-m").innerHTML = notas["M"];
document.getElementById("n-x").innerHTML = notas["X"];
document.getElementById("n-j").innerHTML = notas["J"];
document.getElementById("n-v").innerHTML = notas["V"];
