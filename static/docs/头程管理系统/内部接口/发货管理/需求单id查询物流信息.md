# 需求单id查询物流信息

> 作者：2318309077

## 简要描述

- 需求单id查询物流详情

## 请求URL
- ` http://{网关}/logisticsInfo/mIdDetail `
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |string |需求单id   |



## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|pId |String  |计划单id |
|mId |String   |需求单id |
|channelCode |String   |渠道代码  |
|providerCode|String   |物流商编码 |
|isCabinet |String   |是否整柜 字典(ftms_dict_cabinet)  |
|isContainTax |int   | 是否包税 1:是 2:否 |
|isVat |int   |是否自主VAT 1:是 2:否 |
|isPayTax |int   |  关税预付 1:是 2:否|
|transportType |int   |  头程运输方式（ftms_order_transport_type）|
|tailTransportType |int   | 尾程运输方式（ftms_order_transport_type）|
|shipCompany|String   |船司 |
|taxNumber|String   |税号 |
|shipProvider|String   |实际承运商|
|isVpa|int   |是否VPA 1:是 2:否 |