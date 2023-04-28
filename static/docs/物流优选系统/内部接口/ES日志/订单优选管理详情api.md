# 订单优选管理详情api

> 作者：luobinbin

## 简要描述

- 订单优选管理详情

## 请求URL
- ` http://{网关}/ctms-optimize/channelESLog/detail `
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|referenceNumber |是  |String |订单号   |
## 返回示例

```
{
history:[{}]
,optimizeDocument:{},
optimizeDocumentList:[]
}

```

## 返回参数说明
##history明细
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|requestType |Integer   |请求方1：OMS 2：LMS  |
|request |String   |OMS 原始请求报文 |
|response |String   |返回报文 |
|createTime |date   |请求时间 |
|finishTime |date   |完成时间 |

##optimizeDocument

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|tenantId |String   |租户id |
|platformCode  |string |平台代码    |
|referenceNumber |String   |OMS订单号 |
|onlineServiceName |String   |`NEW`线上服务名（编码） |
|onlineServiceNameCn |String   |`NEW`线上服务中文名 |
|storeCode |String   |店铺编码 |
|storeName |String   |店铺名称 |
|logisticsProperty|list&lt;String>|物流属性|
|virtualChannel |String   |虚拟仓标识 1.是  2,否 |
|paidCost|Double|总运费|
|startShipmentCode |String   |发货仓库编码 |
|receiver |String   |收件人信息 json |
|parcel |String   |包裹明细json |
|logistics |String   |渠道规则json |
|parcel |String   |包裹明细json |
|successChannels |list   |可用渠道 |
|failedChannels |list   |不可用渠道 |
## 收件人 receiver
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|name |String   |收件人名称 |
|countryCode |String   |国家简码 |
|province |String   |省 |
|city |String   |城市 |
|postCode |String   |邮编 |
|address |String   |`NEW`收件人地址1 |
|address1 |String   |`NEW`收件人地址2 |
## 包裹明细 parcel
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|totalPrice |Double   |包裹总金额 |
|length |Double   |长 |
|weight |Double   |重量 |
|height |Double   |高度 |
|width |Double   |宽 |
|volume |Double   |体积 |
|parcelNo |String   |包裹号 |
|products |list   |包裹商品 |

## 包裹商品 products
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|sku |String   |sku |
|num |int   |数量 |
|logisticsProperty |list&lt;Int>   |SKU物流属性 |
|freight |Double   |SKU运费 |
|price |Double   |SKU 单件金额 |

## 渠道规则 logistics
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|channelCode |List&lt;String>|指定渠道代码 |
|owmsChannelId |String   |海外仓渠道ID |
|hasTrace |String   | 是否有妥投轨迹 true有，alse无|
|sortType |Integer   | 排序策略1: 按物流部制定规则综合排序2: 按运费降序排序 |
|tenantId |String   |租户id |

## 可用渠道 successChannels
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|channelCode |String   |渠道代码 |
|channelName |String   |渠道名称 |
|priceBO |object|计费结果 |

## 可用渠道 计费结果 priceBO
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|cost |double|渠道代码 |
|additionCost |double|附加费总和 |
|discount |double|折扣 |
|tax |double|关税 |
|priceDetails |list|费用版本|

## 费用版本 priceDetails
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|type |String |计费类型|
|version |String|计费版本 |
|zone |String|计费分区 |
|price |double|计费价格 |

## 不可用渠道 failedChannels
|参数名|类型|说明|
|:-----  |:-----|-----                           |
|channelCode |String   |渠道编码|
|channelName |String   |渠道名称|
|illegalReason |String   |不可以原因