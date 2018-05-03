angular.module('frameApp').controller('jsignatureCtrl', ['$scope', function ($scope) {
    //初始化控件
    var $sigdiv = $('#signature').jSignature({
        'UndoButton': true,
        'width': '100%',
        'height': '100%'
    });

    //获取图片数据
    $scope.getData = function () {
        var data = $sigdiv.jSignature('getData', 'image');
        $scope.imgSrc = 'data:' + data.join(',');
    };
}]);
