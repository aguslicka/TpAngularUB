var app= angular.module("FerreteFacturacion",[]);

app.controller("controlFacturacion",function($scope){

		$scope.datos={};

		$scope.datos.precioUno="222";

		$scope.sumar=function(){

			

			alert("sumando");
		};

});