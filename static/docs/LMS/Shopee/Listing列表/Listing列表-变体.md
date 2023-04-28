# Listing列表-变体

> 作者：1571221458@qq.com

## listing列表-变体


**接口地址**:`/shopeelisting/listVariant`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入id


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|主键|query|true|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«List«ShopeeListingVariantVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array|ShopeeListingVariantVO对象|
|&emsp;&emsp;costPrice|成本价|number(double)||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;itemStatus|商品状态|string||
|&emsp;&emsp;name|变体名称|string||
|&emsp;&emsp;discountId|活动id(为null或者为0都代表没有活动价)|long||
|&emsp;&emsp;price|活动价|number(double)||
|&emsp;&emsp;originalPrice|价格|number(double)||
|&emsp;&emsp;productSku|产品SKU|string||
|&emsp;&emsp;sellerSku|平台SKU|string||
|&emsp;&emsp;stock|库存|integer(int32)||
|&emsp;&emsp;modelId|变体ID|integer(int32)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
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
			"variationId": 0
		}
	],
	"msg": "",
	"success": true
}
```