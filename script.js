const imagen = document.semaforo;
const boton = document.getElementById('stop')
let color = 'r';
let intervalo;

function parar() {
    clearInterval(intervalo);
}
function verdeAmarillo() {
    imagen.src = "./img/a.png";
    return 'a';
}
function amarilloRojo() {
    imagen.src = "./img/r.png";
    return 'r';
}
function rojoVerde() {
    imagen.src = "./img/v.png";
    return 'v';
}
function cambioColor() {
    switch (color) {
        case 'r':
            color = rojoVerde();
            break;
        case 'a':
            color=amarilloRojo();
            break;
        case 'v':
            color=verdeAmarillo();
            break;
        default:
            break;
    }
    console.log(color)
}
function inicio() {
    intervalo=setInterval(cambioColor, 3500)
}