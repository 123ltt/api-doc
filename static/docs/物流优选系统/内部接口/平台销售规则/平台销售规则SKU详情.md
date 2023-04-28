# 平台销售规则SKU详情

> 作者：luobinbin

## 简要描述

- 平台销售限制详情接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-optimize/channelSaleLimit/getSkuList`
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|channelSaleLimitId |是|Long   |平台销售限制id|

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "sku": "SM-1"
        },
        {
            "sku": "SM-2"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d164696274775210188716"
    }
}
```

## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|sku |String   |SKU编码|无
## 备注 

- 更多返回错误代码请看首页的错误代码描述