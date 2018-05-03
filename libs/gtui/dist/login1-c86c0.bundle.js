/*!
 * Name: gt-ui
 * SVNVersion: 1381
 * Date: 2018-04-27
 * Description: 前端框架
 */
webpackJsonp(["login1","frame0"],{"./src/custom/login/login1/login.html":function(o,l){o.exports='<div ng-controller=loginCtrl> <header class="logn-header clearfix"> <div class="logo-box-left fl clearfix"> <div class="img-box fl"> <img src={{loginData.logo}} /> </div> <span class=fl>{{loginData.systemName}}</span> </div> <div class="logo-box-right fr"> <span>首页</span> <span>登录</span> </div> </header> <div class=logn-content novalidate> <img class=back-img src={{loginData.backgoundImg}} /> <div class=logn-content-box> <div class=title> 用户登录 </div> <ul class=list> <li> <i class="icon icon-user"></i> <input type=text placeholder=请输入用户名 class=form-control ng-model=login.name /> <i class="icon icon-remove-sign clear" ng-click=clearName();$event.stopPropagation();></i> </li> <li> <i class="icon icon-lock"></i> <input type=password placeholder=请输入您的密码 class=form-control ng-model=login.password /> <i class="icon icon-remove-sign clear" ng-click=clearPassword();$event.stopPropagation();></i> </li> <li> <div class=left> <i class="icon icon-check-sign"></i> <input type=text placeholder=验证码 class=form-control ng-model=login.verification /> </div> <div class=right> <span><a href=javascript:;>换一张</a></span> </div> </li> <li> <span>请输入正确的用户名或密码</span> </li> <li> <a href=javascript:void(0); class="btn btn-block btn-primary" type=button ng-click=loginSubmit();>登录</a> </li> </ul> </div> </div> <footer class=logn-footer> {{loginData.footer}} </footer> </div> '},"./src/custom/login/login1/login.js":function(o,l,i){"use strict";i("./src/custom/frame/frame.js"),i("./src/custom/login/login1/login.less");var n=angular.module("loginApp",[]);n.controller("loginCtrl",["$scope","$window",function(o,l){o.loginData=GLOBAL_LOGIN,o.login={name:"",password:""},o.clearName=function(){o.login.name=""},o.clearPassword=function(){o.login.password=""},o.loginSubmit=function(){l.location.href=o.loginData.indexUrl}}]),n.run(["$templateCache",function(o){var l=i("./src/custom/login/login1/login.html");o.put("login.tpl.html",l)}])},"./src/custom/login/login1/login.less":function(o,l){},"dll-reference base":function(o,l){o.exports=base},"dll-reference ngs":function(o,l){o.exports=ngs},"dll-reference ngui":function(o,l){o.exports=ngui}},["./src/custom/login/login1/login.js"]);
//# sourceMappingURL=login1-c86c0.bundle.js.map