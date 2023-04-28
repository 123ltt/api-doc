# ebay平台状态列表

> 作者：fanglongbin

## 简要描述

- ebay平台状态列表接口

## 请求URL
- ` /ebayMain/countDeliveryStatusTotal `
  
## 请求方式
- POST 

## 参数
``` 
{
    "platformCode": "amazon"，
    "storeCode":"店铺编码"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号"，
    "searchContent":"搜索内容"，
    "orderStatus":"订单类型:0-线上订单 ,1-手工导单"
    "orderType":"PENDING : 未到账,NOT_SHIPPED : 待发货,SHIPPED ：已发货，CANCELING ：取消中，CANCELED ：已取消 ,标记失败 MARK_FAILED"
    "current": 1,
    "size": 20
}
``` 

## 参数说明

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeCode |String[]   |店铺编号|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号|否|
|searchContent |String   |搜索内容|否|
|orderStatus |int   |订单来源(0线上订单,1手工订单)|否|

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "NOT_SHIPPED": 0,
        "total": 1,
        "Shipped": 0,
        "PENDING": 1,
        "Canceled": 0,
        "MarkFailed": 0,
        "Canceling": 0
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|total |int   |全部  |
|PENDING |int   |未到账 |
|NOT_SHIPPED |int   |待发货  |
|Shipped |int   |已发货  |
|Canceling |int   |取消中  |
|Canceled |int   |已取消  |
|MarkFailed |int   |标记失败 |
## 备注 

-