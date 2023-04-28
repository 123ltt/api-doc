# 获取Listing 列表（分页）

> 作者：1638648874@qq.com

## 作者
- 吴新
	
	
## 简要描述

- 获取Listing 列表（分页）

## 请求URL
- ` /lazada/spus/list `

## 请求方式
- POST


## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|searchType |否  |Number |搜索类型 1-标题(单个) 2-内部sku 3-外部sku 4-Item Id 5-Listing Id   |
|searchContent |否  |Array |搜索内容   |
|searchSort |否  |int |1-子 2-父   |
|storeCodes |否  |array |店铺编号数组   |
|site |否  |string |站点   |
|`listingType` |否  |string |Listing类型   |
|listingStatus |是 |int |Listing状态   |
|isLazadaPublish |否  |boolean |是否后台刊登   |
|createUser |否  |string |创建人   |
|createStartTime |否  |date |创建开始时间   |
|createEndTime |否  |date |创建结束时间   |
|upOnlineStartTime |否  |date |上架开始时间   |
|upOnlineEndTime |否  |date |上架结束时间   |
|pageNumber |否  |number |页数   |
|pageSize |否  |number |页大小   |


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
			"id":0,
			"itemId":"",
			"sellerSku": "",
			"masterImage": "",
			"storeName": "",
			"site":"UK",
			"spu":"",
			"name":"",
			"isLazadaUpload": false,
			"developerName":"",
			"saleUserName":0.00,
			"createUserName":0.00,
			"upOnlineTime":"2020-12-28 10:21:38",
			"createTime":"2020-12-28 10:21:38",
			"variantCount": 0,
			"listingStatus": 1,
			"errorMsg": "",
			"listingType": "",
			"price": 0.0,
			"quantity": 0,
			"specialPrice": 0.0,
			"productCost": 0.0,
			"myRetailPrice": 0.0,
			"mySalesPrice": 0.0,
			"sgRetailPrice": 0.0,
			"sgSalesPrice": 0.0,
			"thRetailPrice": 0.0,
			"thSalesPrice": 0.0,
			"phRetailPrice": 0.0,
			"phSalesPrice": 0.0,
			"idRetailPrice": 0.0,
			"idSalesPrice": 0.0,
			"vnRetailPrice": 0.0,
			"vnSalesPrice": 0.0
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
|-----|-----|-----|
|id |long   |主键ID |
|itemId |string   |itemID |
|sellerSku| string | sellerSku |
|masterImage| string | 主图 |
|site |string   |站点 |
|spu |string   |产品SKU |
|name |string   |标题 |
|storeName |string   |店铺名称 |
|isLazadaUpload |boolean   |是否后台刊登 |
|upOnlineTime |date   |上架时间 |
|createTime |date   |创建时间 |
|createUserName |string   |创建人 |
|developerName |string   |开发人 |
|saleUserName |string   |负责人 |
|variantCount |int   |变体数量 |
|listingStatus |int   |listing状态 |
|errorMsg |string   |报错信息 |
|listingType |string   |listing属性 |
|productCost |bigdecimal   |成本 |
|price |bigdecimal   |售价 |
|quantity |int   |库存 |
|specialPrice |bigdecimal   |促销价 |
|myRetailPrice |bigdecimal   |MY站点售价 |
|mySalesPrice |bigdecimal   |MY站点促销价 |
|sgRetailPrice |bigdecimal   |SG站点售价 |
|sgSalesPrice |bigdecimal   |SG站促销价 |
|thRetailPrice |bigdecimal   |TH站点售价 |
|thSalesPrice |bigdecimal   |TH站促销价 |
|phRetailPrice |bigdecimal   |PH站点售价 |
|phSalesPrice |bigdecimal   |PH站促销价 |
|idRetailPrice |bigdecimal   |ID站点售价 |
|idSalesPrice |bigdecimal   |ID站促销价 |
|idRetailPrice |bigdecimal   |VN站点售价 |
|idSalesPrice |bigdecimal   |VN站促销价 |

## 备注

- 更多返回错误代码请看首页的错误代码描述