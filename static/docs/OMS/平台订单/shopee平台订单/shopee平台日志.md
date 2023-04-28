# shopee平台日志

> 作者：fanglongbin

## 简要描述

- 用户注册接口

## 请求URL
- ` /SpHis/page`
  
## 请求方式
- POST 

## 参数
``` 
{
    "platOrderId": "201026B4UAXVQM",
    "current": 1,
    "size": 1
}
``` 


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "platOrderId": "201026B4UAXVQM",
                "logger": "GRAB",
                "msgBrief": "抓单",
                "msgDetail": "成功",
                "stacktrace": "20210224152330773_1364476029262913538",
                "createUserAccount": "oms-xxljob-panyun",
                "tenantId": "000000"
            }
        ],
        "total": 1,
        "size": 1,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |主键id  |
|msgBrief |string   |操作属性 |
|msgDetail |string   |描述  |
|createUserAccount |string   | 用户id |
|createTime |date   | 创建时间 |

## 备注 

-