# amazon订单详情

> 作者：xiongxianxing

**简要描述：** 

- 平台订单详情

**请求URL：** 
- ` /oms/amplatorder/detail?id=3`
  
**请求方式：**
- GET 

**请求示例：** 
```
http://192.168.114.172:8181/amplatorder/detail?id=3
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|id |int   |主键|是|
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
| platOrderId | varchar | 亚马逊平台订单号 |
| isFBA | varchar | FBA订单 |
| platOrderStatus | String | 订单状态:pending待付款 ,unshiped,待发货shipped已发货,cancelled取消 |
| omOrderStatus | String | OMS订单状态|
| 订单来源 | 写死 | 线上订单 |
| 交易号 | varchar | 亚马逊为空 |
| paymentType | varchar | 付款方式 |
| paymentAmount | decimal | 买家实付金额  |
| orderTotal | decimal | 订单总金额,节点OrderTotal.Amount |
| platformTradeAmount | decimal | 平台交易费  按照订单总金额15%计算     说明：亚马逊的佣金是按照产品类别来区分的，但是OMS统一确认按照15%结算 |
| freightChargesAmount | decimal | 客付运费 |
| promotionDiscountTotal | decimal | 卖家优惠金额 |
| sellerIncomeAmount | decimal | 卖家实收金额（除税）=买家实付金额-tax -平台交易费 |
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
| taxAmount | decimal | 总税费 |
| 调整金额 | decimal | 亚马逊默认0 |
| shipmentServiceLevelCategory | varchar | 订单的配送服务级别分类 Standard 标准/Expedited 加急 |
| shippingAddressName | varchar | 收货人姓名 |
| shippingAddressCountry | varchar | 国家全称 |
| shippingAddressCountryCode | varchar | 配送至国家code |
| shippingAddressPostalCode | varchar | 邮编 |
| shippingAddressPhone | varchar | 电话 |
| shippingAddressStateOrRegion | varchar | 省/州 |
| shippingAddressCity | varchar | 市 |
| shippingAddressDistrict | varchar | 区 |
| shippingAddressLine1 | varchar | 街道地址1 |
| shippingAddressLine2 | varchar | 街道地址2 |
| 物流商 | varchar |默认为空 |
| trackingNumber | varchar | 跟踪号 |
| shipmentServiceLevelCategory | varchar | 订单的配送服务级别分类 Standard 标准/Expedited 加急 |
| earliestShipDate | datetime | 最早发货时间，即可标记的最早时间,承诺的订单发货时间范围的第一天,节点:EarliestShipDate |
| latestShipDate | datetime | 最晚发货时间,即可标记的最晚时间，承诺的订单发货时间范围的最后一天,节点：LatestShipDate |
| orderTime | datetime | 付款时间，可以理解为授权可发货时间，即订单变化为unshipped状态的时间，即节点的LastUpdateDate |
| firstGrabDate | datetime | 首次抓单时间(oms生成) |
| omsMarkDate | datetime | oms标记时间(oms生成) |
| purchaseDate | datetime | 订单创建时间 |
| deliverDate | datetime | 已发货时间,即订单为shipped状态的时间，即节点的LastUpdateDate |
 **返回参数说明goods** 

|参数名|类型|说明|
|:---- |:---|:----- |
| orderItemId | varchar | 商品item 亚马逊子订单项的订单号 |
| imageUrl | varchar | 产品图片，根据解析后的SKU获取，来自于PMS系统 |
| sellerSku | varchar | 产品id，平台sku编码 |
| asin | varchar | asin |
| quantityOrdered | int | 数量 |
| itemPrice | decimal | 订单商品的售价。 |



 **备注** 

- 更多返回错误代码请看首页的错误代码描述