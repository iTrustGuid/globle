import '../src/custom/frame/frame.js';
import 'jsignature';
import './examples.less';

angular.module('frameApp', ['ui.router', 'ngAnimate', 'mgcrea.ngStrap', 'gm.ngCustom.control', 'ngResource', 'ngSanitize', 'ngCookies']);
require('./controllers/main-ctrl.js');

console.log('ok');

angular.bootstrap(document, ['frameApp'], {
    strictDi: true
});
