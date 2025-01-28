//Capturamos el input
let amigonuevo = document.getElementById("amigo");
//Creamos una lista vacia
let amigos = [];
//Creamos una funcion para agregar nombres a la lista
function agregarAmigo(){
    let nombre = amigonuevo.value;
    //Preguntamos si el campo esta vacio o no
    if (nombre !== ""){
        //Aggregamos el nombre a la lista
        amigos.push(nombre);
        //Limpiamos el input
        amigonuevo.value = "";
        //Llamamos ala funcion para crear una lista en HTML
        agregarLista();
    } else {
        //La alerta es por si el usuario no ingresa nada
        alert("Por favor ingresa un nombre")
    }
    console.log(amigos);
}
//Creams una funcion para la lista
function agregarLista(){
    //Limpiamos la lista
    listaAmigos.innerHTML = ""
    //Bucle para recorrer la lista y crear elementos
    for (var amigo of amigos){
        var li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
      let ganador = amigos[Math.floor(Math.random() * amigos.length)];
      resultado.innerHTML = ganador;
    } else {
      alert("La lista está vacía. Agrega al menos un amigo.");
    }
  }
  
