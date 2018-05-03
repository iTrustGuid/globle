# Eslint(一)：入门篇

*字数：1552*

*阅读时间：10分钟*



## 前言

由于JS语法的灵活性，我们不得不借助于代码检查工具来避免可能出现的错误和规范我们的代码格式。其实最终我们想达到的目标就是:舍弃一部分灵活性换取更高的稳定性和可维护性。现在所有主流的静态检查工具其底层逻辑都是预定一些规则，然后检查出代码中不符合规则的地方加以调整。

那现在有这么多的静态代码检测工具，我们为什么要选择Eslint呢？

主要原因是他的灵活性比较高，易于扩展，所以有非常良好的生态，并且主流的编辑器都可以集成Eslint。详细的对比笔者推荐两篇文章，它们更为详细地讲述他们的优劣：

 [JSLint,JSHint,ESLint对比和Vim配置](https://jingyan.baidu.com/article/37bce2be7c34b61003f3a25e.html)

[JavaScript 检查(Linting)工具的比较](http://www.css88.com/archives/7593)

本文会以一个实例为基础，讲述如何部署Eslint环境，如何配置Eslint，以及如何集成第三方插件。

<br>

## 环境部署

环境准备：[Node.js](https://nodejs.org/en/) (>=4.x), npm version 2+

直接全局安装即可

```js
$ npm install -g eslint
```

安装完毕后，可以初始化一个配置文件

```js
$ eslint --init
```

后续工具的配置都是的在这个配置文件中编写。

<br>

##Eslint配置

一个常见的配置文件内容如下：

```js
module.exports = {
    "parserOptions": {
        "ecmaVersion": 2015,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "script"
    },

    "env": {
        "es6": true,
        "node": true,
        "amd":true
    },

    "plugins": [
        "import",
        "node",
        "promise",
        "standard",
        "angular"
    ],
    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },
    "extends": ["eslint:recommended","standard","plugin:angular/johnpapa"],
    "rules":{
    }
}
```

"parserOptions"属性配置解析器内容。其中“ecmaVersion”属性配置JS的语法版本。“sourceType”属性配置JS文件加载模式，值为“script”或“module”。“ecmaFeatures”属性配置想要使用的额外语言特性。

“env”属性配置了预定义的全局环境。我们当前开启了“es6”、"node"、"amd"三个环境。

"plugins"属性配置需要加载的第三方插件。这里我们需要先安装对应插件才能使用。

“globals”属性定义了全局变量集合，包含在这个集合中的属性都会被工具认为是全局变量，[no-undef](http://eslint.cn/docs/rules/no-undef) 规则就不会发出警告。

"extends"属性配置基础规则，“rules”属性中配置的规则都是基于这个规则之上配置的。

"rules"属性配置检查规则。

<br>

除此，还有一个重要的配置，配置忽略哪些文件的配置。我们在实际场景中不可能检查所有文件，只会挑选出需要检查的文件进行检查。所以，这个配置我们会经常用到。

在我们的工程目录中新建一个文件，命名为“.eslintignore”，Eslint会自动识别这个文件。这个配置文件里面，每一行都是一个glob模式语句，具体格式如下：

>- 以 `#` 开头的行被当作注释，不影响忽略模式。
>- 路径是相对于 `.eslintignore` 的位置或当前工作目录。这也会影响通过 `--ignore-pattern`传递的路径。
>- 忽略模式同 `.gitignore` [规范](http://git-scm.com/docs/gitignore)
>- 以 `!` 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。

例如,如下代码只会检查“build/index.js”文件。

```shell
# /node_modules/* and /bower_components/* ignored by default

# Ignore built files except build/index.js
build/*
!build/index.js
```

该配置比较简单，但是我们需要注意一下几点：

```
	1.“！”匹配是针对上一个匹配内容来做的筛选，也就是说，我们只能在上一个匹配集合里面做删除，无法匹配子集。
	2.后面带“/”符号的表示匹配路径，不匹配文件和文件夹名称。例如“foo/”只会匹配文件夹“foo”和“foo”目录下面的子集目录与文件。
	3.如果匹配字符串中不包含符号“/”,则  "*" 会匹配所有符号。否则，"*" 不会匹配"/"。例如，“Documentation / *。html”匹配“Documentation / git.html”，但不匹配“Documentation / ppc / ppc.html”或“tools / perf / Documentation / perf.html”。
	4.前导斜杠匹配路径名的开头。例如，“/*.c”与“cat-file.c”匹配，但不匹配“mozilla-sha1 / sha1.c”。
	5.**/js 会匹配 demo/js 和 demo/test/js，但是*/js只能匹配 demo/js
	6."abc/**"匹配所有文件
	7.a/**/c 匹配多级目录，会匹配a/b/c，也会匹配a/b/e/c 
8.匹配当前目录所有文件夹需要加一个斜杠，例如：/*
```

<br>

以上只是基础配置，详细配置见[http://eslint.cn/docs/user-guide/configuring](http://eslint.cn/docs/user-guide/configuring)

<br>

## 集成第三方插件

Eslint本身只具备基础的检查规则，肯定无法完全满足大家无限的需求。因此，我们就需要使用到第三方插件来扩展Eslint，以解决这个问题。这里，我们以Standard为例讲述如何集成第三方插件。

**第一步，安装插件**

执行相应安装命令即可：

```js
$ npm install standard --global
```

**第二步，插件配置**

在配置文件中，加载插件

```js
"plugins": [
  	"standard"
]
```

然后把插件对应的规则作为基础规则扩展到Eslint中

```js
"extends": ["standard"]
```

至此，插件就已经集成完毕了。如果我们需要对插件中规则做调整，直接在“rules”里面配置就可以覆盖基础规则了。

<br>

最后，我们就直接通过命令行工具执行工具即可。在需要检查代码的目录下，直接执行 `eslint **  -o result.html - f html `就可以在统计目录下得到一个result.html文件。这个文件就是我们的代码错误信息文件，直接打开就能看到结果了。

详细工具命令参考：[http://eslint.cn/docs/user-guide/command-line-interface](http://eslint.cn/docs/user-guide/command-line-interface)

<br>

*欢迎关注我的微信公众号：*

![](https://gitee.com/lsjcoder/img/raw/master/other/1.jpg)