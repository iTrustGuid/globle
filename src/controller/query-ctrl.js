angular.module('mainApp').controller('queryCtrl', ['$scope', '$mainService', function ($scope, $mainService) {
    $scope.zoomTo = function () {
        if ($scope.jindu == null || $scope.weidu == null) {
            GM.Infomation.show('请输入经纬度！');
            return;
        }
        console.log($scope.jindu, $scope.weidu, $scope.type);
    };

    $scope.selectByTool = function () {
        $mainService.startSelect(127, function (args) {
            //获取被点击的对象
            var id = args.GetKey();
            // var layerName = args.GetParentLayerName();
            // 展示属性数据
            var mdbData = $mainService.readMdbData(id);
            alter(mdbData);
            //闪烁选中图元
            //var obj = uniscopeObj.Factory.GetObjectByGuid(id);
            //var pRenderableObject = obj; //高亮对象
            //var lastTime = 30; //高亮持续时间
            //var intervalTime = 1; //闪烁间隔时间
            //var vColor = uniscopeObj.ToIntColor(0x7fff0000); //高亮色
            //uniscopeObj.Paint.HighlightObject(pRenderableObject, lastTime, intervalTime, vColor);
        });
    };
}]);
