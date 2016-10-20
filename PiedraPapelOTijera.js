var app= angular.module("PiedraPapelOTijera",[]);

app.controller("ControlPiedraPapelOTijera",function($scope){
	$scope.datos={};
	$scope.datos.eleccion="";
	$scope.datos.resultado="";
	$scope.datos.fecha="";
	$scope.datos.numerosecreto= Math.floor((Math.random() * 3) + 1);
	switch($scope.datos.numerosecreto)
				{
					case 1 : 
					$scope.datos.eleccion="piedra";
					break;
					case 2 :
					$scope.datos.eleccion="papel";
					break;
					case 3 : 
					$scope.datos.eleccion="tijera";
					break;
					;
				
			}
	console.info($scope.datos);
	$scope.piedra=function(){
	//console.log("piedra");
	//$scope.datos.fecha=new Date();
				if($scope.datos.eleccion=="piedra"){
					alert("empate")
				}
				else {
							if($scope.datos.eleccion=="papel"){
								alert("perdio")
							}
							else{
								alert("gano")
							}

				}

				firebase.database().ref("PiedraPapelOTijera/").push($scope.datos);
	};
	$scope.papel=function(){
	console.log("papel");
	//$scope.datos.fecha=new Date();
	switch($scope.datos.eleccion)
	{
		case "piedra" :
				alert("gano");
					$scope.datos.resultado="gano";

			break;
		case "papel" : 
		alert("empate");
		$scope.datos.resultado="empate";

		break;

		case "tijera" :
		alert("perdio");
		$scope.datos.resultado="perdio";

		break;



	}

	firebase.database().ref("PiedraPapelOTijera/").push($scope.datos);
	};

	$scope.tijera=function(){
	console.log("tijera");
	//$scope.datos.fecha=new Date();
	switch($scope.datos.eleccion)
	{
		case "piedra" :
		alert("perdio");
		$scope.datos.resultado="perdio";
		break;
		case "papel" :
		alert("gano");
		$scope.datos.resultado="gano";
		break;
		case "tijera" :
		alert("empate");
		$scope.datos.resultado="empate";
		break;

	}
	firebase.database().ref("PiedraPapelOTijera/").push($scope.datos);
	};




});
