angular.module('mainApp').controller('zoomCtrl', ['$scope', function ($scope) {
    $scope.zoomTo = function () {
        if ($scope.jindu == null || $scope.weidu == null) {
            GM.Infomation.show('请输入经纬度！');
            return;
        }
        console.log($scope.jindu, $scope.weidu, $scope.type);
    };
}]);
