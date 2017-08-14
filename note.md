**一、描述http请求get与post的区别**
```shell
    １． get是从服务器上获取数据，post是向服务器传送数据。
    ２． get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTMLHEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。
    ３． 对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。
    ４． get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。
    ５． get安全性非常低，post安全性较高。但是执行效率却比Post方法好。
  建议：
    1、get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式；
    2、在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式；
```

**二、说说你对语义化的理解？**
```shell
    １．去掉或者丢失样式的时候能够让页面呈现出清晰的结构。
    ２．有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息；爬虫依赖于标签来确定上下文和各个关键字的权重。
    ３．方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
    ４．便于团队开发和维护，语义化更具可读性，是下一步网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```

**三、渐进增强，优雅降级？**
```shell
    渐进增强： progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

    优雅降级： graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

    区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。
```

**四、rgba和opacity的区别?**
```shell
    opacity是全局设置，所有的后代都会收到影响，而rgba后代不会收到影响。
```

**五、闭包是什么？闭包的优缺点？**
```shell
    闭包就是指有权访问另一个函数作用域中的变量的函数,是函数。
    闭包的优点1:减少全局变量定义，实现私有化(有助于保护变量不被其他操作修改)。
    优点２：可以根据参数，动态生成一些东西,每一个闭包函数都用于自己的变量，相互之间没有影响
    缺点: 私有变量会常驻内存，直到该变量使用完毕，会增加内存消耗。
```

**六、面向对象。**
```shell
    面向对象：所有的操作都是以对象为中心，对象拥有属性和方法。属性和方法都属于对象的附属。
```

**七、link和＠import的区别。**
```shell
    区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
　  区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
　  区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
　  区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持。
```

**八、浏览器的内核分别是什么?**
```shell
    1、Trident内核：IE最先开发或使用的，也称IE内核，360浏览器使用的也是IE内核；
    2、Webkit内核：谷歌chrome浏览器最先开发或使用，也叫谷歌内核，枫树浏览器、太阳花使用的也是谷歌内核；
    3、Gecko内核： Netscape6开始采用的内核，后来的Mozilla FireFox (火狐浏览器) 也采用了该内核，K-Meleon浏览器也是使用这种内核；
    4、Presto内核：目前只有Opera浏览器采用该内核。
```

**九、cookie和session的区别。**
```shell
    ① cookie数据存在客户的浏览器上，session数据存放在服务器端 ② cookie不安全 ③ session会在一定时间内保存在服务器端，访问增多，占用服务器性能。 ④ 单个cookie保存的数据不超过4K。
```

**十、请描述一下 cookies，sessionStorage 和 localStorage 的区别？**
```shell
    cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会; sessionStorage和localStorage的存储空间更大； sessionStorage和localStorage有更多丰富易用的接口； sessionStorage和localStorage各自独立的存储空间；
```

**十一、nodejs的优缺点。**
```shell
    优点：
    可以解决高并发，它是单线程，当访问量很多时，将访问者分配到不同的内存中，不同的内存区做不同的事，以快速解决这个线程。采用事件驱动、异步编程，为网络服务而设计。其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。不同的事件分配给不同的线程，避免了排队的拥挤，当一个线程完成后将结果返回给主线程，但是因为是单线程，所以每次接收到的结果只有一个，这个结果处理完成后才能接收下一个结果，这样拥挤情况有所缓解，但是事件多到一定程度还是会需要较长时间。
    Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。
    Node.js轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。Node非常适合如下情况：
    在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。

    缺点：
    只支持单核CPU，不能充分利用CPU。
    可靠性低，一旦代码某个环节崩溃，整个系统都崩溃。原因是单线程，单进程。解决方法：
    (1):用反向代理Nginx,负载均衡，开启多个进程，每个进程绑定不同的端口。
    (2):把多个进程绑在一个端口上,用cluster模块创建子进程。
```

**十二、npm和nvm的区别及使用。**
```js
    安装nodejs：
    $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    安装开发环境：
    sudo apt-get install -y build-essential

    安装nvm:
    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

    npm全称node package manager,用来安装管理node的依赖包。
    npm -v                           查看npm的版本
    npm install express              本地安装express包。
    npm install express -g           全局安装
    npm init                         编写json文件
    npm init --yes                   默认json文件
    npm install express --save　　　  往json文件中保存项目运行依赖模块
    npm install express --save-dev   往json文件中保存项目开发依赖模块

    nvm是node version manager,是node的版本管理器，方便我们对node版本的切换。
    nvm use v6.11.0                  切换成6.11.0版本的node
    nvm ls                           查看当前node版本
    nvm ls-remote                    查看官网有多少个node版本
```


**十三、什么是阻塞和非阻塞？**
```shell
    阻塞：阻塞调用是是调用之后一定要等到系统内核层面完成所有事件操作后, 调用才结束。

    阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程。在阻塞模式下，一个线程永远在执行计算操作，这个线程所使用的CPU核心利用率永远是100%，I/O以事件的方式通知。在阻塞模式下，多线程往往能提高系统吞吐量，因为一个线程阻塞时还有其他线程在工作，多线程可以让 CPU资源不被阻塞中的线程浪费。多线程带来的
    好处仅仅是在多核CPU的情况下利用更多的核,而Node.js的单线程也能带来同样的好处。阻塞I/O的一个特点是调用之后一定要等到系统内核层面完成所有事件操作后, 调用才结束。

    非阻塞：非阻塞 I/O 和阻塞 I/O 的差别为调用之后会立即返回,但是返回的不一定是正确的结果。

    而在非阻塞模式下，线程不会被I/O阻塞，永远在利用CPU。非阻塞IO和阻塞IO的差别为调用之后会立即返回，非阻塞IO返回后，CPU的时间片可以处理其他事件，没有浪费时间，不过非阻塞的缺点是返回的并不一定是结果，而是当前调用的状态，为了获得完整的数据，应用程序需要重复调用IO操作来确认是否完成，这就是轮询技术。
```

**十四、同步和异步。**
```shell
    同步，就是在发出一个功能调用时，在没有得到结果之前，该调用就不返回。也就是必须一件一件事做,等前一件做完了才能做下一件事。
    异步，异步的概念和同步相对。当一个异步过程调用发出后，不能立刻得到结果。实际处理这个调用的部件在完成后，通过状态、通知和回调来通知调用者。异步IO就是把IO提交给系统，让系统替你做，做完了再用某种方式通知你, 通过信号，或者其他异步方式通知。应用程序可以去做其他的事情。
```  

**十五、react的实现原理。**
```shell
    当组件 state 有更改时，React会自动调用组件的render()方法重新渲染组件的UI。
    如果大面积的操作DOM，性能是一个很大的问题，所以React实现了一个虚拟DOM，组件的DOM结构映射到这个虚拟DOM上，当要更新组件时，React会再实现一个虚拟DOM,然后会实现一个diff算法比较两个虚拟DOM并寻找要变更的DOM节点，最后把这个合格修改更新到浏览器实际的DOM节点上，所以实际上不是重新渲染整个DOM树。
    虚拟DOM 是一个纯粹的JS数据结构，可能是树结构也可能是其他结构，性能比原生DOM快很多。
```

**十六、react的组件更新原理。**
```shell
    1.两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；
    2.对于同一层次的一组子节点，它们可以通过唯一的key进行区分。
    节点不同时，react的处理是删除
```

**十七、react组件的生命周期。**
```shell
    1.componentWillMount(): 在渲染前调用, 在客户端也在服务端.
    2.componentDidMount(): 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    3.componentWillUpdate(object nextProps, object nextState): 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    4.componentDidUpdate(object nextProps, object nextState): 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    5.componentWileUnmount(): 在组件从 DOM 中移除的时候立刻被调用。
```

**十八、props和state的区别。**
```shell
    由于this.props和this.state都用于描述组件特性, 可能会产生混淆. 一个简单的区分方法是, this.props表示那些一旦定义, 就不再改变的特性, 而this.state是会随着用户互动而产生变化的特性.
```
