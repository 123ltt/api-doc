# Fanno 获取全球Listing 列表（分页）

> 作者：yangruibo

## 作者
- 杨锐波
	
	
## 简要描述

- 获取全球Listing 列表（分页）

## 请求URL
- ` /listing/global/page `

## 请求方式
- POST


## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|searchType |否  |Number |搜索类型 1-标题(单个) 2-内部sku 3-外部sku 4-Item Id 5-Listing Id, 6-GlobalItemID  |
|searchContent |否  |Array |搜索内容   |
|searchSort |否  |int |1-子 2-父   |
|storeCodes |否  |array |店铺编号数组   |
|publishSite |否  |string |站点   |
|`listingType` |否  |string |Listing类型   |
|listingStatus |是 |int |Listing状态   |
|infringementTypes |否  |array |侵权类型   |
|isGbcInfringe |否  |Boolean |是否gbc侵权   |
|createUser |否  |Long |创建人   |
|sellerUser |否  |Long |负责人   |
|fromCreateTime |否  |date |创建开始时间   |
|toCreateTime |否  |date |创建结束时间   |
|fromPublishTime |否  |date |上架开始时间   |
|toPublishTime |否  |date |上架结束时间   |
|current |否  |number |页数   |
|size |否  |number |页大小   |


## 返回示例

``` 
  {
    "code": 200,
    "success": true,
    "data": {
        "current":1,
		"hitCount":true,
		"pages":2,
		"records":[
		  {
			"id": 0,
			"globalItemId": "",
			"itemId": "",
			"sellerSku": "",
			"platformSku": "",
			"mainImage": "",
			"storeName": "",
			"publishedSite":"UK",
			"title":"",
			"saleUserName":0.00,
			"createUserName":0.00,
			"publishedTime":"2020-12-28 10:21:38",
			"createdTime":"2020-12-28 10:21:38",
			"costPrice": 0.0,
			"costPrice": 0.0,
			"availableStock": 0,
		  }
		],
		"searchCount":true,
		"size":10,
		"total":18
    },
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|id |long   |主键ID |
|listingId |long   |listingId |
|globalItemId |string   |itemID |
|itemId |string   |itemID |
|productSku| string | 商品SKU |
|platformSku（别名sellerSku）| string | 平台(销售)SKU |
|mainImage| string | 主图 |
|publishedSite |string   |站点 |
|title |string   |标题 |
|storeName |string   |店铺名称 |
|publishedTime |date   |上架时间 |
|createdTime |date   |创建时间 |
|createUserName |string   |创建人 |
|saleUserName |string   |负责人 |
|costPrice |string   |成本 |
|sellingPrice |string   |售价 |
|availableStock |int   |库存 |
|skuCount |int   |子sku数量 |
|errorMsg |string   |错误信息 |

## 备注

- 更多返回错误代码请看首页的错误代码描述