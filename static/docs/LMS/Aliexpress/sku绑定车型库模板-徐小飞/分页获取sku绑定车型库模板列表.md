# 分页获取sku绑定车型库模板列表

> 作者：xuxiaofei

## 简要描述

- 分页获取sku绑定车型库模板列表接口

## 请求URL
- ` /carAttr/sku/list `
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|templateName     |否  |string | 模板名称    |
|productSku     |否  |string | 产品sku（多个用空格分隔）    |
|createUser |否  |int | 创建人    |
|createTimeStart |否  |string | 创建时间开始    |
|createTimeEnd |否  |string | 创建时间结束    |
|current  |是  |number | 当前页	   |
|size  |是  |number | 每页大小	   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1364501647289135105",
                "createUser": null,
                "createDept": null,
                "createTime": "2021-02-24 17:05:19",
                "updateUser": null,
                "updateTime": "2021-02-24 17:36:44",
                "status": 1,
                "isDeleted": 0,
                "productSku": "QS212",
                "templateName": "test3",
                "templateId": "1364420155577892866"
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
|templateName |string   |模板名称  |
|templateId |number   |模板ID  |
|productSku |string   |产品sku  |


## 备注 

- 更多返回错误代码请看首页的错误代码描述