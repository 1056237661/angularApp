/* require配置 */
require.config({
	baseUrl:"js/",
	paths:{
		/* 插件*/
		"jquery":"libs/jquery203",
		"angular":"libs/angular.min",
		"angular-route":"libs/angular-route.min",
		"angular-sanitize":'libs/angular-sanitize.min',
//		'flexible':'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js',
		'flexible':'libs/flexible',
		
		/* 路由信息*/
		'route':"routes/route",
		
		/* module层*/
		"app":'controllers/app',
		'yywdCtrl':'controllers/yywd',
		'shxqCtrl':'controllers/shxq',
		'jrcsCtrl':'controllers/jrcsCtrl',
		
		/* 自定义指令*/
		'publicDirect':'directives/publicDirect',
		'telMask':'directives/telMask',
		
		/* 自定义服务*/
		'locationFactory':'servers/locationFactory',
		'getLngLat':'servers/getLngLat'
		
	},
	//不符合amd规范的文件，有依赖关系的文件
	shim:{
		'flexible':{
			exports:"flexible"
		},
		"angular":{
			exports:"angular"
		},
		"angular-route":{
			deps:["angular"],//定义依赖模块
			exports:"angular-route"
		},
		"angular-sanitize":{
			deps:["angular"],//定义依赖模块
			exports:"angular-sanitize"
		},
		
	}
})


/* 请求加载 */
require(['jquery','angular','angular-route','angular-sanitize','route','app','yywdCtrl','shxqCtrl','flexible','publicDirect','telMask','jrcsCtrl','locationFactory','getLngLat'],function($,angular){
	angular.bootstrap(document,['pinganApp']);
})