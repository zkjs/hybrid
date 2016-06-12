# universal-react-example
An example Universal ReactJS application

Written for 24ways. [Go read the blog post](https://24ways.org/2015/universal-react/) :)
Modified by Ganben, based on https://github.com/jackfranklin/universal-react-example.git
this project is ZKJS starter ReactJS project.
## Based on:
1. ejs ： server render的html template 引擎
2. express：server framework of nodejs
3. react-router和react-dom：reactjs的核心包
4. body-parser:  REST api server用的，用途未知；
5. mongoskin：api server的mongodb的driver
6. morgan: logger
7. (x)koa：serverside rendering的服务；
8. (x)alt：Flux实现，组件间通信用；
9. (x)iso：alt flux stores，异步实现；
10. (x)Reflux：基于Flux的双向数据流实现
11. (x)ImmutableJS：数据存储实现；
12. Mocha：JS测试用
13. SuperAgent：JS测试用
14. SocketIO：socket长连接的实现包
15. expect.js: Minimalistic BDD assertion toolkit based on should.js

## Install
```sh
$ git clone https://github.com/zkjs/hybrid.git
$ cd hybrid/uni-react-1
$ npm install
$ npm run build
$ npm start
$ open http://localhost:3003
```
