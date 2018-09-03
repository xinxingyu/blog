---
pageClass: base
---

# Currying
::: tip
柯里化
:::

## 含义
柯里化： 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。其实，柯里化就是用闭包原理实现函数参数的合并，然后再运行函数。

```javascript
var curry = function(fn) {
    var slice = Array.prototype.slice,
        storedArgs = slice.call(arguments, 1);

    return function() {
        var newArgs = slice.call(arguments);
        var args = storedArgs.concat(newArgs);

        return fn.apply(null, args);
    };
}

var result = curry(function(x, y) {
    return x + y;
}, 5)(10); //15
```
　　　　

上面的代码，需要注意的是 storedArgs = slice.call(arguments, 1) 这段代码的意思是把fn之外的参数存储起来（我们第一次传个curry的那个5），然后我们调用这个经过curry处理过后的函数时，他会把我们新传的参数和原来我们传的那个5结合组成新的参数数组进行处理[var args = storedArgs.concat(newArgs)]，具体处理的代码是fn.apply(null, args)。

当我们发现正在调用一个函数，并且传递的大部分参数都是相同的，那么该函数使用curry化是一个很好的方案。可以通过将一个curry化，从而动态产生一个新的函数，这个新的函数会保存重复的参数（因此不必每次都传递这些参数），并且还会使用预填充原始函数所期望的完整参数列表。

## 作用
1. 参数复用

    如上面的例子。

2. 提前返回

    上面的方法有什么问题呢？很显然，我们每次使用addEvent为元素添加事件的时候，(eg. IE6/IE7)都会走一遍if...else if ...，其实只要一次判定就可以了，怎么做？–柯里化。改为下面这样子的代码：

    初始addEvent的执行其实值实现了部分的应用（只有一次的if...else if...判定），而剩余的参数应用都是其返回函数实现的，典型的柯里化。
