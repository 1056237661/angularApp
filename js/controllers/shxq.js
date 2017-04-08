define(['app'],function(app){
	app.controller("shxqCtrl",['$scope','$rootScope','$http','$routeParams','$filter',function($scope,$rootScope,$http,$routeParams,$filter){
		$rootScope.headTitle = '商户详情'+ $routeParams.id;
		$rootScope.backFlag = true;
		$rootScope.collectFlag = true;
		
		$http.get('json/shxq.json').success(function(data){
			var id = $routeParams.id.substr(1);
			$scope.data = $filter('filter')(data.shList,{'shop_id':$routeParams.id.substr(1)})[0];
		}).error(function(data){
			console.error(data);
		})
	}]);
})