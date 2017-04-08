
define(['angular'],function(angular){
	
	var publicDirect = angular.module("publicDirect",[]);
	
	/* 收藏指令*/
	publicDirect.directive("collect",function(){
		return{
			restrict:'EA',
			replace:true,
			scope:{},
			controller:function($scope){
				$scope.collectFlag = false;
				$('.collect').click(function(){
					if (!$scope.collectFlag) {
						$('.collectIcon').attr('src','img/ysc.png');
						$scope.collectFlag = true;
					}else{
						$('.collectIcon').attr('src','img/sc.png');
						$scope.collectFlag = false;
					}
				})
			},
			template:'<div class="collect">\
				<a href="javascript:;"><img ng-click="" class="collectIcon" src="img/sc.png"/></a>\
			</div>'
		}
	});
	
	/* 返回指令*/
	publicDirect.directive("back",function(){
		return{
			restrict:"EA",
			replace:true,
			template:'<div class="back">\
				<a href="javascript:history.go(-1);"><img class="backIcon" src="img/btn-back.png"/></a>\
			</div>'
		}
	})
	
	/* 定位指令*/
	publicDirect.directive("address",function(){
		return{
			restrict:"EA",
			replace:true,
			template:'<div class="locationBox box_sizing">\
				<img src="img/dingwei.png"/>\
			</div>'
		}
	})
	
	/* 搜索指令*/
	publicDirect.directive("search",function(){
		return{
			restrict:"EA",
			replace:true,
			template:'<div class="inputBox box_sizing">\
		<input class="searchInput box_sizing"  type="text" placeholder="输入网点地址或名称" />\
	</div>'
		}
	})
	
	/* 搜索按钮*/
	publicDirect.directive("searchtn",function(){
		return{
			restrict:"EA",
			replace:true,
			template:'<div class="btnBox box_sizing">\
		<button>搜索</button>\
	</div>'
		}
	})
	
	return publicDirect;
})