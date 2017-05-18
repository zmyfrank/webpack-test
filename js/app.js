/**
 * Created by issuser on 2017/5/5.
 */
angular.module('app',[
	'ui-router',
	'oc.lazyLoad'])
	//路由配置
.config(["$stateProvider", "$urlRouterProvider", "routerProvider",'$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,routerProvider,$ocLazyLoadProvider) {
	var _lazyLoad = function (loaded) {
		return function ($ocLazyLoad) {
			
		}
	}
}])
//可以配置http设置
function httpConfig($httpProvider) {
	//统一设置content-type
	$httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	
	//统一设置transformRequest预处理方法
	$httpProvider.defaults.transformRequest = function (data) {
		if (data === undefined) {
			return data;
		}
		return $.param(data);
	};
}


