# 根据PMS类目查询平台映射类目

> 作者：wuxin

## 作者
- 吴新

    
## 简要描述

- 根据PMS类目查询平台映射类目

## 请求URL
- `/categoryPublish/getBindCategory`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |string |平台简码   |
|siteCode |否  |string | 站点    |
|categoryIds     |是  |array | pms 类目ID 数组  |

## 返回示例 

``` 
  {
    "code": 0,
	"msg": "",
    "data": [
		{
		  "id": 1,
		  "categoryId": 12154545,
		  "pcCode": "刊登类目CODE",
		  "pcName": "刊登类目名称" ,
		  "pcCategoryIdPath": "平台类目ID树",
		  "pcCategoryNamePath": "平台类目名称树",
		  "platformCode": "0",
		  "siteCode": "0"
    	}
	]
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |主键ID |
|categoryId |number   |pms 类目ID |
|pcCode |string   |平台类目code |
|pcName |string   |平台类目名称 |
|pcCategoryIdPath |string   |平台类目ID树 |
|pcCategoryNamePath |string   |平台类目名称树 |
|platformCode |string   |平台 |
|siteCode |string   |站点 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述