define(['app'],function(app){
	app.controller("jrcsCtrl",['$scope','$rootScope',function($scope,$rootScope){
		console.log(2);
		$rootScope.headTitle = "金融超市";
		$rootScope.backFlag = true;
		$rootScope.collectFlag = false;
		
	}])
})
