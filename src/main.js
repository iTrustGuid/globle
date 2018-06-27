import './main.less';

/*全局变量*/
angular.module('mainApp', ['gm.ngCustom.control', 'ngResource', 'ngSanitize']);
angular.module('mainApp').run(['$templateCache', function ($templateCache) {
    $templateCache.put('ar.tpl.html', require('./views/ar.html'));
    $templateCache.put('calculate.tpl.html', require('./views/calculate.html'));
    $templateCache.put('label.tpl.html', require('./views/label.html'));
    $templateCache.put('layer.tpl.html', require('./views/layer.html'));
    $templateCache.put('query.tpl.html', require('./views/query.html'));
    $templateCache.put('spacial.tpl.html', require('./views/spacial.html'));
    $templateCache.put('fly.tpl.html', require('./views/fly.html'));
    $templateCache.put('zoom.tpl.html', require('./views/zoom.html'));
}]);
