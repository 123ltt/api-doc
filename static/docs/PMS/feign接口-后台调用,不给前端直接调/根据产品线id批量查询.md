# 根据产品线id批量查询

> 作者：yun527292121@163.com

## 简要描述

- 根据产品线id批量查询

## 请求URL
- `192.168.50.201:8181/api/line/getProductList `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productList |是  |list |产品线id   |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1317054281587294209",
                "createUser": "1310857482650308609",
                "createDept": null,
                "createTime": "2020-10-16 18:46:25",
                "updateUser": null,
                "updateTime": null,
                "status": null,
                "isDeleted": null,
                "lineName": "发的规划",
                "categoryId": null,
                "categoryIdList": "1313660452972707841,1313737488275095553,1313737520277635073,1313737685680013313,1313737579769643009,1313737778533515266",
                "categoryList": "冰箱,洗衣机,智能",
                "lineStatus": 1,
                "addName": "admin",
                "addCreateTime": null,
                "description": null,
                "categoryIdLongList": null,
                "categoryStringList": null
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
|id |bigint   |产品线id |
|lineName |string   |产品线名称  |
|categoryList |string   |关联类目名称列表 |
|lineStatus |int   |状态(1有效,2无效)  |
|addName |string   |添加人 |
|createTime |datetime   |添加时间 |
|description |string   |描述 |

## 备注 

-