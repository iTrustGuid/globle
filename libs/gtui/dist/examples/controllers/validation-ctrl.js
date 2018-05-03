//主控制器
angular.module('frameApp').controller('validationCtrl', ['$scope', '$validation', function ($scope, $validation) {
    $scope.formData = {};

    //表单验证
    $scope.submit = function () {
        GM.LayoutOper.validateForm($validation, $scope.userForm, function () {
            GM.Infomation.show('验证通过！');
        }, function () {
            GM.Infomation.show('请完善表单！');
        });
    };
}]);
