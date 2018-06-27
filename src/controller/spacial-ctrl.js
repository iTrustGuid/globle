angular.module('mainApp').controller('spatialCtrl', ['$scope', function ($scope) {
    //两点通视
    $scope.ldts = function () {
        if ($scope.qdgdpy == null || $scope.zdgdpy == null) {
            GM.Infomation.show('请完善参数！');
        }
    };
    //清除两点通视
    $scope.qcldts = function () {
        $scope.qdgdpy = null;
        $scope.zdgdpy = null;
    };
    //视域分析
    $scope.syfx = function () {
        if ($scope.czjj == null || $scope.spjj == null || $scope.gd == null) {
            GM.Infomation.show('请完善参数！');
        }
    };
    //清除视域分析
    $scope.qcsyfx = function () {
        $scope.czjj = null;
        $scope.spjj = null;
        $scope.gd = null;
    };
}]);
