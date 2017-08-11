export default class ChildController {
	constructor($scope) {
		$scope.title = 'child scope title';
		$scope.destinations = [];

		//-------------------------- emit custom event --------------------------------------
		$scope.customEmittedValue = '';
		$scope.emitCustomEvent = () => {
			$scope.$emit('myEvent', $scope.emitValue);
		};

		$scope.storeEmittedValue = (e, val) => {
			console.log('myEvent catched in same scope. Value is: ', val);
			$scope.customEmittedValue = val;
			if($scope.StopPropagate) e.stopPropagation();
		};
		$scope.$on('myEvent', $scope.storeEmittedValue);

		//-------------------------- broadcast custom event --------------------------------------
		$scope.customBroadcastedValue = '';
		$scope.broadcastCustomEvent = () => {
			$scope.$broadcast('myEvent2', $scope.broadcastValue);
		};
		$scope.storeBroadcastedValue = (e, val) => {
			console.dir(e);
			console.log('myEvent2 catched in same scope. Value is: ', val);
			$scope.customBroadcastedValue = val;
			// if($scope.StopPropagate) e.stopPropagation();
		};
		$scope.$on('myEvent2', $scope.storeBroadcastedValue);

		//-----------------------subscribe on child event -------------------------------
		$scope.fromChildVal = '';
		$scope.StopPropagate = false;
		$scope.childEvent = $scope.$on('childChildEvent', (e, val) => {
			console.dir(e);
			$scope.fromChildVal = val;
			if($scope.StopPropagate) e.stopPropagation();
		});

		$scope.deregisterChildEvent = function() {
			$scope.childEvent();
		};

		//--------------------------------------------------------------------------------

		$scope.addDestination = dest => {
			if(!dest.city) dest.city = 'empty';
			if(!dest.country) dest.country = 'empty';
			$scope.destinations.push({
				index: dest.index,
				city: dest.city,
				country: dest.country
			});
			$scope.city = null;
			$scope.country = null;
		};

		$scope.changeStringTitle = () => {	$scope.title += '+'  };
		$scope.clearDestinations = () => {	$scope.destinations = []  };

		$scope.removeDestination = index => {
			console.log('removeDestination called');
			let dests = $scope.destinations.slice(0, index);
			dests = dests.concat($scope.destinations.slice(index+1));
			dests.map((dest, i) => {	dest.index = i	});
			$scope.destinations = dests;
		}
	}
}