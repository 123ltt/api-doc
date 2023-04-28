# 推送mq（仓库分区）

> 作者：2318309077

（测试环境）

仓库分区推送接口

ip : 10.10.40.57
port : 5672
vhost : dev_trace
username : dev_trace
password : puKUHD5l83ObqGrdhvlb

队列名称 : queue.direct.optimize.warehouse.crud

交换器 : exchange.optimize.warehouse

路由键 : routing.optimize.warehouse

-  返回数据模型

|字段|类型|空|默认|注释|
|:----    |:-------    |:--- |-- -|------      |
|type    |varchar     |否 |  |          操作类型(update/instart/delete) |
|id    |int(10)     |否 |  |           主键id  |
|tracknumber |varchar(20) |否 |    |   追踪号  |
|channelName |varchar(50) |否   |    |   渠道名称    |
|ruleName     |varchar(15) |是   |    |    规则名称     |
|remark |int(11)     |否   | 0  |   备注  |