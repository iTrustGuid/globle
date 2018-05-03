import '../service/main-service';

angular.module('mainApp').controller('mainCtrl', ['$scope', '$mainService', '$timeout', 'ngDialog',
    function ($scope, $mainService, $timeout, ngDialog) {
        let pDialog = null;
        //*初始化三维控件
        //@fixed
        // $mainService.initGloble();

        //*组织树节点
        $scope.config = {
            checkNode: 'checkNode',
            activeNode: 'activeNode',
            name: 'title'
        };
        $timeout(function () {
            //@fixed
            // $scope.treeData = $mainService.getLayers();
        }, 5000);

        //组织菜单
        $scope.menuList = [{
            name: 'tcgl',
            caption: '图层管理'
        }, {
            name: 'zoom',
            caption: '定位'
        }, {
            name: 'fly',
            caption: '飞行'
        }, {
            name: 'measure',
            caption: '量测'
        }, {
            name: 'bqgl',
            caption: '标签管理'
        }, {
            name: 'kjfx',
            caption: '空间分析'
        }, {
            name: 'fzzs',
            caption: '仿真展示'
        }, {
            name: 'ztgw',
            caption: '专题管网'
        }];

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

        //统计
        $scope.statistics = function () {
            pDialog = ngDialog.open({
                template: require('../modal/statistics.html'), //对话框内容模板
                scope: $scope, //对话框作用域
                plain: true,
                //对话框样式类，ngdialog-theme-default表默认样式，custom sm表自定义的样式
                className: 'ngdialog-theme-default custom sm',
                onOpenCallback: function () {
                    $('#uniscope').hide();
                },
                preCloseCallback: function () {
                    $('#uniscope').show();
                }
            });
            $mainService.initHighchars();
        };

        //定位事件
        $scope.zoomTo = function () {
            let uniscopeObj = document.getElementById('uniscope');
            //进行初始定位
            uniscopeObj.GlobeObserver.Flytolookat(FLY_TO_LOOKAT[0], FLY_TO_LOOKAT[1],
                FLY_TO_LOOKAT[2], FLY_TO_LOOKAT[3], FLY_TO_LOOKAT[4], FLY_TO_LOOKAT[5],
                FLY_TO_LOOKAT[6], FLY_TO_LOOKAT[7]);
        };

        //登出
        $scope.logout = function () {
            $mainService.logout();
        };

        //树节点勾选事件
        $scope.checkNode = function (arrayCheckNodes) {
            $mainService.checkLayers($scope.treeData, arrayCheckNodes);
        };

        //交互选择工具事件
        $scope.selectByTool = function () {
            pDialog = ngDialog.open({
                template: require('../modal/attr.html'), //对话框内容模板
                scope: $scope, //对话框作用域
                plain: true,
                //对话框样式类，ngdialog-theme-default表默认样式，custom sm表自定义的样式
                className: 'ngdialog-theme-default custom sm',
                onOpenCallback: function () {
                    $('#uniscope').hide();
                },
                preCloseCallback: function () {
                    $('#uniscope').show();
                }
            });
            $mainService.startSelect(127, function (args) {
                //获取被点击的对象
                var id = args.GetKey();
                // var layerName = args.GetParentLayerName();
                // 展示属性数据
                var mdbData = $mainService.readMdbData(id);
                //闪烁选中图元
                var obj = uniscopeObj.Factory.GetObjectByGuid(id);
                var pRenderableObject = obj; //高亮对象
                var lastTime = 30; //高亮持续时间
                var intervalTime = 1; //闪烁间隔时间
                var vColor = uniscopeObj.ToIntColor(0x7fff0000); //高亮色
                uniscopeObj.Paint.HighlightObject(pRenderableObject, lastTime, intervalTime, vColor);
            });
        };

        //取消交互
        $scope.cancleTool = function () {
            let uniscopeObj = document.getElementById('uniscope');
            uniscopeObj.ToolManager.SphericalObjectEditTool.Browse();
        };
    }
]);
