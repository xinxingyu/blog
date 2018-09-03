---
pageClass: base
---

# async | await

::: tip 参考
[http://es6.ruanyifeng.com/#docs/async](http://es6.ruanyifeng.com/#docs/async)
:::

## 简介
* 问：什么是async 、 await 呢？
* 答：Generator 函数的语法糖。


async函数对 Generator 函数的改进，体现在以下四点。

1. 内置执行器

`generator` 的执行需要执行器，所以有了 `co`

2. 更好的语义

`async` 和 `await`，比起星号和 `yield`，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

3. 更广的适用性

`co` 模块约定，`yield` 命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 `Promise` 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

4. 返回值是 Promise。

`async` 函数的返回值是 `Promise` 对象，这比 `Generator` 函数的返回值是 `Iterator` 对象方便多了。你可以用 `then` 方法指定下一步的操作。

进一步说，`async`函数完全可以看作多个异步操作，包装成的一个 `Promise` 对象，而`await`命令就是内部`then`命令的语法糖。

## 用法
```js
const timeout = (value, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, ms);
  });
}

const test = async () => {
  const a = await timeout('aa', 100)
  const b = await timeout('bb', 100)
  // await Promise.reject('出错了');
  const c = await 'cc'

  return {
    a,
    b,
    c
  }
}

test().then((v) => {
  // TODO...
  console.log(v)
}).catch(e => console.log('错误处理...', e))
```
* `await`命令后面是一个 `Promise` 对象。如果不是，会被转成一个立即`resolve`的 `Promise` 对象。
* `await`命令后面的 `Promise` 对象如果变为`reject`状态，则`reject`的参数会被`catch`方法的回调函数接收到。
