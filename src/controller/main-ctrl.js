import '../service/main-service';
import './zoom-ctrl';
import './ar-ctrl';
import './calculate-ctrl';
import './fly-ctrl';
import './label-ctrl';
import './layer-ctrl';
import './query-ctrl';
import './spacial-ctrl';

angular.module('mainApp').controller('mainCtrl', ['$scope', '$mainService',
    function ($scope, $mainService) {
        //组织菜单
        $scope.menuList = [{
            name: 'tcgl',
            caption: '图层管理',
            url: 'layer.tpl.html'
        }, {
            name: 'zoom',
            caption: '定位',
            url: 'zoom.tpl.html'
        }, {
            name: 'fly',
            caption: '飞行',
            url: 'fly.tpl.html'
        }, {
            name: 'measure',
            caption: '量测',
            url: 'calculate.tpl.html'
        }, {
            name: 'bqgl',
            caption: '标签管理',
            url: 'label.tpl.html'
        }, {
            name: 'kjfx',
            caption: '空间分析',
            url: 'spacial.tpl.html'
        }, {
            name: 'fzzs',
            caption: '仿真展示',
            url: 'ar.tpl.html'
        }, {
            name: 'ztgw',
            caption: '专题管网',
            url: 'query.tpl.html'
        }];
        //默认选中图层管理
        $scope.activeItem = $scope.menuList[0];

        //获取用户信息
        $scope.userinfo = $mainService.getUserInfo();
        if ($scope.userinfo == null) {
            $mainService.logout();
        }

        //注册事件
        //选择菜单事件
        $scope.chooseMenu = function (item) {
            $scope.activeItem = item;
            switch (item.name) {
            case 'tcgl':
                //图层管理
                break;
            case 'zoom':
                //定位
                break;
            case 'fly':
                //飞行
                break;
            case 'measure':
                //量测
                break;
            case 'bqgl':
                //标签管理
                break;
            case 'kjfx':
                //空间分析
                break;
            case 'fzzs':
                //仿真展示
                break;
            case 'ztgw':
                //专题管网
                break;
            }
        };

        //取消交互
        $scope.cancleTool = function () {
            let uniscopeObj = document.getElementById('uniscope');
            uniscopeObj.ToolManager.SphericalObjectEditTool.Browse();
        };

        //登出
        $scope.logout = function () {
            $mainService.logout();
        };
    }
]);
