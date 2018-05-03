import './calendar-ctrl';
import './housetable-ctrl';
import './carousel-ctrl';
import './dialog-ctrl';
import './froala-ctrl';
import './highcharts-ctrl';
import './jsignature-ctrl';
import './layout-ctrl';
import './loading-tool-ctrl';
import './pagenation-ctrl';
import './select-ctrl';
import './slider-ctrl';
import './statistics-ctrl';
import './tab-ctrl';
import './table-ctrl';
import './tooltip-ctrl';
import './tour-ctrl';
import './tree-ctrl';
import './validation-ctrl';
import './drag-ctrl';
import * as hljs from 'highlight.js';

//页面模板
angular.module('frameApp').run(['$templateCache', function ($templateCache) {
    $templateCache.put('housetable.html', require('../views/housetable.html'));
    $templateCache.put('table.html', require('../views/table.html'));
    $templateCache.put('layout.html', require('../views/layout.html'));
    $templateCache.put('pagenation.html', require('../views/pagenation.html'));
    $templateCache.put('select.html', require('../views/select.html'));
    $templateCache.put('statistics.html', require('../views/statistics.html'));
    $templateCache.put('tab.html', require('../views/tab.html'));
    $templateCache.put('tree.html', require('../views/tree.html'));
    $templateCache.put('validation.html', require('../views/validation.html'));
    $templateCache.put('tooltip.html', require('../views/tooltip.html'));
    $templateCache.put('loading-tool.html', require('../views/loading-tool.html'));
    $templateCache.put('calendar.html', require('../views/calendar.html'));
    $templateCache.put('froala.html', require('../views/froala.html'));
    $templateCache.put('dialog.html', require('../views/dialog.html'));
    $templateCache.put('slider.html', require('../views/slider.html'));
    $templateCache.put('highcharts.html', require('../views/highcharts.html'));
    $templateCache.put('tour.html', require('../views/tour.html'));
    $templateCache.put('carousel.html', require('../views/carousel.html'));
    $templateCache.put('jsignature.html', require('../views/jsignature.html'));
    $templateCache.put('drag.html', require('../views/drag.html'));
}]);

//主控制器
angular.module('frameApp').controller('mainCtrl', ['$scope', function ($scope) {
    $scope.arrayControls = [{
        id: 'houseTable',
        caption: '楼盘表插件',
        url: 'housetable.html'
    }, {
        id: 'table',
        caption: '表格插件',
        url: 'table.html',
        children: [{
            id: 'houseTable-common',
            caption: '普通表格'
        }, {
            id: 'houseTable-header',
            caption: '表头合并表格'
        }, {
            id: 'houseTable-tree',
            caption: '树状表格'
        }]
    }, {
        id: 'layout',
        caption: '页面插件',
        url: 'layout.html',
        children: [{
            id: 'layout-tab',
            caption: '标签插件'
        }, {
            id: 'layout-date',
            caption: '日期插件'
        }, {
            id: 'layout-notify',
            caption: '滚动通知插件'
        }]
    }, {
        id: 'pagenation',
        caption: '分页插件',
        url: 'pagenation.html'
    }, {
        id: 'select',
        caption: '下拉框插件',
        url: 'select.html',
        children: [{
            id: 'select-dic',
            caption: '数据字典下拉框'
        }, {
            id: 'select-dicspan',
            caption: '数据字典转换显示'
        }, {
            id: 'select-query',
            caption: '查询下拉框'
        }]
    }, {
        id: 'statistics',
        caption: '统计插件',
        url: 'statistics.html'
    }, {
        id: 'tab',
        caption: '标签',
        url: 'tab.html'
    }, {
        id: 'tree',
        caption: '树插件',
        url: 'tree.html',
        children: [{
            id: 'tree-common',
            caption: '树插件'
        }, {
            id: 'tree-combo',
            caption: '下拉树'
        }]
    }, {
        id: 'validation',
        caption: '验证插件',
        url: 'validation.html'
    }, {
        id: 'tooltip',
        caption: '提示框插件',
        url: 'tooltip.html',
        children: [{
            id: 'tooltipTip',
            caption: '工具提示信息'
        }, {
            id: 'tooltipPopover',
            caption: '箭头弹出框'
        }, {
            id: 'tooltipAlert',
            caption: 'alert弹框'
        }, {
            id: 'tooltipInfomation',
            caption: '提示性弹框'
        }]
    }, {
        id: 'loadingTool',
        caption: '进度插件',
        url: 'loading-tool.html',
        children: [{
            id: 'loadingToolLoadingbar',
            caption: '无阻碍进度条'
        }, {
            id: 'loadingToolBusy',
            caption: '阻碍式进度条'
        }, {
            id: 'loadingToolPageLoading',
            caption: '覆盖式进度条'
        }]
    }, {
        id: 'calendar',
        caption: '日历插件',
        url: 'calendar.html'
    }, {
        id: 'froala',
        caption: '富文本插件',
        url: 'froala.html'
    }, {
        id: 'dialog',
        caption: '对话框插件',
        url: 'dialog.html'
    }, {
        id: 'slider',
        caption: '滑块插件',
        url: 'slider.html'
    }, {
        id: 'highcharts',
        caption: '图表插件',
        url: 'highcharts.html'
    }, {
        id: 'tour',
        caption: '用户向导插件',
        url: 'tour.html'
    }, {
        id: 'carousel',
        caption: '轮播插件',
        url: 'carousel.html'
    }, {
        id: 'dragControl',
        caption: '拖拽插件',
        url: 'drag.html'
    }, {
        id: 'jsignature',
        caption: '手写插件',
        url: 'jsignature.html'
    }];

    $scope.selectItem = function (pItem, $event) {
        document.getElementById(pItem.id).scrollIntoView();
        $scope.selectId = pItem.id;
        pItem.bOpen = !pItem.bOpen;
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        // return false;
    };

    if (window.parent === window) {
        $scope.showHeader = true;
    } else {
        $scope.showHeader = false;
    }

    setTimeout(function () {
        hljs.initHighlighting();
    }, 2000);

    //框架准备
    GM.FrameManager.addCommonApi($scope);
    //模拟数据字典数据
    GM.SysDicOper.dicData = {};
    GM.SysDicOper.dicData['角色类型'] = [{
        value: '0',
        label: '管理员'
    }, {
        value: '1',
        label: '业务员'
    }];
    GM.SysDicOper.dicData['性别'] = [{
        value: 0,
        label: '男'
    }, {
        value: 1,
        label: '女'
    }];
}]);


