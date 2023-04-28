# 批量优选通知(oms提供给物流)

> 作者：13243718327@163.com

## 简要描述

- 批量优选通知

## 请求URL
- ` http://{gateway}/ctms-optimize/channelESLog/noticeOptimize`
  
## 请求方式
- POST 

## BODY 内容
数组格式

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|packageCode |否  |string |包裹号(对应后端返回 parcelNumber)   |
|omOrderId |是  |string | 订单号(对应后端返回referenceNumber)    |

## 请求示例
[{
    "packageCode":"",
    "omOrderId":"123213"
},
{
    "packageCode":"",
    "omOrderId":"123213"
}]

## 返回示例 

``` 
{
    "code": 400,
    "success": false,
    "data": null,
    "msg": "操作失败",
    "attachedMap": {}
}
```

## 返回参数说明 



## 备注 

- 更多返回错误代码请看首页的错误代码描述