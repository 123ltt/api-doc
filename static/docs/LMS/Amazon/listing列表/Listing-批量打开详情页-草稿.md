# Listing-批量打开详情页-草稿

> 作者：wuxin

## Listing批量打开详情-草稿


**接口地址**:`/amazonlisting/getBatchDraftDetail`


**请求方式**:`POST`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入id


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|amazonListingIds|主键id|query|true|array|||



**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«AmazonListingVO对象»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||| 


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|AmazonListingVO对象|AmazonListingVO对象|
|&emsp;&emsp;account|店铺名|string||
|&emsp;&emsp;amazonDraftSkuVOList|亚马逊草稿sku对象集合|array|AmazonDraftSkuVO对象|
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;condition|物品状况||false|string||
|&emsp;&emsp;&emsp;&emsp;conditionNote|物品状况描述||false|string||
|&emsp;&emsp;&emsp;&emsp;fulfillmentChannel|交付渠道||false|string||
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
|&emsp;&emsp;&emsp;&emsp;sampleImage|样品图||false|string||
|&emsp;&emsp;&emsp;&emsp;skuAttrs|变体属性||false|string||
|&emsp;&emsp;&emsp;&emsp;skuProperty|SKU属性||false|string||
|&emsp;&emsp;&emsp;&emsp;standardPrice|价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;standardProdcutIdType|标准产品id类型||false|string||
|&emsp;&emsp;&emsp;&emsp;standardProdcutIdValue|标准产品id值||false|string||
|&emsp;&emsp;&emsp;&emsp;isDelete|是否被删除||true|boolean||
|&emsp;&emsp;amazonDraftVO|亚马逊草稿对象|AmazonDraftVO对象|AmazonDraftVO对象|
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;brand|品牌||false|string||
|&emsp;&emsp;&emsp;&emsp;browsePathById|类目id||false|string||
|&emsp;&emsp;&emsp;&emsp;manufacturer|制造商||false|string||
|&emsp;&emsp;&emsp;&emsp;mfrPartNumber|制造商零件编号||false|string||
|&emsp;&emsp;&emsp;&emsp;parentSku|ParentSKU||false|string||
|&emsp;&emsp;&emsp;&emsp;productTaxCode|税务编码||false|string||
|&emsp;&emsp;&emsp;&emsp;productType|模板||false|string||
|&emsp;&emsp;&emsp;&emsp;saleVariant|售卖形式-是否为变体||false|boolean||
|&emsp;&emsp;&emsp;&emsp;variationThemes|商品属性主题||false|string||
|&emsp;&emsp;amazonListingExtendVO|亚马逊扩展对象|AmazonListingExtendVO对象|AmazonListingExtendVO对象|
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;attributes|属性||false|string||
|&emsp;&emsp;&emsp;&emsp;bulletPoint|卖点||false|string||
|&emsp;&emsp;&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;&emsp;&emsp;searchTerms|搜索词 分号;分隔||false|string||
|&emsp;&emsp;&emsp;&emsp;skuProperty|SKU属性||false|string||
|&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;amazonSite|站点||false|string||
|&emsp;&emsp;asin|asin码||false|string||
|&emsp;&emsp;category|类目||false|string||
|&emsp;&emsp;categoryId|类目ID||false|string||
|&emsp;&emsp;country|国家||false|string||
|&emsp;&emsp;developUser|开发人员||false|integer(int64)||
|&emsp;&emsp;listingType|listing类型||false|string||
|&emsp;&emsp;mainImage|主图||false|string||
|&emsp;&emsp;imageUrls|副图, 图片url列表 分号;分隔||false|string||
|&emsp;&emsp;productSku|内部SKU||false|string||
|&emsp;&emsp;sellerSku|平台SKU|string||
|&emsp;&emsp;listingStatus|产品状态||false|integer||
|&emsp;&emsp;saleUser|销售人员||false|integer(int64)||
|&emsp;&emsp;title|标题||false|string||
|&emsp;&emsp;candidateDisplayName|店铺码||false|string||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [{
		"account": "",
		"amazonDraftSkuVOList": [
			{
				"id":0,
				"condition": "",
				"conditionNote": "",
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
				"sampleImage": "",
				"skuAttrs": "",
				"standardPrice": 0,
				"standardProdcutIdType": "",
				"standardProdcutIdValue": "",
				"isDelete":false,
				"skuProperty": ""
			}
		],
		"amazonDraftVO": {
			"id":0,
			"brand": "",
			"browsePathById": "",
			"manufacturer": "",
			"mfrPartNumber": "",
			"parentSku": "",
			"productTaxCode": "",
			"productType": "",
			"saleVariant": true,
			"variationThemes": "",
			"fulfillmentChannel": ""
		},
			"amazonListingExtendVO": {
			"id":0,
			"attributes": "",
			"bulletPoint": "",
			"description": "",
			"searchTerms": "",
		},
		"id":0,
		"amazonSite": "",
		"asin": "",
		"category": "",
		"categoryId": "",
		"country": "",
		"developUser": 0,
		"listingType": "",
		"mainImage": "",
		"imageUrls": "",
		"productSku": "",
		"sellerSku": "",
		"listingStatus": 0,
		"saleUser": 0,
		"title": "",
		"candidateDisplayName":"",
	}],
	"msg": "",
	"success": true
}
```