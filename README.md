# 一、插件介绍
script-timestamp-webpack-plugin 是 Webpack 一款插件，用来在 Webpack 打包项目后生成的 `index.html` 文件中，为生成 js 文件的添加时间戳。

![script-timestamp-webpack-plugin](https://cdn.nlark.com/yuque/0/2020/png/186051/1582460114068-9a6633a6-6550-4c1b-ab48-a4a8c4adeadf.png)


# 二、运行机制

![script-timestamp-webpack-plugin运行机制](https://cdn.nlark.com/yuque/0/2020/png/186051/1582434130840-08e3721b-9cd9-4646-9b34-be47d83e3b17.png)

# 三、插件使用 

## 1. 安装

```shell
npm install script-timestamp-webpack-plugin --save-dev
```

## 2. 使用

在模版文件中，添加脚本插入入口：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello script-timestamp-webpack-plugin!</title>
</head>
<body>
    <!--SetScriptTimestampPlugin inset script-->
</body>
</html>
```


引入插件，并实例化：
```js
// webpack.config.js

const ScriptTimestampWebpackPlugin = require("script-timestamp-webpack-plugin");
module.exports = {
  // ... 省略其他配置
  plugins: [
    // ... 省略其他插件
    new ScriptTimestampWebpackPlugin()  
  ]
}
```


# 四、更新计划

1. [ ] 上架 1.0.0 到 npm；
2. [ ] 增加：多文件处理；
3. [ ] 增加：单元测试；
4. [ ] 升级：TS版本；
 
