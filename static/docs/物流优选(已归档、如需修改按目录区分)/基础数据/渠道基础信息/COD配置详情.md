# COD配置详情

> 作者：1254837494@qq.com

## 简要描述

- COD配置详情接口

## 请求URL
- `http://dev-gateway.zehui.local/tms-base/channelCod/detail`
  
## 请求方式
- POST

## 参数

|参数名|必选|类型|说明|
|:-----  |:-----|-----                  |
|channelId |是|Long   |渠道id(**NEW**)|


## 返回参数说明

|参数名|类型|说明|备注
|:-----  |:-----|-----                  |
|channelId|Long|渠道id|无|
|insuranceService |Integer   |保险服务 1.投保  2.不投保| (状态枚举值调整)(**NEW**)|
|insurancePrice |BigDecimal    |保险金额|无 |
|insuranceCurrency|String    |保险币种| 无|
|receivePayment |Integer    |代收款服务  1. 是  2. 否| 无|
|receivePaymentPrice |BigDecimal    |代收货款金额| 无|
|receivePaymentCurrency|String   |代收货款币种| 无|
|insuranceType |Integer   |保价类型 1.保价  2.不保价| 无(**NEW**)|
|insuranceRate |BigDecimal    |赔付比率|无(**NEW**) |

## 备注 

- 更多返回错误代码请看首页的错误代码描述