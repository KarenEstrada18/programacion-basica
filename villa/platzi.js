var vp= document.getElementById ("villaplatzi");
var papel = vp.getContext("2d");

document.addEventListener("keyup",moverCerdo);
var cerdo= 
{
	url:"cerdo.png",
	cargaOK:false
};

var xCerdo=0;
var yCerdo=0;

var fondo = 
{
	url: "tile.png",
	cargaOK:false
};

var vaca= 
{
	url:"vaca.png",
	cargaOK:false
};

var xVaca= new Array();
var yVaca=new Array();


var pollo= 
{
	url:"pollo.png",
	cargaOK:false
};

var xPollo = new Array();
var yPollo =new Array();


var cantidad_vacas= aleatorio (0,5);
var cantidad_pollos= aleatorio (0,5);
console.log ("#de vacas"+ cantidad_vacas);
console.log("# de pollos" + cantidad_pollos);

function dibujar ()
{
	if (fondo.cargaOK) 
	{
		papel.drawImage (fondo.imagen,0,0);
	}

	if (vaca.cargaOK) 
	{	
		for (var v = 0; v < cantidad_vacas; v++) 
		{
			papel.drawImage (vaca.imagen,xVaca[v],yVaca[v]);
		}
	}
	if (pollo.cargaOK)
	{
		for (var v = 0; v < cantidad_pollos; v++)
		{
		papel.drawImage (pollo.imagen,xPollo [v], yPollo [v]);
		}
	}
	if (cerdo.cargaOK) 	
		{
			papel.drawImage (cerdo.imagen,xCerdo,yCerdo);
		}
}

function mantenerPosicion ()
{
	if (vaca.cargaOK)
	{
		for (var v = 0; v < cantidad_vacas; v++) 
		{
		var x= aleatorio (0,5);
		var y= aleatorio (0,5);
		var x= x*80;
		var y= y*80;
		xVaca [v] = x;
		yVaca [v] = y;
		}
	}
if (pollo.cargaOK) 
	{	
		for (var v = 0; v < cantidad_pollos; v++) 
		{
		var x= aleatorio (0,5);
		var y= aleatorio (0,5);
		var x= x*80;
		var y= y*80;
		xPollo [v] = x;
		yPollo [v] = y;
		}
	}
	dibujar ();
}

function aleatorio (min,maxi)
{
	var resultado;
	resultado= Math.floor (Math.random()*(maxi-min+1))+min;
	return resultado;
}

function cargarFondo()
{
 fondo.cargaOK = true;
 dibujar ();
}


function cargarVacas()
{
 vaca.cargaOK = true;
 mantenerPosicion ();
}

function cargarCerdos()
{
 cerdo.cargaOK = true;
 dibujar ();
}

function cargarPollos()
{
 pollo.cargaOK = true;
 mantenerPosicion ();
}

fondo.imagen = new Image();
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen= new Image ();
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen= new Image ();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen= new Image ();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function moverCerdo (evento)
{
	var movimiento=50;
	var teclas =
	{
	UP : 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH: 39
	};

switch(evento.keyCode)
{
	case teclas.UP:
	if (yCerdo>0)
	{
		yCerdo = yCerdo -movimiento;
		dibujar ();
	}
	break;
	case teclas.DOWN:
	if (yCerdo<450)
	{
		yCerdo = yCerdo + movimiento;
		dibujar ();
	}
	break;
	case teclas.LEFT:
	if (xCerdo>0)
	{
		xCerdo = xCerdo -movimiento;
		dibujar ();
	}
	break;
	case teclas.RIGTH:
	if (xCerdo<450)
	{
		xCerdo = xCerdo + movimiento;
		dibujar ();
	}
	break;
	default:
	console.log ("Otra tecla" + evento.keyCode);
	break;
}








}