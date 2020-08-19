var reset = document.getElementById("btn-reload");
//reset.addEventListener("click",reloadBtn)
//function reloadBtn() {location.reload();}
reset.addEventListener("click",function() {location.reload();})
//document.getElementById("btn-reload").addEventListener("click",function() {location.reload();})


var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

document.addEventListener("keyup",dibujarTeclado);

function dibujarTeclado(evento) {
	if (evento.keyCode == teclas.LEFT){
		console.log("hacía izquierda");
	}

	switch (evento.keyCode){
		case teclas.UP: 
		console.log("hacía arriba");
		break;
		case teclas.RIGHT:
		console.log("hacía derecha");
		break;
		case teclas.DOWN:
		console.log("hacía abajo");
		break;
		case teclas.LEFT:
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
