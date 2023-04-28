# 状态分组统计(ES)

> 作者：wangchaolang

## 简要描述

-物流单状态分组统计 查询ES	

## 请求URL
- `http://{网关地址}/tms-forecast/forecast/order/orderEsCount`
  
## 请求方式
- get 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |否  |Strring |平台代码   |
|tenantId |否  |Strring |租户id   |
|channelCode |否  |Strring |渠道代码   |
|startDate |是  |Date | 开始时间    |
|endDate     |是  |Date | 结束时间    |
|dateType     |是  |Date | 时间类型（枚举--forecast_order_time_search） |
|searchType     |否  |Int | 搜索条件 0:物流单 1:平台单号 2:包裹号 3:跟踪号 4:扩展跟踪号 5:OMS订单 6:sku    |
|searchValue |否  |Strring | 搜索内容    |
|type |否  |Strring |状态 10:待申请跟踪号 20:待申请面单 50:订单完成 70:取消中 90:预报异常&lt;br/>轨迹状态 102:接收 103:转运 104:落地 105:签收 106:运输终止|
|providerCode |否  |Strring |物流商编码   |
|countryCode |否  |Strring |收件人国家简码   |
|storeCode |否  |Strring |店铺编码   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "102": 268,
        "103": 184,
        "104": 521,
        "105": 209,
        "90": 97,
        "80": 11388,
        "70": 14,
        "60": 179336,
        "50": 38953,
        "20": 2
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864321637895229220101012048"
    }
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|key |String   |状态类型 |
|value |int   |统计数 |

----------------------------------------------------------------------------------------------------