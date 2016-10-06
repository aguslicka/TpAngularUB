var miaplicacion=angular.module("iluminacion", []);
miaplicacion.controller("controlIluminacion", function($scope){
// definir un objeto JSON en el $scope
$scope.datos={};
//inicializo los valores.
$scope.datos.CantidadDeLamparas="";
$scope.datos.MarcaDeLampara=0;
$scope.datos.PrecioFinal=0;

//muestro mensaje de bienvenida
console.log(" Hola, estoy aqui ");

$scope.CalcularPrecio=function(){

$scope.datos.PrecioFinal=$scope.datos.CantidadDeLamparas*35;

		if($scope.datos.CantidadDeLamparas>5){
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.5;
		}
		else
		{

			alert("Comprando 6 o más tenés 50% de descuento");
		}



		if($scope.datos.CantidadDeLamparas==5 && $scope.datos.MarcaDeLampara=="ArgentinaLuz"){
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.6;
		}


		if($scope.datos.CantidadDeLamparas==5 && $scope.datos.MarcaDeLampara!="ArgentinaLuz"){
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.7;
		}

		if($scope.datos.CantidadDeLamparas==4 && $scope.datos.MarcaDeLampara=="ArgentinaLuz" || $scope.datos.MarcaDeLampara=="FelipeLamparas")
		{ 
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.75

		}else
		{

			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.8
		}

		if ($scope.datos.CantidadDeLamparas==3 && $scope.datos.MarcaDeLampara=="ArgentinaLuz" ){
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.85
		}
		if ($scope.datos.CantidadDeLamparas==3 && $scope.datos.MarcaDeLampara=="FelipeLamparas" ){
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.9
		}else{

			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.95
		}

		if($scope.datos.PrecioFinal>120){
			$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*1.1
		}

}// fin funcion


//ejemplos de testeo de la instuccion IF
/*
//var resultado=  $scope.datos.CantidadDeLamparas*35;
if($scope.datos.MarcaDeLampara=="ArgentinaLuz"){
if($scope.datos.CantidadDeLamparas>3)
{

	$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.9;
}else
{
	alert("si compra más de tres tiene descuento");
}

if($scope.datos.MarcaDeLampara=="ArgentinaLuz"){

$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.95


}else
{

	alert("si comprás ArgentinaLuz tenés descuento")
}
*/
	/*$scope.datos.PrecioFinal=$scope.datos.CantidadDeLamparas*35;




				if($scope.datos.CantidadDeLamparas>3 && $scope.datos.MarcaDeLampara=="ArgentinaLuz")
				{
					$scope.datos.PrecioFinal=$scope.datos.PrecioFinal*0.9;

				}else
				{
					alert("si compra más de tres tiene descuento");
				}
			}
*/
});