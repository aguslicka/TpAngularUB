var app= angular.module("juego",[]);

app.controller("controljuego",function($scope){
	$scope.datos={}; //En esta linea creo el objeto datos
	$scope.datos.numerosecreto= Math.floor((Math.random() * 100) + 1);
	$scope.datos.contador=0;
	$scope.datos.numero=0;
	$scope.datos.nombre="NN";

		$scope.jugar=function(){


			if ($scope.datos.numero == $scope.datos.numerosecreto)
			{
				alert("Gano");
				firebase.database().ref("adivina/").push({nombre:$scope.datos.nombre,numero:$scope.datos.numerosecreto,intentos:$scope.datos.contador})
				// firebase.database().ref("adivina/").push({nombre:"NN",numero:"33",intentos:"5"}) 
				switch($scope.datos.contador)
				{
					case 0 : alert("Mentalista");
					break;
					case 1 : alert("Suerte abundante");
					break;
					case 2 : alert("Muy bueno");
					break;
					case 3 : alert("Casi en el promedio");
					break;
					case 4 : alert("Regular");
					break;
					case 5 : alert("Un poco mal");
					break;
					default : alert("Necesitas practicar mucho mas");
				}
			}
			else { $scope.datos.contador++
				if ($scope.datos.numero < $scope.datos.numerosecreto) 
				{
					alert("Te falto")
				}
				else
				 {
				 	alert("Te pasaste")
				}
				//alert("Segui intentanto")
		 	}
	console.info("datos", $scope.datos);
		}// funcion jugar



		

});