/**
 * Created by issuser on 2017/5/11.
 */
/** 动态加载数据 */
(function() {
	'use strict';
	var deps = [ "angular", "jquery", "DriectiveHelper" ];
	define("DataLoader", deps, function(ng, $, Helper) {
		var module = ng.module("DataLoader", []);
		/** 以加载的缓存数据,主键为加载的地址url,每个url的值为{ key, value } */
		var CACHE = { };
		
		/** 将json按照字段名排序 */
		function sortJson(json) {
			if (typeof json != "object") return json;
			var keys = [ ];	// 先对参数名排序
			for (var key in json) {
				keys.push(String(key));
			}
			keys.sort();
			var copy = { };
			var value;
			ng.forEach(keys, function(key) {
				value = json[ key ];
				if (!ng.isUndefined(value) && value !== null) {
					copy[ key ] = sortJson(json[ key ]);
				}
			});
			return copy;
		}
		
		/** 将参数转换为字符串 */
		function toKey(args) {
			if (!args) return '';
			if (ng.isString(args)) return args;
			return ng.toJson(sortJson(args), 0);
		}
		
		var MAX_COUNT = 10;	// 同时发起的最大异步请求数量
		var count = 0;		// 正在请求的数量
		
		var service = function($http, $q, $timeout) {
			/**
			 * 提交AJAX请求，如果count>MAX_COUNT,则会延迟20ms再提交请求 */
			var post = function(url, args, deferred) {
				if (count <= MAX_COUNT) {
					// 立即提交请求
					count++;
					$http.post(url, args).success(function(data) {
						count--;
						CACHE[ url ][ toKey(args) ] = data;
						deferred.resolve(data);
					}).error(function() {
						count--;
					});
				} else {
					$timeout(function() { post(url, args, deferred); }, 20);
				}
			}
			/**
			 * 读取url的数据
			 * @param $http
			 * @param $q
			 * @param url 请求的url
			 * @param args 提交的参数
			 */
			var load = function(url, args, options) {
				options = options || { };
				var data = null;
				var refresh = options.refresh;
				if (!CACHE[ url ]) CACHE[ url ] = { };
				else if (!refresh) {
					var key = toKey(args);
					data = CACHE[ url ][ key ];
				}
				
				var deferred = $q.defer();
				if (data && !refresh) {
					$timeout(function() { deferred.resolve(data); }, 10);
				} else {
					// 延迟提交请求
					post(url, args, deferred);
				}
				return deferred.promise;
			};
			return {
				/** 从url加载参数 */
				load: function(url, args, options) {
					return load(url, args, options);
				},
				
				/** 从缓存中读取参数,不会到后台读取 */
				get: function(url, args) {
					var cache = CACHE[ url ];
					if (!cache) return null;
					return cache[ toKey(args) ] || null;
				}
			}
		};
		service.$inject = [ "$http", "$q", "$timeout" ];
		module.service('DataLoader', service);
	});
})();