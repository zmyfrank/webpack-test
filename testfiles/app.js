/**
 * Created by issuser on 2017/5/11.
 */
/** angularjs应用入口程序,此JS不要进行压缩,并且在config加载后加载 */
(function() {
	"use strict";
	
	/** 全局配置,通过windows.app配置模块的一些基础属性 */
	var appConfig = window["app"];
	
	var getLocaleText; // 取国际化语言的方法
	var TIMEOUT = false;
	/** 根据返回的数据data检查session是否超时.如果超时则跳转到登录,出现异常,则返回null.否则返回data自身 */
	var interceptSessionTimeout = appConfig.interceptSessionTimeout = function(data) {
		if (!data) return data;
		if (TIMEOUT) return false;
		if (data.logout) { // 登录超时,需要重新登录
			TIMEOUT = true;
			alert(getLocaleText('app.login.timeout'));
			window.location = appConfig.root;
			return false;
		}
		if (data.error) { // 返回了异常信息
			alert(formatErrorMessage(data));
			return data;
		}
		return data;
	}
	
	/** requirejs要加载的模块 */
	var apps = [ "angular", "jquery", "appRouter" ]; // 需要依赖注入的app全局对象
	var modules = [ "Dept", "User", "Dictionary", "app.dict", "BudgetSubject", "Query", "MyTask", "MyApply" ]; // 需要预先加载的模块菜单对应的JS
	
	var requires = apps.concat(modules).concat(
		// 其他依赖,但不需要注入的模块
		"appLayout", "appPrinter", "app.locale", "Login", "appPermission", "app.page", "app.process", "angular-translate",
		"ngLocale", "ngSanitize", "ui.router", "bootstrap", "ui.bootstrap", "smart-table", "ui.grid", "ui.select",
		"ngmodel.format", "DataLoader", "ui.ztree", "ui.table", "app.ui", "ui.uploader");
	
	/** angularjs创建app的依赖模块 */
	var deps = [ "Login", "appLayout", "appPrinter", "app.locale", "appPermission", "app.page", "app.process",
		"pascalprecht.translate", "ngLocale", "ngSanitize", "ui.router", "ui.bootstrap", "smart-table",
		"ui.select", "ui.grid", "ui.grid.autoResize", "ui.grid.selection", "ui.grid.pinning",
		"ui.grid.resizeColumns", "ui.grid.moveColumns", "ngmodel.format", "DataLoader", "ui.ztree", "ui.table",
		"app.ui", "ui.uploader" ];
	
	
	if (!appConfig.user) {
		// 未登录的时候少加载数据
		modules = [];
		requires = apps.concat(modules).concat(
			"appLayout", "app.locale", "Login", "angular-translate", "ngSanitize", "ui.router", "bootstrap", "ui.bootstrap");
		deps = [ "appLayout", "app.locale", "Login", "pascalprecht.translate", "ngSanitize", "ui.router", "ui.bootstrap" ];
	}
	
	/** 创建应用模块的函数 */
	var init = function(angular, $, appRouter, globalModules) {
		var app = angular.module(appConfig.name, deps);
		app.settings = appConfig;
		
		var MODULES = []; // 需要注入的模块
		angular.forEach(arguments, function(arg, argIndex) {
			if (argIndex >= apps.length) MODULES.push(arg);
		});
		/**
		 * 为AJAX请求添加拦截器 • 通过实现 request 方法拦截请求: 该方法会在 $http 发送请求道后台之前执行，因此你可以修改配置或做其他的操作。该方法接收请求配置对象(request
		 * configuration object)作为参数，然后必须返回配置对象或者 promise 。如果返回无效的配置对象或者 promise 则会被拒绝，导致 $http 调用失败。 • 通过实现 response
		 * 方法拦截响应: 该方法会在 $http 接收到从后台过来的响应之后执行，因此你可以修改响应或做其他操作。该方法接收响应对象(response object)作为参数，然后必须返回响应对象或者
		 * promise。响应对象包括了请求配置(request configuration)，头(headers)，状态(status)和从后台过来的数据(data)。如果返回无效的响应对象或者 promise 会被拒绝，导致
		 * $http 调用失败。 • 通过实现 requestError 方法拦截请求异常:
		 * 有时候一个请求发送失败或者被拦截器拒绝了。请求异常拦截器会俘获那些被上一个请求拦截器中断的请求。它可以用来恢复请求或者有时可以用来撤销请求之前所做的配置，比如说关闭进度条，激活按钮和输入框什么之类的。 • 通过实现
		 * responseError 方法拦截响应异常: 有时候我们后台调用失败了。也有可能它被一个请求拦截器拒绝了，或者被上一个响应拦截器中断了。在这种情况下，响应异常拦截器可以帮助我们恢复后台调用。
		 *
		 */
		var ajaxInterceptor = function($rootScope, $q, LocaleService) {
			var requestCount = 0;
			var requesting = "_requestingIntercepted_";
			
			var ajaxRequest = function() {
				requestCount++;
				$rootScope.session.requesting = true;
			}
			var ajaxResponse = function(response) {
				if (response && response.config && response.config[requesting]) {
					requestCount = Math.max(0, requestCount - 1);
					$rootScope.session.requesting = requestCount > 0;
				}
			}
			
			return {
				"request" : function(config) {
					config[requesting] = true;
					$rootScope.current.error = null; // 发起ajax前清空error
					ajaxRequest();
					return config;
				},
				'response' : function(response) {
					ajaxResponse(response);
					var data = interceptSessionTimeout(response.data);
					if (data.error) {
						$rootScope.current.error = data;
						response.data = data;
						return $q.reject(response);
					}
					return response;
				},
				'responseError' : function(response) { // 异常响应
					ajaxResponse(response);
					
					var error = {};
					var interceptSessionTimeouted = false;
					if (response.status === 404) {
						var url = response.config.url;
						error = {
							message : LocaleService.get("app.response.error.404", url) || (url + "页面不存在!")
						};
					} else {
						var data = response.data;
						if (angular.isString(data)) { // 字符串
							error = {
								message : data
							};
						} else {
							error = interceptSessionTimeout(data);
							interceptSessionTimeouted = true;
							// alert(error.message);
						}
					}
					if (!interceptSessionTimeouted) {
						alert(error.message);
					}
					response.data = error;
					$rootScope.current.error = error;
					return $q.reject(response);
				}
			};
		};
		ajaxInterceptor.$inject = [ "$rootScope", "$q", "LocaleService" ];
		app.factory("ajaxInterceptor", ajaxInterceptor);
		
		// 对jquery的ajax判断session超时
		$(document).ajaxComplete(function(event, jqXHR, ajaxOptions) {
			var text = jqXHR.responseText;
			var data = text;
			var contentType = jqXHR.getResponseHeader('Content-Type');
			if (contentType && contentType.toLowerCase().indexOf('/json') > 0) {
				try { // text为JSON字符串
					data = $.parseJSON(data);
				} catch (err) {
					// TODO
				}
			}
			interceptSessionTimeout(data);
		});
		
		/* 初始化配置 */
		var configFn = function($provide, $controllerProvider, $compileProvider, $filterProvider, $httpProvider,
		                        $stateProvider, $urlRouterProvider, $translateProvider) {
			// 缓存provider以便动态加载JS时使用
			app.$provide = $provide;
			app.$controllerProvider = $controllerProvider;
			app.$compileProvider = $compileProvider;
			app.$filterProvider = $filterProvider;
			app.$httpProvider = $httpProvider;
			app.$stateProvider = $stateProvider;
			app.$urlRouterProvider = $urlRouterProvider;
			
			appRouter.$provide = $provide;
			appRouter.$controllerProvider = $controllerProvider;
			appRouter.$compileProvider = $compileProvider; // 用于定义指令
			appRouter.$stateProvider = $stateProvider;
			appRouter.$urlRouterProvider = $urlRouterProvider;
			
			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
			
			// 对HTML模板不进行缓存,防止上线后更新HTML静态文件无效
			if (!$httpProvider.defaults.headers.get) $httpProvider.defaults.headers.get = {};
			$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache'; // 防止缓存
			$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
			
			// $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript, */*; q=0.01';
			// Override $http service's default transformRequest
			$httpProvider.defaults.transformRequest = [ function(data) {
				return angular.isObject(data) && String(data) !== '[object File]' ? Mortal.param(data) : data;
			} ];
			$httpProvider.interceptors.push("ajaxInterceptor");
			
			// 在url中可以设置javascript:;这样的形式
			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript):/);
			
			angular.forEach(modules, function(module, moduleIndex) {
				appRouter.register(module, MODULES[moduleIndex]); // 将全局需要使用的模块预先注册
			});
		};
		configFn.$inject = [ "$provide", "$controllerProvider", "$compileProvider", "$filterProvider", "$httpProvider",
			"$stateProvider", "$urlRouterProvider", "$translateProvider" ]
		app.config(configFn);
		
		// 用于ng-bind-html可注入html代码
		app.filter("trustHTML", [ "$sce", function($sce) {
			return function(html) {
				return $sce.trustAsHtml(html);
			}
		} ]);
		
		/** MainController */
		function MainController($scope, $http, $rootScope, $location, $state, $stateParams, $window, $filter,
		                        LocaleService, ProcessService, ProcessConstants) {
			$.extend($scope, {
				ProcessService : ProcessService, // 将ProcessService缓存
				
				/** 取消按钮，返回到前一页面 */
				cancel : function(toParent) {
					if ($rootScope.app.hasOpener) { // 打开的弹出窗口，则关闭
						$window.close();
						return;
					}
					if (!toParent && $window.history.length > 1) {
						$window.history.back();
					} else {
						$scope.toParentState();
					}
				},
				
				/** 跳转到上级路由 */
				toParentState : function() {
					var parentState = $state.$current.parent;
					if (parentState) {
						$state.go(parentState.name);
					}
				}
			}, $.extend(true, {}, ProcessConstants));
		}
		MainController.$inject = [ "$scope", "$http", "$rootScope", "$location", "$state", "$stateParams", "$window",
			"$filter", "LocaleService", "ProcessService", "ProcessConstants" ];
		
		if (!appConfig.user) {
			MainController.$inject = [ "$scope", "$http", "$rootScope", "$location", "$state", "$stateParams", "$window",
				"$filter", "LocaleService" ];
		}
		app.controller("MainController", MainController);
		
		/* 在MainController前进行初始化,注意，可以调用多次run方法，都会执行 */
		function appRun($rootScope, $http, $filter, $state, $stateParams, $location, $locale, LocaleService) {
			// alert('APP-RUN-DEFAULT');
			$locale.NUMBER_FORMATS.CURRENCY_SYM = "\u00a5"; // 币种符号显示RMB
			// "fullDate": "y\u5e74M\u6708d\u65e5EEEE",
			// "longDate": "y\u5e74M\u6708d\u65e5",
			// "medium": "y\u5e74M\u6708d\u65e5 ah:mm:ss",
			// "mediumDate": "y\u5e74M\u6708d\u65e5",
			// "mediumTime": "ah:mm:ss",
			// "short": "yy/M/d ah:mm",
			// "shortDate": "yy/M/d",
			// "shortTime": "ah:mm"
			$.extend($locale.DATETIME_FORMATS, { // 日期格式固定为YYYY-MM-DD
				"fullDate" : "yyyy-MM-dd EEEE",
				"longDate" : "yyyy-MM-dd",
				"medium" : "yyyy-MM-dd HH:mm:ss",
				"mediumDate" : "yyyy-MM-dd",
				"mediumTime" : "HH:mm:ss",
				"short" : "yy-MM-dd HH:mm",
				"shortDate" : "yy-MM-dd",
				"shortTime" : "HH:mm"
			});
			
			// ui-router的服务注入到$rootScope中
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			
			appConfig.formatDate = $filter("date"); // 用于格式化日期的函数
			appConfig.formatNumber = $filter("number"); // 格式化数字的函数
			appConfig.getLocaleText = getLocaleText = LocaleService.getText;
			appConfig.param = Mortal.param;
			// 将appConfig注入$rootScope中，则所有angularjs下的作用域可以使用appConfig中的属性
			$rootScope.app = appConfig;
			
			// 配置参数
			app.settings = appConfig;
			
			// 当前session状态数据,包括当前菜单等
			var session = $rootScope.session = {
				// 当前系统的登陆用户，应当包含用户的实体对象的所有字段信息，以及menus属性，menus为此用户需要加载的菜单
				user : null,
				menus : null, // 当前人员可以操作的菜单,每个菜单的children表示其子菜单
				permissions : null, // 当前人员的权限
				navs : [], // 当前页面的导航路径
				currentMenu : null, // 当前加载的菜单
				fullscreen : appConfig.hasOpener
			};
			// 当前模块的一些状态数据，主要包括查询条件等参数
			$rootScope.current = {
				page : null, // 查询后的分页数据,参见org.springframework.data.domain.Page.
				entity : null, // 当前模块处理的实体类，比如正在查看/编辑的对象
				selected : [], // 当前已被多选中的数据
				params : null, // 查询条件参数,从系统中录入的参数,进入模块前应该将查询参数清空
				pageRequest : { // 查询分页参数,每进入一个模块，应当吧pageNumber重置为0
					pageNumber : 0, // 页数，从0开始.注意Spring JPA后台查询时,页数是从0开始
					pageSize : appConfig.pageSize
					// 每页大小不覆盖，当前登录状态均有效
				},
				uiGridOptions : {}, // 用于使用ui-grid的列表,其中主要包含columnDefs字段
				// 一般的，可能有query,view,add,edit,save,update,delete,remove,load,get,approve,reject等操作
				operator : null
				// 当前进行的操作，默认为null,个模块自己判断默认值的处理方式
			};
			
			/** 登录后，根据登录的user信息进行初始化 */
			$rootScope.init = function(user) {
				session.permissions = user ? user.permissions : null;
				session.navs = $rootScope.app.navs = [];
				session.currentMenu = $rootScope.app.currentMenu = null;
				
				session.userWrapper = $rootScope.app.userWrapper = user;	// userWrapper对象保留user的所有属性
				if (user) {
					var userSimple = {}; // 只有简单属性的user对象
					angular.forEach(user, function(value, name) {
						// if (angular.isArray(value)) return;
						if (Mortal.isPrimitive(value)) {
							userSimple[name] = value;
						}
					});
					userSimple = $.extend(userSimple, {
						id : user.id,
						code : user.code,
						name : user.name,
						dept : {
							id : user.dept.id,
							code : user.dept.code,
							name : user.dept.name,
							type : user.dept.type,
							companyType : user.dept.companyType
						},
						company : {
							id : user.company.id,
							code : user.company.code,
							name : user.company.name,
							type : user.company.type,
							companyType : user.company.companyType
						}
					});
					
					var applicants = [ $.extend(true, {}, userSimple) ].concat(user.applicants || []); // 可申请人
					userSimple.applicants = applicants;
					user = userSimple;
				}
				session.user = $rootScope.app.user = user; // user对象仅有人员的简单信息
			};
			
			$rootScope.init(appConfig.user);
		}
		
		appRun.$inject = [ "$rootScope", "$http", "$filter", "$state", "$stateParams", "$location", "$locale", "LocaleService" ];
		app.run(appRun);
		
		// $urlRouter.sync();
		
		// 需要在main.js调用，启动。主要用于可通过其他JS文件注入run方法,以便实现不同的方法
		//		$(document).ready(function() {
		//			angular.bootstrap($('html'), [ appConfig.name ]);
		//		});
		
		return app;
	};
	
	
	/** 根据返回的error数据data得到其错误消息 */
	function formatErrorMessage(data) {
		var actionMessage = data.actionMessage;
		if (actionMessage && actionMessage.length > 0) return actionMessage.join("\n");
		if (data.exception) {
			data.message = data.exception;
			return data.exception
		}
		
		var actionErrors = data.actionErrors;
		var fieldErrors = data.fieldErrors;
		var message = actionErrors || [];
		if (fieldErrors) {
			for ( var field in fieldErrors) {
				message = message.concat(fieldErrors[field]);
			}
		}
		message = message.join("\n");
		data.message = message;
		return message;
	}
	appConfig.formatErrorMessage = formatErrorMessage;
	
	
	
	// requirejs加载app模块
	define("app", requires, init);
})();