!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"apply",value:function(e){e.hooks.compilation.tap("SetScriptTimestampPlugin",(function(e,t){e.plugin("html-webpack-plugin-before-html-processing",(function(e,t){var n=e.assets.js[0];e.assets.js=[];var r='\n                  <script>\n                      let scriptDOM = document.createElement("script");\n                      let jsScr = "./'.concat(n,'";\n                      scriptDOM.src = jsScr + "?" + new Date().getTime();\n                      document.body.appendChild(scriptDOM)\n                  <\/script>\n              '),o=e.html.replace("\x3c!--script-timestamp-webpack-plugin inset script--\x3e",r);e.html=o}))}))}}])&&n(t.prototype,r),e}();e.exports=r}]);