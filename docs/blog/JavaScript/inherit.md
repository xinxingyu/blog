---
pageClass: base
---

# Inherit
:::tip
JS面向那个对象编程之 - 继承
:::

## 简述
js继承笼统分为：

开始前先定一个父类用于继承
```js
function Persion(name){
    this.name = name || 'Persion';
    this.opt = {
      a: 1,
      b: 2
    };

    this.eat = function(){
        console.log(this.name + '..eating..')
    }
}
Persion.prototype.getName = function(){
    return this.name;
}
```


## 1. 原型链继承

:::tip 核心
将父类的实例作为子类的原型
:::

```js
function Author() {}
Author.prototype = new Persion();
Author.prototype.constructor = Author;


var xxy = new Author()

console.log(xxy.name) // Persion
xxy.eat() // Persion eating
console.log(xxy.getName()) // Persion
console.log(xxy instanceof Persion); // true
console.log(xxy instanceof Author); // true
```
> 优点：

1. 实例是子类的实例，也是父类的实例
2. 父类新增原型方法/原型属性，子类都能访问到

> 缺点：

1. 无法实现多继承
2. 来自原型对象的引用属性是所有实例共享的
```js
var db = new Author()

xxy.opt.a = 22

console.log(xxy.opt.a) // 22
console.log(db.opt) //22
```
3. 创建子类实例时，无法向父类构造函数传参


## 2. 构造继承
:::tip 核心
使用父类的构造函数来增强子类实例，等于复制父类的实例属性给子类
:::
```js
function Author(){
    Persion.call(this, name);
}

var xxy = new Author()

console.log(xxy instanceof Persion); // false
console.log(xxy instanceof Author); // true
```

> 优点：

1. 解决了原型链继承的缺点2
2. 创建子类实例时，可以向父类传递参数
3. 可以实现多继承（call多个父类对象）

> 缺点：

1. 实例并不是父类的实例，只是子类的实例
2. 只能继承父类的实例属性和方法，不能继承原型属性/方法
3. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

## 3. 实例继承
:::tip 核心
为父类实例添加新特性，作为子类实例返回
:::

```js
function Author(name){
    var instance = new Persion(name)

    return instance
}

var xxy = new Author()

console.log(xxy instanceof Persion); // true
console.log(xxy instanceof Author); // false
```
> 优点：

1. 不限调用方式

> 缺点：

1. 不支持多继承
2. 实例是父类的实例，不是子类的实例

## 4. 拷贝继承

```js
function Author(name){
    var instance = new Persion(name)
    for (var p in instance) {
        Author.prototype[p] = instance[p];
    }
}

var xxy = new Author('XXY')

console.log(xxy instanceof Persion); // true
console.log(xxy instanceof Author); // false
```

> 优点：

1. 支持多继承

> 缺点：

1. 效率较低，内存占用高（因为要拷贝父类的属性）
2. 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）


## 5. 组合继承
:::tip 核心
通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
:::

```js {3}
function Author(name, books){
    Persion.call(this, name);
    this.books = books;
}
Author.prototype = new Persion();
Author.prototype.constructor = Author;

Author.prototype.getBooks = function(){
    return this.books;
}

var xxy = new Author('XXY')
```
* 使用`call`或`apply`方法，将父对象的构造函数绑定在子对象上。
* 任何一个`prototype`对象都有一个`constructor`属性，指向它的构造函数，第17行的目的是为了防止继承链的紊乱。

> 优点：

1. 弥补了`构造继承`的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
2. 既是子类的实例，也是父类的实例
3. 不存在引用属性共享问题
4. 可传参
5. 函数可复用

> 缺点：

1. 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

## 6. 寄生组合继承
:::tip 核心
通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
:::

:::warning 提示
推荐使用
:::

```js
function Author(name){
    Persion.call(this, name);
}

(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Persion.prototype;
    //将实例作为子类的原型
    Author.prototype = new Super();
    Author.prototype.constructor = Author;
})();


var xxy = new Author('XXY')
```

为了简化类的声明，可以把派生子类的整个过程包装在一个extend的函数中。
```js
function extend(subClass, superClass) {
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}
```

但是，这样存在一个问题。就是同名函数会被复写，可以添加一个`superclass`属性来解决这个问题。

```js
function extend(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype; // 添加superclass属性
    if(superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

function Author(name, books){
    Author.superclass.constructor.call(this, name);
    this.books = books;
}
extend(Author, Persion);
Author.prototype.getBooks = function(){
    return this.books;
}
```
有了`superclass`属性，子类便可定义跟父类重名的原型方法，使用其原有函数的逻辑。
