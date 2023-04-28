# ebay平台订单日志

> 作者：fanglongbin

## 简要描述

- ebay日志接口

## 请求URL
- ` /ebayHis/page`
  
## 请求方式
- POST 

## 参数
``` 
{
    "platOrderId": "111-111-111",
    "current": 1,
    "size": 1
}
``` 
## 参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|platOrderId |string   |平台id |
## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": 1,
                "createUser": "0",
                "createDept": "0",
                "createTime": "2021-01-19 15:43:08",
                "updateUser": "0",
                "updateTime": "2021-01-19 15:43:08",
                "status": 0,
                "isDeleted": 0,
                "platOrderId": "111-111-111",
                "logger": "11",
                "msgBrief": "11",
                "msgDetail": "11",
                "stacktrace": "11",
                "createUserAccount": "11"
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
|:-----  |:-----|-----  |
|id |int   |主键id  |
|logger |string   |操作属性  |
|msg_brief |string   |描述 |
|createUserAccount |string   | 用户id |
|createTime |date   | 创建时间 |
## 备注 

-