---
pageClass: base
---

# Create Simple Server
::: tip
构造一个简单的服务器
:::

## http
使用http模块创建一个简单的服务器
```js
var http = require('http');
var fs = require('fs');
var path = require('path');
var port = '8088';

var server = http.createServer(function (req, res) {
  var url = req.url == '/' ? '/index.html' : req.url;
  fs.readFile(path.resolve(__dirname) + url, 'utf-8', function (err, data) {
    if (err) {
      res.write('404,您访问的页面不存在');
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port);
```

## express
```js {17}
var express = require("express");
var http = require('http');
var fs = require('fs');
var path = require('path');
var hostName = '127.0.0.1';
var port = '8088';
var app = express();
// 随便写了个请求类型的url
var requestUrl = ['/get', '/post', '/other'];

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')

  if (requestUrl.indexOf(req.url) > -1) {
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  } else {
    res.header("Content-Type", "text/html;charset=utf-8");
    getStatic(req, res)
  }
});

function getStatic(req, res) {
  var url = req.url == '/' ? '/index.html' : req.url;
  fs.readFile(path.resolve(__dirname) + url, 'utf-8', function (err, data) {
    if (err) {
      res.write('404,您访问的页面不存在');
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
}

app.get("/get", function (req, res) {
  res.send("这是get请求");
})

app.post("/post", function (req, res) {
  var result = {
    code: 200,
    msg: "post请求成功"
  };
  res.send(result);
});

app.post("/other", function (req, res) {
  res.send('其他请求');
});

app.listen(port, hostName, function () {
  console.log(`服务器运行在http://${hostName}:${port}`);
});
```
* 上面code定义了一个 `requestUrl` 是表明接口。针对接口和静态资源做了区分。
* 针对接口可以使用 `app.use()` 进行统一封装，这里就不详细写了。

## koa
关于使用 `koa` 搭建的方法，可以参考我之前写的一个DEMO：[Eg-FullStack](https://github.com/xinxingyu/Eg-FullStack)
