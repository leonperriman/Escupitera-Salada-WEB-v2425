const usuario = localStorage.getItem("usuario");
//console.log(usuario)

const cuerpoTabla = document.getElementById("tabla-notas");

function addCampo(tr, valor) {
  const td = document.createElement("td");
  td.textContent = valor;
  tr.appendChild(td);
}

const DIAS_SEMANA = ["L", "M", "X", "J", "V"];

// Lista de datos de los alumnos
const alumnos = [];

// Procesamos los datos de la base de datos y rellenamos la lista de alumnos cada uno con su información
Object.entries(window.UsuariosEscupi).forEach(([key, value]) => {
  const alumno = {
    nombre: value.name,
  };
  let total = 0;
  DIAS_SEMANA.forEach((dia) => {
    const nota = value.notas.semana_1[dia];
    alumno[dia] = nota;
    total = total + nota;
  });
  alumno.total = total;

  if (key == usuario) {
    alumno.azul = true;
  }
  alumnos.push(alumno);
});

console.log(alumnos);

// Ordenamos los alumnos poniendo los que tienen más nota arriba
alumnos.sort((alumno1, alumno2) => {
  if (alumno2.total > alumno1.total) {
    return 1;
  }
  if (alumno2.total == alumno1.total) {
    // Si tienen la misma nota, por orden alfabético
    if (alumno2.nombre.toUpperCase() < alumno1.nombre.toUpperCase()) {
      return 1;
    }
  }
  return -1;
});

// Pintamos los datos de los alumnos en la tabla de la pantalla
let contador = 1;
alumnos.forEach((alumno) => {
  const tr = document.createElement("tr");
  if (alumno.azul == true) {
    tr.classList.add("table-info");
  }

  addCampo(tr, contador);
  addCampo(tr, alumno.nombre);
  DIAS_SEMANA.forEach((dia) => {
    addCampo(tr, alumno[dia]);
  });
  addCampo(tr, alumno.total);
  cuerpoTabla.appendChild(tr);
  contador = contador + 1;
});

//negativos

//console.log(usuario)
const negativos = window.UsuariosEscupi[usuario].negativos;

//document.getElementById("nombre3").innerHTML = usuario;

// console.log(localStorage.getItem('usuario'));

document.getElementById("td1").innerHTML = negativos["t1"];
document.getElementById("td2").innerHTML = negativos["t2"];
document.getElementById("td3").innerHTML = negativos["t3"];
document.getElementById("td4").innerHTML = negativos["t4"];

// console.log(localStorage.getItem('usuario'));

// document.getElementById("n-l").innerHTML = notas["L"];
// document.getElementById("n-m").innerHTML = notas["M"];
// document.getElementById("n-x").innerHTML = notas["X"];
// document.getElementById("n-j").innerHTML = notas["J"];
// document.getElementById("n-v").innerHTML = notas["V"];
