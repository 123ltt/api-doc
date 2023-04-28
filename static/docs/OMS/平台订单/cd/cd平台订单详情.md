# cd平台订单详情

> 作者：chenpan

**简要描述：** 

- 平台订单详情

**AUTH：**
 ZWX

**请求URL：** 
- ` /oms/cdPlatOrdermain/detail`
  
**请求方式：**
- GET 

**请求示例：** 
```
platOrderId: 8140971330147556
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|creationDateStart |date   |订单创建时间开始|否|
|creationDateEnd |date   |订单创建时间结束|否|
|storeName |String  |店铺名|否|
|shippingType |String  |发货类型|否|
|orderType |int  |订单类型|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |"搜索类型:1-平台单号，2-OMS单号,3-在线SKU，4-跟踪号，5-收件人姓名"|
|searchContent |String   |搜索内容|否|

 **返回示例**
``` {
    "code": 200,
    "success": true,
    "data": {
        "id": "1472868130965753858",
        "platOrderId": "211205204659GAO",
        "omOrderId": "",
        "orderType": 0,
        "platStatus": "Shipped",
        "shippingType": 0,
        "customerId": "81a2f0a5604164e0ecf4be7d83b8e2aa",
        "shippingCode": "FST",
        "storeCode": "cdiscount_082N",
        "totalAmount": "27.7400",
        "shippingFee": "0.0000",
        "shippingProvider": "",
        "trackingNumber": "",
        "country": "FR",
        "city": "BRUNOY",
        "zipCode": "91800",
        "firstName": "DANIEL",
        "lastName": "CHARIGNON",
        "receiveFullName": "",
        "address": "BRUNOY 8 AVENUE VICTOR HUGO",
        "phone": "0687969884",
        "pushed": 3,
        "creationDate": "2021-12-06 04:46:25",
        "markStatus": 0,
        "omsMarkDate": null,
        "tenantId": "000000",
        "companyId": "",
        "createTime": "2021-12-20 17:55:01",
        "createUser": 0,
        "createDept": 0,
        "updateTime": "2021-12-20 17:56:18",
        "updateUser": 0,
        "status": 0,
        "isDeleted": 0,
        "shippingDateMax": "2021-12-22 08:00:00",
        "shippingDateMin": "2021-12-17 08:00:00",
        "remark": null,
        "warehouseCode": null,
        "promisedAmount": "4.1600",
        "goods": [
            {
                "id": "1472868131179663361",
                "platOrderId": "211205204659GAO",
                "storeCode": "cdiscount_082N",
                "productId": "OUT7653868981634",
                "productImgUrl": "",
                "sku": "UB0817A-1",
                "productName": "",
                "productPrice": "27.7400",
                "productCondition": "New",
                "acceptationState": "ShippedBySeller",
                "quantity": 2,
                "mainSellerId": 0,
                "createTime": "2021-12-20 17:55:01",
                "createUser": 0,
                "createDept": 0,
                "updateTime": "2021-12-20 17:55:02",
                "updateUser": 0,
                "status": 0,
                "isDeleted": 0,
                "tenantId": "000000",
                "unitShippingCharges": "0.0000"
            }
        ],
        "omOrderStatus": null,
        "ifMultiPkg": null,
        "orderTypeName": "线上订单",
        "channelCode": null,
        "respJson": null,
        "searchType": null,
        "searchContent": null,
        "searchContentList": null,
        "storeName": "QianPu",
        "storeCodes": null,
        "sortField": null,
        "creationDateStart": null,
        "creationDateEnd": null,
        "firstGrabDateStart": null,
        "firstGrabDateEnd": null,
        "deliverDate": null,
        "countryName": null
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872951640050692574102912084"
    }
}

```
 **返回参数说明** 

|参数名|类型|说明|
|:---- |:---|:----- |
| platOrderId | varchar | 速卖通平台订单号 |
| omOrderId | varchar | OMS订单号(oms生成) |
| platStatus | String | 订单状态:pending待付款 ,unshiped,待发货shipped已发货,cancelled取消 |
| omOrderStatus | String | OM订单状态|
| storeName | varchar | 店铺名称、销售账号 |
| storeCode | varchar | 店铺编号 |
| orderType | int | 订单类型(0线上订单,1手工订单)|
| orderTypeName | varchar | 订单类型名称|
| trackingNumber | varchar | 跟踪号|
| totalAmount | varchar | 订单总金额|
| shippingFee | BigDecimal | 客付运费|
| deliverDate | date | 发货时间|
| omsMarkDate | date | 标记时间|
| receiveFullName | varchar | 收件人|
| country | varchar | 国家地区|
| countryName | varchar | 国家全称|
| zipCode | varchar | 邮编|
| phone | varchar | 手机|
| phone | varchar | 电话|
| province | varchar | 省|
| city | varchar | 市|
| street | varchar | 街道|
| address | varchar | 地址1|
| shippingDateMax | varchar | 最早发货时间|
| shippingDateMin | varchar | 最晚发货时间|
| platTradeAmount | varchar | 平台交易费|
| shippingProvider | varchar | 物流渠道|
| shippingCode | varchar | 物流方式|
| payAmount | bigdecimal | 买家实付|
| sellerIncomeAmount | bigdecimal | 卖家实收金额|
| taxAmount | bigdecimal | 总税费|
| accFreightAmount | bigdecimal | 卖家实收运费|
| deliverDate | date | 实际发货时间|
|overTimeLeft| date | 最后发货日期
| goods | list | 订单商品|
|└ productName | varchar | 商品名称|
|└ productId | varchar | itImId|
|└ sku | varchar | 在线sku|
|└ quantity | int | 数量|
|└ productPrice | int | 单价|
|└ productImgUrl | int | 图片url|
| updateTime | date | 抓单更新时间|
| createTime | date | 第一次抓单时间|
| creationDate | date | 平台订单创建时间|
| lastUpdateDate | date | 平台订单最后更新时间|







 **备注** 

- 更多返回错误代码请看首页的错误代码描述