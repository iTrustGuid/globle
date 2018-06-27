angular.module('mainApp').controller('labelCtrl', ['$scope', function ($scope) {
    //二维标签对象
    $scope.label2Data = [{
        caption: '标签',
        code: '1'
    }, {
        caption: '折线',
        code: '1'
    }, {
        caption: '多边形',
        code: '1'
    }, {
        caption: '矩形',
        code: '1'
    }, {
        caption: '矩形',
        code: '1'
    }, {
        caption: '圆形',
        code: '1'
    }, {
        caption: '箭头',
        code: '1'
    }, {
        caption: '扇形',
        code: '1'
    }];
    //三维标签对象
    $scope.label3Data = [{
        caption: '球',
        code: '1'
    }, {
        caption: '立方体',
        code: '1'
    }, {
        caption: '正棱柱',
        code: '1'
    }, {
        caption: '多边形棱椎体',
        code: '1'
    }, {
        caption: '立体多边形',
        code: '1'
    }, {
        caption: '圆柱体',
        code: '1'
    }, {
        caption: '圆锥体',
        code: '1'
    }, {
        caption: '广告牌',
        code: '1'
    }, {
        caption: '垂直面',
        code: '1'
    }];
    //添加标签
    $scope.add = function () {
        $scope.isAddType = true;
    };
    //删除标签
    $scope.remove = function () {
        let brt = confirm('是否确认删除？');
        if (brt === true) {
            //删除
        }
    };
    //返回
    $scope.back = function () {
        $scope.isAddType = false;
    };
}]);
