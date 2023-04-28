# listing日志-mjf

> 作者：1571221458@qq.com

## 简要描述

- 分页接口

## 请求URL
- `/listing/log/page `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|size |否  |int |每页大小   |
|current |否  |int | 当前第几条数据开始查询    |
|createUser|否|long|操作人id|
|updateType|否|string|更新类型|
|operationType|否|string|操作类型|
|relationId|是|long|关联id|

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "123445475",
                "createUser": null,
                "createDept": null,
                "createTime": "2021-01-12 14:36:14",
                "updateUser": null,
                "updateTime": null,
                "status": null,
                "isDeleted": 0,
                "relationId": 123,
                "updateType": 321,
                "operationType": 2131,
                "executeStatus": 23213,
                "content": "213",
                "resultMsg": "3213",
                "createUserName": null
            }
        ],
        "total": 1,
        "size": 10,
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
|id |long   |主键id  |
|updateType |string   |更新类型  |
|operationType |string   |操作类型  |
|executeStatus |string   |执行状态  |
|resultMsg |string   |报错信息  |
|createUserName |string   |操作人  |
|createTime |dateime   |操作时间  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述