var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); //getContext es una función del objeto Canvas que me permite obtener el área donde voy a dibujar, se dibuja en 2d.
var lineas = 30;
var l = 0;
var yi, xf;

while (l < lineas) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("blue", 0, yi, xf, 300);
  console.log(`linea ${l}`);
  l++;
}

for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("blue", 300, yi, xf, 0);
}

for (l = 0; l < lineas; l++) {
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea("blue", xi, 300, 300, 300 - yf);
}

for (l = 0; l < lineas; l++) {
  xf = 10 * l;
  yi = 10 * (l + 1);
  dibujarLinea("blue", 0, yi, 300 - xf, 0);
}

dibujarLinea("white", 0, 0, 300, 300);
dibujarLinea("white", 0, 300, 300, 0);
dibujarLinea("white", 0, 150, 300, 150);
dibujarLinea("white", 150, 0, 150, 300);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

// const dibujarLinea2 = (color, xInicial, yInicial, xFinal, yFinal) => {
//   lienzo.beginPath();
//   lienzo.strokeStyle = color;
//   lienzo.moveTo(xInicial, yInicial);
//   lienzo.lineTo(xFinal, yFinal);
//   lienzo.stroke();
//   lienzo.closePath();
// };
