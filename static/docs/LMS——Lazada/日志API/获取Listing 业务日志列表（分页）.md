# 获取Listing 业务日志列表（分页）

> 作者：yangruibo

## 简要描述

- 获取Listing 业务日志列表（分页）

## 请求URL
- ` /log/listing_bus/page `
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|listingId |是  |string |ListingID   |
|updateType |否  |string | 更新类型    |
|optType |否  |string | 操作类型    |
|optUser     |否  |string | 操作人    |
|current     |是  |int | 当前页    |
|size     |是  |int | 每页的数量    |
## 返回示例

```
  {
    "code": 200,
    "success": true,
    "data": {
        "current":0,
		"hitCount":true,
		"pages":0,
		"records":[
		  {
		    "id":"1362701199764340738",
			"updateType":0,
			"optType":"",
			"optContent":"",
			"optStatus":"",
			"optUser":0,
			"createTime":"",
			"errorMsg": null
		  }
		],
		"searchCount":true,
		"size":0,
		"total":0
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|updateType |string   |更新类型  |
|optType |string   |操作类型  |
|optContent |string   |操作内容  |
|optStatus |string   |操作状态  |
|optUser |string   |操作人  |
|createTime |date   |创建时间  |
|errorMsg |string   |错误信息  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述