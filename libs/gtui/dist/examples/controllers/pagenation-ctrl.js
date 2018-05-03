//主控制器
angular.module('frameApp').controller('pagenationCtrl', ['$scope', function ($scope) {
    //因为监听了 pendingPage.currentPage 改变事件，所以这个位置初始化值的时候，就会触发
    //查询请求，所以后面不需要进行额外的请求了。
    $scope.pendingPage = {
        currentPage: 1
    };

    //注册页数修改监听
    $scope.$watch('pendingPage.currentPage', function () {
        if ($scope.pendingPage.currentPage > 0) {
            //查询请求

            //请求结果中会包含总数
            $scope.pendingPage.totalItems = 97;
        }
    });
}]);