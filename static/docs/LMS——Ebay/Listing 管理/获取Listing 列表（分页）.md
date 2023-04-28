# 获取Listing 列表（分页）

> 作者：1638648874@qq.com

## 简要描述

- 获取Listing 列表（分页）

## 请求URL
- ` /ebay/listing/page `


**请求方式**:`POST`


**请求数据类型**:`application/json`

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|searchType |否  |integer |搜索类型(1:标题，2：sku 3:平台sku，4：itemId 5:Listing ID)   |
|searchContent |否  |array |搜索内容   |
|isParentSku |否  |boolean |是否父级SKU   |
|storeCodes |否  |array |店铺编号数组   |
|`listingType` |是  |string |Listing类型，来源常量接口键：`listingType`   |
|`saleType` |是  |string |销售类型，来源常量接口键：`saleType`   |
|listingStatus |否  |string |Listing状态，来源常量接口键：`listingStatus`   |
|isBackPublish |否  |boolean |是否后台刊登   |
|createUser |否  |string |创建人   |
|createStartTime |否  |date |创建开始时间   |
|createEndTime |否  |date |创建结束时间   |
|putawayStartTime |否  |date |上架开始时间   |
|putawayEndTime |否  |date |上架结束时间   |
|infringementTypes |否  |array(int) |侵权类型   |
|isGbcInfringe |否  |boolean |是否gbc侵权   |
|publishSiteCodes |否  |array（string） |刊登站点   |
|ruleIds |否  |array（string） |仓库   |
|countries |否  |array（string） |国家   |
|`libraryIds` |否  |array（int） |图书馆(支持多个)   |

|  侵权CODE | 侵权类型  |
| ------------ | ------------ |
| 1  | 外观专利侵权  |
| 2  |  设计专利侵权 |
|  3 | 商标侵权  |
| 4  | 图片侵权  |
|  5 |  著作侵权 |
|  6 | 发明专利侵权  |
|  7 |  平台禁售 |


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
			"listingId":0,
			"itemId":"",
			"siteCode":"UK",
			"productSku":"",
			"sellerSku":"",
			"title":"",
			"mainPictureUrl":"",
			"storeName":"",
			"costPrice":0.00,
			"startPrice":0.00,
			"buyItNowPrice":0.00,
			"stock":0,
			"isBackPublish":true,
			"publishTime":"2020-12-28 10:21:38",
			"createTime":"2020-12-28 10:21:38",
			"createUser":""
			"developUser":""
			"saleUser":"",
			"variantCount": 0,
			"listingStatus": "",
			"quantitySold":1,
			"lastSoldTime":"2020-12-28 10:21:38"
			"errorMsg": "",
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
|listingId |long   |listingID |
|itemId |string   |itemID |
|siteCode |string   |站点 |
|productSku |string   |产品SKU |
|sellerSku |string   |平台SKU |
|title |string   |标题 |
|mainPictureUrl |string   |主图 |
|storeName |string   |店铺名称 |
|costPrice |bigdecimal   |成本 |
|~~sellingPrice~~ |bigdecimal   |售价 |
|startPrice |bigdecimal   |售价 |
|stock |int   |库存 |
|isBackPublish |boolean   |是否后台刊登 |
|publishTime |date   |刊登时间 |
|createTime |date   |创建时间 |
|createUserName |string   |创建人 |
|developUserName |string   |开发人 |
|saleUserName |string   |负责人 |
|variantCount |int   |变体数量 |
|listingStatus |string   |listing状态 |
|lastSoldTime |date   |最后售出时间 |
|quantitySold |int   |listing销量 |
|errorMsg |string   |报错信息 |

## 备注

- 更多返回错误代码请看首页的错误代码描述