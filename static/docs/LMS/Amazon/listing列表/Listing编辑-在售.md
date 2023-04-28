# Listing编辑-在售

> 作者：wuxin

## 作者
- 吴新
    
## 简要描述

- listing编辑-在售

## 请求URL
- ` http://xxx/amazonlistingvariant/update `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |true |long   |主键ID  |
|amazonListingId|true |long   |listing主键ID  |
|listingId |true |long   | listingId  |
|account |true |string   |账号  |
|title |true |string   |标题  |
|productSku |true |string   |公司sku  |
|sellerSku |true |string   |sellerSku  |
|asin |true |string   |asin  |
|category |true |string   |分类  |
|categoryId |true |long   |分类ID  |
|mainImage |false |string   |主图  |
|listingStatus |true |number   |产品状态  |
|amazonSite |true |string   |站点  |
|brand |true|string   |品牌  |
|manufacturer |false |string   |制造商  |
|costPrice |true |bigdecimal   |成本价  |
|price |true |bigdecimal   |价格  |
|profitRate |true |bigdecimal   |利润率  |
|salePrice |false |bigdecimal   | 促销价  |
|saleStartDate |false |Date   |促销开始日期  |
|saleEndDate |false |Date   |促销结束日期  |
|quantity |true |long   |库存  |
|fulfillmentChannel|false|string|交付渠道|
|itemCondition |true |string   |Condition  |
|skuAttrs |false |string   |变种属性   |
|description |true |string   |描述  |
|searchTerms |false |string   |搜索项  |
|bulletPoint |false |string   |卖点 ;分隔  |
|imageUrls |true |string   |图片 ;分隔  |
|attributes |false |string   |产品属性  |
|skuProperty |false |string   |SKU属性  |
|updateField |true |Array   |修改字段 1:产品 2:售价 3:库存 4:图片  |
|isCheck |true |Boolean   |是否侵权检测 true  false 默认为:false  |
|productType |false |String   |模板  |
## 请求示例
```
{
	"id": 1,
	"amazonListingId": 1,
	"listingId": "ADFSD1561",
	"account": "abc",
	"title": "sdfsadf",
	"productSku": "sdf123",
	"sellerSku": "sdfas123",
	"asin": "safas",
	"category": "分类名",
	"categoryId":123456,
	"mainImage": "www.abc.jpg",
	"listingStatus": 5,
	"amazonSite": "US",
	"brand": "di",
	"manufacturer": "abc",
	"costPrice": 12.0,
	"price": 15,
	"salePrice": "12.20",
	"saleStartDate": 16015615613,
	"saleEndDate": 16016516155,
	"quantity": 1,
	"fulfillmentChannel":"DEFAULT",
	"itemCondition": "new",
	"skuAttrs": "{"color": "blonk"}",
	"productType": "home-home",
	 "profitRate": 12.00,
	"extend":
			{
				"description":  "12313",
				"searchTerms": "",
				"bulletPoint": "",
				"imageUrls": "www.abc.jpg",
				"attributes": "",
				"skuProperty": ""
			},
	"draftSku": {
		 "profitRate": 12.00,
		"logistics": ""
	}		
	"updateField": [1,2,3,4],
	"isCheck": false
}
```
## 返回示例 

``` 
 {
    "code": 200,
    "data": {},
    "msg": "",
    "success": true
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |int   |状态码  |
|success |boolean   |是否成功:  true false  |


## 备注 

- 更多返回错误代码请看首页的错误代码描述