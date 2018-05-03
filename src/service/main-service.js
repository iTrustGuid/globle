/**
 * @class NgModule.mainApp.$mainService 主服务
 * @alias $mainService
 * @requires NgModule.utils.$gmRestful 请求服务类
 */
angular.module('mainApp').factory('$mainService', ['$timeout', function ($timeout) {
    var result = {
        /**
         * 初始化球体控件
         */
        initGloble: function () {
            let uniscopeObj = document.getElementById('uniscope');
            //必须调控件本身的Init方法，否则球体加载失败
            uniscopeObj.Init(EARTH_XML_PATH);

            //初始化完成之后，进行初始定位
            uniscopeObj.GlobeObserver.Flytolookat(FLY_TO_LOOKAT[0], FLY_TO_LOOKAT[1],
                FLY_TO_LOOKAT[2], FLY_TO_LOOKAT[3], FLY_TO_LOOKAT[4], FLY_TO_LOOKAT[5],
                FLY_TO_LOOKAT[6], FLY_TO_LOOKAT[7]);
            uniscopeObj.Environment.TerrainTransparency = 150;
        },
        /**
         * 获取图层树对象
         * @return {Array} 树节点集合
         */
        getLayers: function () {
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
        checkLayers: function (arrayAllNodes, arrayCheckNodes) {
            let uniscopeObj = document.getElementById('uniscope');
            let allNodes = GM.TreeOper.getAllNodes(arrayAllNodes);
            let checkNodes = GM.TreeOper.getAllNodes(arrayCheckNodes);
            for (var i = 0; i < allNodes.length; i++) {
                let pNode = allNodes[i];
                if (pNode.Guid != null) {
                    let layer = uniscopeObj.GetStaticLayer(pNode.Guid);
                    if (layer == null) {
                        console.error('图层对象获取失败', layer);
                    } else {
                        layer.Visible = (checkNodes.indexOf(pNode) >= 0);
                    }
                }
            }
        },
        /**
         * 开启选择工具
         * @param  {Number} [tagUSPickObjectType=127] 选择类型,默认是127
         * @param  {Function} callback 选择后触发的回调函数
         */
        startSelect: function (tagUSPickObjectType, callback) {
            tagUSPickObjectType = tagUSPickObjectType == null ? 127 : tagUSPickObjectType;
            let uniscopeObj = document.getElementById('uniscope');
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
        readMdbData: function (objectId) {
            let result = [];
            let strMdbPath = this._getMdbPath();
            let conn = new ActiveXObject('ADODB.Connection');
            let connStr = 'DBQ=' + strMdbPath + ';DRIVER={Microsoft Access Driver (*.mdb)};';
            //打开数据库；
            conn.Open(connStr);
            let rs = new ActiveXObject('ADODB.Recordset');
            let sql = 'select * from ' + 'RS_LINE ' + "where 起点点号 = '" + objectId + "'";
            //打开记录集
            rs.open(sql, conn);
            if (!rs.EOF) {
                let resultItem = {};
                for (let i = 0; rs.fields.count > i; i++) {
                    //filedName为字段名称；
                    filedName = rs(i).Name;
                    //mdb中各字段内存储的值；
                    valueCell = (rs.Fields(filedName).Value);
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
         * 获取用户信息
         * @return {Object} 用户信息对象
         */
        getUserInfo: function () {
            let userinfo = {};
            userinfo.username = GM.CommonOper.getCookie('username');
            userinfo.password = GM.CommonOper.getCookie('password');
            userinfo.caption = GM.CommonOper.getCookie('caption');
            if (userinfo.username == null || userinfo.username === '') {
                return null;
            } else {
                return userinfo;
            }
        },
        /**
         * 登出
         */
        logout: function () {
            //删除cookie
            GM.CommonOper.removeCookie('username');
            GM.CommonOper.removeCookie('password');
            GM.CommonOper.removeCookie('caption');
            window.location.href = './index.html';
        },
        initHighchars: function () {
            $timeout(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '月平均降雨量'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: {
                        categories: [
                            '一月',
                            '二月',
                            '三月',
                            '四月',
                            '五月',
                            '六月',
                            '七月',
                            '八月',
                            '九月',
                            '十月',
                            '十一月',
                            '十二月'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '降雨量 (mm)'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '东京',
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }, {
                        name: '纽约',
                        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                    }, {
                        name: '伦敦',
                        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                    }, {
                        name: '柏林',
                        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                    }]
                });
            }, 200);
        },
        /**
         * 获取mdb地址
         * @return {String} mdb地址
         */
        _getMdbPath: function () {
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
        _getLayersFromType: function (strType) {
            let layerCollection = {};
            let layers = [];
            let layer = null;
            let uniscopeObj = document.getElementById('uniscope');
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
                let iCount = layerCollection.Count;
                for (var ii = 0; ii < iCount; ii++) {
                    layer = layerCollection.Items(ii);
                    let strTitle = this._getLayerCaption(layer.Name);
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
        _getLayerCaption: function (strName) {
            return strName;
        }
    };
    return result;
}]);
