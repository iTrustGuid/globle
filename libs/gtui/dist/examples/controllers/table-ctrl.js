//主控制器
angular.module('frameApp').controller('tableCtrl', ['$scope', '$gmTable', function($scope, $gmTable) {
    var $pGmTable = new $gmTable();

    //===============================普通表格============================
    //获取操作列模板
    var strCellTemplate = $pGmTable.getCellTemplate([{
        name: '删除',
        icon: 'icon-remove-sign',
        click: 'deleteItem'
    }, {
        name: '修改',
        icon: 'icon-edit',
        click: 'updateItem'
    }, {
        name: '用户分配',
        icon: 'icon-random',
        click: 'applyUser'
    }]);

    $scope.deleteItem = function(pItem) {
        console.log('删除表格记录', pItem);
    };

    //获取数据字典列展示模板
    var strDicCellTemplate = $pGmTable.getDicLabelTemplate('角色类型');

    //定义列
    $scope.gridOptions = {};
    $scope.gridOptions.columnDefs = [
        { name: 'title', displayName: '显示名称', enableColumnMenu: false, cellTooltip: true, width: 500, pinnedLeft: true },
        { name: 'name', displayName: '名称', enableColumnMenu: false, cellTooltip: true, width: 500 },
        {
            name: 'type',
            displayName: '类型',
            enableColumnMenu: false,
            cellTooltip: true,
            cellTemplate: strDicCellTemplate,
            width: 500
        },
        {
            name: 'operate',
            displayName: '操作',
            enableColumnMenu: false,
            cellTemplate: strCellTemplate,
            width: 500
        }
    ];

    //定义数据
    $scope.gridOptions.data = [{
        'title': '标题1',
        'name': '名称1',
        'type': '0'
    }];

    $scope.commonTableHtml = '<div ui-grid="gridOptions" class="grid" ui-grid-pinning ></div>';

    //===============================自定义表头表格============================
    var columnDefs = [
        { name: 'Col 1', category: 'column1', subcategory: 'none1', width: 100, enableColumnMenu: false },
        { name: 'Col 2', category: 'column2', subcategory: 'none2', width: 100, enableColumnMenu: false },
        { name: 'gender', category: 'People', subcategory: 'sub1', width: 100, enableColumnMenu: false },
        { name: 'name', category: 'People', subcategory: 'sub1', width: 100, enableColumnMenu: false },
        { name: 'title', category: 'People', subcategory: 'sub2', width: 100, enableColumnMenu: false },
        { name: 'age', category: 'Year', subcategory: 'sub3', width: 50, enableColumnMenu: false },
        { name: 'annee', category: 'Year', subcategory: 'none3', width: 150, enableColumnMenu: false },
        { name: 'Ex1', width: 75, enableColumnMenu: false },
        { name: 'Ex2', category: 'Extra1', width: 75, enableColumnMenu: false },
        { name: 'Ex3', width: 75, enableColumnMenu: false }
    ];

    //获取表头分类数据
    var categoryData = $pGmTable.getCategoryData(columnDefs);

    $scope.gridOptions2 = {
        treeRowHeaderAlwaysVisible: true,
        //表头模板
        headerTemplate: 'table-header.tpl.html',
        enableGridMenu: true,
        enableSorting: false,
        multiSelect: true,
        //列定义里面包含分类信息
        columnDefs: columnDefs,
        categoryData: categoryData,
        data: [{
                column1: 'im colunm 1',
                column2: 'im colunm 2',
                gender: 'Male',
                name: 'Bob',
                title: 'CEO',
                age: '14',
                annee: '1'
            },
            {
                column1: 'im colunm 1',
                column2: 'im colunm 2',
                gender: 'Male',
                name: 'Bob',
                title: 'CEO',
                age: '14',
                annee: '1'
            },
            {
                column1: 'im colunm 1',
                column2: 'im colunm 2',
                gender: 'Male',
                name: 'Frank',
                title: 'Lowly Developer',
                age: '16',
                annee: '2'
            },
            {
                column1: 'im colunm 1',
                column2: 'im colunm 2',
                gender: 'Female',
                name: 'Catherine',
                title: 'Developer',
                age: '27',
                annee: '2'
            },
            {
                column1: 'im colunm 1',
                column2: 'im colunm 2',
                gender: 'Female',
                name: 'Jessica',
                title: 'Engineer',
                age: '35',
                annee: '3'
            }
        ]
    };

    //===============================树状表格============================

    //定义树状表格第一列模板，控制缩进，所有表格插件必须在第一列添加改模板
    var cellModel = $pGmTable.getIndentCellTemplate();
    $scope.gridOptions1 = {};
    $scope.gridOptions1 = {
        enableSorting: false,
        showTreeExpandNoChildren: false,
        columnDefs: [
            { name: 'title', displayName: '名称', enableColumnMenu: false, cellTemplate: cellModel, cellTooltip: true },
            { name: 'code', displayName: '代码', enableColumnMenu: false, cellTooltip: true }
        ]
    };

    //获取树状结构数据
    var pTreeData = [{
        'title': '湖北省',
        'code': '11111',
        'children': [{
            'title': '武汉市',
            'code': '11111',
            'children': [{
                'title': '洪山区',
                'code': '11111'
            }, {
                'title': '新洲区',
                'code': '11111'
            }]
        }, {
            'title': '黄石市',
            'code': '11111'
        }]
    }];

    //格式化源数据为表格插件可以使用的数据
    $scope.gridOptions1.data = $pGmTable.formatTreeNodes(pTreeData, 'children');

    $scope.treeTableHtml = '<div ui-grid="gridOptions1" ui-grid-tree-view class="grid"></div>';
}]);