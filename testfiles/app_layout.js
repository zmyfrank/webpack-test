/**
 * Created by issuser on 2017/5/11.
 */
/** 与页面布局相关的指令 */
(function() {
	"use strict";
	
	/** 依赖的模块 */
	var deps = [ "angular", "jquery", "Layout", "appRouter", "DriectiveHelper", "bootstrap-hover-dropdown" ];
	
	/** 定义angular模块 */
	function factory(angular, $, Layout, appRouter, DriectiveHelper) {
		/** 切换菜单的open状态 */
		function toggleMenu(menu) {
			menu.open = !menu.open;
			$(window).trigger('resize');
		};
		
		var module = angular.module("appLayout", []);
		module.directive('ngSpinnerBar', [ '$rootScope', "$location", "$timeout", function($rootScope, $location, $timeout) {
			function show() {
				$rootScope.session.hideSpinnerBar = false;
			}
			
			function hide() {
				$rootScope.session.hideSpinnerBar = true;
				$(window).trigger('resize');
			}
			return {
				link : function(scope, element, attrs) {
					// by defult hide the spinner bar
					// element.addClass('hide'); // hide spinner bar by default
					// hide();
					
					$timeout(function() { hide(); }, 500);
					
					
					// display the spinner bar whenever the route changes(the content part started loading)
					$rootScope.$on('$stateChangeStart', function() {
						// element.removeClass('hide'); // show spinner bar
						show();
					});
					
					// hide the spinner bar on rounte change success(after the content loaded)
					$rootScope.$on('$stateChangeSuccess', function() {
						// element.addClass('hide'); // hide spinner bar
						hide();
						$('body').removeClass('page-on-load'); // remove page loading indicator
						
						Layout.scrollTopContent();
						
						$timeout(function() { $(window).trigger('resize'); }, 200);
						
						// Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu
						
						// auto scorll to page top
						// setTimeout(function() {
						// scrollTop(); // scroll to the top on content load
						// }, $rootScope.app.layout.pageAutoScrollOnLoad);
					});
					
					// handle errors
					$rootScope.$on('$stateNotFound', function() {
						// element.addClass('hide'); // hide spinner bar
						hide();
					});
					
					// handle errors
					$rootScope.$on('$stateChangeError', function() {
						// element.addClass('hide'); // hide spinner bar
						// $rootScope.session.hideSpinnerBar = true;
						hide();
					});
				}
			};
		} ]);
		
		
		/** 登录按钮已经加载，则可以初始化登录容器的高度 */
		/*module.directive('loginAction', function() {
		 return {
		 link : function(scope, elem) {
		 // $(elem).parents(".login-container").css("", Layout.getContentHeight() + "px");
		 $("body").addClass("page-login");	// 添加登录
		 
		 $('body').removeClass('page-on-load'); // remove page loading indicator
		 
		 var initContainerHeight = function() {
		 $(elem).parents(".login-container").attr('style', 'min-height:' + Layout.getContentHeight() + 'px');
		 };
		 Layout.addResizeHandler(initContainerHeight);
		 }
		 };
		 });*/
		
		// Handle Dropdown Hover Plugin Integration
		module.directive('dropdownMenuHover', function() {
			return {
				link : function(scope, elem) {
					$(elem).dropdownHover();
				}
			};
		});
		
		// /* Setup Layout Part - Header */
		// module.controller('HeaderController', ['$scope', function($scope) {
		// $scope.$on('$includeContentLoaded', function() {
		// Layout.initHeader(); // init header
		// });
		// }]);
		
		/* Setup Layout Part - Sidebar */
		module.controller('SidebarController', [ '$scope', "$rootScope", "$timeout", function($scope, $rootScope, $timeout) {
			$scope.$on('$includeContentLoaded', function() {
				$('body').removeClass('page-on-load');
				Layout.initSidebar(); // init sidebar
			});
			
			/** 切换菜单的open状态 */
			$scope.toggle = toggleMenu;
			
			// 显示导航路径
			$rootScope.$on('$stateChangeSuccess', function() {
				var navs = $rootScope.session.navs;
				// console.log('$stateChangeSuccess' + "," + navs+"," + $rootScope.session.currentMenu);
				navs.length = 0;
				var menu = $rootScope.session.currentMenu;
				if (!menu) return;
				menu = appRouter.menus[ menu.id ];	// 重新从菜单数据中根据id取得菜单对象，防止是登录超时后重登陆的menu对象
				navs.push(menu);
				var parent = menu.parent;
				while (parent) {
					parent.open = true;
					navs.splice(0, 0, parent);
					parent = parent.parent;
				}
			});
			
			// 1s后触发resize
			$timeout(function() { $(window).trigger('resize'); }, 1000);
		} ]);
		
		/* 用于导航栏的controller */
		module.controller('BreadcrumbController', [ '$scope', "$rootScope", function($scope, $rootScope) {
			/** 切换菜单的open状态 */
			$scope.toggle = toggleMenu;
		} ]);
		
		module.controller('FooterController', [ '$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {
			$scope.$on('$includeContentLoaded', function() {
				Layout.initFooter(); // init footer
				
				// 200ms后触发resize
				$timeout(function() { $(window).trigger('resize'); }, 200);
			});
		} ]);
		return "appLayout";
	}
	
	define("appLayout", deps, function(angular, $, Layout, appRouter, DriectiveHelper) {
		return factory(angular, $, Layout, appRouter, DriectiveHelper);
	});
})();
