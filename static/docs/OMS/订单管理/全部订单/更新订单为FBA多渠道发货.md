# 更新订单为FBA多渠道发货

> 作者：wuxin

## 简要描述

- 更新订单为FBA多渠道发货

## 请求URL
- ` /orderMain/updateToFBAMultiChannelDelivery`
  
## 请求方式
- POST 

## 请求示例 
```
{
	"omOrderId":"AM2108051700000001",
	"fbaMultiChannelOrderId":"AM2108051700000002",
	"fbaMultiChannelStore": "000000|店铺名"
}```


|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|omOrderId |是  |string |oms订单号 |
|fbaMultiChannelOrderId |是  |string |FBA多渠道发货的订单号 |
|fbaMultiChannelStore |否 |string| FBA多渠道发货店铺


## 返回示例 
```
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "成功"
}
```



## 返回参数说明 
|参数|类型|描述|
|:-------|:-------|:-------|
| code | number| 200 |
| success | boolean| true |
| - data |object  | 无 |
| msg | string| 成功 |

## 备注