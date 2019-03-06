var cuadrito= document.getElementById ("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;

document.addEventListener("mousedown",presionarMouse)
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse);

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
var colorLinea= "purple";
var estado=false;

function dibujarMouse (evento_1)
{
	if (estado == true) 
	{
		dibujarlinea(colorLinea,x,y,evento_1.layerX,evento_1.layerY,papel);
	}
	x=evento_1.layerX;
	y=evento_1.layerY;
}

function presionarMouse (evento_1)
{
	estado=true;
	x= evento_1.layerX;
	y=evento_1.layerY;
}

function soltarMouse (evento_1)
{
	estado=false;
	x=evento_1.layerX;
	y=evento_1.layerY;
}