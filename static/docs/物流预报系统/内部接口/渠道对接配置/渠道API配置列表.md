# 渠道API配置列表

> 作者：luobinbin

## 简要描述

- 渠道API配置查询接口

## 请求URL
- `http://dev-gateway.zehui.local/ctms-provider/base/channelApi/list?current=1&size=10`
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|channelCode |否|String   |渠道代码|
|lpId|否|String|物流商id|
|channelWay|否|Integer|渠道方式：1.线上 2.线下|
|strategyName|否|Integer|策略名称|
|status|否|Integer|状态|
|hasTrace|否|Integer|是否轨迹对接  1.是 2.否 `NEW`|
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": 0,
                "backExCode": 2,
                "status": 1,
                "channelCode": "Test-000001",
                "channelWay": 2,
                "strategyName": "test",
                "paramJson": "",
                "channelName": null,
                "lpId": null,
                "lpName": null,
                "labelType": 0,
                "traceUrl": "我是轨迹接口"
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [
            {
                "column": "create_time",
                "asc": false
            }
        ],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d164085782764110019372"
    }
}
```

## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|id |Long   |主键id|无
|channelName |String   |渠道名称|无
|lpName|String   |物流商名称|无
|channelWay|Integer|渠道方式：1.线上 2.线下|无
|paramJson|String   |授权信息|无
|status|Integer   |状态 1.正常 2.失效|无
|strategyName|String   |策略名|无

## 备注 

- 更多返回错误代码请看首页的错误代码描述