# frame3框架说明

<br/>

<br/>

## 1.框架使用	

以移动监管系统为例，系统页面效果图如下：

![](img/frame3/frame3展示.png)

大部分使用方法同frame2，只是菜单配置和与地图相关操作有区别。

<br/>

### 1.1 菜单配置

菜单配置完整代码如下:

```js
var GLOBAL_FRAME_CONFIG = {
    logo:"theme/img/index/log_01.png",    //logo图片路径
    systemName:"土地执法监察管理系统",
    systemEnglishName:"Land law enforcement supervision and management system",
    navi:[{
        name:"首页",
        //一级菜单字体图标配置，如果配置了 img ，则该配置不生效
        class:"icon-folder-close",
        //一级菜单项的图标配置
        img:"theme/img/menu/地图.png",
        //一级菜单项的选中图标配置，可为空
        activeImg:"theme/img/menu/地图-on.png",
        children:[{
            name:"地图",
            //二级菜单字体图标配置，如果配置了 img ，则该配置不生效
	        class:"icon-folder-close",
	        path:"/zjm",
            //是否开启地图模式，默认不开启
            map:true
        },{
            name:"图层管理",
            //二级级菜单项的图标配置
            img:"theme/img/menu/sub/图层.png",
	        path:"/tcgl",
            map:true
        },{
            name:"签到管理",
            img:"theme/img/menu/sub/签到.png",
	        templateUrl:"views/mainpage/qdgl.html",
	        path:"/qdgl",
            map:true
        },{
            name:"轨迹管理",
            img:"theme/img/menu/sub/轨迹.png",
	        templateUrl:"views/mainpage/gjgl.html",
	        path:"/mpgjgl",
            map:true
        },{
            name:"案件预警",
            img:"theme/img/menu/sub/预警.png",
	        templateUrl:"views/mainpage/ajyj.html",
	        path:"/mpajyj" 
        },{
            name:"待办箱",
	        class:"icon-folder-close",
	        templateUrl:"views/mainpage/dbx.html",
	        path:"/dbx" 
        }]
    },{
        name:"监督管理",
        img:"theme/img/menu/监督管理.png",
        activeImg:"theme/img/menu/监督管理-on.png",
        children:[{
            name:"巡查人员",
	        class:"icon-folder-close",
	        templateUrl:"views/supervise/xcryfb.html",
	        path:"/xcryfb"
        },{
            name:"消息发送",
            img:"theme/img/menu/sub/消息发送.png",
	        templateUrl:"views/supervise/xxfs.html",
	        path:"/xxfs"
        },{
            name:"轨迹管理",
            img:"theme/img/menu/sub/轨迹.png",
	        templateUrl:"views/supervise/gjgl.html",
	        path:"/svgjgl"
        }]
    },{
        name:"例会管理",
        img:"theme/img/menu/例会管理.png",
        activeImg:"theme/img/menu/例会管理-on.png",
        templateUrl:"views/meeting/lhgl.html",
        path:"/lhgl"
    },{
        name:"效能监控",
        img:"theme/img/menu/效能监控.png",
        activeImg:"theme/img/menu/效能监控-on.png",
        children:[{
            name:"时限管理",
            img:"theme/img/menu/sub/时限管理.png",
            templateUrl:"views/efficacy/sxgl.html",
            path:"/sxgl"
        },{
            name:"案件查询",
            class:"icon-folder-close",
            templateUrl:"views/efficacy/ajcx.html",
            path:"/ajcx"
        },{
            name:"自动抽查",
            class:"icon-folder-close",
            templateUrl:"views/efficacy/zdcc.html",
            path:"/zdcc"
        },{
            name:"效能查询",
            class:"icon-folder-close",
            templateUrl:"views/efficacy/xncx.html",
            path:"/xncx"
        },{
            name:"短信提醒",
            class:"icon-folder-close",
            templateUrl:"views/efficacy/dxtx.html",
            path:"/dxtx"
        }]
    },{
        name:"案件管理",
        class:"icon-folder-close",
        children:[{
            name:"案件预警",
            class:"icon-folder-close",
            templateUrl:"views/case/ajyj.html",
            path:"/csajyj"
        },{
        	name:"案件受理",
            class:"icon-folder-close",
            templateUrl:"views/case/ajsl.html",
            path:"/ajsl"
        },{
        	name:"案件查处",
            class:"icon-folder-close",
            templateUrl:"views/case/ajcc.html",
            path:"/ajcc"
        },{
        	name:"信息查询",
            class:"icon-folder-close",
            templateUrl:"views/case/xxcx.html",
            path:"/xxcx"
        }]
    },{
        name:"领导督办",
        img:"theme/img/menu/领导督办.png",
        activeImg:"theme/img/menu/领导督办-on.png",
        children:[{
            name:"督办列表",
            class:"icon-folder-close",
            templateUrl:"views/leaders/dblb.html",
            path:"/dblb"
        },{
            name:"督办提醒",
            class:"icon-folder-close",
            templateUrl:"views/leaders/dbtx.html",
            path:"/dbtx"
        }]
    },{
        name:"查询统计",
        img:"theme/img/menu/查询统计.png",
        activeImg:"theme/img/menu/查询统计-on.png",
        children:[{
            name:"案件总数",
	        class:"icon-folder-close",
	        templateUrl:"views/search/ajzs.html",
	        path:"/ajzs" 
        },{
            name:"制止统计",
            class:"icon-folder-close",
            templateUrl:"views/search/zztj.html",
            path:"/zztj"
        },{
            name:"抽查情况",
            class:"icon-folder-close",
            templateUrl:"views/search/ccqk.html",
            path:"/ccqk"
        },{
            name:"效能统计",
            class:"icon-folder-close",
            templateUrl:"views/search/hgltj.html",
            path:"/hgltj"
        }]
    },{
        name:"信息发布",
        img:"theme/img/menu/信息发布.png",
        activeImg:"theme/img/menu/信息发布-on.png",
        templateUrl:"views/message/xxfbygg.html",
        path:"/xxfbygg"
    },{
        name:"信访管理",
        img:"theme/img/menu/信访管理.png",
        activeImg:"theme/img/menu/信访管理-on.png",
        children:[{
            name:"信访接办",
	        class:"icon-folder-close",
	        templateUrl:"views/letter/xfjb.html",
	        path:"/xfjb" 
        },{
            name:"来信首页",
	        class:"icon-folder-close",
	        templateUrl:"views/letter/lxsy.html",
	        path:"/lxsy" 
        }]
    },{
        name:"巡查管理",
        class:"icon-folder-close",
        children:[{
            name:"巡查计划",
	        class:"icon-folder-close",
	        templateUrl:"views/patrol/xcjh.html",
	        path:"/xcjh" 
        },{
            name:"巡查日志",
            class:"icon-folder-close",
            templateUrl:"views/patrol/xcrz.html",
            path:"/xcrz"
        }]
    },{
        name:"系统设置",
        img:"theme/img/menu/设置.png",
        activeImg:"theme/img/menu/设置-on.png",
        children:[{
            name:"部门管理",
	        class:"icon-folder-close",
	        templateUrl:"views/system/bmgl.html",
	        path:"/bmgl" 
        },{
            name:"用户管理",
            class:"icon-folder-close",
            templateUrl:"views/system/yhgl.html",
            path:"/yhgl"
        }]
    }]
};
```



菜单配置分以下3种情况：

**①一级菜单无子菜单**

非地图模式配置。需要配置路由页面地址配置 “templateUrl” 参数，配置代码如下：

```js
	{
        name:"例会管理",
        img:"theme/img/menu/例会管理.png",
        activeImg:"theme/img/menu/例会管理-on.png",
        templateUrl:"views/meeting/lhgl.html",
        path:"/lhgl"
	}
```

<br/>地图模式，无操作面板配置。需要配置参数“map”的值为 true ，“templateUrl” 参数的值不做配置。配置代码如下：

```js
	{
        name:"例会管理",
        img:"theme/img/menu/例会管理.png",
        activeImg:"theme/img/menu/例会管理-on.png",
        map:true,
        path:"/lhgl"
	}
```

<br/>

地图模式，有面板配置。需要配置参数“map”的值为 true ，“templateUrl” 参数的值为具体页面路径。配置代码如下：

```js
	{
        name:"例会管理",
        img:"theme/img/menu/例会管理.png",
        activeImg:"theme/img/menu/例会管理-on.png",
        templateUrl:"views/meeting/lhgl.html",
        map:true,
        path:"/lhgl"
	}
```

<br/>

**②一级菜单有子菜单**

一级菜单有子菜单情况，不需要对一级菜单的“map”和“templateUrl”参数做任何配置，增加children配置即可。配置代码如下：

```js
	{
        name:"领导督办",
        img:"theme/img/menu/领导督办.png",
        activeImg:"theme/img/menu/领导督办-on.png",
        children:[{
            name:"督办列表",
            class:"icon-folder-close",
            templateUrl:"views/leaders/dblb.html",
            path:"/dblb"
        },{
            name:"督办提醒",
            class:"icon-folder-close",
            templateUrl:"views/leaders/dbtx.html",
            path:"/dbtx"
        }]
    }
```

<br/>

**③二级菜单**

非地图模式配置。只需要配置“templateUrl”参数的值，“map”参数值不做配置。配置代码如下：

```js
	{
        name:"首页",
        //一级菜单字体图标配置，如果配置了 img ，则该配置不生效
        class:"icon-folder-close",
        //一级菜单项的图标配置
        img:"theme/img/menu/地图.png",
        //一级菜单项的选中图标配置，可为空
        activeImg:"theme/img/menu/地图-on.png",
        children:[{
            name:"案件预警",
            img:"theme/img/menu/sub/预警.png",
	        templateUrl:"views/mainpage/ajyj.html",
	        path:"/mpajyj" 
        }]
    }
```

<br/>

地图模式无面板模式配置。只需要配置“map”参数的值，“templateUrl”参数值不做配置。配置代码如下：

```js
	{
        name:"首页",
        //一级菜单字体图标配置，如果配置了 img ，则该配置不生效
        class:"icon-folder-close",
        //一级菜单项的图标配置
        img:"theme/img/menu/地图.png",
        //一级菜单项的选中图标配置，可为空
        activeImg:"theme/img/menu/地图-on.png",
        children:[{
            name:"图层管理",
            //二级级菜单项的图标配置
            img:"theme/img/menu/sub/图层.png",
	        path:"/tcgl",
            map:true
        }]
    }
```

<br/>

地图模式有面板模式配置。需要同时配置“map”和“templateUrl”参数的值。配置代码如下：

```js
	{
        name:"首页",
        //一级菜单字体图标配置，如果配置了 img ，则该配置不生效
        class:"icon-folder-close",
        //一级菜单项的图标配置
        img:"theme/img/menu/地图.png",
        //一级菜单项的选中图标配置，可为空
        activeImg:"theme/img/menu/地图-on.png",
        children:[{
            name:"签到管理",
            img:"theme/img/menu/sub/签到.png",
	        templateUrl:"views/mainpage/qdgl.html",
	        path:"/qdgl",
            map:true
        }]
    }
```

<br/>

### 1.2图形相关操作

图形操作分两种：有面板和无面板。

**①有面版**

在面板控制器中，通过对象“GM.YDJG.scope.mapScope”直接操作地图控制器对应的作用域。或者，通过全局地图对象“window.pMap”直接操作地图。代码如下所示：

```js
$scope.ref = function() {
    $scope.qdgl = {};
    queryData();
    GM.YDJG.scope.mapScope.bShowLayerPanel = false;
    window.pMap.map.updateSize();
};
```



<br>

**②无面板**

直接在初始化地图的控制器中捕获“clickMenu”事件，然后调用相应图形接口就行。代码如下所示：

```js
app.controller("mapCtrl",["$scope","$location","$rootScope","$timeout",function($scope,$location,$rootScope,$timeout) {
		GM.GIS.CtrlManager.initMapCtrl("map",GM.GIS.AppendModules,$scope,$location,$rootScope);

		//记录地图作用域
		GM.YDJG.scope.mapScope = $scope;

		//响应菜单点击事件
		$scope.$on("clickMenu",function(event,menuItem){
			switch(menuItem.path){
				case "/tcgl":
					//图层管理
					event.currentScope.bShowLayerPanel = true;
					break;
			}

			//更新地图尺寸，解决地图加载时页面尺寸还处于0的状态
			$timeout(function(){
				var pSize = window.pMap.map.getSize();
				window.pMap.map.updateSize();
				if(pSize[0] === 0){
					$timeout(function(){
						window.pMap.map.updateSize();
					},100);
				}
			},100);
		});

	}]);
```



