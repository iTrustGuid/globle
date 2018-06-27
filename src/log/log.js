import './log.less';
import './log-service';

window.loginInfo = {
    bjUrl: require('./img/bj.png'), //背景图片路径
    logo: require('../img/logo.png'), //logo图标
    cname: '河津市地下管网系统',
    footer: 'Copyright&nbsp;&copy;&nbsp;2017-2020&nbsp;河津市地下管网系统&nbsp;-&nbsp;Powered&nbsp;By&nbsp;&nbsp;V2.0'
};

app.controller('loginCtrl', ['$scope', '$logService', function ($scope, $logService) {
    $scope.loginInfo = loginInfo;
    $scope.userImg = require('./img/user.png');
    $scope.passwordImg = require('./img/password.png');
    $scope.codeImg = require('./img/verificationCode.png');

    //如果有cookies则自动登录
    $logService.loginByCookie();

    //登录按钮
    $scope.submit = function () {
        //验证表单
        var loginData = $scope.loginData || {};
        if (GM.CommonOper.isStrNullOrEmpty(loginData.username)) {
            GM.Infomation.show('提示', '请输入用户名！');
            return;
        }
        if (GM.CommonOper.isStrNullOrEmpty(loginData.password)) {
            GM.Infomation.show('提示', '请输入密码！');
            return;
        }
        let logRt = $logService.login(loginData.username, loginData.password);
        if (logRt.success === false) {
            GM.Infomation.show('提示', logRt.message);
        } else {
            $logService.goMainPage();
        }
    };
    //注册点击事件
    $(document.body).keyup(function (event) {
        if (event.keyCode === 13) {
            $scope.submit();
        }
    });
}]);
app.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);
angular.bootstrap(document, ['loginApp']);
