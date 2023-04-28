# ebay平台订单详情

> 作者：fanglongbin

## 简要描述

- ebay平台订单详情接口

## 请求URL
- ` /ebayMain/detail `
  
## 请求方式
- POST

## 参数
/ebayMain/detail

## 参数说明
``` 
{   
    "id":"1353652621154258945"
}
``` 

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1353652621154258945",
        "platOrderId": "02-06134-77966",
        "storeCode": "ebay_DE_0052",
        "omOrderId": "",
        "siteCode": "Germany",
        "buyerName": "Matthew Lin",
        "buyerEmail": "Invalid Request",
        "platOrderStatus": "线上订单",
        "orderStatus": "待发货",
        "orderType": 0,
        "transactionId": "6YV10114FV873130H",
        "sourceOrderId": "",
        "taxNumber": "",
        "shippingServiceSelected": "AU_Regular",
        "paymentMethod": "PayPal",
        "currencyCode": "AUD",
        "total": "30.9900",
        "sellerEmail": "fracesoot@outlook.com",
        "shippingAddressName": "Matthew Lin",
        "shippingAddressCountry": "Australia",
        "shippingAddressCountryCode": "AU",
        "shippingAddressPostalCode": "4211",
        "shippingAddressPhone": "0478297200",
        "shippingAddressStateOrProvince": "QLD",
        "shippingAddressCity": "Highland Park",
        "shippingAddressStreet1": "ebay:b6jft6b",
        "shippingAddressStreet2": "189 Alexander drive",
        "socialContact": "",
        "pushed": 0,
        "earliestShipDate": null,
        "latestShipDate": null,
        "purchaseDate": null,
        "paidTime": "2020-11-26 20:06:57",
        "refundedDate": null,
        "trackingNumber": "",
        "ebayCreateTime": "2020-11-26 20:06:56",
        "lastModifiedTime": "2020-12-09 02:45:43",
        "omsMarkDate": null,
        "firstGrabDate": "2021-01-26 10:26:53",
        "lastGrabDate": "2021-01-26 10:26:53",
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
                "id": "1353892134706782210",
                "platOrderId": "02-06134-77966",
                "imageUrl": "",
                "sku": "AUEO8HW2RI1048G-154",
                "title": "Digital Alarm Clock Large 6.5 LED Wall Desk Alarm Snooze Clock USB Adapter Clock[Green]",
                "skuAffix": "",
                "itemId": "184390431523",
                "itemPrice": "30.9900",
                "quantityPurchased": 1,
                "mainSellerId": 0
            }
        ],
        "updateTime": "2021-01-26 10:26:54",
        "buyerUserId": null,
        "amountPaid": "30.9900",
        "sellerDiscountAmount": "0.0000",
        "paymentAmount": "0.0000",
        "freightChargesAmount": null,
        "tax": "0.0000",
        "adjustmentAmount": "0.0000",
        "platformTradeAmount": null,
        "payPalTransactions": null,
        "logisticsChannel": "",
        "disCountAmount": null,
        "platPreferential": null
    },
    "msg": "操作成功"
}
```

## 返回参数说明 


|参数名|类型|说明|
|:---- |:---|:----- |
| platOrderId | varchar | ebay平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| platOrderId | varchar | ebay平台订单号 |
| platOrderStatus | String | 订单来源 0线上订单,1手工订单  |
| orderStatus | String | PENDING : 未到账,NOT_SHIPPED : 待发货,SHIPPED ：已发货，CANCELING ：取消中，CANCELED ：已取消 |
| omOrderStatus | String | OMS订单状态|
| storeName | varchar | 店铺名称、销售账号 |
| transactionId | varchar | 交易号 |
| total | decimal | 订单总金额,节点OrderTotal.Amount |
| amountPaid | decimal | 买家实付金额  |
| paymentAmount | decimal | 卖家实收金额（除税）=买家实付金额-tax -平台交易费-payPal交易费 |
| platPreferential | decimal | 平台优惠 |
| sellerDiscountAmount | decimal | 卖家优惠金额 |
| adjustmentAmount | decimal | 调整金额 |
| platformTradeAmount | decimal | 平台交易费  (订单总金额-tax) * 0.165计算 |
| tax | decimal | 税费 |
| freightChargesAmount | decimal | 客付运费 |
| payPalTransactions | decimal | payPal交易费 |
| paymentMethod | varchar | 付款方式 |
| sellerEmail | string | 收款账号 |
| disCountAmount | decimal | 总折扣 |
| shippingPriceTotal | decimal | 总运费 |
| shippingAddressName | varchar | 收货人姓名 |
| shippingAddressCountry | varchar | 国家全称 |
| shippingAddressCountryCode | varchar | 配送至国家code |
| shippingAddressPostalCode | varchar | 邮编 |
| shippingAddressPhone | varchar | 电话 |
| shippingAddressStateOrProvince | varchar | 省/州 |
| shippingAddressCity | varchar | 市 |
| shippingAddressDistrict | varchar | 区 |
| shippingAddressStreet1 | varchar | 街道地址1 |
| shippingAddressStreet2 | varchar | 街道地址2 |
| shippingServiceSelected | varchar |客选物流 |
| logisticsChannel | varchar | 物流渠道 |
| trackingNumber | varchar | 跟踪号 |
| paidTime | datetime | 付款时间，可以理解为授权可发货时间，即订单变化为unshipped状态的时间，即节点的LastUpdateDate |
| firstGrabDate | datetime | 首次抓单时间(oms生成) |
| lastModifiedTime | datetime | 平台最后更新时间 |
| omsMarkDate | datetime | oms标记时间(oms生成) |
| ebayCreateTime | datetime | 订单创建时间 |
| deliverDate | datetime | 发货时间 |
 **返回参数说明goods** 

|参数名|类型|说明|
|:---- |:---|:----- |
| item_id | varchar | 商品item 亚马逊子订单项的订单号 |
| imageUrl | varchar | 产品图片，根据解析后的SKU获取，来自于PMS系统 |
| sku | varchar | 在线SKU编码 |
| quantityPurchased | int | 数量 |
| itemPrice | decimal | 销售金额 |
| title | string | 商品名称 |

 **备注** 
单价=销售金额/数量