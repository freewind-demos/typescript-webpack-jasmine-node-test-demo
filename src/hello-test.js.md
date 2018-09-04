```
$ npm run test
```

```
> @ test /Users/freewind/workspace/javascript-karma-demo
> karma start karma.conf.js

04 09 2018 14:17:24.861:WARN [karma]: No captured browser, open http://localhost:9876/
04 09 2018 14:17:24.869:INFO [karma]: Karma v3.0.0 server started at http://0.0.0.0:9876/
04 09 2018 14:17:24.869:INFO [launcher]: Launching browser Chrome with unlimited concurrency
04 09 2018 14:17:24.877:INFO [launcher]: Starting browser Chrome
04 09 2018 14:17:25.708:INFO [Chrome 68.0.3440 (Mac OS X 10.13.3)]: Connected on socket Cvrmsf-29nyVC4jQAAAA with id 78737245
Chrome 68.0.3440 (Mac OS X 10.13.3): Executed 1 of 1 SUCCESS (0.003 secs / 0.001 secs)
TOTAL: 1 SUCCESS
04 09 2018 14:18:45.950:INFO [watcher]: Changed file "/Users/freewind/workspace/javascript-karma-demo/src/hello-test.js".
Chrome 68.0.3440 (Mac OS X 10.13.3) hello should return hello words for a given name FAILED
        Expected 'Hello, karma!' to be 'Hello, javascript!'.
            at <Jasmine>
            at UserContext.<anonymous> (src/hello-test.js:4:32)
            at <Jasmine>
Chrome 68.0.3440 (Mac OS X 10.13.3): Executed 1 of 1 (1 FAILED) ERROR (0.006 secs / 0.002 secs)
```