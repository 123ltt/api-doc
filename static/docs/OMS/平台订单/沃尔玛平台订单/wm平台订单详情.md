# wm平台订单详情

> 作者：lijinghua@zehui.com

**简要描述：** 

- 平台订单详情

**AUTH：** 
ZWX

**请求URL：** 
- ` /oms/walmart/detail?purchaseOrderId=7811034171456```
  
**请求方式：**
- GET 

**请求示例：** 
```
http://localhost:8181/walmart/detail?purchaseOrderId=7811034171456```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|purchaseOrderId |varchar   |平台订单号|是|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1382232230531936257",
        "purchaseOrderId": "7811034171456",
        "customerOrderId": "3732132853673",
        "omOrderId": "WM2104141559000001",
        "customerEmailId": "24C903C2FBDA48A587BF832831DB3320@relay.walmart.com",
        "phone": "7733949361",
        "methodCode": "Value",
        "name": "Tanesha Joyner",
        "address1": "5485 Apple Blossom Dr",
        "address2": "",
        "orderDate": "2021-04-13 06:39:32",
        "estimatedDeliveryDate": "2021-04-23 03:00:00",
        "estimatedShipDate": "2021-04-14 12:00:00",
        "city": "Memphis",
        "state": "TN",
        "postalCode": "38115",
        "country": "USA",
        "addressType": "RESIDENTIAL",
        "shipNode": "SellerFulfilled",
        "pushed": 0,
        "markStatus": 0,
        "orderStatus": null,
        "omsMarkDate": null,
        "sellerMainId": null,
        "storeCode": "walmart_US_003d",
        "siteCode": "US",
        "orderType": null,
        "trackingNumber": "420381159200190279637800703298",
        "firstGrabDate": null,
        "platformTrade": null,
        "searchType": null,
        "searchContent": null,
        "searchContentList": null,
        "orderDateStart": null,
        "orderDateEnd": null,
        "firstGrabDateStart": null,
        "firstGrabDateEnd": null,
        "storeCodes": null,
        "storeName": "Topwoner",
        "companyId": "",
        "tenantId": "000000",
		"shippingProgramType" : "test_shipping_program_type",
        "goods": [
            {
                "id": "1382232230779400193",
                "purchaseOrderId": "7811034171456",
                "customerOrderId": "3732132853673",
                "sku": "GWH-20210223002-01",
                "productName": "Automotive Car Windshield Repair Kit Cracked Glass Repair To Fix Auto Glass Windshield Crack Chip Crack Bulll's-Eyes and Stars",
                "itemPrice": "6.9900",
                "itemPriceCurrency": "USD",
                "shipping": "0.5000",
                "shippingCurrency": "USD",
                "tax": "0.8000",
                "taxCurrency": "USD",
                "lineNumber": 1,
                "quantity": 1,
				"trackingNumber":"1213213",
                "lineStatus": "acknowledged"
            }
        ],
        "omOrderStatus": null,
        "sourceOrderId": null,
        "orderAmount": null,
        "freightChargesAmount": null,
        "taxAmount": null
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:---- |:---|:----- |
| purchaseOrderId | varchar | 平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| orderStatus | String | 订单状态:created待确认 ,acknowledged待发货,shipped已发货,delivered已完成,cancelled已取消 ,unknow未知 |
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
| ifWFS | int | 是否WFS 1是 0否|
| customerOrderId | varchar | 交易号|
| platformTrade | BigDecimal | 平台交易费|
| orderAmount | BigDecimal | 订单总金额|
| buyerActuallyPayAmount | BigDecimal | 买家实付金额|
| sellerActuallyPayInAmount | BigDecimal | 卖家实收运费|
| freightChargesAmount | BigDecimal | 客付运费|
| taxAmount | BigDecimal | 税费|
| name | varchar | 收件人|
| country | varchar | 国家|
| address_type | varchar | 地址类型|
| postal_code | varchar | 邮编|
| phone | varchar | 手机|
| customerEmailId | varchar | 邮箱|
| estimatedDeliveryDate | date | 预计送达时间|
| estimatedShipDate | date | 预计发货时间|
| methodCode | varchar | 运输方式|
| carrier | varchar | 物流商|
| salesAmount | varchar | 销售金额|
| orderDate | date | 订单创建时间|
| platLastUpdateTime | date | 最后更新时间 |
| firstGrabDate | date | 抓单时间|
| omsMarkDate | date | 标记时间|
| statusDate | date | 平台订单最后更新时间|
| trackingNumber | varchar | 跟踪号|
| state | varchar | 州、邦|
| city | varchar | 市|
| address1 | varchar | 地址1|
| address2 | varchar | 地址2|
| shippingProgramType | varchar | 客选物流|
| goods | list | 订单商品|
|└ productName | varchar | 商品名称|
|└ lineNumber | varchar | itImId|
|└ sku | varchar | 在线sku|
|└ trackingNumber | varchar | 跟踪号|
|└ quantity | int | 数量|
|└ itemPrice | int | 单价（不含税）|
|└ tax | bigdecimal | 税费|
|└ productImgUrl | int | 图片url|
|└ itemPriceTax | bigdecimal | 单价（含税）|
|└ saleAmount | bigdecimal | 销售金额|



 **备注** 

- 更多返回错误代码请看首页的错误代码描述