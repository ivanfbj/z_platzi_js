var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("btn");
var reset = document.getElementById("btn-reset");
boton.addEventListener("click", dibujoPorClick);
reset.addEventListener("click", resetPage);
/*addEventListener es una función que está escuchando cuando suceda un evento
 y ejecutar alguna indicación. 
 Esta función necesita 2 parametros, 
 el primer parametro es a cual evento va a reaccionar en este caso el evento "click" 
 y el segundo parametro es lo que el va a hacer, en este caso ejecuta una función que hemos creado.
 */
var d = document.getElementById("dibujito"); //Obteniendo la etiqueta <canvas> del HTML con base en su ID
var lienzo = d.getContext("2d"); //getContext es una función del objeto Canvas que me permite obtener el área donde voy a dibujar, se dibuja en 2d.
var ancho = d.width; //Se obtiene el ancho de la etiqueta <canvas> que se guardo en la variable "d".

function resetPage() {
  location.reload();
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var l = 0;
  var x, y;
  var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++) {
    y = espacio * l;
    x = espacio * (l + 1);
    dibujarLinea("blue", 0, y, x, 300);
    dibujarLinea("blue", 300, y, x, 0);
    dibujarLinea("blue", x, 300, 300, 300 - y);
    dibujarLinea("blue", 0, y, 300 - x, 0);
  }

  dibujarLinea("white", 0, 0, 300, 300);
  dibujarLinea("white", 0, 300, 300, 0);
  dibujarLinea("white", 0, 150, 300, 150);
  dibujarLinea("white", 150, 0, 150, 300);
}
