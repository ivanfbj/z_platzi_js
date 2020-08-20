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
	cargaOk:false
}

var vaca = {
	url: "images/vaca.png",
	cargaOk: false
}


fondo.imagen = new Image(); //crear objeto Image
fondo.imagen.src = fondo.url;// asignación de la ruta de la imagen al atributo "src" para que lo pinte en el HTML
fondo.imagen.addEventListener("load",cargarFondo); //Asignar la función de "load" para que al realizar el evento de cargue ejecute la función que se encarga de pintar la imagen

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);


function cargarFondo(){
	fondo.cargaOk = true;
	dibujar();

}

function cargarVacas(){
	vaca.cargaOk = true;
	dibujar();
}



function dibujar(){
	if (fondo.cargaOk == true){
		papel.drawImage(fondo.imagen,0,0);
	}
	if (vaca.cargaOk == true){

		var x = aleatorio(0,420);
		var y = aleatorio(0,420);


		papel.drawImage(vaca.imagen,100,0);
	}
}


function aleatorio(min, maxi) {
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

	return resultado;
}
