angular.module('frameApp').controller('carouselCtrl', ['$scope', function ($scope) {
    $scope.slides = [{
        id: 1,
        img: require('../img/slide1.jpg')
    }, {
        id: 2,
        img: require('../img/slide2.jpg')
    }, {
        id: 3,
        img: require('../img/slide3.jpg')
    }];
}]);
