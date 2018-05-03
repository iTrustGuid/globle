/**
 * 登录服务
 * @alias $logService
 * @author LP
 */
angular.module('loginApp').factory('$logService', [function () {
    var factory = {
        /**
         * 登录
         * @param  {String} username 用户名
         * @param  {String} password 密码
         * @return {Object}        登录结果，包含success和message属性
         */
        login: function (username, password) {
            let result = {
                success: false,
                message: '登录失败'
            };
            if (username == null || password == null) {
                return result;
            }
            let userList = window.USER_LIST;
            for (let i = 0; i < userList.length; i++) {
                let userInfo = userList[i];
                if (userInfo.username === username &&
                    userInfo.password === password) {
                    result.success = true;
                    result.message = '登录成功';

                    //登录成功记录cookie
                    GM.CommonOper.addCookie('username', username);
                    GM.CommonOper.addCookie('password', password);
                    GM.CommonOper.addCookie('caption', userInfo.caption);
                }
            }
            return result;
        },
        /**
         * 通过cookie登录
         * @return {[type]} [description]
         */
        loginByCookie: function () {
            let username = GM.CommonOper.getCookie('username');
            let password = GM.CommonOper.getCookie('password');
            let logRt = this.login(username, password);
            if (logRt.success === true) {
                //登录成功则跳转
                this.goMainPage();
            }
        },
        /**
         * 跳转主页
         */
        goMainPage: function () {
            window.location.href = './main.html';
        }
    };
    return factory;
}]);
