# Listing详情

> 作者：xingzhen

## 详情


**接口地址**:`/shopeelisting/detail`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeListing


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«ShopeeListingVO对象»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|ShopeeListingVO对象|ShopeeListingVO对象|
|&emsp;&emsp;account|店铺名|string||
|&emsp;&emsp;accountCode|店铺名CODE|string||
|&emsp;&emsp;globalItemId|globalItemId|number||
|&emsp;&emsp;attributes|属性JSON|string||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;categoryId|类目id|integer(int32)||
|&emsp;&emsp;cmtCount|评论数|integer(int32)||
|&emsp;&emsp;condition|物品状况|string||
|&emsp;&emsp;costPrice|成本价|number(double)||
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;createUserName|创建人员名称|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;daysToShip|运输时间|integer(int32)||
|&emsp;&emsp;description|商品描述|string||
|&emsp;&emsp;developUser|开发人员|integer(int64)||
|&emsp;&emsp;developUserName|开发人员名称|string||
|&emsp;&emsp;discountId|折扣id|integer(int32)||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;images|图片JSON|string||
|&emsp;&emsp;inflatedOriginalPrice|税后原价格|number(double)||
|&emsp;&emsp;inflatedPrice|税后价格|number(double)||
|&emsp;&emsp;is2tierItem|是否两层变体结构|boolean||
|&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;isOnline|是否在线|boolean||
|&emsp;&emsp;isPreOrder|是否为预订单|boolean||
|&emsp;&emsp;isShopeeUpload|是否后台刊登|boolean||
|&emsp;&emsp;itemId|平台ID|integer(int64)||
|&emsp;&emsp;itemStatus|商品状态|string||
|&emsp;&emsp;likes|收藏量|integer(int32)||
|&emsp;&emsp;listingCreateTime|平台创建时间|string(date-time)||
|&emsp;&emsp;listingStatus|listing状态|integer(int32)||
|&emsp;&emsp;listingType|listing类型|string||
|&emsp;&emsp;listingUpdateTime|平台修改时间|string(date-time)||
|&emsp;&emsp;logistics|物流JSON|string||
|&emsp;&emsp;name|商品标题|string||
|&emsp;&emsp;originalPrice|原始售价|number(double)||
|&emsp;&emsp;packageHeight|高|number(double)||
|&emsp;&emsp;packageLength|长|number(double)||
|&emsp;&emsp;packageWidth|宽|number(double)||
|&emsp;&emsp;price|价格|number(double)||
|&emsp;&emsp;priceSource|创建SIP策略|string||
|&emsp;&emsp;productSku|子内部SKU|string||
|&emsp;&emsp;productSpu|产品SPU|string||
|&emsp;&emsp;ratingStar|星级数|number(double)||
|&emsp;&emsp;reservedStock|促销时锁定库存|integer(int32)||
|&emsp;&emsp;saleUser|负责人|integer(int64)||
|&emsp;&emsp;saleUserName|销售人员名称|string||
|&emsp;&emsp;sales|销量|integer(int32)||
|&emsp;&emsp;sellerSku|平台SKU|string||
|&emsp;&emsp;shopId|店铺id|integer(int32)||
|&emsp;&emsp;shopeeListingVariantVOList||array|ShopeeListingVariantVO对象|
|&emsp;&emsp;&emsp;&emsp;costPrice|成本价||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;discountId|折扣id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;inflatedOriginalPrice|税后原价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;inflatedPrice|税后价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;itemId|平台ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;itemStatus|商品状态||false|string||
|&emsp;&emsp;&emsp;&emsp;listingCreateTime|平台创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;listingUpdateTime|平台修改时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;name|变体名称||false|string||
|&emsp;&emsp;&emsp;&emsp;originalPrice|历史原价||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;price|价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;priceSource|创建SIP策略||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;reservedStock|促销时锁定库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;shopeeListingId|主表关联ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;sipItemPrice|SIP结算价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tierIndex|属性坐标||false|string||
|&emsp;&emsp;&emsp;&emsp;profitRate|利润率|number||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;variationId|平台变体ID||false|integer(int64)||
|&emsp;&emsp;sipItemPrice|SIP结算价格|number(double)||
|&emsp;&emsp;sizeChart|尺码表|string||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;stock|库存|integer(int32)||
|&emsp;&emsp;tenures|TW分期付款|string||
|&emsp;&emsp;tierVariation|变体属性信息|string||
|&emsp;&emsp;timedUploadTime|定时刊登时间|string(date-time)||
|&emsp;&emsp;upOnlineTime|上架时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;variantNum|子sku数量|integer(int64)||
|&emsp;&emsp;views|浏览量|integer(int32)||
|&emsp;&emsp;weight|重量|number(double)||
|&emsp;&emsp;wholesales|批发商层级列表|string||
|&emsp;&emsp;profitRate|利润率|number||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"account": "",
		"accountCode": "",
		"globalItemId": 1231,
		"attributes": "",
		"auditTime": "",
		"categoryId": 0,
		"cmtCount": 0,
		"condition": "",
		"costPrice": 0,
		"createDept": 0,
		"createTime": "",
		"createUser": 0,
		"createUserName": "",
		"currency": "",
		"daysToShip": 0,
		"description": "",
		"developUser": 0,
		"developUserName": "",
		"discountId": 0,
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
		"productSku": "",
		"productSpu": "",
		"ratingStar": 0,
		"reservedStock": 0,
		"saleUser": 0,
		"saleUserName": "",
		"sales": 0,
		"sellerSku": "",
		"shopId": 0,
		"shopeeListingVariantVOList": [
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
				"variationId": 0，
				"profitRate":0.12
			}
		],
		"sipItemPrice": 0,
		"sizeChart": "",
		"status": 0,
		"stock": 0,
		"tenures": "",
		"tierVariation":  "[{"name":"顏色","option_list":[{"image":{"image_id":"725b7f440cbe39c883720a7e68a9d5bd","image_url":"https://s-cf-tw.shopeesz.com/file/725b7f440cbe39c883720a7e68a9d5bd"},"option":"如圖"}]}]",
		"timedUploadTime": "",
		"upOnlineTime": "",
		"updateTime": "",
		"updateUser": 0,
		"variantNum": 0,
		"views": 0,
		"weight": 0,
		"wholesales": ""，
		"profitRate":0.12
	},
	"msg": "",
	"success": true
}
```