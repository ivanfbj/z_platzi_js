var reset = document.getElementById("btn-reload");
//reset.addEventListener("click",reloadBtn)
//function reloadBtn() {location.reload();}
reset.addEventListener("click", function () {
  location.reload();
});
//document.getElementById("btn-reload").addEventListener("click",function() {location.reload();})

var z;

for (var i=0; i<10;i++){

  z = aleatorio(5,0);

  document.write(`${z}, `);
}




function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

  return resultado;
}


