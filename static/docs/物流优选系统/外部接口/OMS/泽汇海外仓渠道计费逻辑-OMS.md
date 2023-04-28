# 泽汇海外仓渠道计费逻辑-OMS

> 作者：luobinbin

## 简要描述

- 海外仓渠道计费逻辑
(oms->owms->得到渠道->tms计费)
新开接口目的 是海外仓渠道ID、牛蛙渠道ID、新系统渠道代码都不相同
新系统内部需要针对海外仓的渠道内部映射、同时海外仓渠道优选后续也会迁移到新系统中、迁移完成后直接作废此接口、不用改动影响到国内仓的优选计费逻辑

## API引入POM
        &lt;dependency>
             &lt;groupId>com.zhkj.tms&lt;/groupId>
            &lt;artifactId>ctms-optimize-api&lt;/artifactId>
            &lt;version>1.9.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
feign接口: com.zhkj.optimize.feign.IOmsOptimizeFeign#owmsChannelCharge
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |string |客户参考号 OMS订单号【原订单号:orderCode】|
|tenantId |是  |string | 租户ID   【新增】 |
|platformCode|是|string|平台代码【平台简称】|
|orderType     |否  |string | 平台订单类型(A+、EPC、other)【新增】 |
|paidCost     |否  |BigDecimal | 客付运费 订单总运费 【原订单运费:orderFreight】|
|onlineServiceName     |否  |string | 线上服务名(客选物流)|
|logisticsProperty      |是  |list&lt;Long> | 包裹物流属性   【原包裹物流属性分类:logisticsClassification】 |
|parcel      |是  |ParcelDTO | 包裹信息  【新增】  |
|sender|是|SenderDTO|发件人信息 【新增】|
|receiver|是|ReceiverDTO|收件人信息 【新增】 |
|seller|是|SellerDTO|卖家信息 【新增】|
|logistics|否|OwmsLogisticsDTO|指定物流信息|


指定Logistics相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|owmsChannelId     |是  |string | 泽汇海外仓渠道ID    |
|channelTypes     |否  |list | 指定渠道类型 0.快递 1.挂号 2.平邮，可以传多个，不传默认筛选全部类型【原渠道类型：channelType】  |
|sortType     |否  |int | 返回渠道排序策略 （1:综合 2: 运费）    |

卖家SellerDTO相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode     |是  |string | 店铺代码   【原店铺简码：account】 |
|storeName     |是  |string | 店铺名称   【新增】 |
|siteCode      |否  |string | 站点代码   【新增】 |


收件人Receiver相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name|是|string|收件人名称|
|country|是|string|收件人国家二字简码|
|province|否|string|收件人省/州|
|city|否|string|收件人城市|
|postCode|否|string|收件人邮编(除了lazada平台 其他的必填)|


包裹ParcelDTO参数说明

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|parcelNo|否|long|包裹单号  【原包裹号：packageCode】 |
|weight|是|BigDecimal|包裹重量 kg  |
|length|是|BigDecimal|包裹长 cm|
|width|是|BigDecimal|包裹宽 cm|
|height|是|BigDecimal|包裹高 cm|
|volume|是|BigDecimal|包裹体积  cm^3|
|products|是|List&lt;ProductDTO>|商品信息  |
|totalPrice|是|BigDecimal|包裹总金额|

商品Product参数说明

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sku|是|string|SKU编码 |
|num|是|int|SKU数量 |
|logisticsProperty|是|List&lt;Long>|SKU物流属性  【原SKU属性：logisticsClassification】|
|freight|是|BigDecimal|SKU运费|
|price|是|BigDecimal|SKU单件金额 【原商品单价金额】|

发件人Sender信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name|否|string|发件人名称【新增 非必填】|
|countryCode|是|string|发件国家简码 【新增 必填】|
|province|否|string|发件省/州 【新增 非必填】|
|city|否|string|发件城市 【新增 非必填】|
|address|否|string|发件地址 【新增 非必填】|
|warehouesCode|是|string|发货仓库编码|
|virtualWarehouse|是|boolean|虚拟仓发货标识 true 虚拟仓发货 false 实体仓发货 【原虚拟仓仓库标识 1.是 2.否】|

## 请求示例
``` 
  {
  "referenceNumber": "SP210905225610003e",
  "tenantId": "000000",
  "platformCode": "SP",
  "orderType": null,
  "paidCost": 0.9656,
  "onlineServiceName": "Standard Delivery",
  "logisticsProperty": [
    1
  ],
  "parcel": {
    "parcelNo": null,
    "length": 30,
    "weight": 0.469,
    "height": 10,
    "width": 10,
    "volume": 3000,
    "totalPrice": 13.3789,
    "products": [
    
      {
        "sku": "RPFQ3091M0X",
        "num": 1,
        "logisticsProperty": [
          1
        ],
        "freight": 0.2414,
        "price": 3.3628
      }
    ]
  },
  "sender": {
    "name": "",
    "countryCode": "CN",
    "province": "",
    "city": "",
    "address": "",
    "warehouseCode": "Z20",
    "virtualWarehouse": false
  },
  "receiver": {
    "name": "D**a",
    "countryCode": "MY",
    "province": "Selangor",
    "city": "",
    "postCode": ""
  },
  "seller": {
    "storeCode": "shopee_MY_003e",
    "storeName": "bettergirls.my",
    "siteCode": "MY"
  },
  "logistics": {
    "channelCodes": null,
    "channelTypes": null,
    "sortType": null,
    "owmsChannelId": 486
  }
}
```


## 返回示例 

``` 
  {
    "code":200,
    "success":true,
    "data":[
        {
            "channelCode":"F23-03",
			"externalChannelCode": "LGH"
            "cost":"12.64450000000",
            "timeliness":"",
            "dwgId":339,
            "channelType":0,
			"priceDetail": [{
				"type": 1,
				"version": "BH0001",
				"price":"6.6445"
			
			},
			{
				"type": 2,
				"version": "BH0002",
				"price":"6.0"
			
			}]

        }
    ],
    "msg":null,
    "attachedMap":{
        "traceId":"0a98009f162382632093360861",
        "zhkj-req-id":"20210616145200016_1405055539805786115"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |Integer   |状态码 参考BladeX R 200 业务成功 400 业务异常  500服务器异常|
|channelCode |string   |渠道代码  |
|externalChannelCode |string   |物流商对接编码   |
|dwgId |long   |牛蛙渠道ID  |
|channelType |int   |渠道类型  |
|cost |string   |总运费  |
|details |List&lt;PriceDetail>   |运费详情  |


价格详情参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|type |int   |价格类型  |
|version |string   |价格版本   |
|price |double   |价格  |


## 备注 

- 更多返回错误代码请看首页的错误代码描述