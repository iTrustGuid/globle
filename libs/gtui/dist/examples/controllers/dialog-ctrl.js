//主控制器
angular.module('frameApp').controller('dialogCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
    //对话框对象
    var pDialog = null;

    //打开对话框函数
    $scope.openDialog = function () {
        pDialog = ngDialog.open({
            template: require('../views/sundry/app-modal.html'), //对话框内容模板
            scope: $scope, //对话框作用域
            plain: true,
            //对话框样式类，ngdialog-theme-default表默认样式，custom sm表自定义的样式
            className: 'ngdialog-theme-default custom sm'
        });
    };

    //关闭对话框
    $scope.closeDialog = function() {
        pDialog.close();
    };
}]);
