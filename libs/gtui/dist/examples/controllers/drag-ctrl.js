//拖拽控制器
angular.module('frameApp').controller('dragCtrl', ['$scope', function ($scope) {
    $scope.data1 = [{
        name: 'one'
    }, {
        name: 'two'
    }, {
        name: 'three'
    }];
    $scope.data2 = [];
    $scope.onDropComplete1 = function ($data, $event) {
        _.remove($scope.data2, function (item) {
            return item === $data;
        });
        $scope.data1.push($data);
        console.log($data, $event);
    };
    $scope.onDropComplete2 = function ($data, $event) {
        _.remove($scope.data1, function (item) {
            return item === $data;
        });
        $scope.data2.push($data);
        console.log($data, $event);
    };
}]);
