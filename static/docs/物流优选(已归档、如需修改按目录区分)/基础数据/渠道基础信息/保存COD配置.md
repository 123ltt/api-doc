# 保存COD配置

> 作者：1254837494@qq.com

## 简要描述

- COD配置保存接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-base/channelCod/save`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|id |是|Long   |主键 编辑必传|
|channelId |是|Long   |渠道id|
|channelCode |是|String   |渠道代码（内）|
|insuranceService |是|Integer    |保险服务 1.投保  2.不投保|(**NEW**)
|insurancePrice |否|BigDecimal    |保险金额|
|insuranceCurrency |否|String    |保险币种|
|receivePayment |否|Integer    |代收款服务  1. 是  2. 否|(**NEW**)
|receivePaymentPrice |否|BigDecimal    |代收货款金额|
|receivePaymentCurrency |否|String    |代收货款币种|
|insuranceType |是|Integer    |保价类型 1.保价  2.不保价|(**NEW**)
|insuranceRate |否|BigDecimal    |赔付比率|(**NEW**)


## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|code  |int|状态码  200成功   500失败 |  无  |
|msg  |String|状态描述|        无   |
|data  |T|数据|     无  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述