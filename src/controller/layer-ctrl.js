angular.module('mainApp').controller('layerCtrl', ['$scope', '$mainService', '$timeout', 'ngDialog',
    function ($scope, $mainService, $timeout, ngDialog) {
        let pDialog = null;
        //*初始化三维控件
        //@fixed
        $mainService.initGloble();

        //*组织树节点
        $scope.config = {
            checkNode: 'checkNode',
            activeNode: 'activeNode',
            name: 'title'
        };
        $timeout(function () {
            //@fixed
            $scope.treeData = $mainService.getLayers();
        }, 5000);

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

        //树节点勾选事件
        $scope.checkNode = function (arrayCheckNodes) {
            $mainService.checkLayers($scope.treeData, arrayCheckNodes);
        };
    }
]);
