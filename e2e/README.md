## End to End Testing

### Install selenium-standalone (If you can't use service)

```
yarn add -g selenium-standalone
selenium-standalone install
selenium-standalone start
```

or

```
./node_modules/.bin/selenium-standalone install
yarn run e2e-selenium
```

### Change chrome to firefox

You can change the browser by wdio.config.js

```
capabilities: [{
  maxInstances: 1,
  browserName: 'firefox'
}],
```

If you want to set two browser(chrome & firefox) in the same time

```
capabilities: [{
  maxInstances: 1,
  browserName: 'chrome'
}, {
  maxInstances: 1,
  browserName: 'firefox'
}],
```