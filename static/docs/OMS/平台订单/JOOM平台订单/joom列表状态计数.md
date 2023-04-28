# joom列表状态计数

> 作者：chenpan

## 简要描述

- joom列表状态计数

## 请求URL
- ` /joom/countStatus `
  
## 请求方式
- POST 
## 请求示例:
```{
    "data": {
       "platOrderStatusType":"SHIPPED"
    },
    "query": {
        "current":1,
        "size":100
    }
}
```
## 参数
```
|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|createdAtStart |date   |创建时间开始|否|
|createdAtEnd |date   |创建时间结束|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|storeNameListStr |String   |店铺编号列表|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
|searchType |Integer   |搜索类型:1-平台单号, 2-OMS单号, 3-在线SKU, 4-跟踪号, 5-收件人姓名|否|
|searchContent |String   |搜索内容|否|
|platOrderStatusType |String   |平台订单状态类型: REQUIRE_REVIEW: 审核中, APPROVED: 待发货,SHIPPED:已发货, REFUNDED: 已取消, MARK_FAILED: 标记失败 |否|
|descs|string |排序 
|ascs| string |排序
```
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "total": 11 (全部),
        "require_review": 0 (审核中),
        "approved": 0(待发货),
        "shipped": 9 (已发货),
        "returned": 0(已退款,已取消)
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a832c41634547592171100310712"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述