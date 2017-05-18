/**
 * Created by issuser on 2017/5/18.
 */
import _ from 'jquery';
function compoment() {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'Webpack'],'');
	return element
}

document.body.appendChild(compoment());