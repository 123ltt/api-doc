# 根据id查询信息

> 作者：yun527292121@163.com

## 简要描述

- 根据id查询信息接口

## 请求URL
- ` 192.168.50.201/api/blade-product/line/selectProductLineById?id=1303234742845530113 `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |long |产品线id   |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1303234742845530113",
        "createUser": "1123598821738675201",
        "createDept": "1123598813738675201",
        "createTime": "2020-09-08 15:32:30",
        "updateUser": "1123598821738675201",
        "updateTime": "2020-09-08 15:32:30",
        "status": 1,
        "isDeleted": 0,
        "lineName": "家具",
        "categoryIdList": "1302052101832163329,1302052101832163329,1302052309995470849",
        "categoryList": "美妆护肤,面部护理,爽肤水",
        "lineStatus": 1,
        "addName": "flb",
        "addCreateTime": "2020-09-08 16:37:17",
        "description": "新增一条产品线测试数据"
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
|lineStatus |int   |状态(1有效,2失效) |
|createUser |string   |添加人 |
|createTime |datetime   |添加时间 |
|description |string   |描述 |

## 备注 

-