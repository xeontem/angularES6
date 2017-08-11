export default class ChildChildController {
	constructor($scope, $rootScope) {
		//------------------------------ emitted event ---------------------------------------
		$scope.childCustomEmittedValue = '';
		$scope.childStoreEmittedValue = (e, val) => {
			console.log('myEvent catched in child scope. Value is: ', val);
			$scope.childCustomEmittedValue = val;
		};
		$scope.$on('myEvent', $scope.childStoreEmittedValue);

		//------------------------------ broadcasted event ---------------------------------------
		$scope.childCustomBroadcastedValue = '';
		$scope.childStoreBroadcastedValue = (e, val) => {
			console.log('myEvent2 catched in child scope. Value is: ', val);
			$scope.childCustomBroadcastedValue = val;
		};
		$scope.$on('myEvent2', $scope.childStoreBroadcastedValue);

		//-------------------- child child custom event --------------------------------
		$scope.messageToEmit = '';
		$scope.emitEvent = () => {
			$scope.$emit('childChildEvent', $scope.messageToEmit);
		};

		$scope.fromChildChildEvent = '';
		$scope.$on('childChildEvent', (e, val) => {
			$scope.fromChildChildEvent = val;
		});
		
		//-------------------------- rootScope broadcast event -------------------------
		$scope.broadcastRootScope = () => {
			$rootScope.$broadcast('rootEvent', 'I\'m from rootScope');
		};
	}
}