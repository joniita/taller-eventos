
const div = document.getElementById('divBoton');
const boton = document.getElementById('boton');

boton.addEventListener('click', function (event) {
    event.stopPropagation()
    alert("soy el boton")
})

div.addEventListener('click', function () {
    alert("Hola! Soy el div");
});