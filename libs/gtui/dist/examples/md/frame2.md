#frame2框架说明

<br/>

<br/>

## 1.框架使用	

以后台管理系统为例，系统页面展示图如下：

![](img/frame2/系统页面.png)



我们从零开始搭建一个系统的流程如下：



### 1.1 引入框架模板


如下所示，是一个系统页面的完整页面代码。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>运行维护中心</title>
	<script type="text/javascript" src="config/config.js"></script>
	<script type="text/javascript" src="../config.js"></script>
	<script type="text/javascript" src="config/rest-url.js"></script>
	<script type="text/javascript">
		var strHtml = '<script type="text/javascript" data-main="index" src="' + STATIC_RESOURCES_PATH + 'libs/requirejs-2.1.11/require.js' + '"><\/script>';
		document.write(strHtml);
	</script>
</head>
<body ng-controller="mainCtrl">
	<!--[if lt IE 9]>
	    <div class="alert alert-danger">您正在使用 <strong>过时的</strong> 浏览器. 是时候 <a href="http://browsehappy.com/">更换一个更好的浏览器</a> 来提升用户体验.</div>
	<![endif]-->
	<div ng-include="'frame.tpl.html'" style="height:100%;"></div>
</body>
</html>
```



---

首先，我们需要加载配置文件，配置文件资源如下：

```html
	<script type="text/javascript" src="config/config.js"></script>
	<script type="text/javascript" src="../config.js"></script>
	<script type="text/javascript" src="config/rest-url.js"></script>
```

其中，第一个配置文件是配置的开发环境的配置内容，我们在开发过程中只需要关注这个配置文件即可。第二个配置文件是配置生产环境的配置内容，部署时才会用到。第三个文件配置的是前端访问的后台服务的restful API的地址。

注意：如果开发中，遇到第二个文件的配置内容影响到了代码运行，不要屏蔽加载文件的代码，注释该配置文件里面的代码就行。



---

```html
<script type="text/javascript">
		var strHtml = '<script type="text/javascript" data-main="index" src="' + STATIC_RESOURCES_PATH + 'libs/requirejs-2.1.11/require.js' + '"><\/script>';
		document.write(strHtml);
	</script>
```

这段代码就是从静态资源中加载 require.js 文件



---

```html
<div ng-include="'frame.tpl.html'" style="height:100%;"></div>
```

这段代码就是引入我们框架的页面模板。

<br/>

### 1.2 加载框架资源

页面配置和页面模板加载完毕之后，就需要加载框架所需的资源文件了。后台管理系统加载资源代码如下：

```js
require.config({
	paths: {
		requireConfig: [STATIC_RESOURCES_PATH + "common/require-config"],
		naviConfig: ["config/navi-config"],
		mainCtrl: ["controllers/main-ctrl"],
		orgizationCtrl:["controllers/orgization-ctrl"],
		appCtrl:["controllers/app-ctrl"],
		approveCtrl:["controllers/approve-ctrl"],
		areaCtrl:["controllers/area-ctrl"],
		dictionaryCtrl:["controllers/dictionary-ctrl"],
		holidayCtrl:["controllers/holiday-ctrl"],
		logCtrl:["controllers/log-ctrl"],
		permissionCtrl:["controllers/permission-ctrl"],
		roleCtrl:["controllers/role-ctrl"],
		userCtrl:["controllers/user-ctrl"],
		serviceCtrl:["controllers/service-ctrl"],
		wljgglCtrl:["controllers/wljggl-ctrl"],
		uumsService: ["services/service"],
		orgizationService: ["services/orgization-service"],
		areaService: ["services/area-service"],
		logService: ["services/log-service"],
		dictionaryService: ["services/dictionary-service"],
		userService: ["services/user-service"],
		appService: ["services/app-service"],
		permissionService: ["services/permission-service"],
		roleService: ["services/role-service"],
		holidayService: ["services/holiday-service"],
		approveService:	["services/approve-service"],
		serService:["services/ser-service"],
		wljgService:["services/wljggl-service"],
		uumsFilter:["filters/uums-filter"],
	}
});

require(["requireConfig"], function() {
	require(["naviConfig", "frame2"], function() {
		require(["mainCtrl"], function() {
			angular.bootstrap(document, ["frameApp"]);
		});
	});
});
```

所有的资源都需要依赖资源配置模块 ```requireConfig```,所以我们需要优先加载该模块。然后，我们选择使用frame2页面框架，所以，第二步我们就可以加载 `frame2`模块，这里的 `naviConfig`模块是我们的框架配置模块，它需要和框架一起加载。第三步就是加载当前系统需要的框架之外的自己的资源了。

<br/>

### 1.3 系统配置

框架资源加载完毕之后，我们就需要对框架进行相关配置，以满足当前系统的定制化需求了。

框架主要有以下三个配置：

**① config.js**

>文件内容如下
>
>```js
>//系统统一IP和端口
>var UNIFY_IP = "http://192.168.5.222:8080/";
>
>//后台服务路径
>var UUMS_SERVER = UNIFY_IP + "uums-server/"; 
>
>//汇交监管服务路径
>var EM_SERVER = UNIFY_IP + "em-server/";
>
>//单点登录服务路劲
>var LOGIN_SERVER = UNIFY_IP + "gm-sso-server/";
>
>//前端静态资源路径
>var STATIC_RESOURCES_PATH =  "http://lp:8081/static-resources/";
>
>//统一登录路径
>var LOGIN_PATH = "http://192.168.5.222:8080/ldimp/login/login.html"; 
>
>//主页
>var MAIN_PAGE_PATH = "";
>
>//系统名称
>var APP_KEY = "gm-uums";
>
>//表单地址（开发环境配置）
>var FORM_SERVER = "http://192.168.5.222:8080/uums-server/"
>```
>
>这里需要注意，后台服务配置中，不同的系统对应着确定的变量标识符，不允许随意自定义。后台服务变量标识符列表如下：
>
>```json
>[{
>  "name":"UNIFY_IP",
>  "value":"http://192.168.5.222:8080/",
>  "description":"默认地址"
>},{
>  "name":"STATIC_RESOURCES_PATH",
>  "value":"http://192.168.5.222:8080/static-resources/",
>  "description":"静态资源地址"
>},{
>  "name":"ONEMAP_PATH",
>  "value":"http://192.168.5.222:8080/webgis-ui/",
>  "description":"一张图地址"
>},{
>  "name":"MAIN_PAGE_PATH",
>  "value":"http://192.168.5.222:8080/login/main.html",
>  "description":"系统主页面地址"
>},{
>  "name":"LOGIN_PATH",
>  "value":"http://192.168.5.222:8080/login/login.html",
>  "description":"系统登录页面地址"
>},{
>  "name":"ACTIVITI_SERVER",
>  "value":"http://192.168.5.222:8080/activiti-web/",
>  "description":"表单搭建后台地址"
>},{
>  "name":"CRTTIFICATE_SERVER",
>  "value":"http://192.168.5.222:8080/certificate-server/",
>  "description":"证书证明后台地址"
>},{
>  "name":"CMS_SERVER",
>  "value":"http://192.168.5.222:8080/cms-server/",
>  "description":"CMS后台地址"
>},{
>  "name":"EM_SERVER",
>  "value":"http://192.168.5.222:8080/em-server/",
>  "description":"汇交监管后台地址"
>},{
>  "name":"ES_SERVER",
>  "value":"http://192.168.5.222:8080/es-server/",
>  "description":"共享交换后台地址"
>},{
>  "name":"FMS_SERVER",
>  "value":"http://192.168.5.222:8080/fms-server/",
>  "description":"文件管理后台地址"
>},{
>  "name":"LC_SERVER",
>  "value":"http://192.168.5.222:8080/lc-server/",
>  "description":"土地整治后台地址"
>},{
>  "name":"LDIMP_SERVER",
>  "value":"http://192.168.5.222:8080/ldimp-server/",
>  "description":"联审联办后台地址"
>},{
>  "name":"LOGIN_SERVER",
>  "value":"http://192.168.5.222:8080/gm-sso-server/",
>  "description":"单点登录后台地址"
>},{
>  "name":"OA_SERVER",
>  "value":"http://192.168.5.222:8080/oa-server/",
>  "description":"协同办公后台地址"
>},{
>  "name":"BF_SERVER",
>  "value":"http://192.168.5.222:8080/bf-server/",
>  "description":"基本农田后台地址"
>},{
>  "name":"UUMS_SERVER",
>  "value":"http://192.168.5.222:8080/uums-server/",
>  "description":"统一后台管理后台地址"
>},{
>  "name":"WEBGIS_SERVER",
>  "value":"http://192.168.5.222:8080/webgis-server/",
>  "description":"一张图后台地址"
>},{
>  "name":"NR_SERVER",
>  "value":"http://192.168.5.222:8080/webgis-server/",
>  "description":"自然资源后台地址"
>},{
>  "name":"SM_AUCTION_SERVER",
>  "value":"http://192.168.5.222:8080/",
>  "description":"二级交易市场——竞拍系统"
>},{
>  "name":"SM_BS_SERVER",
>  "value":"http://192.168.5.222:8080/",
>  "description":"二级交易市场——大屏系统"
>},{
>  "name":"SM_PORTAL_SERVER",
>  "value":"http://192.168.5.222:8080/",
>  "description":"二级交易市场——门户网站"
>},{
>  "name":"SM_QUERY_SERVER",
>  "value":"http://192.168.5.222:8080/",
>  "description":"二级交易市场——查询机"
>},{
>  "name":"SM_TRADE_SERVER",
>  "value":"http://192.168.5.222:8080/",
>  "description":"二级交易市场——交易平台"
>}]
>```
>
>例如，后台管理系统中，对应的后台服务变量标识符就是 UUMS_SERVER 。如果，我们在当前系统中需要使用到其他系统的后台，配置方式一样。这里我们需要使用单点登录后台，所以我们就需要配置 LOGIN_SERVER变量。
>
>
>
>配置中， APP_KEY 变量的配置也是有条件的，需要与后台管理系统中当前子系统名称的配置保持一致。这里我们需要按照如下列表配置对应值：
>
>| 系统名称          | 值          |
>| ------------- | ---------- |
>| 汇交监管          | BDC_HJJG   |
>| 表单搭建          | GM_FORM    |
>| 证书证明后台地址      | BDC_ZSZM   |
>| CMS           | cms        |
>| 共享交换          | BDC_GXJH   |
>| 文件管理          | GM_FILE    |
>| 土地整治          | GM_LC      |
>| 联审联办          | GM_LDIMP   |
>| 基本农田          | GM_BF      |
>| 协同办公          | GM_OA      |
>| 统一后台管理        | gm-uums    |
>| 一张图           | GM_WEBGIS  |
>| 自然资源          | GM_NR      |
>| 二级交易市场——竞拍子系统 | SM_AUCTION |
>| 二级交易市场——门户系统  | SM_PORTAL  |
>| 二级交易市场——交易平台  | SM_TRADE   |
>| 二级交易市场——大屏    | SM_BS      |
>| 二级交易市场——查询机   | SM_QUERY   |
>| 山东存量数据质检      | GM_CLSJZJ  |
>
>
>
>该配置中，必要配置有如下几个：
>
>```js
>//通用后台管理系统服务路径
>var UUMS_SERVER = UNIFY_IP + "uums-server/"; 
>
>//单点登录服务路劲
>var LOGIN_SERVER = UNIFY_IP + "gm-sso-server/";
>
>//前端静态资源路径
>var STATIC_RESOURCES_PATH =  "http://lp:8081/static-resources/";
>
>//统一登录路径
>var LOGIN_PATH = "http://192.168.5.222:8080/ldimp/login/login.html"; 
>
>//主页
>var MAIN_PAGE_PATH = "";
>
>//系统名称
>var APP_KEY = "";
>```
>
>

<br/>

**②navi-config.js**

>配置文件具体内容如下：
>
>```js
>var GLOBAL_FRAME_CONFIG = {
>    logo:"theme/img/logo.png",    //logo图片路径
>    systemName:"业务系统",          //系统名称
>    systemEnglishName:"Workflow and Form Management System",    //英文名称，可选配置
>    //首页配置，可选配置
>    homePage:{
>        path:"/home",
>        templateUrl:"views/homepage.html",
>        name:"首页"
>    },
>    //左侧导航菜单配置
>    navi:[{
>        //菜单名称
>        name:"系统设置",
>        //菜单图标，可以是 img属性的图片配置，也可以是 class属性的图标样式配置
>        img:"theme/img/dtjg2.png",
>        //权限配置，配置当前用户是否具有该菜单权限，可选配置
>        permission:"HJJG:ZHJG",
>        //子级菜单配置，必选配置
>        children:[{
>            name:"子系统管理",
>            class:"icon-lock",
>            //权限配置，配置当前用户是否具有该菜单权限，可选配置
>            permission:"HJJG:ZHJG",
>            //菜单对应的具体页面路径
>            templateUrl:"views/subHtml/app.html",
>            //菜单对应的路由地址配置，不可重复
>            path:"/application"
>        },{
>            name:"权限管理",
>            class:"icon-lock",
>            templateUrl:"views/subHtml/permission.html",
>            path:"/permission"
>        },{
>            name:"字典管理",
>            class:"icon-th-list",
>            templateUrl:"views/subHtml/dictionary.html",
>            path:"/dictionary"
>        },{
>        	name:"节假日管理",
>            class:"icon-th-list",
>            templateUrl:"views/subHtml/holiday.html",
>            path:"/holiday"
>        }]
>    },{
>        name:"机构用户",
>        class:"",
>        children:[{
>            name:"用户管理",
>            class:"icon-user",
>            templateUrl:"views/subHtml/user.html",
>            path:"/user"
>        },{
>            name:"角色管理",
>            class:"icon-lock",
>            templateUrl:"views/subHtml/role.html",
>            path:"/role"
>        },{
>            name:"机构管理",
>            class:"icon-th-large",
>            templateUrl:"views/subHtml/orgization.html",
>            path:"/agency"
>        },{
>            name:"区域管理",
>            class:"icon-th",
>            templateUrl:"views/subHtml/area.html",
>            path:"/area"
>        },{
>            name:"注册审核",
>            class:"icon-th",
>            templateUrl:"views/subHtml/approve.html",
>            path:"/approve"
>        }]
>    },{
>        name:"日志查询",
>        children:[{
>            name:"日志查询",
>            class:"icon-pencil",
>            templateUrl:"views/subHtml/log.html",
>            path:"/journal"
>        }]
>    },{
>        name:"数据管理",
>        children:[{
>            name:"服务管理",
>            class:"icon-pencil",
>            templateUrl:"views/subHtml/service.html",
>            path:"/service"
>        }]
>    },{
>        name:"网络管理",
>        children:[{
>            name:"网络管理",
>            class:"icon-pencil",
>            templateUrl:"views/subHtml/wljggl.html",
>            path:"/wljggl"
>        }]
>    }]
>};
>```
>
>可以在上述的代码注释中看到配置内容的具体描述。

<br/>

**③rest-url.js**

>配置文件内容如下：
>
>```js
>//rest请求配置
>var RESTURL = {
>    token:LOGIN_SERVER + "tokenCheck",
>    //子系统
>    app:{
>        query:UUMS_SERVER+"app/list",
>        save:UUMS_SERVER+"app/save",
>        remove:UUMS_SERVER+"app/delete"
>    },
>    //权限
>    permission:{
>        query:UUMS_SERVER+"permission/tree",
>        save:UUMS_SERVER+"permission/save",
>        remove:UUMS_SERVER+"permission/delete"
>    },
>    //节假日管理
>    holiday:{
>        query:UUMS_SERVER+"holiday/list",
>        save:UUMS_SERVER+"holiday/save",
>        remove:UUMS_SERVER+"holiday/delete"
>    },
>    //角色管理
>    role:{
>        query:UUMS_SERVER + "role/list",
>        save:UUMS_SERVER + "role/save",
>        remove:UUMS_SERVER+"role/delete",
>        queryRole:UUMS_SERVER + "role/get",
>        organByroleId:UUMS_SERVER + "role/getUserByRoleId",
>        addOrDeleteUser:UUMS_SERVER + "role/updateUserRole"
>    },
>    //用户管理
>    user:{
>        query:UUMS_SERVER+"user/page",
>        save:UUMS_SERVER+"user/save",
>        remove:UUMS_SERVER+"user/delete",
>        queryUser:UUMS_SERVER+"user/get",
>        addOrDeleteRole:UUMS_SERVER+"user/updateUserRole",
>        applyedUser:UUMS_SERVER+"user/pageUserRole",
>        exportUrl:UUMS_SERVER+"user/export",
>        orgUser:UUMS_SERVER+"user/getOrgUser"
>    },
>    //注册审核
>    approve:{
>        query:UUMS_SERVER+"userRegister/selectPage",
>        showDetail:UUMS_SERVER+"userRegister/getById",
>        approveUser:UUMS_SERVER+"userRegister/check"
>    },
>    //机构管理
>    organization:{
>        query:UUMS_SERVER+"organization/tree",
>        save:UUMS_SERVER+"organization/save",
>        remove:UUMS_SERVER+"organization/delete"
>    },
>    //区域管理
>    area:{
>        query:UUMS_SERVER+"area/tree",
>        save:UUMS_SERVER+"area/save",
>        remove:UUMS_SERVER+"area/delete"
>    },
>    //字典管理
>    sysdic:{
>        query:UUMS_SERVER+"dict/tree",
>        save:UUMS_SERVER+"dict/save",
>        remove:UUMS_SERVER+"dict/delete"
>    },
>    //日志管理
>    log:{
>        query:UUMS_SERVER + "log/list",
>        exportUrl:UUMS_SERVER + "log/export"
>    },
>    //网络管理
>    wlgl:{
>        query:EM_SERVER+"netconnctinfo/queryNetconnctinfo",
>        add:EM_SERVER+"netconnctinfo/addNetconnctinfo",
>        remove:EM_SERVER+"netconnctinfo/deleteNetconnctinfo",
>        refresh:EM_SERVER+"netconnctinfo/isNetconnctSucess",
>        update:EM_SERVER+"netconnctinfo/updateNetconnctinfo"
>    }
>};
>```
>
>这个配置文件就是配置前端访问的后台服务地址，内容非常简单。只有一点要求：按照模块配置相应路径，否则，配置内容一旦过多，就无法维护了。



至此，我们使用框架需要准备的工作就全部完成了。

<br/>

<br/>

## 2.系统结构规范

在完成了框架的集成后，我们就需要搭建当前系统的代码环境了。那么，第一步当然就是构建代码目录组织了。这里，我们有一个统一的结构规范。

首先，我们看看后台管理系统的目录组织结构：

![](img/frame2/目录组织.png)

如上图所示，主要有红色标记标出的几个目录。然后里面可以根据具体需要再分出更细化的子集目录。



这里，构建目录里面具体文件时，需要遵从以下规范：

1.文件命名不允许出现大写字母，有多个单词的可以使用 “-”隔开。

2.文件命名要自释义，不要随意命名。

3.控制器文件、控制器对应的服务文件、路由页面文件命名必须保持一致。例如用户模块，我们就有控制器文件`user-ctrl.js`,服务文件`user-service.js`以及路由页面文件`user.html`。这样，有利于后期代码的维护和系统集成。

4.控制器、服务的名称与文件命名保持一致。例如：控制器文件`user-ctrl.js`中的控制器名称为`userCtrl`,服务文件`user-service.js`中的服务名称为`userService`。

<br/>

<br/>



## 3.其他用法

### 1.新增用户操作方法

在项目工程中，main-ctrl.js文件中添加如下代码：

```js
        $scope.userOpers = [{
            caption:"修改密码",
            click:"modifyPassword"
        }];

        $scope.modifyPassword = function(){
            alert("success");
        };
```

框架上就会自动添加一个修改密码的菜单项，效果如图所示：

![](img/frame2/frame2-user.png)