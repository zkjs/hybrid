# Flux ReactNative分层框架

## Flux是Facebook用来构建用户端的web应用的应用程序体系架构。目的是分层解耦，职责划分清晰,它通过利用数据的单向流动为React的可复用的视图组件提供了补充。

## Flux应用主要包括：action、dispatcher、store和view（React components）

### 1.action 封装请求

### 2.dispatcher 注册处理器、分发请求

### 3.store 存储处理器，处理业务逻辑，保存数据

### 4.view 根据store提供的数据进行展现,接受用户的输入并发出action请求

![image](http://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)