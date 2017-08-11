export default class ParentController {
  constructor($scope, $interval) {
    //------------------------------ from rootScope event --------------------------------
    $scope.greetFromRootScope = '';
    $scope.$on('rootEvent', (e, val) => {
      console.log('Catched in parent, value: ', val);
      $scope.greetFromRootScope = val;
    });

    //------------------------------ emitted event ---------------------------------------
    $scope.parentCustomEmittedValue = '';
    $scope.parentStoreEmittedValue = (e, val) => {
      console.log('myEvent catched in parent scope. Value is: ', val);
      $scope.parentCustomEmittedValue = val;
    };
    $scope.$on('myEvent', $scope.parentStoreEmittedValue);

    //------------------------------ broadcasted event ---------------------------------------
    $scope.parentCustomBroadcastedValue = '';
    $scope.$on('myEvent2', $scope.parentStoreBroadcastedValue);
    $scope.parentStoreBroadcastedValue = (e, val) => {
      console.log('myEvent2 catched in parent scope. Value is: ', val);
      $scope.parentCustomBroadcastedValue = val;
    };

    //-----------------------subscribe on child child event -------------------------------
    $scope.fromChildChildVal = '';
    $scope.$on('childChildEvent', (e, val) => {
      $scope.fromChildChildVal = val;
    });
    //--------------------------------------------------------------------------------

    $scope.title = 'parent scope title';
    $scope.obj = {
      title: 'parent scope title'
    };

    $scope.applyt = title => {
      let f = t => t+='+';
      $scope.title = f(title);
    };

    $scope.changeObjTitle = () => {
      $scope.obj.title += '+';
    };
  }
}