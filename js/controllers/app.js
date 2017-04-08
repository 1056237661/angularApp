
//定义一个主模块
define(['angular'],function(angular){
	var app = angular.module('pinganApp',['ngRoute','ngSanitize','publicDirect']);
	return app;
});