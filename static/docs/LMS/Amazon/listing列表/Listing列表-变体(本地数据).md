# Listing列表-变体(本地数据)

> 作者：wuxin

## 作者
-  吴新
    
## 简要描述

- 获取Listing列表-变体查询(本地数据)

## 请求URL
- ` http://xxx/amazondraftsku/getByAmazonListingId`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id  |是  |number | 主键ID	   |


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
					  "listingStatus": 1,
					  "amazonSite": "US",
					  "developUser": "李克强",
					  "saleUser": "习近平",
					  "createUser": "李克强",
					  "upOnlineTime": "2020-11-18 00:00:00",
					  "iSamazonUpload": 0,
					  "createTime": "2020-11-18 00:00:00",
					  "price": 0.00,
					  "costPrice": 0.00,
					  "quantity": 0
					}
				]
			"total": 2
			"size": 2,
			"current": 2
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
|listingStatus |int   |产品状态  |
|amazonSite |string   |站点  |
|createUser |string   |创建人  |
|createTime |date   |创建时间  |
|standardPrice |double   |草稿 ~ 上传失败 价格  |
|costPrice |double   |成本价格  |
|quantity | int | 库存|
|total |long   |总数  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述