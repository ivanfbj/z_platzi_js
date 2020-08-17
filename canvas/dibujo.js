var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); //getContext es una función del objeto Canvas que me permite obtener el área donde voy a dibujar, se dibuja en 2d.

lienzo.beginPath(); //beginPath es una función que me permite iniciar el trazo.
lienzo.strokeStyle = "blue"; //strokeStyle es una propiedad para escoger el color
lienzo.moveTo(0, 0); //moveTo es una función del canvas para mover el lapiz en donde va a arrancar la linea. Es el punto inicial.
lienzo.lineTo(150, 150); //lineTo es la funcion de trazar la linea. Es el punto final.
lienzo.stroke(); //stroke es la función que dibuja la linea del inicio al final
lienzo.closePath(); //clasePath es la función que me permite cerrar el trazo.

/*3 ejemplos diferentes para crear una función */

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

const dibujarLinea2 = (color, xInicial, yInicial, xFinal, yFinal) => {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
};

const dibujarLinea3 = function (color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
};

// dibujarLinea("red", 300, 0, 150, 150);
// dibujarLinea2("yellow", 300, 300, 150, 150);
// dibujarLinea3("green", 0, 300, 150, 150);

for (var i = 0; i <= 300; i += 10) {
  dibujarLinea2("blue", 0, i, 150, 150);
  dibujarLinea2("green", i, 300, 150, 150);
  dibujarLinea2("yellow", 300, i, 150, 150);
  dibujarLinea2("red", i, 0, 150, 150);
}
