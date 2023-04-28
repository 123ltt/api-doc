# 渠道优选计费(OMS)

> 作者：13243718327@163.com

## 简要描述

- OMS渠道优选计费 
OMS->TMS->优选渠道->计费
去掉的字段【仓库集合、发货仓库类型、指定泽汇海外仓渠道ID(新接口调用)】
新增的字段在后面标注新增

## 改动说明
- 2021-11-15 增加 【税金】、【原始币种】、【换算美金时点汇率】
- 2021-11-15 升级maven pom依赖版本
- 2021-09-08 针对合单、七日达、十日达增加客选物流字段customerLogistics
- 2021-09-08  收件人增加详细地址 详细地址1字段
- 2021-09-08 提供ignoreAmountFlag字段 忽略渠道金额限制 亚马逊平台时传了此字段 会忽略金额限制


## API引入POM
        &lt;dependency>
             &lt;groupId>com.zhkj.tms&lt;/groupId>
            &lt;artifactId>ctms-optimize-api&lt;/artifactId>
            &lt;version>3.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
feign接口 com.zhkj.optimize.feign.IOmsOptimizeFeign#channelOptimize


## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |string |客户参考号 OMS订单号【原订单号:orderCode】|
|tenantId |是  |string | 租户ID   【新增】 |
|platformCode|是|string|平台代码【平台简称】|
|orderType     |否  |string | 平台订单类型(A+、EPC、other)【新增】 |
|paidCost     |否  |BigDecimal | 客付运费 订单总运费(未含税) 【美元币种】|
|onlineServiceName     |否  |string | 线上服务名 原逻辑不变|
|customerLogistics     |否  |string | 客选物流 针对合单 七日达、十日达 需要额外传客选物流字段|
|ignoreAmountFlag     |否  |boolean | 是否忽略渠道金额限制 true 忽略 false或空 为不忽略 默认不忽略|
|logisticsProperty      |是  |list&lt;Long> | 包裹物流属性   【原包裹物流属性分类:logisticsClassification】 |
|parcel      |是  |ParcelDTO | 包裹信息  【新增】  |
|sender|是|SenderDTO|发件人信息 【新增】|
|receiver|是|ReceiverDTO|收件人信息 【新增】 |
|seller|是|SellerDTO|卖家信息 【新增】|
|logistics|否|OptimizeLogisticsDTO|指定物流信息 【新增】|
|currency|是|string|`new`原始币种|
|rate|是|string|`new`换算美金时点汇率|


指定Logistics相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|channelCodes     |否  |list | 指定渠道代码   【原指定渠道代码集合】 |
|channelTypes     |否  |list | 指定渠道类型 0.快递 1.挂号 2.平邮，可以传多个，不传默认筛选全部类型【原渠道类型：channelType】  |
|sortType     |否  |int | 返回渠道排序策略 （1:综合 2: 运费）默认不传都是1    |

卖家SellerDTO相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode     |是  |string | 店铺代码   【原店铺简码：account】 |
|storeName     |是  |string | 店铺名称   【新增】 |
|siteCode      |否  |string | 站点代码   【新增】 |


收件人ReceiverDTO相关信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name|是|string|收件人名称  【新增】|
|countryCode|是|string|收件人国家二字简码  【原国家简码】|
|province|否|string|收件人省/州  【原省英文名称】|
|city|否|string|收件人城市   【原城市英文名称】|
|postCode|否|string|收件人邮编(除了lazada、shopee平台 其他的必填)【原邮编】|
|address|否|string|  详细地址   |
|address1|否|string| 详细地址1   |

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
|totalPrice|是|BigDecimal|包裹总金额(未含税)【美元币种】|
|tax|是|BigDecimal| `NEW `税金【美元币种】|

商品Product参数说明

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sku|是|string|SKU编码 |
|num|是|int|SKU数量 |
|logisticsProperty|是|List&lt;Long>|SKU物流属性  【原SKU属性：logisticsClassification】|
|freight|是|BigDecimal|SKU运费(未含税)【美元币种】|
|price|是|BigDecimal|SKU单件金额(未含税)【美元币种】|



发件人SenderDTO信息

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name|否|string|发件人名称【新增 非必填】|
|countryCode|是|string|发件国家简码 【新增 必填】|
|province|否|string|发件省/州 【新增 非必填】|
|city|否|string|发件城市 【新增 非必填】|
|address|否|string|发件地址 【新增 非必填】|
|warehouesCode|是|string|发货仓库编码：warehouse|
|virtualWarehouse|是|boolean|虚拟仓发货标识   true 虚拟仓发货 false 实体仓发货 【原虚拟仓仓库标识 1.是 2.否】|


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

## 返回List&lt;OrderResponse>参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |Integer   |状态码 参考BladeX R 200 业务成功 400 业务异常  500服务器异常|
|logisticsId|string|优选物流单ID 【新增】出库重新计费时使用 如果传了此ID 则会根据上一次对应的报价等进行计费 没有传 则用最新报价计费|
|channelCode |string   |渠道代码  |
|referFlag |Integer   |参考渠道标识  0 或空  可用渠道  1参考渠道 需要销售确认  |
|externalChannelCode |string   |物流商对接编码   |
|upperLimit| boolean | 渠道上限标识 默认返回false true该渠道该国家当日达到上限
|dwgId |long   |牛蛙渠道ID  |
|owmsChannelId |integer   |海外仓发货方式ID  |
|channelType |int   |渠道类型  0.快递 1.挂号 2.平邮 |
|onlineChannel |int   |是否线上渠道 1.是 2.否 |
|cost |BigDecimal   |总运费  |
|zone |string   |计费分区  【新增】|
|tax |BigDecimal   |关税  |
|details |List&lt;PriceDetail>   |运费详情  【新增】|

运费详情PriceDetail参数说明

|参数名|类型|说明|备注|
|:-----  |:-----|-----  |:-----
|type |int   |计费类型  【新增】|  0：基础运费   1：附加费 2:燃油费|
|chargeWeight |BigDecimal   |计费重  【新增】| |
|itemCode |int   |计费项  【新增】| 参见计费项说明
|rate |BigDecimal   |计费汇率 【新增】  ||
|version |string   |价格版本 【新增】  ||
|price |BigDecimal   |最终计费RMB价格  【新增】 | ||

计费项说明

|计费项代码|计费项名称|
|:-----  |:-----|-----  |:-----
|A00001|超规格费|
|A00002|偏远附加费|
|A00003|临时派送附加费|
|A00004|虚拟仓头程费|
|B00001|燃油附加费|
|C00001|头程运费|
|C00002|尾程运费
|C00003|全段收费|
|C00004|出库操作费|
|C00005|活动收费|

## 备注 

- 更多返回错误代码请看首页的错误代码描述