//UTILIZAREMOS EL DOM PARA CONTROALR ALGUNAS ETIQUETAS DE HTML

//PASOS PARA USAR EL DOM

//1. Creamos una variable para almcanebar en JS la etiqueta HTML que queremos controlar
let botonFormulario = document.getElementById("boton")

//2. detectar el clic en el boton
botonFormulario.addEventListener("click", capturarDatos)

//3. Declarar la funcion que se llama en el paso 2
function capturarDatos() {
    console.log("estas haciendo clic")
    let fotoProducto = document.getElementById("foto") //img
    fotoProducto.src = "img/pizza.jpeg"

}