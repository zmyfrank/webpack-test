/**
 * Created by issuser on 2017/5/11.
 */
/* 本文件用于初始化系统的基础变量配置,在所有JS之前加载 */
(function() {
	"use strict";
	/* 系统业务相关的基础配置 */
	var VERSION = "1.0.6";	// 版本号2016-09-29日全国上线，版本定义为1.0.0
	var appName = "ems";	// 系统名，主要用于angularjs定义modula
	var root = window[ 'CONTEXT_PATH' ] || "/"; // 本应用的ContextPath,如果是根目录，则留空
	if (root == "/") root = "";
	
	/** 静态参数 */
	var STATIC_SETTING = window[ "STATIC_SETTING" ] || [ ];
	var setting = { };
	for (var i = 0, l = STATIC_SETTING.length; i < l; i++) {
		var dict = STATIC_SETTING[ i ];
		var type = dict.type;
		if (!setting[ type ]) setting[ type ] = { };
		setting[ type ][ dict.code ] = dict;
	}
	
	var currentMonth = window[ "CURRENT_MONTH" ];
	if (currentMonth) currentMonth.year = currentMonth.year.id;
	
	var i18n = { // 国际化资源的配置
		prefix : root + "/resources/i18n/ApplicationResources",// 加载国际化资源文件的目录
		suffix : ".json", // 文件后缀
		parameterName: "request_locale", // 后台切换语言时的参数名
	}
	
	/** 所有支持的语言,如果同一语言有多个定义，则把长的定义在前面. */
		// var LOCALES = [ "en" ];
	var LOCALES = {
			"zh-cn" : {
				// id: "zh-cn",	// id必须与key一致，不需要定义,下面会自动赋值
				locale: 'zh_CN',	// 请求后台的locale值
				icon: root + "/resources/images/flags/cn.png",	// 语言图标
				text: "简体中文",		// 显示的文字
				i18n: i18n.prefix + i18n.suffix,	// 对应的资源文件
				isDefault: true
			},
			"en" : {
				// id: "en",
				locale: 'en',
				icon: root + "/resources/images/flags/us.png",
				text: "English",
				i18n: i18n.prefix + "_en" + i18n.suffix,	// 对应的资源文件
				isDefault: false
			}
		};
	for (var key in LOCALES) {
		LOCALES[ key ].id = key;
	}
	var DEFAULT_LOCALE = "zh-cn";	// 默认的语言
	var locale = window[ "LOCALE" ];	// || getCookie("appLocale"));	// 读取cookie中的locale
	if (locale) {
//		if (locale.startsWith("\"")) {	// locale是用引号括起来的字符串，angularjs的cookie操作会将字段按json格式存放
//			locale = locale.substring(1, locale.length - 1);
//		}
	} else {
		// 根据浏览器设置判断,IE浏览器取到的可能是OS的语言而不是浏览器的语言
		locale = (navigator.userLanguage || navigator.language) || DEFAULT_LOCALE;
	}
	locale = locale.toLowerCase();	// 当前使用的文件
	locale = locale.replace(/_/g, '-');	// 下划线替换为短横线
	
	// locale = "en-us";
	var LOCALE = LOCALES[ locale ];
	if (!LOCALE) {
		for (var key in LOCALES) {
			if (locale.startsWith(key)) {
				locale = key;
				LOCALE = LOCALES[ locale ];
				break;
			}
		}
		if (!LOCALE) {
			locale = DEFAULT_LOCALE;
			LOCALE = LOCALES[ locale ];
		}
	}
	i18n.LOCALES = LOCALES;
	i18n.LOCALE = LOCALE;
	i18n.locale = locale;
	
	var uploader = window[ "UPLOADER"];
	uploader.view = function(id) {
		window.open(this.urlView + "?id=" + id + "&systemCode=" + this.systemCode + "&password=" + this.systemKey);
	};
	/** 图片的缩略图地址 */
	uploader.preview = function(id) {
		return (this.urlPreview + "?id=" + id + "&systemCode=" + this.systemCode + "&password=" + this.systemKey);
	};
	uploader.show = function(businessNo) {
		window.open(this.urlShow + "?businessNo=" + businessNo + "&systemCode=" + this.systemCode + "&password=" + this.systemKey);
	};
	
	var hasOpener = false;
	var opener = window.opener;
	if (opener && opener != window) {
		try {
			var openerApp =	opener.app;
			hasOpener = openerApp && openerApp.name == appName;
		} catch (openerClosed) {
			// 可能是因为父窗口已经关闭,视为没有父窗口
		}
	}
	
	/** 系统的一些基础 */
	var app = {
		root : root, // 根目录,最好不要用/结尾
		name : appName, // angular-module name
		version : VERSION,		// 版本号,每次更新系统需要将版本号进行修改,以防止JS缓存
		hasOpener: hasOpener,	// 是否有弹出窗口
		user: window["CURRENT_USER"],	// 当前登录的用户信息
		locale : locale, 	// 使用的国际化语言，默认为zh-cn
		LOCALES: LOCALES,	// 所有可切换的语言
		LOCALE: LOCALE,		// locale对应的JSON对象
		i18n: i18n,
		pageSize: window.DEFAULT_PAGE_SIZE || 10,	// 默认的分页数量
		format : {
			"date" : "YYYY-MM-DD", // 日期格式
			"time" : "HH:mm:ss",
			"datetime" : "yyyy-MM-dd HH:mm:ss" // 日期和时间的格式
		},
		now: function() {
			return new Date();
		},
		today: (function() {
			var date = new Date();
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			return date;
		})(),
		currency: window[ "CURRENCY" ],	// 本位币
		currentMonth: currentMonth,	// 当前的会计期间
		acceptFileTypes: window[ "ACCEPT_FILE_SUFFIX" ] || "",
		
		/* 以下为一些静态参数的常量,必须与字典表中的相应配置一致 */
		setting: setting,
		status: {
			valid: '1',		// 有效数据
			invalid: '0',	// 无效数据
			reviewing: 'R'	// 待复核的数据
		},
		yes_no: {
			yes: '1',	// 是
			no: '0' 	// 否
		},
		uploader: window[ "UPLOADER"] || { },	// eFiling参数
		DICT_APPLICATION_TYPE: 'application_type',	// 审批申请类型
		// setting: { },	// 从参数配置表加载的静态参数
		
		urls : { // 配置一些特殊的URL
			login: root + "/login.do",		// 调用登录页面
			logout: root + "/logout.do",		// 注销登录，退出系统
			i18n: root + "/locale.do"	// 切换语言的后台URL
		},
		/**
		 * 处理URL，如果url是以斜杠(/)开头，则为其加上root，否则直接返回url
		 * @param url
		 * @returns {String}
		 */
		url: function(url) {
			if (url.charAt(0) == '/') return this.root + url;
			return url;
		},
		
		/** 字符串数组的相关处理 */
		StringArrType: {	// 数据库中字符串数组的存放工具类
			sepeartor: ",",
			
			/**
			 * @param value 数组
			 * @param flag 是否不需要在字符串的前后加sepeartor，默认会在前后加上sepeartor，以便查询
			 */
			toString: function(value, flag) {
				if (Mortal.isUndefined(value) || value === null) return null;
				if (Mortal.isArray(value)) {
					if (value.length < 1) return '';
					var a = [ ];
					for (var i = 0, l = value.length; i < l; i++) {
						var v = value[ i ];
						if (v === '' || Mortal.isUndefined(v) || a.include(v)) return;
						a.push(v);
					};
					if (flag) return a.join(this.sepeartor);
					return this.sepeartor + a.join(this.sepeartor) + this.sepeartor;
				}
				return value + '';
			},
			/** 将str转换为数组 */
			toArray: function(str) {
				if (null == str || Mortal.isUndefined(str) || str === '') return null;
				if (Mortal.isArray(str)) return str;
				var reg = new RegExp("(^" + this.sepeartor + "*)|(" + this.sepeartor + "*$)", "g");
				str = String(str).trim().replace(reg, '');
				return str ? str.split(this.sepeartor) : null;
			}
		},
		
		/** 页面布局相关配置 */
		layout: {
			pageSidebarClosed: false, // sidebar menu state
			pageContentWhite: true, // set page content layout
			pageBodySolid: false, // solid body color state
			pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
		}
	};
	
	/* requirejs的相关配置 */
	var resourcesRoot = app.root + "/resources/";
	var baseUrl = resourcesRoot + "js/";	// JS加载的根目录
	var jqueryRoot = resourcesRoot + "lib/jquery/"; // jquery路径
	var angularRoot = resourcesRoot + "lib/angular/angular-1.5.0/"; // 官方angularjs的根目录
	var angularPluginRoot = resourcesRoot + "lib/angular/"; // 第三方angular插件路径
	/** reeuirejs的基础配置 */
	var require = {
		/* baseUrl配置为所有个模块JS文件的根目录 */
		baseUrl : baseUrl + "modules/", // 加载业务模块JS的根目录,如果要引用不在此目录下的JS文件，则paths需配置为/开头的全路径
		urlArgs : "ver=" + app.version,
		paths : {
			// app的定义
			"app" : baseUrl + "app",		// app定义
			"main" : baseUrl + "main",		// 电脑版JS
			"mobile" : baseUrl + "mobile",	// 移动版JS
			"Login" : baseUrl + "login",
			"appRouter" : baseUrl + "app/appRouter",
			"app.dict" : baseUrl + "app/app.dict",
			"app.locale" : baseUrl + "app/app.locale",
			"Layout" : baseUrl + "app/Layout",
			"appLayout" : baseUrl + "app/appLayout",
			"appPrinter" : baseUrl + "app/appPrinter",
			"appPermission" : baseUrl + "app/appPermission",	// 用于权限控制
			"app.page" : baseUrl + "app/app.page",	// 分页列表
			"app.setting" : baseUrl + "app/app.setting",
			"app.setting.review" : baseUrl + "app/app.setting.review",
			"app.accounting" : baseUrl + "app/app.accounting",
			"app.process" : baseUrl + "app/app.process",
			"app.process.controller" : baseUrl + "app/app.process.controller",
			"app.expense.controller" : baseUrl + "app/app.expense.controller",
			"app.ui" : baseUrl + "app/app.ui",	// 一些常用的UI组件
			
			// RSA算法
			"BigInt" : resourcesRoot + "lib/RSA/BigInt",
			"Barrett" : resourcesRoot + "lib/RSA/Barrett",
			"RSA" : resourcesRoot + "lib/RSA/RSA",
			
			// jquery
			"jquery" : jqueryRoot + "jquery-2.2.2.min",
			
			// angularjs
			"angular" : angularRoot + "angular.custom.min",	// angularjs源码有修改，不能直接使用.min
			// "lrStickyHeader":  angularPluginRoot + "smart-table/lrStickyHeader",
			
			// requirejs text插件
			"text" : resourcesRoot + "lib/require/require-text",
			
			// 默认的资源文件
			"i18nDefault" : app.i18n.LOCALES[ DEFAULT_LOCALE ].i18n,
			
			// 根据当前使用的语言指定资源文件
			"i18n" : app.i18n.LOCALE.i18n,
			
			"" : ""
		},
		
		shim : { // 配置不满足AMD形式的JS加载
			"angular" : {
				deps : [ "jquery" ], // angularjs使用jquery
				exports : "angular"
			},
			"angular-locale" : "angular",
			"angular-translate-loader-static-files" : [ "angular-translate" ],
			// "bootstrap-hover-dropdown": [ "bootstrap" ],
			// "stStickyHeader": [ "angular", "lrStickyHeader", "smart-table"],
			
			"" : ""
		},
		
		priority : [], // 加载优先级
		waitSeconds : 50
	};
	
	/* angularjs插件 */
	var angularModules = {
		// angular官方模块
		"ngLocale" : angularRoot + "i18n/angular-locale_" + app.locale,
		"ngRoute" : angularRoot + "angular-route.min",
		"ngSanitize" : angularRoot + "angular-sanitize.min",
		"ngAnimate" : angularRoot + "angular-animate.min",
		"ngCookies" : angularRoot + "angular-cookies.min",
		
		
		// 第三方angularjs插件
		"angular-translate" : angularPluginRoot + "angular-translate.min",
		"angular-translate-loader-static-files" : angularPluginRoot + "angular-translate-loader-static-files.min",
		"ui.router" : angularPluginRoot + "angular-ui-router.min",
		"ui.bootstrap" : angularPluginRoot + "ui-bootstrap-tpls-1.2.5.custom.min",	// 此文件有自定义修改,不要使用其对应.min文件
		"smart-table" : angularPluginRoot + "smart-table/smart-table",	// 此文件有自定义修改,不要使用其对应的min文件
		// "stStickyHeader": angularPluginRoot + "smart-table/stStickyHeader",	// 此文件有自定义修改,不要使用其对应的min文件
		"ui.grid" : angularPluginRoot + "ui-grid/ui-grid.min",
		"ui.select" : angularPluginRoot + "ui-select/select.custom.min",	// 此文件有自定义修改
		"angular-file-upload" : angularPluginRoot + "angular-file-upload.min",		// 文件上传
		"ngmodel.format": angularPluginRoot + "ngmodel.format",
		
		// 自定义指令
		"DriectiveHelper" : baseUrl + "directives/DriectiveHelper",
		"ui.ztree" : baseUrl + "directives/ui.ztree",
		"ui.table" : baseUrl + "directives/ui.table",
		"ui.uploader" : baseUrl + "directives/ui.uploader",
		"DataLoader" : baseUrl + "directives/DataLoader"
	}
	for ( var key in angularModules) {
		require.paths[ key ] = angularModules[ key ];
		if (!require.shim[ key ]) require.shim[ key ] = [ "angular" ];
	}
	
	/* jquery插件 */
	var jqueryPlugins = {
		"bootstrap" : resourcesRoot + "bootstrap/js/bootstrap.min",
		"bootstrap-hover-dropdown" : resourcesRoot + "bootstrap/plugins/bootstrap-hover-dropdown",
		"jquery.slimscroll" : jqueryRoot + "jquery-slimscroll/jquery.slimscroll.min",
		"jquery.ztree" : jqueryRoot + "jquery-ztree/jquery.ztree.all-3.5.min"
	}
	for ( var key in jqueryPlugins) {
		require.paths[ key ] = jqueryPlugins[ key ];
		if (!require.shim[ key ]) require.shim[ key ] = [ "jquery" ];
	}
	
	
	/** 读取cookie */
	function getCookie(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) return unescape(arr[ 2 ]);
		else return null;
	}
	
	// 使配置成为全局变量
	window.app = app;
	window.require = require;
	
})();
