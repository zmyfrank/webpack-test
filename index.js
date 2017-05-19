/**
 * Created by issuser on 2017/5/18.
 */
//import _ from 'lodash';
import angular from 'angular';
import jquery from 'jquery';
//import 'bootstrap'
// function compoment() {
// 	var element = document.createElement('div');
// 	element.innerHTML = _.join(['Hello', 'Webpack'],'');
// 	return element
// }
//
// document.body.appendChild(compoment());
export default angular.module('app',[])

	.controller('MainCtrl',function ($scope) {
	//var  vm  = this;
	$scope.name = 'Hello Webpack';
	console.log(jquery('#name'))
})