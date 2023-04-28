# listing负责人订单包裹状态统计

> 作者：chenpan

## 简要描述

- listing负责人订单包裹状态统计

## 请求URL
- `/sendTips/get `
  
## 请求方式
- get 
## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": {
        "isSuperior": true,(是否经理)
        "isOverTimeForSeller": true,(true时,销售是否有超时订单)
        "overTimeStatusVO": {
            "abnormalOrder": 23133,(异常订单)
            "returnedOrder": 14,(已退件订单)
            "channelAnomalyPackage": 127,(渠道异常包裹)
            "reviewedPackage": 9712,(待审核包裹)
            "interceptionPackage": null,(拦截包裹)
            "pushFailedPackage": 178,(推送失败包裹)
            "outOfStockPackage": 276,(缺货包裹)
            "returnedPackage": 14(已退件包裹)
        }
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a832c41641523020798103312624"
    }
}
```