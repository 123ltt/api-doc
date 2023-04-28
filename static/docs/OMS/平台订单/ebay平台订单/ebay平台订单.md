# ebay平台订单

> 作者：chenpan

## 简要描述

- ebay平台订单接口

## 请求URL
- ` /ebayMain/page `
  
## 请求方式
- POST 

## 参数
``` 
{
    "platformCode": "amazon"，
    "storeName":"店铺编码"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号"，
    "searchContent":"搜索内容"，
    "orderStatus":"订单类型:0-线上订单 ,1-手工导单"
    "orderType":"PENDING : 未到账,NOT_SHIPPED : 待发货,SHIPPED ：已发货，CANCELING ：取消中，CANCELED ：已取消 ,标记失败 MARK_FAILED"
    "current": 1,
    "size": 20
}
``` 

## 参数说明

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeName |String[]   |店铺编号|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号|否|
|searchContent |String   |搜索内容|否|
|orderStatus |int   |订单来源(0线上订单,1手工订单)|否|
|descs|string |排序 (ebay字段: 创建时间:"create_time",订单总金额:"total",客付物流:"total_actual_shipping_cost")
|ascs| string |排序 (ebay字段: 创建时间:"create_time",订单总金额:"total",客付物流:"total_actual_shipping_cost")
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1353652638078275585",
                "platOrderId": "18-06130-61522",
                "storeCode": "ebay_DE_0052",
                "omOrderId": "",
                "siteCode": "Germany",
                "buyerName": "Bryan Mckinney",
                "buyerEmail": "Invalid Request",
                "platOrderStatus": "线上订单",
                "orderStatus": "待发货",
                "orderType": 0,
                "transactionId": "99893810PU693602E",
                "sourceOrderId": "",
                "taxNumber": "",
                "shippingServiceSelected": "ShippingMethodStandard",
                "paymentMethod": "PayPal",
                "currencyCode": "USD",
                "total": "8.5500",
                "sellerEmail": "fracesoot@outlook.com",
                "shippingAddressName": "Bryan Mckinney",
                "shippingAddressCountry": "United States",
                "shippingAddressCountryCode": "US",
                "shippingAddressPostalCode": "28803-9686",
                "shippingAddressPhone": "8285777389",
                "shippingAddressStateOrProvince": "NC",
                "shippingAddressCity": "Asheville",
                "shippingAddressStreet1": "356 Oakview Park Rd",
                "shippingAddressStreet2": "",
                "socialContact": "",
                "pushed": 0,
                "earliestShipDate": null,
                "latestShipDate": null,
                "purchaseDate": null,
                "paidTime": "2020-11-26 06:57:20",
                "refundedDate": null,
                "trackingNumber": "",
                "ebayCreateTime": "2020-11-26 06:57:20",
                "lastModifiedTime": "2020-12-01 04:34:49",
                "omsMarkDate": null,
                "firstGrabDate": "2021-01-26 10:27:00",
                "lastGrabDate": "2021-01-26 10:27:00",
                "waitDeliverDate": null,
                "deliverDate": null,
                "companyId": "1328887085897093121",
                "omOrderStatus": null,
                "searchType": null,
                "searchContent": null,
                "orderTimeStart": null,
                "orderTimeEnd": null,
                "firstGrabDateStart": null,
                "firstGrabDateEnd": null,
                "storeName": "FINERYSALE",
                "tenantId": "000000",
                "storeCodes": null,
                "searchContentList": null,
                "goodList": [
                    {
                        "id": "1353892161634213890",
                        "platOrderId": "18-06130-61522",
                        "imageUrl": "",
                        "sku": "SJTU9001IR36-1-888",
                        "title": "SAS 29pin Female to SATA 22pin Male Adapter Converter  for SATA Hard Disk Drive ",
                        "skuAffix": "",
                        "itemId": "184523462522",
                        "itemPrice": "7.9900",
                        "quantityPurchased": 1,
                        "mainSellerId": 0,
                        "singleItemTax": null,
                        "singleItemPrice": null,
                        "singleItemPriceNoTax": null,
                        "itemPriceDiscount": null
                    }
                ],
                "updateTime": "2021-01-26 10:27:00",
                "platformTradeAmount": null,
                "paymentAmount": "0.0000",
                "promotionDiscountTotal": null,
                "sellerIncomeAmount": null,
                "freightChargesAmount": null,
                "taxAmount": null,
                "adjustmentAmount": "0.0000",
                "payPalTransactions": null,
                "logisticsChannel": ""
            }
        ],
        "total": 3197,
        "size": 1,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 3197
    },
    "msg": "操作成功"
}
```


## 返回参数说明 

|参数名|类型|说明|
|:---- |:---|:----- |
| id | bigint | 主键id |
| platOrderId | varchar | ebay平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| platOrderStatus | String | 线上订单或者手工订单|
| omOrderStatus | String | OM订单状态|
| storeName | varchar | 店铺名称、销售账号 |
| shippingAddressCountryCode | varchar | 配送至国家code |
| trackingNumber | varchar | 跟踪号 |
| firstGrabDate | datetime | 首次抓单时间(oms生成) |
| paidTime | datetime | 付款时间，可以理解为授权可发货时间，即订单变化为unshipped状态的时间，即节点的LastUpdateDate |
| deliverDate | datetime | 已发货时间,即订单为shipped状态的时间，即节点的LastUpdateDate |
| omsMarkDate | datetime | oms标记时间(oms生成) |
| total | decimal | 订单总金额,节点OrderTotal.Amount |
| disCountAmount | decimal | 折扣金额 |
| currencyCode | varchar | 支付金额结算币种,节点：OrderTotal.CurrencyCode |
| platOrderStatus | varchar | 订单来源 |
| shippingServiceCost | varchar | 运费 |
| orderStatus | varchar | 平台订单状态 |
| buyerUserId | varchar | 买家id |
 **返回参数说明goodList** 

|参数名|类型|说明|
|:---- |:---|:----- |
| item_id | varchar | 商品item 亚马逊子订单项的订单号 |
| imageUrl | varchar | 产品图片，根据解析后的SKU获取，来自于PMS系统 |
| sku | varchar | 平台SKU编码 |
| quantityPurchased | int | 数量 |
| itemPrice | decimal | 订单商品的售价。 |


-