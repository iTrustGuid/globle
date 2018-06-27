module.exports = {
    "parserOptions": {
        "ecmaVersion": 2015,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
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
        "angular",
        "html"
    ],
    "globals": {
        "document": true,
        "navigator": true,
        "window": true,
        "console": true
    },
    "extends": ["eslint:recommended","standard","plugin:angular/johnpapa"],
    "rules":{
    	//===============================开启规则================================
    	//-------------------------------代码格式--------------------------------
        //4格空格缩进
        "indent": ["error", 4],
        //单行代码块两边加空格
        "block-spacing": ["error", "always"],
        //关键字要与花括号在同一行
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        //逗号后面加空格
        "comma-spacing": ["error", { "before": false, "after": true }],
        //多行 if 语句的的括号不能省。
        "curly": ["error", "multi-line"],
        //点号操作符须与属性需在同一行。
        "dot-location": ["error", "property"],
        //文件末尾留一空行。
        "eol-last": "error",
        //函数调用时标识符与括号间不留间隔
        "func-call-spacing": ["error", "never"],
		//键值对当中冒号与值之间要留空白。
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
		//关键字后面加空格。
        "keyword-spacing": ["error", { "before": true, "after": true }],
		//不要混合使用空格与制表符作为缩进
        "no-mixed-spaces-and-tabs": "error",
        //除了缩进，不要使用多个空格
        "no-multi-spaces": "error",
        //不允许有连续多行空行
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        //行末不留空格
        "no-trailing-spaces": "error",
        //属性前面不要加空格
        "no-whitespace-before-property": "error",
        //对象属性换行时注意统一代码风格(要么都换行，要么都不换)
        "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
        //对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
        "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
        //代码块中避免多余留白。
        "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }],
        //展开运算符与它的表达式间不要留空白
        "rest-spread-spacing": ["error", "never"],
        //遇到分号时空格要后留前不留
        "semi-spacing": ["error", { "before": false, "after": true }],
        //代码块首尾留空格
        "space-before-blocks": ["error", "always"],
        //函数声明时括号与函数名间加空格
        "space-before-function-paren": ["error", "always"],
        //圆括号间不留空格
        "space-in-parens": ["error", "never"],
        //字符串拼接操作符 (Infix operators) 之间要留空格
        "space-infix-ops": "error",
        //一元运算符后面跟一个空格
        "space-unary-ops": ["error", { "words": true, "nonwords": false }],
        //模板字符串中变量前后不加空格
        "template-curly-spacing": ["error", "never"],
        //yield * 中的 * 前后都要有空格
        "yield-star-spacing": ["error", "both"],
        //生成器函数*的前后空格
        "generator-star-spacing": ["error", { "before": true, "after": true }],
  		//-------------------------------可能出现错误------------------------
  		//get和set成对出现
        "accessor-pairs": "error",
        //不允许多余的行末逗号
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        //始终将逗号置于行末
        "comma-style": ["error", "last"],
        //子类构造函数中必须调用super，非子类不要调用super
        "constructor-super": "error",
        //始终使用 === 替代 ==，null除外
        "eqeqeq": ["error", "always", { "null": "ignore" }],
        //函数里面的异常信息不要忘记处理
        "handle-callback-err": ["error", "^(err|error)$" ],
        //无参的构造函数调用时要带上括号
        "new-parens": "error",
        //使用数组字面量而不是构造器(由于参数的二义性)，但是我们可以在初始化一个固定大小数组时用到他
        "no-array-constructor": "error",
		//避免对类名重新赋值
        "no-class-assign": "error",
        //避免修改使用 const 声明的变量
        "no-const-assign": "error",
        //避免使用常量作为条件表达式的条件（循环语句除外）
        "no-constant-condition": ["error", { "checkLoops": false }],
        //不要对变量使用 delete 操作
        "no-delete-var": "error",
        //不要定义重复的函数参数
        "no-dupe-args": "error",
        //类中不要定义重复的属性
        "no-dupe-class-members": "error",
        //对象字面量中不要定义重复的属性
        "no-dupe-keys": "error",
        //switch 语句中不要定义重复的 case 分支
        "no-duplicate-case": "error",
        //正则中不要使用空字符
        "no-empty-character-class": "error",
        //不要解构空值
        "no-empty-pattern": "error",
        //catch 中不要对错误重新赋值
        "no-ex-assign": "error",
        //switch 一定要使用 break 来将条件分支正常中断
        "no-fallthrough": "error",
        //避免对声明过的函数重新赋值
        "no-func-assign": "error",
        //不要对全局只读对象重新赋值
        "no-global-assign": "error",
        //不要向 RegExp 构造器传入非法的正则表达式
        "no-invalid-regexp": "error",
        //禁止使用 __iterator__
        "no-iterator": "error",
        //避免将变量赋值给自己
        "no-self-assign": "error",
        //避免将变量与自己进行比较操作
        "no-self-compare": "error",
        //不要随意更改关键字的值
        "no-shadow-restricted-names": "error",
        //禁止使用稀疏数组（Sparse arrays）
        "no-sparse-arrays": "error",
        //正确使用 ES6 中的字符串模板
        "no-template-curly-in-string": "error",
        //用 throw 抛错时，抛出 Error 对象而不是字符串
        "no-throw-literal": "error",
        //不要使用 (, [, or ` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错。
        "no-unexpected-multiline": "error",
        //循环语句中注意更新循环变量
        "no-unmodified-loop-condition": "error",
        //return，throw，continue 和 break 后不要再跟代码
        "no-unreachable": "error",
        //finally 代码块中不要再改变程序执行流程
        "no-unsafe-finally": "error",
        //用合法的字符串跟 typeof 进行比较操作
        "valid-typeof": ["error", { "requireStringLiterals": true }],
        //禁止在正则表达式中使用控制字符
        "no-control-regex": "error",
        //禁止无用的表达式
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
        //未定义前不能使用
        "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
  		//-------------------------------命名--------------------------------
        //构造函数要以大写字母开头。
        "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
        //变量和函数使用驼峰命名法
        "camelcase": ["error", { "properties": "never" }],

  		//-------------------------------最佳实践----------------------------
        //避免使用 arguments.callee 和 arguments.caller。
        //不利于代码优化，且高级版本的ES标准会废弃它
        "no-caller": "error",
        //条件语句中赋值语句使用括号包起来
        "no-cond-assign": "error",
        //不要使用 debugger
        "no-debugger": "error",
        //不要使用 eval()
        "no-eval": "error",
        //不要扩展原生对象
        "no-extend-native": "error",
        //避免多余的函数上下文绑定
        "no-extra-bind": "error",
        //避免不必要的布尔转换
        "no-extra-boolean-cast": "error",
        //不要使用多余的括号包裹函数
        "no-extra-parens": ["error", "functions"],
        //不要省去小数点前面的0（增强可读性）
        "no-floating-decimal": "error",
        //注意隐式的 eval()
        "no-implied-eval": "error",
        //嵌套的代码块中禁止再定义函数
        "no-inner-declarations": ["error", "functions"],
        //不要使用非法的空白符
        "no-irregular-whitespace": "error",
        //不要使用标签语句
        "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
        //不要书写不必要的嵌套代码块
        "no-lone-blocks": "error",
        //不要使用多行字符串
        "no-multi-str": "error",
        //new 创建对象实例后需要赋值给变量
        "no-new": "error",
        //禁止使用 Function 构造器
        "no-new-func": "error",
        //禁止使用 Object 构造器，直接声明对象即可
        "no-new-object": "error",
        //禁止使用 new require
        "no-new-require": "error",
        //禁止使用 Symbol 构造器
        "no-new-symbol": "error",
        //禁止使用原始包装器
        "no-new-wrappers": "error",
        //不要将全局对象的属性作为函数调用
        "no-obj-calls": "error",
        //不要使用八进制字面量
        "no-octal": "error",
        //字符串字面量中也不要使用八进制转义字符
        "no-octal-escape": "error",
        //使用 getPrototypeOf 来替代 __proto__
        "no-proto": "error",
        //不要重复声明变量
        "no-redeclare": "error",
        //正则中避免使用多个空格
        "no-regex-spaces": "error",
        //return 语句中的赋值必需有括号包裹
        "no-return-assign": ["error", "except-parens"],
        //避免使用逗号操作符
        "no-sequences": "error",
        //不要使用 undefined 来初始化变量
        "no-undef-init": "error",
        //如果有更好的实现，尽量不要使用三元表达式
        "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
        //关系运算符的左值不要做取反操作
        "no-unsafe-negation": "error",
        //不要定义未使用的变量
        "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],     
        //避免不必要的 .call() 和 .apply()
        "no-useless-call": "error",
        //避免使用不必要的计算值作对象属性。
        "no-useless-computed-key": "error",
        //禁止多余的构造器(ES2015会自动生成一个简单构造器)
        "no-useless-constructor": "error",
        //禁止不必要的转义
        "no-useless-escape": "off",
        //import, export 和解构操作中，禁止赋值到同名变量。
        "no-useless-rename": "error",
        //禁止使用 with
        "no-with": "error",
        //每个 var 关键字单独声明一个变量
        "one-var": ["error", { "initialized": "never" }],
        //除需要转义的情况外，字符串统一使用单引号
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        //强制使用分号
        "semi": ["error", "always"],
        //检查 NaN 的正确姿势是使用 isNaN()
        "use-isnan": "error",
        //自调用匿名函数 (IIFEs) 使用括号包裹
        "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],
        //箭头函数必须有前后括号
        "arrow-spacing": ["error", { "before": true, "after": true }],

		//===============================关闭规则================================
        //外部变量不要与对象属性重名
        "no-label-var": "off",
        //使用 __dirname 和 __filename 时尽量避免使用字符串拼接（NodeJS）
        "no-path-concat": "off",
        //不允许使用制表符
        "no-tabs": "off",
        //使用 this 前请确保 super() 已调用
        "no-this-before-super": "off",
        //注释首尾留空格
        "spaced-comment": ["off", "always", {
            "line": { "markers": ["*package", "!", "/", ",", "="] },
            "block": { "balanced": true, "markers": ["*package", "!", ",", ":", "::", "flow-include"], "exceptions": ["*"] }
        }],
        //请书写优雅的条件语句（avoid Yoda conditions）
        "yoda": ["off", "never"],
        //以cb或callback为参数名称的回调函数的第一个参数必须是null, undefined, or an Error 
        'standard/no-callback-literal': ["off", ["cb", "callback"]],
		//使用浏览器全局变量时加上 window. 前缀。
        //Exceptions are: document, console and navigator
        "no-undef": "off",
        "no-console": "off",

        //===============================Angular规则开================================
        //使用直接使用angular中带$$符号的成员，他们都是私有成员
        "angular/no-private-call":["error"],
        //不要注入不使用的服务
        "angular/di-unused":["error"],
		//控制器不能为空
        "angular/empty-controller":["error"],
        //控制器中只有调用代码，没有声明逻辑
        "angular/no-run-logic":["off"],
        //取代$cookiesStore，而使用$cookie来操作缓存
        "angular/no-cookiestore":["error"],
        //自定义指令中不能使用replace属性
        "angular/no-directive-replace":["error"],
    	//不要直接使用 $http 的回调函数，应该使用promise来操作回调
        "angular/no-http-callback":["error"],
        //控制器命名规则
        "angular/controller-name":["error","/[a-z].*Ctrl/"],
        //依赖注入规则，必须有数组列表并且参数与之一致
        "angular/di":["error","array"],
        //为angular组件指定一致的函数风格——匿名函数
        "angular/function-type":["error","anonymous"],
		//使用angular内置对象
    	"angular/document-service":["off"],
		//使用angular内置对象
    	"angular/interval-service":["off"],
		//使用angular内置对象
    	"angular/log":["off"],
		//使用angular内置对象
    	"angular/timeout-service":["off"],
		//使用angular内置对象
    	"angular/window-service":["off"],
    	
        //===============================Angular规则关================================
   		//一个模块只能定义一个angular组件，例如：angular.module("app").controller().directive()就是错误方式
   		"angular/component-limit":["off"],
   		//在routes或states定义中，需要使用到controllerAs
   		"angular/controller-as-route":["off"],
   		//在控制器中使用this，并且将this赋值给变量vm
    	"angular/controller-as-vm":["off"],
    	//控制器中应该操作this而不是scope，除非是使用scope内置的对象，如：$watch()
    	"angular/controller-as":["off"],
    	//不用$q.deferred(),直接使用$q(function(resolve,reject)
    	"angular/deferred":["off"],
    	//定义指令不要使用class
    	"angular/directive-restrict":["off"],
    	//尽可能少使用控制器，替代使用指令等
    	"angular/no-controller":["off"],
    	//指令中模板如果是复杂页面元素，则使用html文件作为模板
    	"angular/no-inline-template":["off"],
		//$on 和 $watch 函数需要返回一个变量值，以便调用$destroy函数
    	"angular/on-watch":["off"],
    	//angular模块中服务、指令、筛选器命名检查
    	"angular/component-name":["off"],
    	//angular模块中服务、指令、筛选器命名和对应文件名称需保持一致
    	"angular/file-name":["off"],
    	"angular/di-order":["off"],
    	//使用angular内置对象
    	"angular/angularelement":["off"],
    	//使用angular内置对象
    	"angular/definedundefined":["off"],
    	//使用angular内置对象
    	"angular/foreach":["off"],
    	//使用angular内置对象
    	"angular/json-functions":["off"],
    	//使用angular内置对象
    	"angular/no-angular-mock":["off"],
    	//使用angular内置对象
    	"angular/no-jquery-angularelement":["off"],
    	//使用angular内置对象
    	"angular/typecheck-array":["off"],
    	//使用angular内置对象
    	"angular/typecheck-date":["off"],
    	//使用angular内置对象
    	"angular/typecheck-function":["off"],
    	//使用angular内置对象
    	"angular/typecheck-number":["off"],
    	//使用angular内置对象
    	"angular/typecheck-object":["off"],
    	//使用angular内置对象
    	"angular/typecheck-string":["off"],
        //指令命名规则
        "angular/directive-name":["off","gm"],
        //服务命名规则
        "angular/factory-name":["off","$"],
        //服务命名规则
        "angular/service-name":["off","$"],
        //服务命名规则
        "angular/provider-name":["off","$"],
        //使用angular.module("name")来获取模块对象，不使用变量获取
        "angular/module-getter":["off"],
        //使用angular.module("name",[...])来定义模块时，不要获取返回模块对象
        "angular/module-setter":["off"],
        //作用域提供的部分方法要带$
        "angular/avoid-scope-typos":["off"],
    }
};