/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/*全局变量*/
angular.module('mainApp', ['gm.ngCustom.control', 'ngResource', 'ngSanitize']);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

angular.module('mainApp').controller('mainCtrl', ['$scope', '$mainService', '$timeout', 'ngDialog', function ($scope, $mainService, $timeout, ngDialog) {
    var pDialog = null;
    //*初始化三维控件
    $mainService.initGloble();

    //*组织树节点
    $scope.config = {
        checkNode: 'checkNode',
        activeNode: 'activeNode',
        name: 'title'
    };
    $timeout(function () {
        $scope.treeData = $mainService.getLayers();
    }, 5000);

    //*注册事件
    //定位事件
    $scope.zoomTo = function () {
        var uniscopeObj = document.getElementById('uniscope');
        //进行初始定位
        uniscopeObj.GlobeObserver.Flytolookat(FLY_TO_LOOKAT[0], FLY_TO_LOOKAT[1], FLY_TO_LOOKAT[2], FLY_TO_LOOKAT[3], FLY_TO_LOOKAT[4], FLY_TO_LOOKAT[5], FLY_TO_LOOKAT[6], FLY_TO_LOOKAT[7]);
    };

    //树节点勾选事件
    $scope.checkNode = function (arrayCheckNodes) {
        $mainService.checkLayers($scope.treeData, arrayCheckNodes);
    };

    //交互选择工具事件
    $scope.selectByTool = function () {
        pDialog = ngDialog.open({
            template: __webpack_require__(5), //对话框内容模板
            scope: $scope, //对话框作用域
            plain: true,
            //对话框样式类，ngdialog-theme-default表默认样式，custom sm表自定义的样式
            className: 'ngdialog-theme-default custom sm',
            onOpenCallback: function onOpenCallback() {
                $('#uniscope').hide();
            },
            preCloseCallback: function preCloseCallback() {
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
        var uniscopeObj = document.getElementById('uniscope');
        uniscopeObj.ToolManager.SphericalObjectEditTool.Browse();
    };
}]);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class NgModule.mainApp.$mainService 主服务
 * @alias $mainService
 * @requires NgModule.utils.$gmRestful 请求服务类
 */
angular.module('mainApp').factory('$mainService', [function () {
    var result = {
        /**
         * 初始化球体控件
         */
        initGloble: function initGloble() {
            var uniscopeObj = document.getElementById('uniscope');
            //必须调控件本身的Init方法，否则球体加载失败
            uniscopeObj.Init(EARTH_XML_PATH);

            //初始化完成之后，进行初始定位
            uniscopeObj.GlobeObserver.Flytolookat(FLY_TO_LOOKAT[0], FLY_TO_LOOKAT[1], FLY_TO_LOOKAT[2], FLY_TO_LOOKAT[3], FLY_TO_LOOKAT[4], FLY_TO_LOOKAT[5], FLY_TO_LOOKAT[6], FLY_TO_LOOKAT[7]);
            uniscopeObj.Environment.TerrainTransparency = 150;
        },
        /**
         * 获取图层树对象
         * @return {Array} 树节点集合
         */
        getLayers: function getLayers() {
            //树节点对象
            var layerTree = [{
                name: 'DEM',
                title: 'DEM',
                parent: true
            }, {
                name: 'DOM',
                title: 'DOM',
                parent: true
            }, {
                name: 'Model',
                title: 'Model',
                parent: true
            }, {
                name: 'Block',
                title: 'Block',
                parent: true
            }, {
                name: 'MatchModel',
                title: 'MatchModel',
                parent: true
            }, {
                name: 'Billboard',
                title: 'Billboard',
                parent: true
            }, {
                name: 'POI',
                title: 'POI',
                parent: true
            }, {
                name: 'Vector',
                title: 'Vector',
                parent: true
            }, {
                name: 'Annotation',
                title: 'Annotation',
                parent: true
            }];

            //组织子节点对象
            for (var i = 0; i < layerTree.length; i++) {
                var groupLayerNode = layerTree[i];
                var childLayers = this._getLayersFromType(groupLayerNode.name);
                if (childLayers != null) {
                    groupLayerNode.children = childLayers;
                }
            }

            return layerTree;
        },
        /**
         * 设置图层是否可见
         * @param  {Array} arrayAllNodes   所有节点集合
         * @param  {Array} arrayCheckNodes 勾选上的图层集合
         */
        checkLayers: function checkLayers(arrayAllNodes, arrayCheckNodes) {
            var uniscopeObj = document.getElementById('uniscope');
            var allNodes = GM.TreeOper.getAllNodes(arrayAllNodes);
            var checkNodes = GM.TreeOper.getAllNodes(arrayCheckNodes);
            for (var i = 0; i < allNodes.length; i++) {
                var pNode = allNodes[i];
                if (pNode.Guid != null) {
                    var layer = uniscopeObj.GetStaticLayer(pNode.Guid);
                    if (layer == null) {
                        console.error('图层对象获取失败', layer);
                    } else {
                        layer.Visible = checkNodes.indexOf(pNode) >= 0;
                    }
                }
            }
        },
        /**
         * 开启选择工具
         * @param  {Number} [tagUSPickObjectType=127] 选择类型,默认是127
         * @param  {Function} callback 选择后触发的回调函数
         */
        startSelect: function startSelect(tagUSPickObjectType, callback) {
            tagUSPickObjectType = tagUSPickObjectType == null ? 127 : tagUSPickObjectType;
            var uniscopeObj = document.getElementById('uniscope');
            //设置POISearch Service的地址
            uniscopeObj.Environment.SetServerLink(5, SEARCH_SERVICE_URL);
            //设置ModelSearch Service的地址
            uniscopeObj.Environment.SetServerLink(6, SEARCH_SERVICE_URL);
            uniscopeObj.Event.OnPickObjectEx = callback;
            uniscopeObj.ToolManager.SphericalObjectEditTool.PickObjectEx(tagUSPickObjectType);
        },
        /**
         * 读取mdb数据
         * @param  {String} objectId 实体ID
         * @return {Array}          结果集合
         */
        readMdbData: function readMdbData(objectId) {
            var result = [];
            var strMdbPath = this._getMdbPath();
            var conn = new ActiveXObject('ADODB.Connection');
            var connStr = 'DBQ=' + strMdbPath + ';DRIVER={Microsoft Access Driver (*.mdb)};';
            //打开数据库；
            conn.Open(connStr);
            var rs = new ActiveXObject('ADODB.Recordset');
            var sql = 'select * from ' + 'RS_LINE ' + "where 起点点号 = '" + objectId + "'";
            //打开记录集
            rs.open(sql, conn);
            if (!rs.EOF) {
                var resultItem = {};
                for (var i = 0; rs.fields.count > i; i++) {
                    //filedName为字段名称；
                    filedName = rs(i).Name;
                    //mdb中各字段内存储的值；
                    valueCell = rs.Fields(filedName).Value;
                    valueCell = valueCell || '';
                    resultItem[filedName] = valueCell;
                }
                result.push(resultItem);
            }
            rs.close();
            rs = null;
            return result;
        },
        /**
         * 获取mdb地址
         * @return {String} mdb地址
         */
        _getMdbPath: function _getMdbPath() {
            var syspath = location.href; //file:///c:/Documents%20and%20Settings/Administrator/桌面/新建文件夹/handle-mdb.html
            myPosition = syspath.lastIndexOf('/');
            syspath = syspath.substring(0, parseInt(myPosition) + 1);
            syspath = syspath.replace('file:///', '');
            syspath = syspath.replace(new RegExp('%20', 'gm'), ' ');
            syspath = syspath + fileName; //c:/documents and settings/administrator/桌面/新建文件夹/Database.mdb；
            return syspath.toString();
        },
        /**
         * 通过图层类型获取图层
         * @param  {'DEM'|'DOM'|'Model'|'Block'|'MatchModel'|'Billboard'|'POI'|'Vector'|'Annotation'}
         * strType 图层类型
         * @return {Array} 图层对象数组，包含Guid、Name属性
         */
        _getLayersFromType: function _getLayersFromType(strType) {
            var layerCollection = {};
            var layers = [];
            var layer = null;
            var uniscopeObj = document.getElementById('uniscope');
            switch (strType) {
                case 'DEM':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(7);
                    break;
                case 'DOM':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(8);
                    break;
                case 'Model':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(0);
                    break;
                case 'Block':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(1);
                    break;
                case 'MatchModel':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(2);
                    break;
                case 'Billboard':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(3);
                    break;
                case 'POI':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(4);
                    break;
                case 'Vector':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(5);
                    break;
                case 'Annotation':
                    layerCollection = uniscopeObj.GetStaticLayerCollection(6);
                    break;
            }

            if (layerCollection != null) {
                var iCount = layerCollection.Count;
                for (var ii = 0; ii < iCount; ii++) {
                    layer = layerCollection.Items(ii);
                    var strTitle = this._getLayerCaption(layer.Name);
                    layers.push({
                        name: layer.Name,
                        title: strTitle,
                        Guid: layer.Guid,
                        check: layer.Visible
                    });
                }
            }
            return layers;
        },
        /**
         * 获取图层显示名称
         * @param  {String} strName 图层名称
         * @return {String}         图层显示名
         */
        _getLayerCaption: function _getLayerCaption(strName) {
            return strName;
        }
    };
    return result;
}]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<header class=dialog-header> <h4 class=modal-title>详情</h4> </header> <div class=dialog-content> <form class=\"form-horizontal form-simple\" name=appForm> <table class=\"table table-fixed\"> <tr class=catagory> <td colspan=12> <span>基础配置</span> </td> </tr> <tr> <td colspan=4 class=td-label> <label>系统图片</label> </td> <td colspan=8 class=td-value> <form class=form-horizontal> <input style=display:inline-block;padding-left:30px type=file id=upfile onchange=angular.element(this).scope().onc(this.files) /> </form> </td> </tr> <tr> <td colspan=4 class=td-label> <label>系统名</label> </td> <td colspan=8 class=td-value> <input type=text name=appName ng-model=copyFocusItem.name validator=required> </td> </tr> <tr> <td colspan=4 class=td-label> <label>系统标题</label> </td> <td colspan=8 class=td-value> <input type=text ng-model=copyFocusItem.title name=appTitle validator=required> </td> </tr> <tr> <td colspan=4 class=td-label> <label>系统地址</label> </td> <td colspan=8 class=td-value> <input type=text ng-model=copyFocusItem.host name=appHost validator=required> </td> </tr> <tr> <td colspan=4 class=td-label> <label>描述</label> </td> <td colspan=8 class=td-value> <input type=text ng-model=copyFocusItem.description> </td> </tr> <tr class=catagory> <td colspan=12> <span>登录配置</span> </td> </tr> <tr> <td colspan=4 class=td-label> <label>是否登录系统</label> </td> <td colspan=8 class=td-value> <ui-select ng-model=copyFocusItem.selected ng-disabled=bDisabled> <ui-select-match>{{$select.selected.label}}</ui-select-match> <ui-select-choices repeat=\"item in ssoServerData| filter: $select.search.label\"> <div ng-bind-html=\"item.label | highlight: $select.search\"></div> </ui-select-choices> </ui-select> </td> </tr> <tr> <td colspan=4 class=td-label> <label>登录ID</label> </td> <td colspan=8 class=td-value> <input type=text ng-model=copyFocusItem.ssoKey name=ssoKey validator=required> </td> </tr> <tr> <td colspan=4 class=td-label> <label>系统登出地址</label> </td> <td colspan=8 class=td-value> <input type=text ng-model=copyFocusItem.ssoLogoutUrl name=ssoLogoutUrl validator=required> </td> </tr> </table> </form> </div> <div class=dialog-buttons> <button type=button class=\"btn btn-default\" ng-click=closeThisDialog(0)>关闭</button> </div> ";

/***/ })
/******/ ]);