Typescript Karma Webpack Jasmine Node Test Demo
================================================

如果是使用jasmine来测试前端代码，会比较简单，可以直接使用karma。

但是后端代码，同时又需要使用webpack的，则需要先用webpack把测试文件打包成一个或多个文件，再交给jasmine来执行。

注意：
1. 可以使用webpack把多个test文件打包成一个bundle js文件，交给jasmine执行
2. 寻找多个测试文件时，可以使用`glob`这个库来匹配
3. 如果typescript代码可以脱离webpack运行的，也可以直接使用jasmine来测（不需要webpack打包），见其它demo

```
npm install
npm run test
```

