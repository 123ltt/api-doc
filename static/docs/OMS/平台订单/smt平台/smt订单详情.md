# smt订单详情

> 作者：wuxin

**简要描述：** 

- 平台订单详情

**AUTH：** 
ZWX

**请求URL：** 
- ` /oms/smplatOrdermain/detail?id=3`
  
**请求方式：**
- GET 

**请求示例：** 
```
http://192.168.114.172:8181/amplatorder/detail?platOrderId=3
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|platOrderId |varchar   |主键|是|
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
                "shippingPriceTotal": null,
				"adjustmentAmount": 0
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
| orderType | int | 订单类型 |
| orderTypeName | String | 订单类型描述 |
| transactionId | varchar | 交易号 |
| paymentType | varchar | 付款方式 |
| paymentAmount | decimal | 买家实付金额  |
| orderAmount | decimal | 订单总金额,节点OrderTotal.Amount |
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
| adjustmentAmount | decimal | 调整金额 |
| shipmentServiceLevelCategory | varchar | 订单的配送服务级别分类 Standard 标准/Expedited 加急 |
| contactPerson | varchar | 收货人姓名 |
| countryName | varchar | 国家全称 |
| countryCode | varchar | 配送至国家code |
| zip | varchar | 邮编 |
| phoneNumber | varchar | 电话 |
| mobileNo | varchar | 电话 |

| province | varchar | 省/州 |
| city | varchar | 市 |
| detailAddress | varchar | 详细街道地址 |
| address1 | varchar | 街道地址1 |
| address2 | varchar | 街道地址2 |
| taxNumber | varchar | 税号 |
| 物流商 | varchar |默认为空 |
| trackingNumber1 | varchar | 跟踪号1 |
| trackingNumber2 | varchar | 跟踪号2 |
| guestChooseFreight | varchar | 客选物流 |
| logisticsChannel | varchar | 物流渠道 |
| payTime | datetime | 付款时间，可以理解为授权可发货时间，即订单变化为unshipped状态的时间，即节点的LastUpdateDate |
| firstGrabDate | datetime | 首次抓单时间(oms生成) |
| omsMarkDate | datetime | oms标记时间(oms生成) |
| purchaseDate | datetime | 订单创建时间 |
| deliverDate | datetime | 实际发货时间 |
| lastUpdateDate | datetime | 订单最后更新时机 |
| goods | list | 订单商品|
|└ productName | varchar | 商品名称|
|└ productId | varchar | itImId|
|└ sellerSku | varchar | 在线sku|
|└ productCount | int | 数量|
|└ productUnitPrice | int | 单价|
|└ productImgUrl | int | 图片url|

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