# amazon订单列表

> 作者：xiongxianxing

**简要描述：** 

- 平台订单列表

**请求URL：** 
- ` /oms/amplatorder/page`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "platformCode": "amazon"，
    "storeCode":"店铺编码"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1-平台单号,2-ASIN，3-OMS单号,4-在线SKU，5-跟踪号"，
    "searchContent":"搜索内容"，
    "fulfillmentChannel":"发货类型，发货类型，AFN表示FBA自发货,MFN表示自发货 ALL 全部"
	"orderStatus":"订单状态:1-pending待付款 ,2-unshipped,待发货3-shipped已发货,4-cancelled取消"
	"orderType":"订单类型:0-线上订单 ,1-手工导单"
    "current": 1,
    "size": 20
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeCode |String[]   |aavvcc|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |搜索类型:1-平台单号,2-ASIN，3-OMS单号,4-在线SKU，5-跟踪号|否|
|searchContent |String   |搜索内容|否|
|fulfillmentChannel |String   |发货类型，AFN表示FBA自发货,MFN表示自发货 ALL 全部|否|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1",
                "createUser": "0",
                "createDept": "0",
                "createTime": "2020-11-16 16:32:58",
                "updateUser": "0",
                "updateTime": "2020-11-16 16:32:58",
                "status": 0,
                "isDeleted": 0,
                "goods": [
                    {
                        "id": "1",
                        "createUser": "0",
                        "createDept": "0",
                        "createTime": "2020-11-17 12:02:00",
                        "updateUser": "0",
                        "updateTime": "2020-11-17 12:02:00",
                        "status": 0,
                        "isDeleted": 0,
                        "platOrderId": "1aas",
                        "imageUrl": "",
                        "sellerSku": "",
                        "asin": "",
                        "title": "",
                        "orderItemId": "1",
                        "itemPrice": "-1.0000",
                        "quantityOrdered": -1,
                        "itemTax": "-1.0000",
                        "promotionDiscount": "-1.0000",
                        "shippingPrice": "0.0000",
                        "shippingTax": null
                    },
                    {
                        "id": "2",
                        "createUser": "0",
                        "createDept": "0",
                        "createTime": "2020-11-17 12:02:51",
                        "updateUser": "0",
                        "updateTime": "2020-11-17 12:02:51",
                        "status": 0,
                        "isDeleted": 0,
                        "platOrderId": "1aas",
                        "imageUrl": "",
                        "sellerSku": "",
                        "asin": "",
                        "title": "",
                        "orderItemId": "2",
                        "itemPrice": "-1.0000",
                        "quantityOrdered": -1,
                        "itemTax": "-1.0000",
                        "promotionDiscount": "-1.0000",
                        "shippingPrice": "0.0000",
                        "shippingTax": null
                    }
                ],
                "platOrderId": "1aas",
                "storeCode": "",
                "omsOrderId": "",
                "marketplaceId": "",
                "searchType": null,
                "buyerName": "",
                "buyerEmail": "",
                "orderStatus": 2,
                "omsOrderStatus": null,
                "fulfillmentChannel": "",
                "paymentMethod": "",
                "currencyCode": "",
                "orderTotal": "-1.00",
                "shipmentServiceLevelCategory": "0",
                "shippingAddressName": "",
                "shippingAddressCountry": "",
                "shippingAddressCountryCode": "",
                "shippingAddressPostalCode": "",
                "shippingAddressPhone": "",
                "shippingAddressStateOrRegion": "",
                "shippingAddressCity": "",
                "shippingAddressDistrict": "",
                "shippingAddressLine1": "",
                "shippingAddressLine2": "",
                "ifPushedToOm": 0,
                "earliestShipDate": null,
                "latestShipDate": null,
                "purchaseDate": "2020-11-16 16:32:56",
                "orderTime": null,
                "orderTimeStart": null,
                "orderTimeEnd": null,
                "refundedDate": null,
                "lastUpdateDate": null,
                "trackingNumber": "",
                "omsMarkDate": null,
                "firstGrabDate": "2020-11-17T17:30:58",
                "firstGrabDateStart": null,
                "firstGrabDateEnd": null,
                "lastGrabDate": null,
                "waitDeliverDate": null,
                "deliverDate": null,
                "companyId": "",
                "promotionDiscountTotle": null,
                "shippingPriceTotal": null
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
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:---- |:---|:----- |
| platOrderId | varchar | 亚马逊平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| platOrderStatus | String | 订单状态:pending待付款 ,unshiped,待发货shipped已发货,cancelled取消 |
| omOrderStatus | String | OM订单状态|
| storeName | varchar | 店铺名称、销售账号 |
| shippingAddressCountryCode | varchar | 配送至国家code |
| isFBA | varchar | FBA订单 |
| trackingNumber | varchar | 跟踪号 |
| firstGrabDate | datetime | 首次抓单时间(oms生成) |
| orderTime | datetime | 付款时间，可以理解为授权可发货时间，即订单变化为unshipped状态的时间，即节点的LastUpdateDate |
| deliverDate | datetime | 已发货时间,即订单为shipped状态的时间，即节点的LastUpdateDate |
| omsMarkDate | datetime | oms标记时间(oms生成) |
| promotionDiscountTotle | decimal | 总折扣 |
| shippingPriceTotal | decimal | 总运费 |
| orderTotal | decimal | 订单总金额,节点OrderTotal.Amount |
| currencyCode | varchar | 支付金额结算币种,节点：OrderTotal.CurrencyCode |

 **返回参数说明goods** 

|参数名|类型|说明|
|:---- |:---|:----- |
| orderItemId | varchar | 商品item 亚马逊子订单项的订单号 |
| imageUrl | varchar | 产品图片，根据解析后的SKU获取，来自于PMS系统 |
| sellerSku | varchar | 平台SKU编码 |
| asin | varchar | asin |
| quantityOrdered | int | 数量 |
| itemPrice | decimal | 订单商品的售价。 |



 **备注** 

- 更多返回错误代码请看首页的错误代码描述