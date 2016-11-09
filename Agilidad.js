var app= angular.module("Agilidad",[]);


app.controller("controlAgilidad",function($scope){
	$scope.datos={};
	$scope.datos.Numero1=Math.floor((Math.random() * 10) + 1);
	$scope.datos.Numero2=Math.floor((Math.random() * 10) + 1);
	$scope.datos.Signo="+";
	$scope.datos.Resultado="";
	$scope.datos.NumSigno=Math.floor((Math.random() * 3) + 1);
	$scope.datos.Gano=""
	$scope.datos.TiempoTranscurrido="";
	var tiempo1= new time().tostring();
	$scope.Aceptar=function () {
	if ($scope.datos.Resultado == $scope.datos.Respuesta) 
				{
					alert("Gano");
					$scope.datos.Gano="Si";
				}
				else
				 {
				 	alert("Perdio");
				 	$scope.datos.Gano="No";
				}
				var tiempo2= new time().tostring();
				$scope.datos.TiempoTranscurrido=tiempo2-tiempo1;
				firebase.database().ref("Agilidad/").push($scope.datos);

		alert("Aceptar");
		// body...
	}


	switch($scope.datos.NumSigno)
	{
					case 1 : 
					$scope.datos.Signo="+";
					$scope.datos.Resultado=$scope.datos.Numero1+$scope.datos.Numero2;
					break;

					case 2 :
					$scope.datos.Signo="-";
					$scope.datos.Resultado=$scope.datos.Numero1-$scope.datos.Numero2;
					break;

					case 3 : 
					$scope.datos.Signo="*";
					$scope.datos.Resultado=$scope.datos.Numero1*$scope.datos.Numero2;
					break;
					;
				
			}

console.info($scope.datos);

});