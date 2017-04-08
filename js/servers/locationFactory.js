h/*
 * 定义一个定位服务，用来获取当前位置
 * 
 * */
define(['app'],function(app){
	app.factory('locationFactory',['$http','$q',function($http,$q){
		var geo = {};
		geo.locat = function(lng,lat){
			var def = $q.defer();
			$http.jsonp('http://api.map.baidu.com/geocoder/v2/?ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=?&location='+lat+','+lng+'&output=json&pois=0&callback=JSON_CALLBACK')
			.success(function(data){
				def.resolve(data);
			})
			return def.promise;
		}
		return geo;
	}])
})