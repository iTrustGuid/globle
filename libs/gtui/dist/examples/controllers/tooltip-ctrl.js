//主控制器
angular.module('frameApp').controller('tooltipCtrl', ['$scope', function($scope) {
    //=============================tooltip===========================

    $scope.tooltip = {
        'title': 'Hello Tooltip<br />This is a multiline message!',
        'checked': true
    };

    //=============================popover===========================

    $scope.popover = {
        'title': 'Title',
        'content': 'Hello Popover<br />This is a multiline message!'
    };

    //=============================alert===========================

    $scope.showAlert = function() {
        GM.Alert.show('提示', '是否确认删除？', {
            showCancelButton: false,
            type: 'warning'
        }, function() {
            console.log('已经删除！');
        });
    };

    //=============================information===========================

    $scope.showInfo = function() {
        GM.Infomation.show('我是消息框！');
    };
}]);