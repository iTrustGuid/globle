# Webpack使用

<br/>

**1.代码中获取当前执行环境**

> 可以通过WEBPACK_DEBUG这个变量在代码中判断当前是开发环境还是生产环境
>
> 例：
>
> ```js
> if(!WEBPACK_DEBUG){
>    console.log('prod model');
> } else {
>     console.log('debug model');
> }
> ```

