# Listing列表

> 作者：wuxin

## 作者
-  吴新
    
## 简要描述

- 获取Listing列表

## 请求URL
- ` http://xxx/amazonlisting/list `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current  |是  |number | 页数	   |
|size  |是  |number | 页大小	   |
|accounts  |否  |List&lt;string> | 账号	   |
|upOnlineTimeStart |否  |Number | 上架开始时间    |
|upOnlineTimeEnd     |否  |Number | 上架结束时间    |
|createTimeStart |否  |Number | 创建开始时间    |
|createTimeEnd     |否  |Number | 创建结束时间    |
|searchType     |否  |Number | 搜索类型  1-标题(单个) 2-内部sku 3-外部sku 4-ASIN 5-listingId   |
|searchSort     |是  |number | 搜索类别 1-子sku 2-父sku  默认为:1    |
|searchContent     |否  |Array | 搜索内容    |
|createUser     |否  |Long | 创建人 id   |
|listingType     |否  |string | listing类型 Normal Variation Combo    |
|isAmazonUpload     |否  |boolean | 数据来源  false-刊登系统 true-后台或第三方    |
|listingStatus     |是  |Number | 状态 1-Draft 2-Approving 3-Uploading 4-Upload Failed 5-Online 6-Updating 7-Update Failed 8-Match Failed 9-Canceling 10-Canceled   |
|isGbcInfringe     |否  |boolean | 是否GBC   |
|infringementTypes     |否  |array |侵权类型, 是个数组   |
|saleUser|否 |long | 负责人id |
|category|否 |string| 分类名|

## 返回示例 

``` 
  {
    "msg": "操作成功",
    "code": 200,
    "data":
		{
			"records":
				[
					{ "id": 1,
					  "account": "12154545",
					  "title": "吴系挂",
					  "productSku": "SKU123" ,
					  "sellerSku": "1436864169",
					  "asin": "SDFJO165",
					  "mainImage": "http://xxxxxx.jpg",
					  "thumbnail": "http://xxxxsx.jpg",
					  "listingStatus": 1,
					  "amazonSite": "US",
					  "developUser": "李克强",
					  "saleUser": "习近平",
					  "createUser": "李克强",
					  "timedUploadTime": "2020-11-18 00:00:00",
					  "upOnlineTime": "2020-11-18 00:00:00",
					  "iSamazonUpload": 0,
					  "createTime": "2020-11-18 00:00:00",
					  "updateTime": "2020-11-18 00:00:00",
					  "price": 0.00,
					  "costPrice": 0.00,
					  "quantity": 0,
					  "listingType": Normal,
					  "resultMsg": "失败...."
					}
				]
			"total": 100
			"size": 100,
			"current": 20
    	}
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |long   |条目id  |
|account |string   |店铺名  |
|title |string   |标题  |
|productSku |string   |内部SKU  |
|sellerSku |string   |平台SKU  |
|asin |string   |asin码  |
|mainImage |string   |主图  |
|thumbnail |string   |缩略图  |
|listingStatus |int   |产品状态  |
|amazonSite |string   |站点  |
|developUser |string   |开发人员  |
|saleUser |string   |销售人员  |
|createUser |string   |创建人  |
|timedUploadTime |date   |定时刊登时间  |
|upOnlineTime |date   |上架时间  |
|iSamazonUpload |int   |是否亚马逊后台上传  |
|createTime |date   |创建时间  |
|updateTime |date   |审核时间&删除时间  |
|price |double   |价格  |
|costPrice |double   |成本价格  |
|quantity | int | 库存|
|total |long   |总数  |
|listingType |String   |lsiting类型  |
|resultMsg |String   |结果信息  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述