//主控制器
angular.module('frameApp').controller('layoutCtrl', ['$scope', function ($scope) {
    //============================标签代码==========================

    //绑定标签数据
    $scope.tagdata = {
        checkTag: 'checkTag1',
        tags: [{
            name: '建设',
            value: '1'
        }, {
            name: '建设用地使用权',
            value: '2'
        }, {
            name: '建设用地使用权',
            value: '3'
        }, {
            name: '建设用地使用权',
            value: '4'
        }, {
            name: '建设用地使用权',
            value: '5'
        }, {
            name: '建设用地使用权',
            value: '6'
        }, {
            name: '建设用地使用权',
            value: '7'
        }, {
            name: '建设用地使用权',
            value: '8'
        }]
    };

    //选中标签触发的函数
    $scope.checkTag1 = function (pItem) {
        console.log('选择标签', pItem);
    };

    //============================日期插件代码==========================

    //============================滚动通知插件代码==========================
    $scope.notifyData = ['数据字典表单验证问题；日期控件表单验证样式问题', '我是消息'];
}]);