//主控制器
angular.module('frameApp').controller('tabCtrl', ['$scope', function ($scope) {
    //绑定的标签数据
    $scope.tabData = {
        tabs: [{
            name: 'tab1',
            caption: '主页',
            url: '/home'
        }, {
            name: 'tab2',
            caption: '管理页面',
            url: '/manage'
        }],
        focusTab: '',
        clickTab: 'clickTab'
    };

    //点击标签触发的函数
    $scope.clickTab = function (pItem) {
        console.log('点击的标签页', pItem);
    };

    //还原
    $scope.reset = function () {
        $scope.tabData = {
            tabs: [{
                name: 'tab1',
                caption: '主页',
                url: '/home'
            }, {
                name: 'tab2',
                caption: '管理页面',
                url: '/manage'
            }],
            focusTab: '',
            clickTab: 'clickTab'
        };
    };
}]);
