class ScriptTimestampWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('SetScriptTimestampPlugin',
      (compilation, callback) => {
        compilation.plugin(
          "html-webpack-plugin-before-html-processing",
          function (htmlPluginData, callback) {
            let jsScr = htmlPluginData.assets.js[0];
            htmlPluginData.assets.js = [];
            let result = `
                  <script>
                      var scriptDOM = document.createElement("script");
                      var jsScr = "./${jsScr}";
                      scriptDOM.src = jsScr + "?" + new Date().getTime();
                      document.body.appendChild(scriptDOM)
                  </script>
              `;
            let resultHTML = htmlPluginData.html.replace(
              "<!--script-timestamp-webpack-plugin inset script-->", result
            );
            // 返回修改后的结果
            htmlPluginData.html = resultHTML;
          }
        );
      }
    );
  }
}
module.exports = ScriptTimestampWebpackPlugin;
