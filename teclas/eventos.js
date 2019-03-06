var teclas= {
	UP : 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH: 39
};

console.log (teclas);
document.addEventListener("keyup",dibujarTeclado);

var cuadrito =document.getElementById ("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;

dibujarlinea ("red", 149,149,151,151,papel);
function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth= 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

var colorcitito= "blue";
var movimiento=10;

function dibujarTeclado (evento)
{
	if(evento.keyCode==teclas.UP)
	{
	console.log ("HOLA");
	}
}
	var colorcito= "yellow";
	var movimiento=10;

	switch(evento.keyCode)
	{
		case teclas.UP:
		dibujarlinea(colorcito,x,y,x,y - movimiento,papel);
		y=y-movimiento;
		break;
		case teclas.DOWN:
		dibujarlinea(colorcito,x,y,x,y + movimiento,papel);
		y=y+movimiento;
		break;
		case teclas.RIGTH:
		dibujarlinea(colorcito,x,y,x + movimiento,y,papel);
		x=x+movimiento;
		break;
		case teclas.LEFT:
		dibujarlinea(colorcito,x,y,x - movimiento,y,papel);
		x=x-movimiento;
		break;
	}

