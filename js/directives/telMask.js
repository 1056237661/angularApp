define(['app'],function(app){
	app.directive('telMask',function(){
		return{
			restrict:'EA',
			transclude:true,
			controller:function($scope,$element){
				/* 弹出框绑定事件开关，防止重复绑定*/
				$scope.flag = true;
				$element.bind('click',function(){
					$('.mask').show(500,function(){
						if ($scope.flag){
							$('.telList').bind('click',function(){
								event.stopPropagation();
							});
							$('.mask').bind('click',function(){
								event.stopPropagation();
								$('.mask').hide(500);
							})
							$scope.flag = false;
						}
					});
					// 上下居中 
					$('.telList').css('margin-top',-$('.telList').height()/2);
				})				
			},
			templateUrl:"views/telMask.html",
		}
	})
})