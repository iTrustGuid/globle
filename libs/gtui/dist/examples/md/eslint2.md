# Eslint(二)：规则字典

*字数：6190*

*阅读时间：30分钟*

<br>

Standard规范+Angular规范集合

##代码格式

###[indent](http://eslint.org/docs/rules/indent)

```js
"indent": ["error", 4]
```

规定使用几个空格进行缩进。第二个参数表示空格的个数，默认是2个，我们这个设置的是四格。

<br>

### [block-spacing](http://eslint.org/docs/rules/block-spacing)

```js
"block-spacing": ["error", "always"]
```

规定单行代码两边加空格。第二个参数有"always"、"never"，默认值为"always"，表示需要至少一个空格，"never"表示不需要空格。代码示例如下：

```js
function foo () {return true}    // ✗ avoid
function foo () { return true }  // ✓ ok
```

<br>

###[brace-style](http://eslint.org/docs/rules/brace-style)

```js
"brace-style": ["error", "1tbs", { "allowSingleLine": true }]
```

规定 “else” 关键字要与花括号保持在同一行。第二个参数表示不同的规则风格，可取"1tbs"、“stroustrup”、“allman”三种风格。第三个参数表示是否允许大括号在同一行，默认值为 “false”。代码示例如下：

```js
// ✓ ok
if (condition) {
  // ...
} else {
  // ...
}


// ✗ avoid
if (condition)
{
  // ...
}
else
{
  // ...
}
```

<br>

###[comma-spacing](http://eslint.org/docs/rules/comma-spacing)

```js
"comma-spacing": ["error", { "before": false, "after": true }]
```

规定逗号后面必须添加空格。第二个参数用来设置逗号前和逗号后是否添加空格。代码示例如下：

```js
// ✓ ok
var list = [1, 2, 3, 4]
function greet (name, options) { ... }

// ✗ avoid
var list = [1,2,3,4]
function greet (name,options) { ... }
```

<br>

### [curly](http://eslint.org/docs/rules/curly)

```js
"curly": ["error", "multi-line"]
```

规定多行 if 语句的的括号不能省略。第二个参数配置那些场景会报错，可取值“all”、“multi”、“multi-line”、“multi-or-nest”、“consistent”。这里“multi-line”表示多行代码不能省略。代码示例如下：

```js
// ✓ ok
if (options.quiet !== true) console.log('done')

// ✓ ok
if (options.quiet !== true) {
  console.log('done')
}

// ✗ avoid
if (options.quiet !== true)
  console.log('done')
```

<br>

### [dot-location](http://eslint.org/docs/rules/dot-location)

```js
"dot-location": ["error", "property"]
```

规定点号操作符须与属性需在同一行。第二个参数配置点的位置，取值“property”和“object”。“property”表示点与属性同一行，“object”表示点与对象同一行。代码示例如下：

```js
  console.
    log('hello')  // ✗ avoid

  console
    .log('hello') // ✓ ok
```

<br>

###  [eol-last](http://eslint.org/docs/rules/eol-last)

```js
"eol-last": "error"
```

规定文件末尾空一行，以防文件解析错误。

<br>

###  [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing)

```js
"func-call-spacing": ["error", "never"]
```

规定函数调用时标识符与括号间不留间隔。第二个参数取值“never”和“always”，"never"表不留空格，"always"表要留空格。代码示例如下：

```js
console.log ('hello') // ✗ avoid
console.log('hello')  // ✓ ok
```

<br>

###  [key-spacing](http://eslint.org/docs/rules/key-spacing)

```js
"key-spacing": ["error", { "beforeColon": false, "afterColon": true }]
```

规定键值对中冒号与值之间要留空白。第二个参数配置前后是否留白。示例代码如下：

```js
var obj = { 'key' : 'value' }    // ✗ avoid
var obj = { 'key' :'value' }     // ✗ avoid
var obj = { 'key':'value' }      // ✗ avoid
var obj = { 'key': 'value' }     // ✓ ok
```

<br>

###  [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

```js
"no-mixed-spaces-and-tabs": "error"
```

规定不能混合使用空格与制表符作为缩进。

<br>

###  [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)

```js
"no-multi-spaces": "error"
```

规定除了缩进，不要使用多个空格。代码示例如下：

```js
const id =    1234    // ✗ avoid
const id = 1234       // ✓ ok
```

###  [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)

```js
"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }]
```

规定不允许有连续多行空行且文件头部不允许空行。第二个参数是一个对象，里面有三个属性。“max”属性表连续空行数，“maxEOF”表文件结尾空行数，“maxBOF”表示文件开头空行数。

<br>

### [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

```js
"no-trailing-spaces": "error"
```

规定行末不留空格。

<br>

###  [no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property)

```js
"no-whitespace-before-property": "error"
```

规定属性前面不能加空格。

<br>

###  [object-property-newline](http://eslint.org/docs/rules/object-property-newline)

```js
"object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }]
```

规定对象属性换行时注意统一代码风格(要么都换行，要么都不换)。第二个参数是一个对象，配置是否允许在一行代码中书写多个属性。代码示例如下：

```js
const user = {
  name: 'Jane Doe', age: 30,
  username: 'jdoe86'            // ✗ avoid
}

const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

const user = {
  name: 'Jane Doe',
  age: 30,
  username: 'jdoe86'
}      
```

<br>

###  [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

```js
"operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }]
```

规定对于三元运算符 `?` 和 `:` 与他们所负责的代码处于同一行。第二个参数配置换行符位置，可配“after”、“before”、“none”,分别表示操作符之后可换行，操作符之前可换行，前后都不允许换行。第三个参数配置覆盖第二个参数的配置内容。代码示例如下：

```js
// ✓ ok
var location = env.development ? 'localhost' : 'www.api.com'

// ✓ ok
var location = env.development
  ? 'localhost'
  : 'www.api.com'

// ✗ avoid
var location = env.development ?
  'localhost' :
  'www.api.com'
```

<br>

###  [padded-blocks](http://eslint.org/docs/rules/padded-blocks)

```js
"padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }]
```

规则定义代码中不要啊出现多余留白。第二个参数是一个对象，有以下属性配置。“blocks”表代码块，“classes”表类，“switches”表switch语句，取值都为“never”或“always”，表示是否需要留空行。代码示例如下：

```js
if (user) {
                            // ✗ avoid
  const name = getName()

}

if (user) {
  const name = getName()    // ✓ ok
}
```

<br>

###  [rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing)

```js
"rest-spread-spacing": ["error", "never"]
```

规定展开运算符与它的表达式间不要留空白。第二个参数取值“never”和“always”，表是否需要留白。代码示例如下：

```js
fn(... args)    // ✗ avoid
fn(...args)     // ✓ ok
```

<br>

###  [semi-spacing](http://eslint.org/docs/rules/semi-spacing)

```js
"semi-spacing": ["error", { "before": false, "after": true }]
```

规定分号前不留空格，后面留一个空格。第二个参数就是配置前后空格开关的。代码示例如下：

```js
for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

<br>

###  [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

```js
"space-before-blocks": ["error", "always"]
```

规定代码块收尾需留空格。第二个参数配置是否需要空格。代码示例如下：

```js
if (admin){...}     // ✗ avoid
if (admin) {...}    // ✓ ok
```

<br>

###  [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)

```js
"space-before-function-paren": ["error", "always"]
```

规定函数声明时括号与函数名间加空格。第二个参数配置是否需要空格。代码示例如下：

```js
function name (arg) { ... }   // ✓ ok
function name(arg) { ... }    // ✗ avoid

run(function () { ... })      // ✓ ok
run(function() { ... })       // ✗ avoid
```

<br>

###  [space-in-parens](http://eslint.org/docs/rules/space-in-parens)

```js
"space-in-parens": ["error", "never"]
```

规定圆括号间不留空格。第二个参数配置是否需要空格。代码示例如下：

```js
getName( name )     // ✗ avoid
getName(name)       // ✓ ok
```

<br>

###  [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops)

```js
"space-infix-ops": "error"
```

规定字符串拼接操作符 (Infix operators) 之间要留空格。代码示例如下:

```js
// ✓ ok
var x = 2
var message = 'hello, ' + name + '!'

// ✗ avoid
var x=2
var message = 'hello, '+name+'!'
```

<br>

### [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)

```js
"space-unary-ops": ["error", { "words": true, "nonwords": false }]
```

规定文字格式的一元运算符后跟一个空格。第二个参数有三个属性，“words”表文字格式的运算符（new，delete，typeof，void，yield），"nonwords"表非文字运算符（-,+,--,++,!,!!）,"overrides"配置一个对象值，配置具体操作符的空格行为。代码示例如下：

```js
typeof!admin        // ✗ avoid
typeof !admin        // ✓ ok
```

<br>

### [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing)

```js
"template-curly-spacing": ["error", "never"]
```

规定模板字符串中变量前后不加空格。第二个参数配置是否需要空格。代码示例如下：

```js
const message = `Hello, ${ name }`    // ✗ avoid
const message = `Hello, ${name}`      // ✓ ok
```

<br>

### [yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing)

```js
"yield-star-spacing": ["error", "both"]
```

规定yield * 中的 * 前后都要有空格。第二个参数取值“before”、“after”、“both”、“neither”，分别表示前留、后留、都留和都不留。代码示例如下：

```js
yield* increment()    // ✗ avoid
yield * increment()   // ✓ ok
```

<br>

### [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)

```js
"generator-star-spacing": ["error", { "before": true, "after": true }]
```

规定生成器函数*的前后都要留空格。

<br>

## 可能出错代码

### [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)

```js
"accessor-pairs": "error"
```

规定get和set成对出现。代码示例如下：

```js
var person = {
  set name (value) {    // ✗ avoid
    this.name = value
  }
}

var person = {
  set name (value) {
    this.name = value
  },
  get name () {         // ✓ ok
    return this.name
  }
}
```

<br>

### [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

```js
"comma-dangle": ["error", {
    "arrays": "never",
    "objects": "never",
    "imports": "never",
    "exports": "never",
    "functions": "never"
}]
```

规定不允许多余的行末逗号。第二个参数可配置属性，“arrays”、“objects”、“imports”、“exports”、“functions”，值分别取“never”或“always”。代码示例如下：

```js
 var obj = {
    message: 'hello',   // ✗ avoid
  }
```

<br>

### [comma-style](http://eslint.org/docs/rules/comma-style)

```js
"comma-style": ["error", "last"]
```

规定始终将逗号置于行末。第二个参数取值“last”或“first”，分别表示行末或行首。代码示例如下：

```js
  var obj = {
    foo: 'foo'
    ,bar: 'bar'   // ✗ avoid
  }

  var obj = {
    foo: 'foo',
    bar: 'bar'   // ✓ ok
  }
```

<br>

### [constructor-super](http://eslint.org/docs/rules/constructor-super)

```js
"constructor-super": "error"
```

规定子类构造函数中必须调用super，非子类不要调用super。代码示例如下：

```js
class Dog {
  constructor () {
    super()   // ✗ avoid
  }
}

class Dog extends Mammal {
  constructor () {
    super()   // ✓ ok
  }
}
```

<br>

### [eqeqeq](http://eslint.org/docs/rules/eqeqeq)

```js
"eqeqeq": ["error", "always", { "null": "ignore" }]
```

规定始终使用 === 替代 ==，null除外。第二个参数配置是否使用 === ，第三个参数配置是否忽略空值判断。示例代码如下：

```js
if (name === 'John')   // ✓ ok
if (name == 'John')    // ✗ avoid
if (name !== 'John')   // ✓ ok
if (name != 'John')    // ✗ avoid
```

<br>

### [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err)

```js
"handle-callback-err": ["error", "^(err|error)$" ]
```

规定函数里面的异常信息不要忘记处理。第二个参数配置匹配那些参数的正则表达式。示例代码如下：

```js
// ✓ ok
run(function (err) {
  if (err) throw err
  window.alert('done')
})

// ✗ avoid
run(function (err) {
  window.alert('done')
})
```

<br>

### [new-parens](http://eslint.org/docs/rules/new-parens)

```js
"new-parens": "error"
```

规定无参的构造函数调用时要带上括号。代码示例如下：

```js
function Animal () {}
var dog = new Animal    // ✗ avoid
var dog = new Animal()  // ✓ ok
```

<br>

### [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)

```js
"no-array-constructor": "error"
```

规定使用数组字面量而不是构造器(由于参数的二义性)，但是我们可以在初始化一个固定大小数组时用到他。代码示例如下：

```js
var nums = new Array(1, 2, 3)   // ✗ avoid
var nums = [1, 2, 3]            // ✓ ok
```

<br>

### [no-class-assign](http://eslint.org/docs/rules/no-class-assign)

```js
"no-class-assign": "error"
```

规定避免对类名重新赋值。代码示例如下：

```js
class Dog {}
Dog = 'Fido'    // ✗ avoid
```

<br>

### [no-const-assign](http://eslint.org/docs/rules/no-const-assign)

```js
"no-const-assign": "error"
```

规定避免修改使用 const 声明的变量。代码示例如下：

```js
const score = 100
score = 125       // ✗ avoid
```

<br>

### [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition)

```js
"no-constant-condition": ["error", { "checkLoops": false }]
```

规定避免使用常量作为条件表达式的条件（循环语句除外）。第二个参数配置是否检查循环表达式。代码示例如下：

```js
if (false) {    // ✗ avoid
  // ...
}

if (x === 0) {  // ✓ ok
  // ...
}

while (true) {  // ✓ ok
  // ...
}
```

<br>

### [no-delete-var](http://eslint.org/docs/rules/no-delete-var)

```js
"no-delete-var": "error"
```

规定不要对变量使用 delete 操作。代码示例如下：

```js
var name
delete name     // ✗ avoid
```

<br>

### [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args)

```js
"no-dupe-args": "error"
```

规定不要定义重复的函数参数。代码示例如下：

```js
function sum (a, b, a) {  // ✗ avoid
  // ...
}

function sum (a, b, c) {  // ✓ ok
  // ...
}
```

<br>

### [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members)

```js
"no-dupe-class-members": "error"
```

规定类中不要定义重复的属性。代码示例如下：

```js
class Dog {
  bark () {}
  bark () {}    // ✗ avoid
}
```

<br>

### [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys)

```js
"no-dupe-keys": "error"
```

规定对象字面量中不要定义重复的属性。代码示例如下：

```js
var user = {
  name: 'Jane Doe',
  name: 'John Doe'    // ✗ avoid
}
```

<br>

### [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case)

```js
"no-duplicate-case": "error"
```

规定switch 语句中不要定义重复的 case 分支。代码示例如下：

```js
switch (id) {
  case 1:
    // ...
  case 1:     // ✗ avoid
}
```

<br>

### [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)

```js
"no-empty-character-class": "error"
```

规定正则中不要使用空字符。代码示例如下：

```js
const myRegex = /^abc[]/      // ✗ avoid
const myRegex = /^abc[a-z]/   // ✓ ok
```

<br>

### [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)

```js
"no-empty-pattern": "error"
```

规定不要解构空值。代码示例如下：

```js
const { a: {} } = foo         // ✗ avoid
const { a: { b } } = foo      // ✓ ok
```

<br>

### [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign)

```js
"no-ex-assign": "error"
```

定义catch 中不要对错误重新赋值。代码示例如下：

```js
try {
  // ...
} catch (e) {
  e = 'new value'             // ✗ avoid
}

try {
  // ...
} catch (e) {
  const newVal = 'new value'  // ✓ ok
}
```

<br>

### [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough)

```js
"no-fallthrough": "error"
```

规定switch一定要使用 break 来将条件分支正常中断。代码示例如下：

```js
switch (filter) {
  case 1:
    doSomething()    // ✗ avoid
  case 2:
    doSomethingElse()
}

switch (filter) {
  case 1:
    doSomething()
    break           // ✓ ok
  case 2:
    doSomethingElse()
}

switch (filter) {
  case 1:
    doSomething()
    // fallthrough  // ✓ ok
  case 2:
    doSomethingElse()
}
```

<br>

### [no-func-assign](http://eslint.org/docs/rules/no-func-assign)

```js
"no-func-assign": "error"
```

规定避免对声明过的函数重新赋值。代码示例如下：

```js
function myFunc () { }
myFunc = myOtherFunc    // ✗ avoid
```

<br>

### [no-global-assign](http://eslint.org/docs/rules/no-global-assign)

```js
"no-global-assign": "error"
```

规定不要对全局只读对象重新赋值。代码示例如下：

```js
window = {}     // ✗ avoid
```

<br>

### [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp)

```js
"no-invalid-regexp": "error"
```

规定不要向 RegExp 构造器传入非法的正则表达式。代码示例如下：

```js
RegExp('[a-z')    // ✗ avoid
RegExp('[a-z]')   // ✓ ok
```

<br>

### [no-iterator](http://eslint.org/docs/rules/no-iterator)

```js
"no-iterator": "error"
```

规定禁止使用 __iterator__。代码示例如下：

```js
Foo.prototype.__iterator__ = function () {}   // ✗ avoid
```

<br>

### [no-self-assign](http://eslint.org/docs/rules/no-self-assign)

```js
"no-self-assign": "error"
```

规定避免将变量赋值给自己。代码示例如下：

```js
name = name   // ✗ avoid
```

<br>

### [no-self-compare](http://eslint.org/docs/rules/no-self-compare)

```js
"no-self-compare": "error"
```

规定避免将变量与自己进行比较操作。代码示例如下：

```js
if (score === score) {}   // ✗ avoid
```

<br>

### [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)

```js
"no-shadow-restricted-names": "error"
```

规定禁止随意更改关键字的值。代码示例如下：

```js
let undefined = 'value'     // ✗ avoid
```

<br>

### [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays)

```js
"no-sparse-arrays": "error"
```

规定禁止使用稀疏数组。代码示例如下：

```js
let fruits = ['apple',, 'orange']       // ✗ avoid
```

<br>

### [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)

```js
"no-template-curly-in-string": "error"
```

规定正确使用 ES6 中的字符串模板。代码示例如下：

```js
const message = 'Hello ${name}'   // ✗ avoid
const message = `Hello ${name}`   // ✓ ok
```

<br>

### [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)

```js
"no-throw-literal": "error"
```

规定用throw 抛错时，抛出 Error 对象而不是字符串。代码示例如下：

```js
throw 'error'               // ✗ avoid
throw new Error('error')    // ✓ ok
```

<br>

### [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)

```js
"no-unexpected-multiline": "error"
```

规定不要使用 (, [, or ` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错。代码示例如下：

```js
// ✓ ok
;(function () {
  window.alert('ok')
}())

// ✗ avoid
(function () {
  window.alert('ok')
}())

// ✓ ok
;[1, 2, 3].forEach(bar)

// ✗ avoid
[1, 2, 3].forEach(bar)

// ✓ ok
;`hello`.indexOf('o')

// ✗ avoid
`hello`.indexOf('o')
```

<br>

### [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)

```js
"no-unmodified-loop-condition": "error"
```

规定循环语句中注意更新循环变量。代码示例如下：

```js
for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```

<br>

### [no-unreachable](http://eslint.org/docs/rules/no-unreachable)

```js
"no-unreachable": "error"
```

规定return，throw，continue 和 break 后不要再跟代码。代码示例如下：

```js
function doSomething () {
  return true
  console.log('never called')     // ✗ avoid
}
```

<br>

### [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)

```js
"no-unsafe-finally": "error"
```

规定finally 代码块中不要再改变程序执行流程。代码示例如下：

```js
try {
  // ...
} catch (e) {
  // ...
} finally {
  return 42     // ✗ avoid
}
```

<br>

### [valid-typeof](http://eslint.org/docs/rules/valid-typeof)

```js
"valid-typeof": ["error", { "requireStringLiterals": true }]
```

规定用合法的字符串跟 typeof 进行比较操作。第二个参数配置是否只和字符串比对。代码示例如下：

```js
typeof name === 'undefimed'     // ✗ avoid
typeof name === 'undefined'     // ✓ ok
typeof bar == Object		   // ✗ avoid
```

<br>

### [no-control-regex](http://eslint.org/docs/rules/no-control-regex)

```js
"no-control-regex": "error"
```

规定禁止在正则表达式中使用控制字符。代码示例如下：

```js
var pattern = /\x1f/    // ✗ avoid
var pattern = /\x20/    // ✓ ok
```

<br>

### [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)

```js
"no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }]
```

规定禁止无用的表达式。

<br>

### [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)

```js
"no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }]
```

规定未定义前不能使用。





## 最佳实践

### [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)

```js
"accessor-pairs": "error"
```

对象中定义了存值器，一定要定义对应的取值器。代码示例如下：

```js
var person = {
  set name (value) {    // ✗ avoid
    this.name = value
  }
}

var person = {
  set name (value) {
    this.name = value
  },
  get name () {         // ✓ ok
    return this.name
  }
}
```

<br>

### [no-caller](http://eslint.org/docs/rules/no-caller)

```js
"no-caller": "error"
```

规定避免使用 arguments.callee 和 arguments.caller（不利于代码优化，且高级版本的ES标准会废弃它）。代码示例如下：

```js
function foo (n) {
  if (n <= 0) return

  arguments.callee(n - 1)   // ✗ avoid
}

function foo (n) {
  if (n <= 0) return

  foo(n - 1)
}
```

<br>

### [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign)

```js
"no-cond-assign": "error"
```

规定条件语句中赋值语句使用括号包起来。代码示例如下：

```js
// ✓ ok
while ((m = text.match(expr))) {
  // ...
}

// ✗ avoid
while (m = text.match(expr)) {
  // ...
}
```

<br>

### [no-debugger](http://eslint.org/docs/rules/no-debugger)

```js
"no-debugger": "error"
```

规定不要使用 debugger。

<br>

### [no-eval](http://eslint.org/docs/rules/no-eval)

```js
"no-eval": "error"
```

规定不要使用 eval()。

<br>

### [no-extend-native](http://eslint.org/docs/rules/no-extend-native)

```js
"no-extend-native": "error"
```

规定不要扩展原生对象。

<br>

### [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)

```js
"no-extra-bind": "error"
```

规定避免多余的函数上下文绑定。代码示例如下：

```js
const name = function () {
  getName()
}.bind(user)    // ✗ avoid

const name = function () {
  this.getName()
}.bind(user)    // ✓ ok
```

<br>

### [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast)

```js
"no-extra-boolean-cast": "error"
```

规定避免不必要的布尔转换。代码示例如下：

```js
const result = true
if (!!result) {   // ✗ avoid
  // ...
}

const result = true
if (result) {     // ✓ ok
  // ...
}
```

<br>

### [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens)

```js
"no-extra-parens": ["error", "functions"]
```

规定不要使用多余的括号包裹函数。第二个参数取值“all”或“functions”，表控制范围。代码示例如下：

```js
const myFunc = (function () { })   // ✗ avoid
const myFunc = function () { }     // ✓ ok
```

<br>

### [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)

```js
"no-floating-decimal": "error"
```

规定不要省去小数点前面的0（增强可读性）。代码示例如下：

```js
const discount = .5      // ✗ avoid
const discount = 0.5     // ✓ ok
```

<br>

### [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)

```js
"no-implied-eval": "error"
```

规定避免使用隐式的 eval()。代码示例如下：

```js
setTimeout("alert('Hello world')")                   // ✗ avoid
setTimeout(function () { alert('Hello world') })     // ✓ ok
```

<br>

### [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations)

```js
"no-inner-declarations": ["error", "functions"]
```

规定嵌套的代码块中禁止再定义函数。第二个参数配置控制范围，取值“both”（functions+var）、“functions”。代码示例如下：

```js
if (authenticated) {
  function setAuthUser () {}    // ✗ avoid
}
```

<br>

### [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace)

```js
"no-irregular-whitespace": "error"
```

规定不要使用非法的空白符。代码示例如下：

```js
function myFunc () /*<NBSP>*/{}   // ✗ avoid
```

<br>

### [no-labels](http://eslint.org/docs/rules/no-labels)

```js
"no-labels": ["error", { "allowLoop": false, "allowSwitch": false }]
```

规定不要使用标签语句。第二个参数含两个属性，“allowLoop”配置是否在循环语句中禁用，“allowSwitch”配置是否在switch语句中禁用。代码示例如下：

```js
label:
  while (true) {
    break label     // ✗ avoid
  }
```

<br>

### [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)

```js
"no-lone-blocks": "error"
```

规定不要书写不必要的嵌套代码块。代码示例如下：

```js
function myFunc () {
  {                   // ✗ avoid
    myOtherFunc()
  }
}

function myFunc () {
  myOtherFunc()       // ✓ ok
}
```

<br>

### [no-multi-str](http://eslint.org/docs/rules/no-multi-str)

```js
"no-multi-str": "error"
```

规定不要使用多行字符串。代码示例如下：

```js
const message = 'Hello \
                 world'     // ✗ avoid
```

<br>

### [no-new](http://eslint.org/docs/rules/no-new)

```js
"no-new": "error"
```

规定new 创建对象实例后需要赋值给变量。代码示例如下：

```js
new Character()                     // ✗ avoid
const character = new Character()   // ✓ ok
```

<br>

### [no-new-func](http://eslint.org/docs/rules/no-new-func)

```js
"no-new-func": "error"
```

规定禁止使用 Function 构造器。代码示例如下：

```js
var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid
```

<br>

### [no-new-object](http://eslint.org/docs/rules/no-new-object)

```js
"no-new-object": "error"
```

规定禁止使用 Object 构造器，直接声明对象即可。代码示例如下：

```js
let config = new Object()   // ✗ avoid
```

<br>

### [no-new-require](http://eslint.org/docs/rules/no-new-require)

```js
"no-new-require": "error"
```

规定禁止使用 new require。代码示例如下：

```js
const myModule = new require('my-module')    // ✗ avoid
```

<br>

### [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)

```js
"no-new-symbol": "error"
```

规定禁止使用 Symbol 构造器。代码示例如下：

```js
const foo = new Symbol('foo')   // ✗ avoid
```

<br>

### [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)

```js
"no-new-wrappers": "error"
```

规定禁止使用原始包装器。代码示例如下：

```js
const message = new String('hello')   // ✗ avoid
```

<br>

### [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls)

```js
"no-obj-calls": "error"
```

规定不要将全局对象的属性作为函数调用。代码示例如下：

```js
const math = Math()   // ✗ avoid
```

<br>

### [no-octal](http://eslint.org/docs/rules/no-octal)

```js
"no-octal": "error"
```

规定不要使用八进制字面量。代码示例如下：

```js
const num = 042     // ✗ avoid
const num = '042'   // ✓ ok
```

<br>

### [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)

```js
"no-octal-escape": "error"
```

规定字符串字面量中也不要使用八进制转义字符。代码示例如下：

```js
const copyright = 'Copyright \251'  // ✗ avoid
```

<br>

### [no-proto](http://eslint.org/docs/rules/no-proto)

```js
"no-proto": "error"
```

规定使用 getPrototypeOf 来替代 __proto__。代码示例如下：

```js
const foo = obj.__proto__               // ✗ avoid
const foo = Object.getPrototypeOf(obj)  // ✓ ok
```

<br>

### [no-redeclare](http://eslint.org/docs/rules/no-redeclare)

```js
"no-redeclare": "error"
```

规定不要重复声明变量。代码示例如下：

```js
let name = 'John'
let name = 'Jane'     // ✗ avoid

let name = 'John'
name = 'Jane'         // ✓ ok
```

<br>

### [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces)

```js
"no-regex-spaces": "error"
```

规定正则中避免使用多个空格。代码示例如下：

```js
const regexp = /test   value/   // ✗ avoid

const regexp = /test {3}value/  // ✓ ok
const regexp = /test value/     // ✓ ok
```

<br>

### [no-return-assign](http://eslint.org/docs/rules/no-return-assign)

```js
"no-return-assign": ["error", "except-parens"]
```

规定return 语句中的赋值必需有括号包裹。代码示例如下：

```js
function sum (a, b) {
  return result = a + b     // ✗ avoid
}

function sum (a, b) {
  return (result = a + b)   // ✓ ok
}
```

<br>

### [no-sequences](http://eslint.org/docs/rules/no-sequences)

```js
"no-sequences": "error"
```

规定避免使用逗号操作符。代码示例如下：

```js
if (doSomething(), !!test) {}   // ✗ avoid
```

<br>

### [no-undef-init](http://eslint.org/docs/rules/no-undef-init)

```js
"no-undef-init": "error"
```

规定不要使用 undefined 来初始化变量。代码示例如下：

```js
let name = undefined    // ✗ avoid

let name
name = 'value'          // ✓ ok
```

<br>

### [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary)

```js
"no-unneeded-ternary": ["error", { "defaultAssignment": false }]
```

规定如果有更好的实现，尽量不要使用三元表达式。代码示例如下：

```js
let score = val ? val : 0     // ✗ avoid
let score = val || 0          // ✓ ok
```

<br>

### [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation)

```js
"no-unsafe-negation": "error"
```

规定关系运算符的左值不要做取反操作。代码示例如下：

```js
if (!key in obj) {}       // ✗ avoid
```

<br>

### [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

```js
"no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }]
```

规定不要定义未使用的变量。代码示例如下：

```js
function myFunction () {
  var result = something()   // ✗ avoid
}
```

<br>

### [no-useless-call](http://eslint.org/docs/rules/no-useless-call)

```js
"no-useless-call": "error"
```

规定避免不必要的 .call() 和 .apply()。代码示例如下：

```js
sum.call(null, 1, 2, 3)   // ✗ avoid
```

<br>

### [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key)

```js
"no-useless-computed-key": "error"
```

规定避免使用不必要的计算值作对象属性。代码示例如下：

```js
const user = { ['name']: 'John Doe' }   // ✗ avoid
const user = { name: 'John Doe' }       // ✓ ok
```

<br>

### [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)

```js
"no-useless-constructor": "error"
```

规定禁止多余的构造器(ES2015会自动生成一个简单构造器)。代码示例如下：

```js
class Car {
  constructor () {      // ✗ avoid
  }
}
```

<br>

### [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)

```js
"no-useless-escape": "error"
```

规定禁止不必要的转义。代码示例如下：

```js
let message = 'Hell\o'  // ✗ avoid
```

<br>

### [no-useless-rename](http://eslint.org/docs/rules/no-useless-rename)

```js
"no-useless-rename": "error"
```

规定import, export 和解构操作中，禁止赋值到同名变量。代码示例如下：

```js
import { config as config } from './config'     // ✗ avoid
import { config } from './config'               // ✓ ok
```

<br>

### [no-with](http://eslint.org/docs/rules/no-with)

```js
"no-with": "error"
```

规定禁止使用 with。代码示例如下：

```js
with (val) {...}    // ✗ avoid
```

<br>

### [one-var](http://eslint.org/docs/rules/one-var)

```js
"one-var": ["error", { "initialized": "never" }]
```

规定每个 var 关键字单独声明一个变量。代码示例如下：

```js
// ✓ ok
var silent = true
var verbose = true

// ✗ avoid
var silent = true, verbose = true

// ✗ avoid
var silent = true,
    verbose = true
```

<br>

### [quotes](http://eslint.org/docs/rules/quotes)

```js
"quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
```

规定除需要转义的情况外，字符串统一使用单引号。第二个参数取值“single”、“double”，分别表示单引号和双引号。第三个参数配置是否允许嵌套和是否允许字符串模板。代码示例如下：

```js
console.log('hello there')
$("<div class='box'>")
```

<br>

### [semi](http://eslint.org/docs/rules/semi)

```js
"semi": ["error", "always"]
```

规定必须添加分号。第二个参数配置开关取值“never”、“always”。代码示例如下：

```js
window.alert('hi')   // ✓ ok
window.alert('hi');  // ✗ avoid
```

<br>

### [use-isnan](http://eslint.org/docs/rules/use-isnan)

```js
"use-isnan": "error"
```

规定检查 NaN 的正确姿势是使用 isNaN()。

<br>

### [wrap-iife](http://eslint.org/docs/rules/wrap-iife)

```js
"wrap-iife": ["error", "any", { "functionPrototypeMethods": true }]
```

规定自调用匿名函数 (IIFEs) 使用括号包裹。代码示例如下：

```js
const getName = function () { }()     // ✗ avoid

const getName = (function () { }())   // ✓ ok
const getName = (function () { })()   // ✓ ok
```

<br>

### [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing)

```js
"arrow-spacing": ["error", { "before": true, "after": true }]
```

规定箭头函数必须有前后括号。

<br>

## 命名

### [new-cap](http://eslint.org/docs/rules/new-cap)

```js
"new-cap": ["error", { "newIsCap": true, "capIsNew": false }]
```

规定构造函数要以大写字母开头。第二个参数配置细则，"newIsCap"配置只要是new关键字初始化的函数，首字母必须大写；“capIsNew”配置是否允许大写字母开头的函数不使用new关键字初始化。代码示例如下：

```js
function animal () {}
var dog = new animal()    // ✗ avoid

function Animal () {}
var dog = new Animal()    // ✓ ok

function Animal () {}
var dog = Animal()    // ✓ ok
```

<br>

### [camelcase](http://eslint.org/docs/rules/camelcase)

```js
"camelcase": ["error", { "properties": "never" }]
```

规定变量和函数使用驼峰命名法。第二个参数配置对象属性是否也要遵循驼峰命名法。示例代码如下：

```js
  function my_function () { }    // ✗ avoid
  function myFunction () { }     // ✓ ok

  var my_var = 'hello'           // ✗ avoid
  var myVar = 'hello'            // ✓ ok
```

<br>

## Angular规则

### angular/no-private-call

```js
"angular/no-private-call":["error"]
```

规定使用直接使用angular中带$$符号的成员，他们都是私有成员。

<br>

### angular/di-unused

```js
"angular/di-unused":["error"]
```

规定不要注入不使用的服务。

<br>

### angular/empty-controller

```js
"angular/empty-controller":["error"]
```

规定控制器不能为空。

<br>

### angular/no-run-logic

```js
"angular/no-run-logic":["error"]
```

规定控制器中只有调用代码，没有声明逻辑。

<br>

### angular/no-cookiestore

```js
"angular/no-cookiestore":["error"]
```

规定取代$cookiesStore，而使用$cookie来操作缓存。

<br>

### angular/no-directive-replace

```js
"angular/no-directive-replace":["error"]
```

规定自定义指令中不能使用replace属性。

<br>

### angular/no-http-callback

```js
"angular/no-http-callback":["error"]
```

规定不要直接使用 $http 的回调函数，应该使用promise来操作回调。

<br>

### angular/controller-name

```js
"angular/controller-name":["error","/[a-z].*Ctrl/"]
```

规定控制器命名规则，以小写字母开头以“Ctrl”结尾。

<br>

### angular/di

```js
"angular/di":["error","array"]
```

规定依赖注入规则，必须有数组列表并且参数与之一致。

<br>

### angular/function-type

```js
"angular/function-type":["error","anonymous"]
```

规定为angular组件指定一致的函数风格——匿名函数。

<br>

### angular/document-service

```js
"angular/document-service":["off"]
```

规定使用$document。

<br>

### angular/interval-service

```js
"angular/interval-service":["off"]
```

规定使用$interval。

<br>

### angular/log

```js
"angular/log":["off"]
```

规定使用$log。

<br>

### angular/timeout-service

```js
"angular/timeout-service":["off"]
```

规定使用$timeout。

<br>

### angular/window-service

```js
"angular/window-service":["off"]
```

规定使用$window。

<br>

<br>

参考文章：

[https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md#javascript-standard-style](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md#javascript-standard-style)

[http://eslint.cn/](http://eslint.cn/)

<br>

*欢迎关注我的微信公众号：*

![](https://gitee.com/lsjcoder/img/raw/master/other/1.jpg)