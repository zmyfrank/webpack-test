/**
 * Created by issuser on 2017/5/11.
 */
(function(factory) {
	var deps = [ "angular", "appRouter", "Layout", "ui.router", "app.locale" ];
	define("Login", deps, function(angular, appRouter, Layout) {
		return factory(angular, window.app, appRouter, Layout);
	});
})(function(angular, app, appRouter, Layout) {
	/** 定义模块 */
	var module = angular.module("Login", [ "ui.router", "app.locale" ]);
	/** 定义service */
	var LoginService = function($http, $window, $q, $rootScope, $state, $location, $log) {
		return {
			/**
			 * 登录系统，user应该至少包含code、password两个参数
			 * @param user 登录用户信息:{ code: 用户名, password: 密码 }
			 */
			login : function(user) {
				var deferred = $q.defer();
				$http.post(app.urls['login'] || (app.root + "/login.do"), user).success(function(data) {
					// 登录成功，跳转到首页
//					if ($window[ 'MY_UPLOADE']) {
//						// 刷新页面
//						$window.location.reload();
//					} else {
//						// 如果切换账号登录,在非IE浏览器,调用$window.location.reload,刷新后系统会停留在退出前的菜单
//						$window.location = app.root;
//					}
					$window.location.reload();
				}).error(function(data) {
					// 返回异常信息
					deferred.reject(data);
				});
				return deferred.promise;
			},
			
			/** 退出系统 */
			logout : function() {
				var deferred = $q.defer();
				$http.post(app.urls['logout'] || (app.root + "/logout.do")).success(function(data) {
					// 退回后跳转到首页
					// $rootScope.init(null);
					$window.location = app.root;
					// deferred.resolve(data);
				});
				return deferred.promise;
			},
			
			/** 得到RAS的公钥 */
			getPublicKey: function() {
			
			}
		}
	};
	LoginService.$inject = [ "$http", "$window", "$q", "$rootScope", "$state", "$location", "$log" ];
	module.service("LoginService", LoginService);
	
	/** 定义Controller */
	var LoginController = function(LoginService, LocaleService, $scope, $rootScope, $location, $timeout) {
		$scope.user = {	// 登录用户属性
			code: '',
			password: ''
		}
		
		/* 登录系统  */
		$rootScope.login = $scope.login = function() {
			$scope.logining = true;
			$scope.error = false;
			$scope.message = LocaleService.getText('login.ing');
			LoginService.login($scope.user)[ "finally" ](function() {
				$scope.logining = false;
			}).then(function(data) {
				// 登陆成功
				$scope.message = LocaleService.getText('login.success');
			}, function(data) {
				// 用户名和密码错误
				$scope.error = true;
				$scope.message = data.message || LocaleService.getText('login.wrong');
			});
		};
		
		
		$scope.$on('$includeContentLoaded', function() {
			$('body').removeClass('page-on-load');
			
			var initContainerHeight = function() {
				$(".page-login-container").attr('style', 'min-height:' + Layout.getContentHeight() + 'px');
			};
			Layout.addResizeHandler(initContainerHeight);
			
			// 200ms后触发resize
			$timeout(function() { $(window).trigger('resize'); }, 200);
		});
	};
	LoginController.$inject = [ "LoginService", "LocaleService", "$scope", "$rootScope", "$location", "$timeout" ];
	module.controller("LoginController", LoginController);
	
	module.controller("MainController", function(){ });
	
	var LogoutController = function(LoginService, LocaleService, $scope, $rootScope) {
		/* 退出系统 */
		$rootScope.logout =	$scope.logout = function() {
			LoginService.logout();
		}
	}
	LogoutController.$inject = [ "LoginService", "LocaleService", "$scope", "$rootScope" ];
	module.controller("LogoutController", LogoutController);
	
	
	/** 登录按钮已经加载，则可以初始化登录容器的高度 */
//	module.directive('loginAction', function() {
//		return {
//			link : function(scope, elem) {
//				// $(elem).parents(".login-container").css("", Layout.getContentHeight() + "px");
//				$("body").addClass("page-login");	// 添加登录
//
//				$('body').removeClass('page-on-load'); // remove page loading indicator
//
//				var initContainerHeight = function() {
//					$(elem).parents(".login-container").attr('style', 'min-height:' + Layout.getContentHeight() + 'px');
//				};
//				Layout.addResizeHandler(initContainerHeight);
//			}
//		};
//	});
	
	return "Login";
});