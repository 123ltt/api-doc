# 全球Listing修改

> 作者：xingzhen

## 修改


**接口地址**:`/shopeeGlobalListing/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeGlobalListing


**请求示例**:


```javascript
{
	"account": "",
	"accountCode": "",
	"accountPrefix": "",
	"attributeJson": "",
	"attributeList": "",
	"auditTime": "",
	"brand": "",
	"categoryId": 0,
	"condition": "",
	"costPrice": 0,
	"createUser": 0,
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
	"isCheck": true,
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
	"saleUser": 0,
	"sellerSku": "",
	"shopId": 0,
	"shopeeGlobalListingVariantDTOS": [
		{
			"costPrice": 0,
			"globalItemId": 0,
			"globalModelId": 0,
			"id": 0,
			"listingCreateTime": "",
			"listingUpdateTime": "",
			"modelOperationStatus": 0,
			"price": 0,
			"priceInfo": "",
			"productSku": "",
			"sellerSku": "",
			"shopeeGlobalListingId": 0,
			"stock": 0,
			"stockInfo": "",
			"tierIndex": "",
			"variationAttribute": ""
		}
	],
	"sizeChart": "",
	"status": 0,
	"stock": 0,
	"stockInfo": "",
	"tierVariation": "",
	"updateField": [],
	"video": "",
	"weight": 0
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopeeGlobalListing|虾皮listing|body|true|ShopeeGlobalListing对象|ShopeeGlobalListing对象|
|&emsp;&emsp;account|店铺名||false|string||
|&emsp;&emsp;accountCode|店铺名CODE||false|string||
|&emsp;&emsp;accountPrefix|店铺前缀码||false|string||
|&emsp;&emsp;attributeJson|存储用于详情回显属性||false|string||
|&emsp;&emsp;attributeList|属性JSON||false|string||
|&emsp;&emsp;auditTime|审核时间||false|string(date-time)||
|&emsp;&emsp;brand|品牌JSON||false|string||
|&emsp;&emsp;categoryId|类目id||false|integer(int32)||
|&emsp;&emsp;condition|物品状况||false|string||
|&emsp;&emsp;costPrice|成本价格||false|number||
|&emsp;&emsp;createUser|创建人||false|integer(int64)||
|&emsp;&emsp;customerUser|客服人员||false|integer(int64)||
|&emsp;&emsp;daysToShip|运输天数||false|integer(int32)||
|&emsp;&emsp;description|商品描述||false|string||
|&emsp;&emsp;developUser|开发人员||false|integer(int64)||
|&emsp;&emsp;dimension|长宽高JSON||false|string||
|&emsp;&emsp;globalItemId|平台GlobalID||false|integer(int64)||
|&emsp;&emsp;globalItemName|商品标题||false|string||
|&emsp;&emsp;globalItemStatus|商品状态||false|string||
|&emsp;&emsp;hasModel|是否包含变体||false|boolean||
|&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;images|图片JSON||false|string||
|&emsp;&emsp;isCheck|违禁词确认||false|boolean||
|&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;isOnline|是否在线||false|boolean||
|&emsp;&emsp;isShopeeUpload|刊登方式 0:蝌蚪刊登 1:后台刊登 2:新系统刊登||false|integer(int32)||
|&emsp;&emsp;listingStatus|listing状态||false|integer(int32)||
|&emsp;&emsp;listingType|listing类型||false|string||
|&emsp;&emsp;logistics|物流JSON||false|string||
|&emsp;&emsp;price|价格||false|number||
|&emsp;&emsp;priceInfo|价格JSON||false|string||
|&emsp;&emsp;productSpu|产品SPU||false|string||
|&emsp;&emsp;saleShop|可发布店铺||false|array|string|
|&emsp;&emsp;saleUser|负责人||false|integer(int64)||
|&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;shopId|店铺id||false|integer(int32)||
|&emsp;&emsp;shopeeGlobalListingVariantDTOS|listing变体||false|array|ShopeeGlobalListingVariant对象|
|&emsp;&emsp;&emsp;&emsp;globalItemId|平台ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;globalModelId|平台变体ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;modelOperationStatus|变体子sku操作状态 1:新增 2:更新 3:删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;price|价格||false|number||
|&emsp;&emsp;&emsp;&emsp;priceInfo|价格JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;shopeeGlobalListingId|主表关联ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stockInfo|库存JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;tierIndex|属性坐标||false|string||
|&emsp;&emsp;&emsp;&emsp;variationAttribute|存储用于详情回显属性||false|string||
|&emsp;&emsp;sizeChart|尺寸图||false|string||
|&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;stockInfo|库存JSON||false|string||
|&emsp;&emsp;tierVariation|变体属性信息||false|string||
|&emsp;&emsp;timedUploadTime|定时刊登时间||false|string(date-time)||
|&emsp;&emsp;updateField|修改字段 1：产品信息 2：尺寸图片 3：库存 4：价格 5：规格选项 6：新增规格变体||false|array|integer|
|&emsp;&emsp;video|视频JSON||false|string||
|&emsp;&emsp;weight|重量||false|number||


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