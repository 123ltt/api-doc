# 全球Listing详情

> 作者：xingzhen

## 详情


**接口地址**:`/shopeeGlobalListing/detail`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeGlobalListing


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«ShopeeGlobalListingVO对象»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|ShopeeGlobalListingVO对象|ShopeeGlobalListingVO对象|
|&emsp;&emsp;account|店铺名|string||
|&emsp;&emsp;accountCode|店铺名CODE|string||
|&emsp;&emsp;attributeJson|存储用于详情回显属性|string||
|&emsp;&emsp;attributeList|属性JSON|string||
|&emsp;&emsp;auditTime|审核时间|string(date-time)||
|&emsp;&emsp;brand|品牌JSON|string||
|&emsp;&emsp;categoryId|类目id|integer(int32)||
|&emsp;&emsp;condition|物品状况|string||
|&emsp;&emsp;costPrice|成本价格|number||
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;customerUser|客服人员|integer(int64)||
|&emsp;&emsp;daysToShip|运输天数|integer(int32)||
|&emsp;&emsp;description|商品描述|string||
|&emsp;&emsp;developUser|开发人员|integer(int64)||
|&emsp;&emsp;dimension|长宽高JSON|string||
|&emsp;&emsp;globalItemId|平台GlobalID|integer(int64)||
|&emsp;&emsp;globalItemName|商品标题|string||
|&emsp;&emsp;globalItemStatus|商品状态|string||
|&emsp;&emsp;hasModel|是否包含变体|boolean||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;images|图片JSON|string||
|&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;isOnline|是否在线|boolean||
|&emsp;&emsp;isShopeeUpload|刊登方式 0:蝌蚪刊登 1:后台刊登 2:新系统刊登|integer(int32)||
|&emsp;&emsp;listingCreateTime|平台创建时间|string(date-time)||
|&emsp;&emsp;listingStatus|listing状态|integer(int32)||
|&emsp;&emsp;listingType|listing类型|string||
|&emsp;&emsp;listingUpdateTime|平台修改时间|string(date-time)||
|&emsp;&emsp;logistics|物流JSON|string||
|&emsp;&emsp;price|价格|number||
|&emsp;&emsp;priceInfo|价格JSON|string||
|&emsp;&emsp;productSpu|产品SPU|string||
|&emsp;&emsp;publishableShop|可发布店铺JSON|string||
|&emsp;&emsp;publishedShop|已发布店铺JSON|string||
|&emsp;&emsp;saleUser|负责人|integer(int64)||
|&emsp;&emsp;sellerSku|平台SKU|string||
|&emsp;&emsp;shopId|店铺id|integer(int32)||
|&emsp;&emsp;shopeeGlobalListingVariantVOS|变体对象|array|ShopeeGlobalListingVariantVO对象|
|&emsp;&emsp;&emsp;&emsp;globalItemId|平台ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;globalModelId|平台变体ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;listingCreateTime|平台创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;listingUpdateTime|平台修改时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;price|价格||false|number||
|&emsp;&emsp;&emsp;&emsp;priceInfo|价格JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;shopeeGlobalListingId|主表关联ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stockInfo|库存JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;tierIndex|属性坐标||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;variationAttribute|存储用于详情回显属性||false|string||
|&emsp;&emsp;sizeChart|尺寸图|string||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;stock|库存|integer(int32)||
|&emsp;&emsp;stockInfo|库存JSON|string||
|&emsp;&emsp;tierVariation|变体属性信息|string||
|&emsp;&emsp;video|视频JSON|string||
|&emsp;&emsp;weight|重量|number||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"account": "",
		"accountCode": "",
		"attributeJson": "",
		"attributeList": "",
		"auditTime": "",
		"brand": "",
		"categoryId": 0,
		"condition": "",
		"costPrice": 0,
		"customerUser": 0,
		"daysToShip": 0,
		"description": "",
		"developUser": 0,
		"dimension": "",
		"globalItemId": 0,
		"globalItemName": "",
		"globalItemStatus": "",
		"hasModel": true,
		"id": 0,
		"images": "",
		"isDeleted": 0,
		"isOnline": true,
		"isShopeeUpload": 0,
		"listingCreateTime": "",
		"listingStatus": 0,
		"listingType": "",
		"listingUpdateTime": "",
		"logistics": "",
		"price": 0,
		"priceInfo": "",
		"productSpu": "",
		"publishableShop": "",
		"publishedShop": "",
		"saleUser": 0,
		"sellerSku": "",
		"shopId": 0,
		"shopeeGlobalListingVariantVOS": [
			{
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"globalItemId": 0,
				"globalModelId": 0,
				"id": 0,
				"isDeleted": 0,
				"listingCreateTime": "",
				"listingUpdateTime": "",
				"price": 0,
				"priceInfo": "",
				"productSku": "",
				"sellerSku": "",
				"shopeeGlobalListingId": 0,
				"status": 0,
				"stock": 0,
				"stockInfo": "",
				"tierIndex": "",
				"updateTime": "",
				"updateUser": 0,
				"variationAttribute": ""
			}
		],
		"sizeChart": "",
		"status": 0,
		"stock": 0,
		"stockInfo": "",
		"tierVariation": "",
		"video": "",
		"weight": 0
	},
	"msg": "",
	"success": true
}
```