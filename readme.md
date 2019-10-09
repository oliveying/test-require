### 使用requirejs动态加载jquery。使用到了以下知识点

1. data-main属性

2. require.config方法

3. require函数

使用baseUrl来配置模块根目录，baseUrl可以是绝对路径也可以是相对路径

使用define定义一个函数类型模块，RequireJS的模块可以是JS对象，函数或其它任何类型（CommonJS/SeaJS则只能是JS对象）