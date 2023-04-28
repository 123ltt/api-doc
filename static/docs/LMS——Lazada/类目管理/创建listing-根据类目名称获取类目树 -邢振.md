# 创建listing-根据类目名称获取类目树 -邢振

> 作者：xingzhen

## 简要描述

- 创建listing-根据类目名称获取类目树 -邢振

## 请求URL
- ` /lazada/category/getCateByName `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeName |是  |string |店铺名称   |
|name |是  |string |类目名称   |
|siteCode |是  |string |站点   |
|listingStatus |是  |int |状态   |

## 返回示例 

``` 
  {
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1342648125753065474",
            "createUser": null,
            "createDept": null,
            "createTime": "2020-12-26 09:47:13",
            "updateUser": null,
            "updateTime": "2020-12-26 09:47:13",
            "status": 1,
            "isDeleted": 0,
            "siteCode": "MY",
            "name": "Sonstige",
            "parentId": 0,
            "isLeaf": false,
			"path":""
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |Long   |类目id  |
|siteCode |string   |站点  |
|name |string   |店铺类目名称  |
|parentId |long   |父类目ID  |
|isLeaf |boolean   |是否叶子类目  |
|path |String   |类目树  |