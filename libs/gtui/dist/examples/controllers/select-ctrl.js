//主控制器
angular.module('frameApp').controller('selectCtrl', ['$scope', '$validation', function($scope, $validation) {
    $scope.sex = 1;
    $scope.validator1 = 'email';

    $scope.validateForm = function() {
        GM.LayoutOper.validateForm($validation, $scope.userForm, function() {
            GM.Infomation.show('表单验证通过！');
        }, function() {
            GM.Infomation.show('表单验证不通过！');
        });
    };

    $scope.sex1 = '0';
    $scope.selectData = [{
        name: '男',
        value: '0'
    }, {
        name: '女',
        value: '1'
    }];
    $scope.config = {
        attName: 'name',
        strAttValue: 'value',
        pinyin: true
    };
}]);