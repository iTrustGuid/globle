# center2使用说明

<br>



##1.使用方式

**页面模板导入**

```js
<div ng-include="'system-center.tpl.html'"></div>
```

<br>

**资源文件加载**

```js
require.config({
   paths:{
      requireConfig:[STATIC_RESOURCES_PATH + "common/require-config"],
      indexConfig:["../config/main-config"]
   }
});
require(["requireConfig","indexConfig"],function(){
   require(["systemCenter2"]);
});

```





## 2.配置方式

**主页面的所有配置都在文件 main-config.js 中**

```js
var GLOBAL_INDEX_CONFIG = {
   backgoundImg:"syscenter/img/bj.png",  //背景图片路径
   logImg:"syscenter/img/logo.png",
   systemName:'国土资源"五全"综合管理平台',
   EnglishSystemName:'LAND AND RESOURCES "FIVE WHOLE" INTEGRATED SERVICE MANAGEMENT PLATFORM',
   Copyright:'Copyright  2017-2020 五全综合管理平台 - Powered By GreatMap V2.0'
}; 
```

<br>

**1.主页中展示的子系统需要在通用后台管理系统中的子系统配置模块进行配置。这里会根据子系统的配置信息展示相应的子系统模块。**

![](img/center/app.png)

如上图所示，我们首先需要在该系统中配置好当前项目需要的子系统信息。这里需要注意以下几点：

1.AppKey，不能随意填写，这个值在其他位置也有相应配置，每个系统的值都是固定的。具体取值参照 “frame2框架使用说明中的” APP_KEY 配置。

2.系统地址，配置的是当前子系统的访问全路径，例如：http://lp:8086/uums。

3.系统图标，配置的是当前子系统在主页面展示的图标，不做配置就不会显示图标。

<br>

**2.权限配置**

添加完子系统后，系统自动会生成与之对应的权限信息，如下图所示：

![](img/center/permission.png)

我们需要将子系统权限赋予给相应用户，否则用户就没有该子系统的操作权限。