# Listing列表-变体

> 作者：wuhuiqiang

## listing列表-变体


**接口地址**:`/aliexpresslisting/listVariant`


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
|200|OK|R«List«AliexpressListingVariantVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array|AliexpressListingVariantVO对象|
|&emsp;&emsp;costPrice|成本价|number(double)||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;ipmSkuStock|库存|integer(int32)||
|&emsp;&emsp;productSku|产品SKU|string||
|&emsp;&emsp;sellerSku|平台SKU|string||
|&emsp;&emsp;skuDisplayImg|图片|string||
|&emsp;&emsp;skuPrice|价格|number||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"aliexpressListingId": 0,
			"barcode": "",
			"costPrice": 0,
			"createDept": 0,
			"createTime": "",
			"createUser": 0,
			"currencyCode": "",
			"discountPriceJson": "",
			"id": 0,
			"ipmSkuStock": 0,
			"isDeleted": 0,
			"itemId": 0,
			"productSku": "",
			"propertyJson": "",
			"sellerSku": "",
			"skuDiscountPrice": 0,
			"skuDisplayImg": "",
			"skuId": "",
			"skuPrice": 0,
			"skuStock": true,
			"status": 0,
			"updateTime": "",
			"updateUser": 0,
			"warehouseId": 0
		}
	],
	"msg": "",
	"success": true
}
```