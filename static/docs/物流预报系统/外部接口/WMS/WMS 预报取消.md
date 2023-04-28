# WMS 预报取消

> 作者：lvyuanjun

## 简要描述

- wms渠道取消

## 请求URL
- ` http://test-cams-gateway.zehui.local/logistics-open-api-service/wmsApi/v1/wmsCancelForecast`
  
## 请求方式
- POST 

## 订单参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |String | 客户参考号 唯一识别号     |
|cancelReason  |是  |String(255) | 取消原因    |
|parcelNos  |是  |List&lt;String> | 包裹号    |
|logisticsNos  |是  |List&lt;String> | 物流单号    |

## 请求示例
```
{
  "referenceNumber": "Test20110911",
  "cancelReason": "取消",
  "parcelNos": [
    "Test20110911-1",
    "Test20110911-2"
  ],
  "logisticsNos": [
    "PN20211025001-1",
    "PN20211025001-2"
  ]
}
```


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "取消成功!",
    "attachedMap": {
        "traceId": "c0a814721635160637366101911652"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|----- 
|code |Integer   |状态码 参考BladeX R 200 业务成功 400 业务异常  500服务器异常|
|msg |String   | 描述信息  |
|data| null | 包裹信息 |


## 备注