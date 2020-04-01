# 一、插件介绍
script-timestamp-webpack-plugin 是 Webpack 一款插件，用来在 Webpack 打包项目后生成的 `index.html` 文件中，为生成 js 文件的添加时间戳。

实现效果：

![script-timestamp-webpack-plugin](https://blog.pingan8787.com/github/script-timestamp-webpack-plugin%20result.png)


# 二、运行机制

![script-timestamp-webpack-plugin运行机制](https://blog.pingan8787.com/github/script-timestamp-webpack-plugin.png)

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
    <!--script-timestamp-webpack-plugin inset script-->
</body>
</html>
```


![script-timestamp-webpack-plugin](https://blog.pingan8787.com/github/script-timestamp-webpack-plugin-results.png)


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

# 三、Vuejs 使用

```js
// vue.config.js

const ScriptTimestampWebpackPlugin = require("script-timestamp-webpack-plugin");
module.exports = {
  // ... 省略其他配置
  configureWebpack: {
    plugins: [
      // ... 省略其他插件
      new ScriptTimestampWebpackPlugin()  
    ]
  }
}
```

# 四、其他

React Angular 等，使用方法类似~~
