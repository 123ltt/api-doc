# Listing修改-mjf

> 作者：xingzhen

## 修改


**接口地址**:`/shopeelisting/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeListing


**请求示例**:


```javascript
{
	"account": "",
	"accountCode": "",
	"accounts": [],
	"globalItemId": 123;
	"attributes": "[{"attribute_id":100134,"is_mandatory":false,"original_attribute_name":"Material","attribute_value_list":[{"value_unit":"","value_id":1248,"original_value_name":"Lace"}]},{"attribute_id":100151,"is_mandatory":true,"original_attribute_name":"Dress/Skirt Length","attribute_value_list":[{"value_unit":"","value_id":1374,"original_value_name":"Midi"}]}]",
	"auditTime": "",
	"categoryId": 0,
	"cmtCount": 0,
	"condition": "",
	"costPrice": 0,
	"createDept": 0,
	"createTime": "",
	"createTimeEnd": "",
	"createTimeStart": "",
	"createUser": 0,
	"currency": "",
	"daysToShip": 0,
	"description": "",
	"developUser": 0,
	"discountId": 0,
	"fbwordConfirm": true,
	"id": 0,
	"images": "",
	"inflatedOriginalPrice": 0,
	"inflatedPrice": 0,
	"is2tierItem": true,
	"isDeleted": 0,
	"isOnline": true,
	"isPreOrder": true,
	"isShopeeUpload": true,
	"itemId": 0,
	"itemStatus": "",
	"likes": 0,
	"listingCreateTime": "",
	"listingStatus": 0,
	"listingType": "",
	"listingUpdateTime": "",
	"logistics": "",
	"name": "",
	"originalPrice": 0,
	"packageHeight": 0,
	"packageLength": 0,
	"packageWidth": 0,
	"price": 0,
	"priceSource": "",
	"productIdType": "",
	"productSpu": "",
	"ratingStar": 0,
	"reservedStock": 0,
	"saleUser": 0,
	"sales": 0,
	"searchContent": [],
	"searchSort": 0,
	"searchType": 0,
	"sellerSku": "",
	"shopId": 0,
	"shopeeListingVariantDTOList": [
		{
			"costPrice": 0,
			"createDept": 0,
			"createTime": "",
			"createUser": 0,
			"discountId": 0,
			"id": 0,
			"inflatedOriginalPrice": 0,
			"inflatedPrice": 0,
			"isDeleted": 0,
			"itemId": 0,
			"itemStatus": "",
			"listingCreateTime": "",
			"listingUpdateTime": "",
			"name": "",
			"originalPrice": 0,
			"price": 0,
			"priceSource": "",
			"productSku": "",
			"reservedStock": 0,
			"sellerSku": "",
			"shopeeListingId": 0,
			"sipItemPrice": 0,
			"status": 0,
			"stock": 0,
			"tierIndex": "",
			"updateTime": "",
			"updateUser": 0,
			"variationId": 0,
			"variationAttribute":"",
			"variantDraftStatus"："",
			"profitRate":0.12
		}
	],
	"sipItemPrice": 0,
	"sizeChart": "",
	"status": 0,
	"stock": 0,
	"tenures": "",
	"tierVariation": "[{"name":"顏色","option_list":[{"image":{"image_id":"725b7f440cbe39c883720a7e68a9d5bd","image_url":"https://s-cf-tw.shopeesz.com/file/725b7f440cbe39c883720a7e68a9d5bd"},"option":"如圖"}]}]",
	"timedUploadTime": "",
	"upOnlineTime": "",
	"upOnlineTimeEnd": "",
	"upOnlineTimeStart": "",
	"updateTime": "",
	"updateUser": 0,
	"variantIds": [],
	"views": 0,
	"weight": 0,
	"wholesales": "",
	"profitRate":0.12
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopeeListi|&emsp;&emsp;attributes|属性JSON||false|string||ng|虾皮listing|body|true|ShopeeListing对象|ShopeeListing对象|
|&emsp;&emsp;listingStatus|listing状态||true|number||
|&emsp;&emsp;attributes|属性JSON||false|string||
|&emsp;&emsp;categoryId|类目id||false|integer(int32)||
|&emsp;&emsp;globalItemId|全球 itemId||true|integer||
|&emsp;&emsp;condition|物品状况||false|string||
|&emsp;&emsp;costPrice|成本价||false|number||
|&emsp;&emsp;daysToShip|运输时间||false|integer(int32)||
|&emsp;&emsp;description|商品描述||false|string||
|&emsp;&emsp;developUser|开发人员||false|integer(int64)||
|&emsp;&emsp;fbwordConfirm|违禁词确认||false|boolean||
|&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;images|图片JSON||false|string||
|&emsp;&emsp;isPreOrder|是否为预订单||false|boolean||
|&emsp;&emsp;itemId|平台ID||false|integer(int64)||
|&emsp;&emsp;logistics|物流JSON||false|string||
|&emsp;&emsp;name|商品标题||false|string||
|&emsp;&emsp;packageHeight|高||false|integer(int32)||
|&emsp;&emsp;packageLength|长||false|integer(int32)||
|&emsp;&emsp;packageWidth|宽||false|integer(int32)||
|&emsp;&emsp;sizeChart|尺码表||false|varchar||
|&emsp;&emsp;price|价格||false|number||
|&emsp;&emsp;productSpu|产品SPU||false|string||
|&emsp;&emsp;saleUser|负责人||false|integer(int64)||
|&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;profitRate|利润率||true|number||
|&emsp;&emsp;shopeeListingVariantDTOList|||false|array|ShopeeListingVariant对象|
|&emsp;&emsp;&emsp;&emsp;costPrice|成本价||false|number||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;name|变体名称||false|string||
|&emsp;&emsp;&emsp;&emsp;price|价格||false|number||
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;shopeeListingId|主表关联ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tierIndex|属性坐标||false|string||
|&emsp;&emsp;&emsp;&emsp;variantDraftStatus|草稿变体子sku状态||true|string||
|&emsp;&emsp;;&emsp;&emsp;profitRate|利润率||true|number||
|&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;tierVariation|变体属性信息||false|string||
|&emsp;&emsp;weight|重量||false|number||
|&emsp;&emsp;updateField|修改字段;||是|array|1:产品信息,2:尺码图片修改,3:库存修改;4:价格修改,5:规格选项修改,6:规格坐标修改,7:刊登到店铺



**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```