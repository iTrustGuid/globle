/*!
 * Name: gt-ui
 * SVNVersion: 1381
 * Date: 2018-04-27
 * Description: 前端框架
 */
webpackJsonp(["center2","frame0"],{"./src/custom/system-center/center2/system-center.html":function(e,s){e.exports='<div id=myBanner ng-controller=bannerCtrl> <img class=backImg ng-src={{backgoundImg}} /> <div class=title> <div class=logBox> <img ng-src={{logImg}} /> </div> <div class=titleText> <p ng-bind=systemName></p> <p ng-bind=EnglishSystemName></p> </div> </div> <div class=logOut ng-init="userHide = true" ng-mouseover="userHide = false" ng-mouseleave="userHide = true"> <div><img class=userImg ng-style={{user.avatar}} /><span class=userName ng-bind=user.caption></span><i class="icon icon-chevron-down"></i></div> <ul class=message ng-hide=userHide> <li><a ng-click=logout($event) style=color:#fff>退出登录</a></li> </ul> </div> </div> <div id=swiperBox ng-controller=swiperBoxCtrl> <div class=swiper-container> <div class=swiper-wrapper ng-class="{center:swiperList.length<7}"> <div class=swiper-slide ng-repeat="list in swiperList"> <a ng-click=goSubsystem(list.url,$event)> <div class=imgBox> <img ng-src={{list.img}} /> </div> <div class=txtBox> <span ng-bind=list.txt></span> </div> </a> </div> </div> <div class=swiper-button-prev ng-if="swiperList.length>6"></div> <div class=swiper-button-next ng-if="swiperList.length>6"></div> </div> </div> <footer ng-controller=footerCtrl ng-bind=Copyright></footer> '},"./src/custom/system-center/center2/system-center.js":function(e,s,t){"use strict";t("./src/custom/frame/frame.js"),t("./src/custom/system-center/center-common.js"),t("./src/custom/system-center/center2/system-center.less");var n=angular.module("systemCenterApp",["gm.ngCustom.control","ngResource"]);n.controller("bannerCtrl",["$scope","$gmRestful","$location",function(e,s,n){e.backgoundImg=GLOBAL_INDEX_CONFIG.backgoundImg,e.logImg=GLOBAL_INDEX_CONFIG.logImg,e.systemName=GLOBAL_INDEX_CONFIG.systemName,e.EnglishSystemName=GLOBAL_INDEX_CONFIG.EnglishSystemName;var r=new s;GM.FrameManager.prepareData(e,r),e.user&&(e.user.avatar={background:"url("+t("./src/custom/system-center/center2/user.png")+") no-repeat 0 0 / contain","border-radius":"50px"});var i=GM.LayoutOper.getURLWithoutParams(n.absUrl());e.frameData={loginUrl:LOGIN_PATH+"?service="+i+"&logout=1"},e.logout=function(e){GM.FrameManager.logout(),e.preventDefault()}}]),n.controller("swiperBoxCtrl",["$scope","$timeout",function(e,s){for(var t=[],n=0;n<GM.AppInfos.length;n++){var r=GM.AppInfos[n];if(GM.FrameManager.hasPermission(r.name)){var i={img:r.icon,url:r.host,txt:r.title,title:r.title,permission:r.name};t.push(i)}}e.swiperList=t,s(function(){(e.swiperList.length<7?new Swiper(".swiper-container",{width:window.screen.width/6,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}):new Swiper(".swiper-container",{width:window.screen.width/6,slidesOffsetBefore:50,slidesOffsetAfter:50,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"})).onResize()},10),e.goSubsystem=function(e){return GM.CenterCommon.openSystem(e),!1}}]),n.controller("footerCtrl",["$scope",function(e){e.Copyright=GLOBAL_INDEX_CONFIG.Copyright}]),n.run(["$templateCache",function(e){var s=t("./src/custom/system-center/center2/system-center.html");e.put("system-center.tpl.html",s)}]),GM.FrameManager.addToken(n)},"./src/custom/system-center/center2/system-center.less":function(e,s){},"./src/custom/system-center/center2/user.png":function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAM1JREFUeNpiXLduHQMa0ALiViB2gvL3AnENEF9DVsSCpkkHiI8BMS+SWCAQOwOxNRBfgQkyoWmchKYJBvigcgzYNLIDsT0DbgCSY8OmkQmLC9AtYcam8TsQn8ej8TxUDVY/VgDxXyya/kLlGHBpPA7EfkB8G0nsDlTsOC6N4UD8BIgTgDgGiBWhOBoq9gSqBiUeI4B4GRAzAnEoFP/DYvhyqJoVIEFxIJ4FFWAgEMqMULXiIIkCHJGOC4DUFoA0ejKQDjxBGtXI0KgGEGAAUQQfXhrjVIgAAAAASUVORK5CYII="},"dll-reference base":function(e,s){e.exports=base},"dll-reference ngs":function(e,s){e.exports=ngs},"dll-reference ngui":function(e,s){e.exports=ngui}},["./src/custom/system-center/center2/system-center.js"]);
//# sourceMappingURL=center2-4b135.bundle.js.map