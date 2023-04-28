# 获取Listing 类目属性日志列表（分页）

> 作者：yangruibo

## 简要描述

- 获取Listing 类目属性日志列表（分页）

## 请求URL
- ` /log/listing_cate_attr/page `
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
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
			"platSite": "",
			"optUser": "",
			"createTime": ""
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
|platSite |string   |平台站点  |
|optUser |string   |操作人  |
|createTime |date   |创建时间  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述