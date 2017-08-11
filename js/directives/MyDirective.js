import template from '../../templates/template2.html';

export class MyDirective {
  constructor() {
    'ngInject'
    console.dir(template);
		this.restrict = 'E';
    this.scope = {
    	collapse1: '@collapse',
    	collapse2: '=collapse',
    	collapse3: '&collapse',
    	title: '=',
    	applyt: '&'
    };
    this.transclude = true;
    this.replace = true;
    this.templateUrl = './templates/template2.html';
  }

  controller($scope) {
    console.dir($scope);
  }

  link(scope, element, attrs) {
    console.log('111111111111111111111111111111111111111111111111');
    //------------------------------ emitted event ---------------------------------------
    scope.siblingCustomEmittedValue = '';
    scope.childStoreEmittedValue = (e, val) => {
      console.log('myEvent catched in sibling scope. Value is: ', val);
      scope.siblingCustomEmittedValue = val;
    };
    scope.$on('myEvent', scope.childStoreEmittedValue);

    //------------------------------ broadcasted event ---------------------------------------
    scope.siblingCustomBroadcastedValue = '';
    scope.childStoreBroadcastedValue = (e, val) => {
          console.log('myEvent2 catched in sibling scope. Value is: ', val);
          scope.siblingCustomBroadcastedValue = val;
    };
    scope.$on('myEvent2', scope.childStoreBroadcastedValue);
	}
}