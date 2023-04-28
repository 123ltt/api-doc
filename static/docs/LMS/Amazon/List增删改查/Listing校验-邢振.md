# Listing校验-邢振

> 作者：1638648874@qq.com

## 新增


**接口地址**:`/amazonlisting/check`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入amazonListing


**请求示例**:


```javascript
{
	"account": "",
	"amazonDraftDTO": {
		"brand": "",
		"manufacturer": "",
		"productType": "",
		"saleVariant": 0,
		"variationThemes": "",
		"merchantShippingGroup":""
	},
	"amazonDraftSkuDTOList": [
		{
			"condition": "",
			"costPrice": 0,
			"extraImages": "",
			"profitRate": 0,
			"logistics": "",
			"mainImage": "",
			"productSku": "",
			"quantity": 0,
			"saleEndDate": "",
			"salePrice": 0,
			"saleStartDate": "",
			"skuAttrs": "",
			"standardPrice": 0,
			"standardProdcutIdType": "",
			"standardProdcutIdValue": "",
			"skuProperty": ""
		}
	],
	"amazonListingExtendDTO": {
		"attributes": "",
		"bulletPoint": "",
		"description": "",
		"searchTerms": "",
	},
	"amazonSite": "",
	"asin": "",
	"category": "",
	"categoryId": "",
	"listingType": "",
	"productSku": "",
	"title": "",
	"imageUrls": "",
	"mainImage": "",
	"developUser":"",
	"firstCategory":"",
	"storeRiskLevel":1,
	"accountCode":"",
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|amazonListing|amazonListing|body|true|AmazonListingDTO|AmazonListingDTO|
|&emsp;&emsp;account|店铺名||false|string||
|&emsp;&emsp;amazonDraftDTO|亚马逊草稿对象||false|AmazonDraftDTO|AmazonDraftDTO|
|&emsp;&emsp;&emsp;&emsp;brand|品牌||false|string||
|&emsp;&emsp;&emsp;&emsp;manufacturer|制造商||false|string||
|&emsp;&emsp;&emsp;&emsp;productType|模板||false|string||
|&emsp;&emsp;&emsp;&emsp;saleVariant|售卖形式-是否为变体 0：非变体  1:变体||false|bit||
|&emsp;&emsp;&emsp;&emsp;variationThemes|商品属性主题||false|string||
|&emsp;&emsp;&emsp;&emsp;merchantShippingGroup|运输模板||false|string||
|&emsp;&emsp;amazonDraftSkuDTOList|亚马逊草稿sku对象||false|array|AmazonDraftSkuDTO|
|&emsp;&emsp;&emsp;&emsp;condition|物品状况||false|string||
|&emsp;&emsp;&emsp;&emsp;costPrice|成本价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;extraImages|附图 分号;分隔||false|string||
|&emsp;&emsp;&emsp;&emsp;profitRate|利润率||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;logistics|选择物流||false|string||
|&emsp;&emsp;&emsp;&emsp;mainImage|主图||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|内部SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;quantity|库存数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;saleEndDate|促销结束日期||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;salePrice|促销价||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;saleStartDate|促销起始日期||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;skuAttrs|变体属性||false|string||
|&emsp;&emsp;&emsp;&emsp;skuProperty|SKU属性||false|string||
|&emsp;&emsp;&emsp;&emsp;standardPrice|价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;standardProdcutIdType|标准产品id类型||false|string||
|&emsp;&emsp;&emsp;&emsp;standardProdcutIdValue|标准产品id值||false|string||
|&emsp;&emsp;amazonListingExtendDTO|亚马逊扩展对象||false|AmazonListingExtendDTO|AmazonListingExtendDTO|
|&emsp;&emsp;&emsp;&emsp;attributes|属性||false|string||
|&emsp;&emsp;&emsp;&emsp;bulletPoint|卖点||false|string||
|&emsp;&emsp;&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;&emsp;&emsp;searchTerms|搜索词 分号;分隔||false|string||
|&emsp;&emsp;amazonSite|站点||false|string||
|&emsp;&emsp;asin|asin码||false|string||
|&emsp;&emsp;category|类目||false|string||
|&emsp;&emsp;categoryId|类目ID||false|string||
|&emsp;&emsp;listingType|listing类型||false|string||
|&emsp;&emsp;productSku|内部SKU||false|string||
|&emsp;&emsp;title|标题||false|string||
|&emsp;&emsp;mainImage|主图||false|string||
|&emsp;&emsp;imageUrls|副图, 图片url列表 分号;分隔||false|string||
|&emsp;&emsp;developUser|开发人员||false|integer||
|&emsp;&emsp;firstCategory|一级类目||false|string||
|&emsp;&emsp;storeRiskLevel|一级类目||false|integer||
|&emsp;&emsp;accountCode|店铺编码||false|integer||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|| | 


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array|AmazonListingCheckVO|
|&emsp;&emsp;fbWords|包含的违禁词|array|string|
|&emsp;&emsp;isFbwords|是否包含违禁词|boolean||
|&emsp;&emsp;isProfit|是否是负利润|boolean||
|&emsp;&emsp;sku|sku|string||
|msg|返回消息|string||
|success|是否成功|boolean|| | 


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"fbWords": [],
			"isFbwords": true,
			"sku": ""
		}
	],
	"msg": "",
	"success": true
}
```