# center3使用说明

<br>

## 1.使用方式

**同center2**



## 2.配置方式

**在center2配置的基础上添加了一个子系统在磁铁页面中的宽高配置，配置代码如下：**

```js
var GLOBAL_INDEX_CONFIG = {
	backgoundImg:"syscenter/img/bj.png",  //背景图片路径
	logImg:"syscenter/img/logo.png",
	systemName:'甘肃省级不动产登记信息管理平台',
	EnglishSystemName:'REAL ESTATE REGISTRATION MANAGEMENT PLATFORM IN GANSU PROVINCE',
	Copyright:'Copyright  2017-2020 甘肃省级不动产登记信息管理平台 - Powered By GreatMap V2.0',
	metroBoxList:[
		{
			width:2,
			height:1
		},
		{
			width:1,
			height:1
		},
		{
			width:1,
			height:1,
		},
		{
			width:2,
			height:1,
		},
		{
			width:1,
			height:1,
		},
		{
			width:2,
			height:1,
		},
		{
			width:2,
			height:1
		},
		{
			width:2,
			height:1
		}
	]
};
```

**这里的宽高配置项和通用后台管理系统中的子系统配置顺序一致就行。例如：如果通后后台管理系统中配置的第一个子系统是汇交监管系统，那么，这里数组的第一项就是配置的汇交监管系统的宽和高。**

