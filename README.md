JavaScript Karma Demo
=====================

Karma不是一个测试框架，而是一个用于将代码与具体的某个测试框架以及测试环境（如浏览器）等连接起来的桥梁。

```
npm install
npm run demo
```

根据我们在`karma.conf.js`中的配置，它会打开一个似乎什么也不做的浏览器:

![demo](./images/demo.jpg)

而实际上，karma会在后台把js文件传过去，在浏览器运行完以后，再把结果拿出来输出到控制台上。

注意
---

`karma.conf.js`中的`files`：

- 如果没有使用第三方插件（比如`karma-browserify`）处理，这里应该同时包含功能代码和测试代码。
- 如果使用了第三方插件，需要根据情况处理，比如使用`karma-browserify`，那么这里就不需要包含功能代码，只包含测试代码即可。
