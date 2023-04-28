# 订单优选管理查询api

> 作者：wangchaolang

## 简要描述

- 订单优选管理查询

## 请求URL
- ` http://{网关}/ctms-optimize/channelESLog/page `
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|tenantId |否  |string |租户id   |
|platformCode |否   |string |平台代码    |
|startDate     |否  |date | 开始时间    |
|endDate     |否  |date | 结束时间    |
|channelState     |否  |Int | 渠道状态   1:有渠道 2:无渠道  |
|requestType     |否  |Int | 请求方 1:OMS  2:LMS  |
|ruleKey     |否  |Int |下拉条件 1:OMS订单号  2:包裹号  |
|ruleValue |否   |string |`NEW`下拉内容 支持多选，逗号分割    |
|size     |是  |Int | 每页数量|
|current     |是  |Int | 当前页|
## 返回示例 

```

```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |id |
|tenantId |String   |租户id |
|requestType |Int | 请求方 1:OMS  2:LMS  |
|platformCode  |string |平台代码    |
|referenceNumber |String   |客户运单号 |
|parcelNumber |String   |包裹号 |
|request |String   |请求报文 |
|response |String   |响应报文 |
|channelState   |Int | 渠道状态   1:有渠道 2:无渠道  |
|createTime   |date | 请求时间 |
|finishTime   |date | 完成时间 |