# Listing列表-变体

> 作者：wuhuiqiang

## listing列表-变体


**接口地址**:`/wishlisting/listVariant`


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
|200|OK|R«List«WishListingVariantVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array|WishListingVariantVO对象|
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;inventory|库存|integer(int32)||
|&emsp;&emsp;isEnabled|是否启用|boolean||
|&emsp;&emsp;localizedPrice|本地价格|number||
|&emsp;&emsp;mainImage|主图|string||
|&emsp;&emsp;productSku|内部SKU|string||
|&emsp;&emsp;sellerSku|平台SKU|string||
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
			"id": 0,
			"inventory": 0,
			"isDeleted": 0,
			"isEnabled": true,
			"itemId": "",
			"localizedCurrencyCode": "",
			"localizedPrice": 0,
			"mainImage": "",
			"msrp": 0,
			"multiAttr": "",
			"parentSku": "",
			"price": 0,
			"productSku": "",
			"sellerSku": "",
			"shippingCost": 0,
			"shippingTime": "",
			"status": 0,
			"updateTime": "",
			"updateUser": 0,
			"wishItemId": "",
			"wishListingId": 0
		}
	],
	"msg": "",
	"success": true
}
```