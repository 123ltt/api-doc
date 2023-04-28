# smt平台订单列表

> 作者：liyaning

**简要描述：** 

- 平台订单列表

**AUTH：**
 ZWX

**请求URL：** 
- ` /oms/smplatOrdermain/page`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "platformCode": "amazon"，
    "storeName":"店铺名称"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1-平台单号，2-OMS单号,3-在线SKU，4-跟踪号"，
    "searchContent":"搜索内容"，
	"orderStatus":"订单状态：PLACE_ORDER_SUCCESS:等待买家付款; IN_CANCEL:买家申请取消; WAIT_SELLER_SEND_GOODS:等待您发货; SELLER_PART_SEND_GOODS:部分发货; WAIT_BUYER_ACCEPT_GOODS:等待买家收货; 					FUND_PROCESSING:买卖家达成一致，资金处理中； IN_ISSUE:含纠纷中的订单; IN_FROZEN:冻结中的订单; WAIT_SELLER_EXAMINE_MONEY:等待您确认金额; RISK_CONTROL:订单处于风控24小时中，从买					家在线支付完成后开始，持续24小时。"
	"orderType":"订单类型:0-线上订单 ,1-手工导单"
    "current": 1,
    "size": 20,
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeName |String  |aavvcc|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |"搜索类型:1-平台单号，2-OMS单号,3-在线SKU，4-跟踪号，5-平台订单状态"|
|searchContent |String   |搜索内容|否|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1427752536757948418",
                "platOrderId": "8136901368135697",
                "storeName": "cn1520295221hydz",
                "storeCode": "aliexpress_00WU",
                "storeCodes": null,
                "searchType": null,
                "searchContent": null,
                "searchContentList": null,
                "omOrderId": "SM2108192205000001",
                "sourceOrderId": "1427752536716005377",
                "buyerSignerFullName": "Sierra Warner",
                "buyerLoginId": "us1171071063ckvl",
                "memo": "",
                "orderStatus": "等待买家收货",
                "orderType": 0,
                "orderTypeName": "线上订单",
                "orderTimeStart": null,
                "orderTimeEnd": null,
                "transactionId": "",
                "paymentType": "WALLET_PAYPAL",
                "currencyCode": "USD",
                "orderAmount": "1024.0000",
                "payAmount": "1024.0000",
                "contactPerson": "Sierra Warner",
                "countryCode": "US",
                "countryName": "美国",
                "zip": "33418",
                "mobileNo": "+1 2073196693",
                "phoneNumber": "",
                "province": "Florida",
                "city": "Riviera beach",
                "address1": "790 Woodbine Way",
                "address2": "Apt 707",
                "taxNumber": "",
                "socialContact": "",
                "ifPushedToOm": 1,
                "purchaseDate": "2021-08-18 05:37:31",
                "lastUpdateDate": "2021-08-23 13:54:18",
                "payTime": "2021-08-19 21:10:33",
                "tradeEndTime": null,
                "refundTime": null,
                "logisticsStatus": "SELLER_SEND_GOODS",
                "logisticsAmount": "225.1800",
                "omsMarkDate": null,
                "firstGrabDate": "2021-08-18 06:01:45",
                "firstGrabDateStart": null,
                "firstGrabDateEnd": null,
                "lastGrabDate": "2021-08-23 16:02:14",
                "deliverDate": "2021-08-23 13:54:16",
                "companyId": "",
                "tenantId": "000000",
                "goods": [
                    {
                        "id": "1429715593485615105",
                        "platOrderId": "8136901368135697",
                        "subOrderId": "8136901368145697",
                        "productId": "4000639598002",
                        "productImgUrl": "http://ae01.alicdn.com/kf/Uee5c8a2fb46b4621b3c95cbff64a646aW.jpg",
                        "sellerSku": "ML0336WM-148",
                        "originalSkuName": null,
                        "skuAffix": "",
                        "productName": "New Summer Long Loose Falling Shoulder Long Sleeve Lapel Plaid Pocket Shirt Women",
                        "productAmount": "153.2000",
                        "escrowFeeRate": "0.08",
                        "productUnitPrice": "7.6600",
                        "productCount": 20,
                        "logisticsAmount": "-1.0000",
                        "tenantId": "000000",
                        "mainSellerId": 0,
                        "tags": "",
                        "tagsName": null
                    },
                    {
                        "id": "1429715593494003713",
                        "platOrderId": "8136901368135697",
                        "subOrderId": "8136901368155697",
                        "productId": "4000639598002",
                        "productImgUrl": "http://ae01.alicdn.com/kf/U5eebb27a1f1d43f299454830a43f1aa6H.jpg",
                        "sellerSku": "ML0336WL-148",
                        "originalSkuName": null,
                        "skuAffix": "",
                        "productName": "New Summer Long Loose Falling Shoulder Long Sleeve Lapel Plaid Pocket Shirt Women",
                        "productAmount": "158.2000",
                        "escrowFeeRate": "0.08",
                        "productUnitPrice": "7.9100",
                        "productCount": 20,
                        "logisticsAmount": "-1.0000",
                        "tenantId": "000000",
                        "mainSellerId": 0,
                        "tags": "",
                        "tagsName": null
                    },
                    {
                        "id": "1429715593498198018",
                        "platOrderId": "8136901368135697",
                        "subOrderId": "8136901368165697",
                        "productId": "4000639598002",
                        "productImgUrl": "http://ae01.alicdn.com/kf/U8cc6b87a98a1452a9ec626ef93193811F.jpg",
                        "sellerSku": "ML0336WXL-148",
                        "originalSkuName": null,
                        "skuAffix": "",
                        "productName": "New Summer Long Loose Falling Shoulder Long Sleeve Lapel Plaid Pocket Shirt Women",
                        "productAmount": "165.6000",
                        "escrowFeeRate": "0.08",
                        "productUnitPrice": "8.2800",
                        "productCount": 20,
                        "logisticsAmount": "-1.0000",
                        "tenantId": "000000",
                        "mainSellerId": 0,
                        "tags": "",
                        "tagsName": null
                    },
                    {
                        "id": "1429715593506586625",
                        "platOrderId": "8136901368135697",
                        "subOrderId": "8136901368175697",
                        "productId": "4000639598002",
                        "productImgUrl": "http://ae01.alicdn.com/kf/Ufb0309e6c5024ff19a9a6645deaefa38S.jpg",
                        "sellerSku": "ML0336BXL-148",
                        "originalSkuName": null,
                        "skuAffix": "",
                        "productName": "New Summer Long Loose Falling Shoulder Long Sleeve Lapel Plaid Pocket Shirt Women",
                        "productAmount": "157.8000",
                        "escrowFeeRate": "0.08",
                        "productUnitPrice": "7.8900",
                        "productCount": 20,
                        "logisticsAmount": "-1.0000",
                        "tenantId": "000000",
                        "mainSellerId": 0,
                        "tags": "",
                        "tagsName": null
                    },
                    {
                        "id": "1429715593510780930",
                        "platOrderId": "8136901368135697",
                        "subOrderId": "8136901368185697",
                        "productId": "4000639598002",
                        "productImgUrl": "http://ae01.alicdn.com/kf/U7df3e0d34fd542309066bfbec883ffd24.jpg",
                        "sellerSku": "ML0336BL-148",
                        "originalSkuName": null,
                        "skuAffix": "",
                        "productName": "New Summer Long Loose Falling Shoulder Long Sleeve Lapel Plaid Pocket Shirt Women",
                        "productAmount": "153.4000",
                        "escrowFeeRate": "0.08",
                        "productUnitPrice": "7.6700",
                        "productCount": 20,
                        "logisticsAmount": "-1.0000",
                        "tenantId": "000000",
                        "mainSellerId": 0,
                        "tags": "",
                        "tagsName": null
                    },
                    {
                        "id": "1429715593514975234",
                        "platOrderId": "8136901368135697",
                        "subOrderId": "8136901368195697",
                        "productId": "4000639598002",
                        "productImgUrl": "http://ae01.alicdn.com/kf/U7eb6c9bc4fb8488c8b525a4cc4d9c230D.jpg",
                        "sellerSku": "ML0336BM-148",
                        "originalSkuName": null,
                        "skuAffix": "",
                        "productName": "New Summer Long Loose Falling Shoulder Long Sleeve Lapel Plaid Pocket Shirt Women",
                        "productAmount": "147.4000",
                        "escrowFeeRate": "0.08",
                        "productUnitPrice": "7.3700",
                        "productCount": 20,
                        "logisticsAmount": "-1.0000",
                        "tenantId": "000000",
                        "mainSellerId": 0,
                        "tags": "",
                        "tagsName": null
                    }
                ],
                "omOrderStatus": "异常订单",
                "paymentAmount": "1024.00",
                "promotionDiscountTotal": "0.00",
                "platDiscountAmount": null,
                "sellerIncomeAmount": "948.84",
                "platformTradeAmount": "75.16",
                "freightChargesAmount": "225.18",
                "taxAmount": "0",
                "trackingNumber1": "282836597060",
                "trackingNumber2": "",
                "guestChooseFreight": "USPS",
                "logisticsChannel": "USPS",
                "markStatus": null,
                "logisticsWarehouseType": "",
                "channelCode": null,
                "overTimeLeft": null,
                "sortField": null,
                "sortType": null
            }
        ],
        "total": 1741,
        "size": 1,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1741
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a832c4162985723526410139932"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:---- |:---|:----- |
| platOrderId | varchar | 速卖通平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| platOrderStatus | String | 订单状态:pending待付款 ,unshiped,待发货shipped已发货,cancelled取消 |
| omOrderStatus | String | OM订单状态|
| storeName | varchar | 店铺名称、销售账号 |
| storeCode | varchar | 店铺编号 |
| sourceOrderId | varchar | 原单号 |
| buyerSignerFullName | varchar | 买家全名 |
| buyerLoginId | varchar | 买家登录id |
| memo | varchar | 买家备注 |
| orderStatus | varchar | 订单状态|
| orderType | int | 订单类型(0线上订单,1手工订单)|
| orderTypeName | varchar | 订单类型名称|
| transactionId | varchar | 交易号|
| paymentType | varchar | 支付金额结算币种,节点|
| orderAmount | varchar | 订单总金额|
| freightChargesAmount | BigDecimal | 客付运费|
| promotionDiscountTotal | BigDecimal | 折扣金额|
| contactPerson | varchar | 收件人|
| countryCode | varchar | 国家地区|
| countryName | varchar | 国家全称|
| zip | varchar | 邮编|
| mobileNo | varchar | 手机|
| phoneNumber | varchar | 电话|
| province | varchar | 省|
| city | varchar | 市|
| detailAddress | varchar | 街道详细地址|
| address1 | varchar | 地址1|
| address2 | varchar | 地址2|
| taxNumber | varchar | 税号|
| socialContact | varchar | 社交账号|
| payTime | date | 付款时间|
| tradeEndTime | date | 订单结束时间|
| refundTime | date | 退款时间|
| logisticsStatus | varchar | 物流状态|
| deliverDate | varchar | 发货时间|
| trackingNumber1 | varchar | 跟踪号1|
| trackingNumber2 | varchar | 跟踪号2|
| goods | list | 订单商品|
|overTimeLeft| date | 最后发货日期
|└ productName | varchar | 商品名称|
|└ productId | varchar | itImId|
|└ sellerSku | varchar | 在线sku|
|└ productCount | int | 数量|
|└ productUnitPrice | int | 单价|
|└ productImgUrl | int | 图片url|









 **备注** 

- 更多返回错误代码请看首页的错误代码描述