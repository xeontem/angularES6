import angular from 'angular';
import ParentController from './controllers/ParentController';
import ChildController from './controllers/ChildController';
import ChildChildController from './controllers/ChildChildController';
import {MyDirective} from './directives/MyDirective';
import '../css/main.css';

let app = angular.module('testingAngularApp', []);

app
	.controller('parent-controller', ParentController)
	.controller('child-controller', ChildController)
	.controller('child-child-controller', ChildChildController)
	.directive('my-directive', () => new MyDirective());