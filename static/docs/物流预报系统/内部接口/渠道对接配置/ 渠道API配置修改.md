#  渠道API配置修改

> 作者：luobinbin

## 简要描述

- 渠道API配置修改接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-provider/base/channelApi/update`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|strategyName |是|String  |策略名|
|paramJson |否|String   |授权信息|
|channelWay|是|Integer|渠道方式：1.线上 2.线下|
|traceUrl|否|String|轨迹接口`NEW`|
## 请求示例 

``` 
{
    "traceUrl":"",
    "strategyName":"fanno",
    "paramJson":"{\n\t\"host\": \"http://open-api.fannoshop.com\",\n\t\"trackApi\": \"/api/orders/detail/query\",\n\t\"labelApi\": \"/api/logistics/shipping_document\",\n\t\"appKey\": \"4olrl0\",\n\t\"appSecret\": \"ace42c3bdc564aceee10586497df83ee2a5ae253\"\n}",
    "channelWay":"1",
    "id":"1476004205547827201"
}
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "保存成功",
    "attachedMap": {
        "traceId": "c0a8727d1640057543364100116732"
    }
}
```


## 备注 

- 更多返回错误代码请看首页的错误代码描述