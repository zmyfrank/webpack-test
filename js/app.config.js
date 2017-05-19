/**
 * Created by issuser on 2017/5/19.
 */
routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}