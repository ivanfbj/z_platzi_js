var reset = document.getElementById("btn-reload");
//reset.addEventListener("click",reloadBtn)
//function reloadBtn() {location.reload();}
reset.addEventListener("click", function () {
  location.reload();
});
//document.getElementById("btn-reload").addEventListener("click",function() {location.reload();})

//Declaracion de variables
var vp = document.getElementById("villaplatzi"); // obtetener etiqueta del HTML el cual un canvas
var papel = vp.getContext("2d"); // definifir el plano del canvas

var fondo = {
  url: "images/tile.png",
  cargaOk: false,
};

var vaca = {
  url: "images/vaca.png",
  cargaOk: false,
};

var cerdo = {
  url: "images/cerdo.png",
  cargaOk: false,
};

var pollo = {
  url: "images/pollo.png",
  cargaOk: false,
};

var cantidadAnimales = aleatorio(1, 10);

/*Eventos y ejecución de funciones */

fondo.imagen = new Image(); //crear objeto Image
fondo.imagen.src = fondo.url; // asignación de la ruta de la imagen al atributo "src" para que lo pinte en el HTML
fondo.imagen.addEventListener("load", cargarFondo); //Asignar la función de "load" para que al realizar el evento de cargue ejecute la función que se encarga de pintar la imagen

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

/*Creacion de todas las funciones */
function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk == true) {
    console.log(cantidadAnimales);
    for (let v = 0; v < cantidadAnimales; v++) {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 7);
      x = x * 40;
      y = y * 40;

      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOk) {
    for (let c = 0; c < cantidadAnimales; c++) {
      let x = aleatorio(0, 5);
      let y = aleatorio(0, 5);
      x *= 80;
      y *= 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOk) {
    for (let p = 0; p < cantidadAnimales; p++) {
      let x = aleatorio(0, 5);
      let y = aleatorio(0, 5);
      x *= 80;
      y *= 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

  return resultado;
}
