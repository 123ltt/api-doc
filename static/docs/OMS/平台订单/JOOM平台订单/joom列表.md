# joom列表

> 作者：chenpan

## 简要描述

- joom列表

## 请求URL
- ` /joom/page `
  
## 请求方式
- POST 

## 请求示例:
```
{
    "data": {
        "storeCodeList": [
            "bestseller"
        ],
        "searchType": "1",
        "searchContent": "M88LPP6Y"
    },
    "query": {
        "current":1,
        "size":100
    }
}
```
##参数说明
```
|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|createdAtStart |date   |创建时间开始|否|
|createdAtEnd |date   |创建时间结束|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|storeNameListStr |String   |店铺编号列表|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
|searchType |Integer   |搜索类型:1-平台单号, 2-OMS单号, 3-在线SKU, 4-跟踪号, 5-收件人姓名|否|
|searchContent |String   |搜索内容|否|
|platOrderStatusType |String   |平台订单状态类型: REQUIRE_REVIEW: 审核中, APPROVED: 待发货,SHIPPED:已发货, REFUNDED: 已取消, MARK_FAILED: 标记失败 |否|
|descs|string |排序 
|ascs| string |排序
```
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "storeName": null,
                "orderId": "M88LPP6Y",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
				"onlineShippingRequired":0 (0否1是) 是否线上物流(物流标识)---详情同
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/e1d2cd1c820ea06314e92717ac26c162de8b6e73_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7600",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7600"
            },
            {
                "storeName": null,
                "orderId": "DJ8LDEX4",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/697fe55ec96af9feb2019ea415733a2fc9307fa1_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7000",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7000"
            },
            {
                "storeName": null,
                "orderId": "L667NN4J",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/e1d2cd1c820ea06314e92717ac26c162de8b6e73_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7600",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7600"
            },
            {
                "storeName": null,
                "orderId": "5PQQVQPD",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/cf79bb116aa567cab0b3596b646b27bc72909b7e_original.jpeg",
                        "orderItemId": "1489630957461091788-202-1-26341-3926452091",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "2.3800",
                        "productName": "Women Floral Lace Bra Unpadded Brassiere Sleepwear"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.8900",
                "orderTotal": "2.3800"
            },
            {
                "storeName": null,
                "orderId": "3J5L5J36",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/e1cbee794771d32dc6f6aab419bef4c7b05fc9f0_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.6104",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.6104"
            },
            {
                "storeName": null,
                "orderId": "DJ5389JG",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/697fe55ec96af9feb2019ea415733a2fc9307fa1_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7600",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7600"
            },
            {
                "storeName": null,
                "orderId": "5PQJGYX5",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/e1d2cd1c820ea06314e92717ac26c162de8b6e73_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7600",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7600"
            },
            {
                "storeName": null,
                "orderId": "642P9D7P",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/697fe55ec96af9feb2019ea415733a2fc9307fa1_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.6016",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.6016"
            },
            {
                "storeName": null,
                "orderId": "9VQJ2Y8W",
                "omOrderId": "",
                "platStatus": "FULFILLED_ONLINE",
                "platStatusStr": null,
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/e1cbee794771d32dc6f6aab419bef4c7b05fc9f0_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7600",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7600"
            },
            {
                "storeName": null,
                "orderId": "EM44LJLP",
                "omOrderId": "",
                "platStatus": "FULFILLED_ONLINE",
                "platStatusStr": null,
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/ff97247429d4a5ce1d7fbd5aa91655f2b621a8e8_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.7600",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.7600"
            },
            {
                "storeName": null,
                "orderId": "WMX82G83",
                "omOrderId": "",
                "platStatus": "SHIPPED",
                "platStatusStr": "已发货",
                "omOrderStatus": null,
                "omOrderStatusStr": null,
                "trackingNumber": "",
                "markStatus": null,
                "skuList": [
                    {
                        "productMainImage": "https://img.joomcdn.net/e1d2cd1c820ea06314e92717ac26c162de8b6e73_original.jpeg",
                        "orderItemId": "1489545414640554015-96-1-26341-1874428031",
                        "sku": null,
                        "quantity": null,
                        "itemPrice": "1.5840",
                        "productName": "Baby Cute Soft Winter Boots Snow Fleece Rabbit Baby Shoes"
                    }
                ],
                "createdAt": null,
                "deliveryTime": null,
                "firstGrabDate": null,
                "omsMarkDate": null,
                "remainingDeliveryTime": "-1天-1小时",
                "freightChargesAmount": "0.0000",
                "orderTotal": "1.5840"
            }
        ],
        "total": 11,
        "size": 20,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a832c41634613243970100212412"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述