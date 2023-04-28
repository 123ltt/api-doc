# Listing详情-在售

> 作者：wuxin

## 作者
- 吴新
    
## 简要描述

- 获取在售listing详情

## 请求URL
- ` http://xx.com/amazonlistingvariant/detail `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|amazonListingId |是  |number |listing主键ID   |
|listingStatus |是  |number |产品状态 可选值5,7,8   |
|amazonVariantId |是  |string  |变体主键ID  |

## 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
      "id": "1",
	  "amazonListingId": ""
	  "listingId": "",
	  "account": "asdf",
	  "candidateDisplayName": "sadf",
	  "title": "123",
	  "productSku": "sdfdafa",
	  "sellerSku": "sdfasdf",
	  "asin": "sdfasdf",
	  "category": "sdfasdf",
	  "categoryId": "dfsafasd",
	  "mainImage": "sdafsdaf"
	  "listingStatus"： "sdfasd",
	  "amazonSite": "US",
	  "brand": "小米",
	   "manufacturer": "小米",
	  "costPrice": 12.00,
	  "price": "20",
	  "salePrice": 18.00,
	  "saleStartDate": 15631651315,
	  "saleEndDate": 15231561561,
	  "quantity": 0,
	  "fulfillmentChannel": "DEFAULT",
	  "itemCondition": "new",
	  "skuAttrs": "{"color": "read"}",
	  "profitRate": 12.00,
	  "extend":{
	  		"description": "sdfasdf",
			"searchTerms": "sdafasdf",
			"bulletPoint": "dfsafdas",
			"imageUrls": "sdfasfsdaf",
			"attributes": "{}",
			"skuProperty": ""
	  },
	  "draftSku":{
	  	"standardProdcutIdType": "ENA",
		"standardProdcutIdValue": "123454",
		"condition": "NEW",
		"conditionNote": "ENA",
		"profitRate": "11.11"
		"logistics": "{}",
	  }
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |long   |主键ID  |
|amazonListingId |long   |listing主键ID  |
|listingId |long   | listingId  |
|account |string   |账号  |
|candidateDisplayName |string   |账号  |
|title |string   |标题  |
|productSku |string   |公司sku  |
|sellerSku |string   |sellerSku  |
|asin |string   |asin  |
|category |string   |分类  |
|categoryId |long   |分类ID  |
|mainImage |string   |主图  |
|listingStatus |number   |产品状态  |
|amazonSite |string   |站点  |
|brand |string   |品牌  |
|manufacturer |string   |制造商  |
|costPrice |bigdecimal   |成本价  |
|price |bigdecimal   |价格  |
|salePrice |bigdecimal   | 促销价  |
|saleStartDate |Date   |促销开始日期  |
|saleEndDate |Date   |促销结束日期  |
|quantity |long   |库存  |
|fulfillmentChannel |string   |交付渠道  |
|itemCondition |string   |Condition  |
|skuAttrs |string   |变种属性   |
|description |string   |描述  |
|searchTerms |string   |搜索项  |
|bulletPoint |string   |卖点 ;分隔  |
|imageUrls |string   |图片 ;分隔  |
|attributes |string   |产品属性  |
|skuProperty |string   |SKU属性  |
|standardProdcutIdType |string   |标准产品id类型  |
|standardProdcutIdValue |string   |标准产品id值  |
|condition |string   |物品状况  |
|conditionNote |string   |物品状况描述  |
|profitRate |string   |利润率  |
|logistics |string   |物流信息  |
|productType |string   |模板  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述