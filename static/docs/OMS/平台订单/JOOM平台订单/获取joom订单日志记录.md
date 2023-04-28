# 获取joom订单日志记录

> 作者：liben

## 简要描述

- 获取joom订单日志记录
- 李奔

## 请求URL
- ` /jmPlatOrderhis/page `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|orderId |是  |string |平台订单号   |
## 请求示例 
``` 
{
    "query": {
        "current": 1,
        "size": 10
    },
    "data": {
        "orderId": "M88LPP6Y"
    }
}
```
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1448579931226206209",
                "orderId": "M88LPP6Y",
                "logger": "抓单",
                "msgBrief": "成功",
                "msgDetail": "{\"shipping_provider\":\"Joom Logistics\",\"color\":\"blue\",\"shipping_address_hash\":\"f33f1168e4da0cc35237347d8a6cbb180031938c\",\"product_image_url\":\"https://img.joomcdn.net/e1d2cd1c820ea06314e92717ac26c162de8b6e73_original.jpeg\",\"order_time\":\"2021-10-05T08:47:04Z\",\"buyer_id\":\"5f59c9c896845635011ae775\",\"ShippingDetail\":{\"zipcode\":\"5623\",\"country\":\"MD\",\"city\":\"Horodiste\",\"name\":\"Nadea Racu\",\"street_address2\":\"\",\"phone_number\":\"+37368609981\",\"street_address1\":\"Horodiste\",\"state\":\"Riscani\"},\"markups\":{\"sum\":\"0.0\"},\"order_cost\":\"1.496\",\"variant_id\":\"1489545415018301054-100-4-26341-504383090\",\"discounts\":{\"sum\":\"0.0\"},\"shipping\":\"0.0\",\"shipping_method\":\"online\",\"price\":\"1.76\",\"product_id\":\"1489545414640554015-96-1-26341-1874428031\",\"tracking_number\":\"LF006031275HK\",\"state\":\"SHIPPED\",\"sku\":\"1488336914366875995-2-3-26341-1161832900_YTM1142L-M\",\"transaction_id\":\"615c1108f7420737e2af2d92\",\"last_updated\":\"2021-10-14T07:27:16Z\",\"quantity\":\"1\",\"cost\":\"1.496\",\"fulfill_time_hours\":56,\"orig_amount\":\"1.76\",\"shipping_cost\":\"0.0\",\"ship_note\":\"\",\"product_name\":\"Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes\",\"size\":\"6-12m\",\"shipped_date\":\"2021-10-05T14:12:45Z\",\"order_total\":\"1.76\",\"shipping_provider_id\":\"1523962037711115092-69-61-709-871101089\",\"order_id\":\"M88LPP6Y\"}",
                "stacktrace": null,
                "createUserAccount": "oms",
                "tenantId": "000000",
                "createTime": "2021-10-14 17:22:24",
                "updateTime": "2021-10-14 17:22:24"
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a873b41634290398059100510800"
    }
}
```

## 备注 

- 更多返回错误代码请看首页的错误代码描述