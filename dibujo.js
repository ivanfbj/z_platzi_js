var reset = document.getElementById("btn-reload");
//reset.addEventListener("click",reloadBtn)
//function reloadBtn() {location.reload();}
reset.addEventListener("click", function () {
  location.reload();
});
//document.getElementById("btn-reload").addEventListener("click",function() {location.reload();})

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

//Punto de inicio
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  if (evento.keyCode == teclas.LEFT) {
    console.log("hacía izquierda");
  }

  var colorcito = "blue";
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    default:
      console.log("Es otra tecla");
      break;
  }
}

/*
evento.key + " es "+evento.keyCode
ArrowLeft 37
ArrowUp 38
ArrowRight 39
ArrowDown 40

*/
