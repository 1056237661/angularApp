/* 测试控制器 */
define(['app'],function(app){
	app.controller("yywdCtrl",['$scope','$rootScope','$http','getLngLat','locationFactory',function($scope,$rootScope,$http,getLngLat,locationFactory){
		$rootScope.headTitle = '营业网点';
		$rootScope.backFlag = false;
		$rootScope.collectFlag = false;
		/* 请求商户列表*/
		$http.get('json/yywd.json').success(function(data){
			$scope.data = data.branchs;
			
		}).error(function(data){
			alert(data);
		})
		
		getLngLat(function(lng,lat){
			
		})
		/* 请求地理位置*/	
		locationFactory.locat(114.0093036,22.5379923).then(function(data){
			$scope.location = data.result;
		});
	}]);
})