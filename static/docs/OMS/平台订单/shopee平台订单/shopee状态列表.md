# shopee状态列表

> 作者：fanglongbin

## 简要描述

- shopee状态列表

## 请求URL
- ` /SpMain/countDeliveryStatusTotal `
  
## 请求方式
- POST 

## 参数

``` 
{
    "platformCode": ""，
    "storeCode":"店铺编码"，
    "orderTimeStart":"付款时间开始"，
    "orderTimeEnd":"付款时间结束"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
    "searchType":"搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号"，
    "searchContent":"搜索内容"，
    "orderStatus":"平台订单类型(total全部,UNPAID未到账,READY_TO_SHIP待发货,COMPLETED已发货,IN_CANCEL取消中,CANCELLED已取消,TO_RETURN待退货,MarkFailed标记失败)"
    "orderType":"订单类型:0-线上订单 ,1-手工导单"
    "current": 1,
    "size": 20
}
``` 

## 参数说明

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeName |String   |店铺编号|否|
|orderTimeStart |date   |付款时间开始 2020-1-23 12:21:45|否|
|orderTimeEnd |date   |付款时间结束 2020-1-23 12:21:45|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|searchType |Integer   |搜索类型:1:平台单号 2:OMS单号  3:在线SKU 4:跟踪号|否|
|searchContent |String   |搜索内容|否|
|orderStatus |int   |平台订单类型(total全部,UNPAID未到账,READY_TO_SHIP待发货,COMPLETED已发货,IN_CANCEL取消中,CANCELLED已取消,TO_RETURN待退货,MarkFailed标记失败)|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "CANCELLED": 426,
        "total": 1922,
        "COMPLETED": 1433,
        "TO_RETURN": 1,
        "READY_TO_SHIP": 3,
        "IN_CANCEL": 0,
        "UNPAID": 1,
        "MarkFailed": 0
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|total |int   |全部 |
|UNPAID |int   |未到账  |
|READY_TO_SHIP |int   |待发货 |
|COMPLETED |int   |已发货 |
|IN_CANCEL |int   |取消中  |
|CANCELLED |int   |已取消  |
|TO_RETURN |int   |待退货  |
|MarkFailed |int   |标记失败 |
## 备注 

- 更多返回错误代码请看首页的错误代码描述