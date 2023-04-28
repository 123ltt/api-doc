# 根据id查询安全审核信息

> 作者：yun527292121@163.com

## 简要描述

- 根据id查询安全审核信息

## 请求URL
- ` 192.168.50.201/api/blade-product/safety/selectSafetyAuditById?id=1307891461462691842 `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |bigint |安全审核id   |


## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "id": "1307891461462691842",
        "createUser": "1123598821738675201",
        "createDept": "1123598813738675201",
        "createTime": "2020-09-21 11:56:39",
        "updateUser": "1123598821738675201",
        "updateTime": "2020-09-21 15:24:03",
        "status": 1,
        "isDeleted": 0,
        "safetyAuditName": "flb",
        "categoryIdList": 
		"1306417738222669825,
		1306417773396103170,
		1306418242029883393,
		1306424350454845441",
        "categoryList": "3C,电脑,体机,家用电脑",
        "safeStatus": 2,
        "description": "修改测试flb"
    },
    "msg": "操作成功"
}

```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |bigint   |安全审核id |
|safetyAuditName |string   |安全审核人  |
|categoryIdList |string   |关联类目id列表 |
|categoryList |string   |关联类目名称列表 |
|safeStatus |int   |状态(1有效,2失效)  |
|createUser |string   |添加人 |
|createTime |datetime   |添加时间 |
|description |string   |描述 |
## 备注 

-