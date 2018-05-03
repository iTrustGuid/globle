//主控制器
angular.module('frameApp').config(['treeConfig', function (treeConfig) {
    treeConfig.defaultCollapsed = true; // collapse nodes by default
    treeConfig.appendChildOnHover = true; // append dragged nodes as children by default
}]);
angular.module('frameApp').controller('treeCtrl', ['$scope', function ($scope) {
    //==============================树插件===========================

    //树插件配置
    $scope.config = {
        checkNode: 'checkNode',
        activeNode: 'activeNode',
        name: 'name',
        children: 'children'
    };

    $scope.deleteNode = function (pNode) {
                
    };
    //绑定树插件数据
    $scope.treeData = [{
        name: '湖北省',
        value: 'hubei',
        collapsed: false,
        children: [{
            name: '武汉市',
            value: 'wuhan',
            nodeType: 'error',
            check: true,
            children: [{
                name: '新洲区',
                html: "<span class='sss' att='11'>新洲区<span>hah</span></span><input type='text' name='111'>",
                value: 'xinzhou',
                operate: [{
                    title: '删除',
                    class: 'tree-node-delete',
                    trigger: 'deleteNode'
                }]
            }, {
                name: '阳逻',
                value: 'yangluo',
                nodeType: 'disabled'
            }]
        }, {
            name: '黄石市',
            value: 'huangshi',
            children: [{
                name: '市区',
                value: 'shiqu'
            }]
        }, {
            name: '黄冈市',
            value: 'huangshi'
        }, {
            name: '孝感市',
            value: 'huangshi'
        }]
    }, {
        name: '湖南省',
        value: 'hunan',
        children: [{
            name: '武汉市',
            value: 'wuhan',
            nodeType: 'error',
            check: true,
            children: [{
                name: '新洲区',
                html: "<span class='sss' att='11'>新洲区<span>hah</span></span><input type='text' name='111'>",
                value: 'xinzhou'
            }, {
                name: '阳逻',
                value: 'yangluo',
                nodeType: 'disabled'
            }]
        }, {
            name: '黄石市',
            value: 'huangshi',
            parent: true,
            collapsed: true
            // children: [{
            //     name: '市区',
            //     value: 'shiqu'
            // }]
        }]
    }];

    //绑定选择树节点函数
    $scope.checkNode = function (arrayCheckNodes) {
        console.log('选中树节点：', arrayCheckNodes);
    };

    //绑定聚焦树节点函数
    $scope.activeNode = function (pNode) {
        console.log('焦点树节点：', pNode);
    };

    //==============================下拉树插件===========================

    //树插件配置
    $scope.config1 = {
        selectNode: 'selectNode',
        name: 'name',
        children: 'children'
    };

    //绑定树插件数据
    $scope.treeData1 = [{
        name: '湖北省',
        value: 'hubei',
        collapsed: false,
        children: [{
            name: '武汉市',
            value: 'wuhan',
            nodeType: 'error',
            check: true,
            children: [{
                name: '新洲区',
                html: "<span class='sss' att='11'>新洲区<span>hah</span></span><input type='text' name='111'>",
                value: 'xinzhou'
            }, {
                name: '阳逻',
                value: 'yangluo',
                nodeType: 'disabled'
            }]
        }, {
            name: '黄石市',
            value: 'huangshi',
            children: [{
                name: '市区',
                value: 'shiqu'
            }]
        }]
    }, {
        name: '湖南省',
        value: 'hunan',
        children: [{
            name: '武汉市',
            value: 'wuhan',
            nodeType: 'error',
            check: true,
            children: [{
                name: '新洲区',
                html: "<span class='sss' att='11'>新洲区<span>hah</span></span><input type='text' name='111'>",
                value: 'xinzhou'
            }, {
                name: '阳逻',
                value: 'yangluo',
                nodeType: 'disabled'
            }]
        }, {
            name: '黄石市',
            value: 'huangshi',
            children: [{
                name: '市区',
                value: 'shiqu'
            }]
        }]
    }];

    //绑定选定树节点函数
    $scope.selectNode = function (pNode) {
        console.log('焦点树节点：', pNode);
    };
}]);