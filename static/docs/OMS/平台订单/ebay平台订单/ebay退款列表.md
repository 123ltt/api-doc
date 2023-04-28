# ebay退款列表

> 作者：liyaning

## 简要描述

- ebay退款

## 请求URL
- ` /ebayMain/returnPage`
  
## 请求方式
- POST 

## 参数
```
{
    "query": {
        "current": 1,
        "size": 20
    },
    "data": {
        "isReReleased": "",
        "storeCode": "ebay_US_0070",
        "omsOrderStatus": "",
        "searchType": "1",
        "searchContent": "",
		"shippingAddressCountry":"",
        "createdAtStart": "2021-07-23 00:00:00",
        "createdAtEnd": "2021-08-23 23:59:59"
    }
}
```
|参数说明|
|:-----  |:-----|-----                           |
|createdAtStart 创建时间开始 |
|createdAtEnd 创建时间结束 |
|refundAtStart 退款时间开始 |
|refundAtEnd 退款时间结束 |
|storeCode 店铺编码(逗号分隔)|
|shippingAddressCountry 国家 |
|searchType 搜索类型(1-平台单号,2-OMS单号,3-买家账号，4-itemID) |
|searchContent 搜索内容(逗号分隔) |

## 返回示例 
```
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "platOrderId": "11-07486-23818",
                "omOrderId": "EB2108181930000001",
                "itemId": "373430147332",
                "buyerUserId": "kyscho53",
                "storeName": "bestselling1010",
                "storeCode": "ebay_US_0070",
                "shippingAddressCountryCode": "GB",
                "currencyCode": "AUD",
                "total": "0.0000",
                "returnAmount": "-13.99",
                "returnType": "PAYMENT_REFUND",
                "orderStatus": "CANCELED",
                "orderStatusStr": "已取消",
                "omOrderStatus": 2,
                "omOrderStatusStr": "已分仓",
                "ebayCreateTime": "2021-08-18 16:30:07",
                "updateTime": "2021-08-20 17:30:10",
                "paidTime": "2021-08-18 16:30:07",
                "deliverDate": null
            }
        ],
        "total": 25,
        "size": 20,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 2
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8644b162978994884910171836"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|platOrderId |string   |平台订单号  |
|omOrderId |string   |OMS订单号  |
|itemId |string   |itemID  |
|buyerUserId |string   |买家账号  |
|storeName |string   |店铺  |
|storeCode |string   | 店铺code |
|shippingAddressCountryCode |string   | 国家简称 |
|currencyCode |string   | 币种 |
|total |string   | 订单总金额 |
|returnAmount |string   |订单退款金额  |
|returnType |string   |退款类型 |
|orderStatus|string   | 平台订单状态|
|orderStatusStr |string   | 平台订单状态字符串|
|omOrderStatus |decimal   |OMS订单状态 |
|omOrderStatusStr |string   | OMS订单状态字符串|
|ebayCreateTime |string   |创建时间 |
|updateTime |string   |退款时间 |
|paidTime |string   |付款时间 |
|deliverDate |string   |发货时间 |


## 备注 

- 更多返回错误代码请看首页的错误代码描述