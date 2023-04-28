# 导出listing结果列表

> 作者：xingzhen

## 导出listing结果列表


**接口地址**:`/shopeeExportRecord/list`


**请求方式**:`GET`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeGlobalListing


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|size|每页的数量|query|false|integer(int32)||
|current|当前页|query|false|integer(int32)||
|status|1:全球 2：单店铺|query|false|integer(int32)||
|descs|create_time 创建时间倒序|query|false|integer(int32)||
|exportStatus|1:待导出 2:导出中  3:失败 4:成功|query|false|integer(int32)||
|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«ShopeeGlobalListingVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«ShopeeGlobalListingVO对象»|IPage«ShopeeGlobalListingVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|ShopeeGlobalListingVO对象|
|&emsp;&emsp;&emsp;&emsp;account|店铺名||false|string||
|&emsp;&emsp;&emsp;&emsp;resultMsg|报错信息||false|string||
|&emsp;&emsp;&emsp;&emsp;accountCode|店铺名CODE||false|string||
|&emsp;&emsp;&emsp;&emsp;attributeJson|存储用于详情回显属性||false|string||
|&emsp;&emsp;&emsp;&emsp;attributeList|属性JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;auditTime|审核时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;brand|品牌JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;categoryId|类目id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;condition|物品状况||false|string||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;customerUser|客服人员||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;description|商品描述||false|string||
|&emsp;&emsp;&emsp;&emsp;developUser|开发人员||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;dimension|长宽高JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;globalItemId|平台GlobalID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;globalItemName|商品标题||false|string||
|&emsp;&emsp;&emsp;&emsp;globalItemStatus|商品状态||false|string||
|&emsp;&emsp;&emsp;&emsp;hasModel|是否包含变体||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;images|图片JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isOnline|是否在线||false|boolean||
|&emsp;&emsp;&emsp;&emsp;isShopeeUpload|刊登方式 0:蝌蚪刊登 1:后台刊登 2:新系统刊登||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;listingCreateTime|平台创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;listingStatus|listing状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;listingType|listing类型||false|string||
|&emsp;&emsp;&emsp;&emsp;listingUpdateTime|平台修改时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;logistics|物流JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;preOrder|预售JSON 包含是否预售和运输天数||false|string||
|&emsp;&emsp;&emsp;&emsp;daysToShip|运输天数||false|string||
|&emsp;&emsp;&emsp;&emsp;price|价格||false|number||
|&emsp;&emsp;&emsp;&emsp;priceInfo|价格JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;productSpu|产品SPU||false|string||
|&emsp;&emsp;&emsp;&emsp;publishableShop|可发布店铺JSON（用逗号分隔的字符串）||false|string||
|&emsp;&emsp;&emsp;&emsp;publishedShop|已发布店铺JSON（用逗号分隔的字符串）||false|string||
|&emsp;&emsp;&emsp;&emsp;saleUser|负责人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;sellerSku|平台SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;shopId|店铺id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sizeChart|尺寸图||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stock|库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stockInfo|库存JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;tierVariation|变体属性信息||false|string||
|&emsp;&emsp;&emsp;&emsp;timedUploadTime|定时刊登时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;upOnlineTime|上架时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;variantNum|变体个数||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;video|视频JSON||false|string||
|&emsp;&emsp;&emsp;&emsp;weight|重量||false|number||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;total||integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"attachedMap": {},
	"code": 0,
	"data": {
		"current": 0,
		"hitCount": true,
		"pages": 0,
		"records": [
			{
				"account": "",
				"accountCode": "",
				"attributeJson": "",
				"attributeList": "",
				"auditTime": "",
				"brand": "",
				"categoryId": 0,
				"condition": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"customerUser": 0,
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
				"preOrder": "",
				"daysToShip": "",
				"price": 0,
				"priceInfo": "",
				"productSpu": "",
				"publishableShop": "",
				"publishedShop": "",
				"saleUser": 0,
				"sellerSku": "",
				"shopId": 0,
				"sizeChart": "",
				"status": 0,
				"stock": 0,
				"stockInfo": "",
				"tierVariation": "",
				"timedUploadTime": "",
				"upOnlineTime": "",
				"updateTime": "",
				"updateUser": 0,
				"variantNum": 0,
				"video": "",
				"weight": 0
			}
		],
		"searchCount": true,
		"size": 0,
		"total": 0
	},
	"msg": "",
	"success": true
}
```