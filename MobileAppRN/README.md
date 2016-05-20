# Flux ReactNative分层框架

## Flux是官方提供的架构，目的是分层解耦，职责划分清晰，谁负责干啥很明确。具体描述可以参考官方文档，这里不详述。

### 1.action 封装请求
### 2.dispatcher 注册处理器、分发请求
### 3.store 存储处理器，处理业务逻辑，保存数据
### 4.view 根据store提供的数据进行展现;接受用户的输入并发出action请求

![image](http://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)