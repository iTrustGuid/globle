angular.module('mainApp').controller('flyCtrl', ['$scope', function ($scope) {
    $scope.flyModel = '0';
    $scope.viewModel = '0';

    //新建
    $scope.add = function () {

    };

    //编辑
    $scope.edit = function () {

    };

    //开始
    $scope.star = function () {

    };

    //暂停
    $scope.pause = function () {

    };

    //继续
    $scope.continue = function () {

    };

    //停止
    $scope.stop = function () {

    };

    //选择模型
    $scope.chooseModel = function () {

    };

    //切换飞行模式
    $scope.$watch('flyModel', function (newVal, oldVal, scope) {
        switch (newVal) {
        case '0':
            //跟随模式
            break;
        case '1':
            //运动物体
            break;
        }
    });

    //切换观察模式
    $scope.$watch('viewModel', function (newVal, oldVal, scope) {
        switch (newVal) {
        case '0':
            //第一人称
            break;
        case '1':
            //第三人称
            break;
        case '2':
            //自由模式
            break;
        }
    });
}]);
