//配置参数
angular.module('frameApp').config(['cfpLoadingBarProvider', 'mePageLoadingProvider', function (cfpLoadingBarProvider, mePageLoadingProvider) {
    //==========================无阻碍进度条==============================

    //配置是否显示进度块
    cfpLoadingBarProvider.includeSpinner = true;
    //配置是否显示进度条
    cfpLoadingBarProvider.includeBar = true;
    //配置后台请求等待超过多少毫秒才会显示插件
    cfpLoadingBarProvider.latencyThreshold = 500;

    //==========================覆盖式进度条==============================

    //配置插件容器，JQuery筛选器
    mePageLoadingProvider.container = document.body;
}]);

//控制器
angular.module('frameApp').controller('loadingToolCtrl', ['$scope', 'cfpLoadingBar', 'mePageLoading', '$timeout', '$http',
    function ($scope, cfpLoadingBar, mePageLoading, $timeout, $http) {
    //==========================无阻碍进度条==============================

    //开始
        $scope.startLoadingbar = function () {
            cfpLoadingBar.start();
        };

        //设置进度为30%
        $scope.startLoadingbar30 = function () {
            cfpLoadingBar.set(0.3);
        };

        //完成
        $scope.completeLoadingbar = function () {
            cfpLoadingBar.complete();
        };

        //获取当前进度条状态
        $scope.getLoadingbarStatus = function () {
            return cfpLoadingBar.status();
        };

        //==========================阻碍式进度条==============================

        $scope.delay = 0;
        $scope.minDuration = 0;
        $scope.message = 'Please Wait...';
        $scope.backdrop = true;
        $scope.promise = null;

        $scope.showBusy = function () {
            $scope.promise = $http.get('http://httpbin.org/delay/3');
        };

        //==========================覆盖式进度条==============================

        //第一个参数是切换效果，默认为random，可以传入如下值：Lazy Stretch、Circle、Spill、Frame it、Tunnel vision、Windscreen wiper、Jammed blind、Parallelogram、Tilted、Lateral Swipe、Wave、Origami、Curtain
        //第二个参数是插件容器，默认为 document.body
        $scope.showPageloading = function () {
            mePageLoading.show(null, document.body);
            $timeout(function () {
                mePageLoading.hide();
            }, 2000);
        };
    }]);