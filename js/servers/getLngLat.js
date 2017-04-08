/* 获取定位服务*/
define(['app'],function(app){
	app.factory("getLngLat",['$window',function($window){
		var test = function(fun){
			var lng,lat;
			if ($window.navigator.geolocation) { 
			     var options = { 
			         enableHighAccuracy: true, 
			     }; 
			     $window.navigator.geolocation.getCurrentPosition(function(position){ 
					     
					     // 获取到当前位置经纬度  本例中是chrome浏览器取到的是google地图中的经纬度
					     lng = position.coords.longitude; 
					     lat = position.coords.latitude;					     
					     fun(lng,lat);     
					 }, handleError, options); 
			 } else { 
			     alert("浏览器不支持html5来获取地理位置信息"); 
			 } 
		} 
		function handleError(error){ 
			alert("请求出错");
		}
		return test;
	}])
})

