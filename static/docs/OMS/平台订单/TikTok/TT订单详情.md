# TT订单详情

> 作者：lijinghua@zehui.com

## 详情


**接口地址**:`/ttPlatOrderMain/detail`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入ttPlatOrderMain


**请求示例**:


```javascript
{
	"orderId": "",
	"storeCode": ""
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|&emsp;&emsp;orderId|TT平台订单id||false|string||
|&emsp;&emsp;storeCode|店铺编码||false|string|-|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«TtPlatOrderMainVO对象»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|TtPlatOrderMainVO对象|TtPlatOrderMainVO对象|
|&emsp;&emsp;addressDetail|地址详情|string||
|&emsp;&emsp;buyerId|卖家ID|string||
|&emsp;&emsp;buyerMessage|买家信息|string||
|&emsp;&emsp;cancelOrderSla|平台指定的订单自动取消时间|string(date-time)||
|&emsp;&emsp;cancelReason|取消订单原因|string||
|&emsp;&emsp;cancelUser|取消人|string||
|&emsp;&emsp;city|市|string||
|&emsp;&emsp;companyId|公司id|string||
|&emsp;&emsp;countryName|国家名称|string||
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;deliveryOption|派送类型|string||
|&emsp;&emsp;deliveryTime|实际发货时间|string(date-time)||
|&emsp;&emsp;district|区|string||
|&emsp;&emsp;extStatus|平台订单状态子状态|boolean||
|&emsp;&emsp;freightChargesAmount|客付运费|number||
|&emsp;&emsp;fulfillmentType|履行类型。只有履行类型为0的订单才能由商家发货|integer(int32)||
|&emsp;&emsp;fullAddress|地址详细信息|string||
|&emsp;&emsp;goods|产品信息|array|TtPlatOrderGoodVO对象|
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createdAt|item创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;orderId|平台订单号|string||
|&emsp;&emsp;&emsp;&emsp;orderItemId|订单商品编号|string||
|&emsp;&emsp;&emsp;&emsp;productId|itemId|string||
|&emsp;&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;quantity|购买数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sellerSku|商品货号|string||
|&emsp;&emsp;&emsp;&emsp;skuExtStatus|sku子状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;skuId|sku_id|string||
|&emsp;&emsp;&emsp;&emsp;skuImage|图片url|string||
|&emsp;&emsp;&emsp;&emsp;skuName|sku名称|string||
|&emsp;&emsp;&emsp;&emsp;skuOriginalPrice|原价|number||
|&emsp;&emsp;&emsp;&emsp;skuPlatformDiscount|平台折扣|number||
|&emsp;&emsp;&emsp;&emsp;skuSalePrice|产品价格|number||
|&emsp;&emsp;&emsp;&emsp;skuSellerDiscount|卖家SKU折扣|number||
|&emsp;&emsp;&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;storeCode|店铺编码|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|item更新时间|string(date-time)||
|&emsp;&emsp;houseNumber|房号address_line_list[2]|string||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;markStatus|标记状态|integer(int32)||
|&emsp;&emsp;name|收件人性名|string||
|&emsp;&emsp;omOrderId|omOrderId|string||
|&emsp;&emsp;omOrderStatus|OMS订单状态|integer(int32)||
|&emsp;&emsp;omOrderStatusStr|OMS订单状态|string||
|&emsp;&emsp;omsMarkDate|oms标记时间(oms生成)|string(date-time)||
|&emsp;&emsp;orderId|TT平台订单id|string||
|&emsp;&emsp;orderStatus|平台订单状态|integer(int32)||
|&emsp;&emsp;orderStatusStr|订单状态:1.待付款2.待发货订单3.已发货订单4.已完成订单5.已取消订单6.标记失败|string||
|&emsp;&emsp;orderTime|订单创建时间 (json中的create_time字段)|string(date-time)||
|&emsp;&emsp;orderType|订单类型 （0：线上 1：手工）|integer(int32)||
|&emsp;&emsp;orderTypeStr|订单来源|string||
|&emsp;&emsp;orderUpdateTime|平台订单最后更新时间（json中update_time字段）|string(date-time)||
|&emsp;&emsp;originalShippingFee|折扣前运费|number||
|&emsp;&emsp;originalTotalProductPrice|产品原价总价|number||
|&emsp;&emsp;packageList|Package IDs|string||
|&emsp;&emsp;paidTime|付款时间|string(date-time)||
|&emsp;&emsp;paymentAmount|买家实付金额|number||
|&emsp;&emsp;paymentMethod|付款方式|string||
|&emsp;&emsp;phone|手机|string||
|&emsp;&emsp;platformDiscount|平台折扣|number||
|&emsp;&emsp;platformTradeAmount|平台交易费|number||
|&emsp;&emsp;pushed|是否已推送到OM:0-待推送,1-推送成功或者OM已存在,2-推送失败,3-不需要推送:老系统中已存在或者被过滤|integer(int32)||
|&emsp;&emsp;receiverAddressUpdated|收件地址是否变更0: no update 1: udpated|boolean||
|&emsp;&emsp;region|国家|string||
|&emsp;&emsp;rtsSla|最晚发货时间|string(date-time)||
|&emsp;&emsp;rtsTime|发货时间|string(date-time)||
|&emsp;&emsp;sellerDiscount|卖家折扣|number||
|&emsp;&emsp;sellerIncomeAmount|卖家实收金额|number||
|&emsp;&emsp;sellerIncomeFreight|卖家实收运费|number||
|&emsp;&emsp;shippingFee|客付运费|number||
|&emsp;&emsp;shippingFeePlatformDiscount|运费折扣的平台|number||
|&emsp;&emsp;shippingFeeSellerDiscount|运费折扣由卖方|number||
|&emsp;&emsp;productTotal|实付商品总价|number||
|&emsp;&emsp;shippingProvider|物流方式|string||
|&emsp;&emsp;shippingProviderId|物流商id|string||
|&emsp;&emsp;shopId|订单api对应的shop_id|string||
|&emsp;&emsp;splitOrCombineTag|订单是合并还是拆分|string||
|&emsp;&emsp;state|省，州|string||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;storeCode|店铺编码|string||
|&emsp;&emsp;storeName|店铺名称|string||
|&emsp;&emsp;streetName|街道名address_line_list[0][1]|string||
|&emsp;&emsp;subTotal|买方支付了订单中所有sku的小计金额|number||
|&emsp;&emsp;tax|税费|number||
|&emsp;&emsp;taxes|税额|number||
|&emsp;&emsp;totalAmount|总金额|number||
|&emsp;&emsp;town|镇|string||
|&emsp;&emsp;trackingNumber|跟踪号|string||
|&emsp;&emsp;ttsSla|平台指定的最新采集时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;zipcode|邮编|string||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"attachedMap": {},
	"code": 0,
	"data": {
		"addressDetail": "",
		"buyerId": "",
		"buyerMessage": "",
		"cancelOrderSla": "",
		"cancelReason": "",
		"cancelUser": "",
		"city": "",
		"companyId": "",
		"countryName": "",
		"createDept": 0,
		"createTime": "",
		"createUser": 0,
		"currency": "",
		"deliveryOption": "",
		"deliveryTime": "",
		"district": "",
		"extStatus": true,
		"freightChargesAmount": 0,
		"fulfillmentType": 0,
		"fullAddress": "",
		"goods": [
			{
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"createdAt": "",
				"id": 0,
				"isDeleted": 0,
				"orderId": "",
				"orderItemId": "",
				"productId": "",
				"productName": "",
				"quantity": 0,
				"sellerSku": "",
				"skuExtStatus": 0,
				"skuId": "",
				"skuImage": "",
				"skuName": "",
				"skuOriginalPrice": 0,
				"skuPlatformDiscount": 0,
				"skuSalePrice": 0,
				"skuSellerDiscount": 0,
				"status": 0,
				"storeCode": "",
				"updateTime": "",
				"updateUser": 0,
				"updatedAt": ""
			}
		],
		"houseNumber": "",
		"id": 0,
		"isDeleted": 0,
		"markStatus": 0,
		"name": "",
		"omOrderId": "",
		"omOrderStatus": 0,
		"omOrderStatusStr": "",
		"omsMarkDate": "",
		"orderId": "",
		"orderStatus": 0,
		"orderStatusStr": "",
		"orderTime": "",
		"orderType": 0,
		"orderTypeStr": "",
		"orderUpdateTime": "",
		"originalShippingFee": 0,
		"originalTotalProductPrice": 0,
		"packageList": "",
		"paidTime": "",
		"paymentAmount": 0,
		"paymentMethod": "",
		"phone": "",
		"platformDiscount": 0,
		"platformTradeAmount": 0,
		"productTotal" : 0,
		"pushed": 0,
		"receiverAddressUpdated": true,
		"region": "",
		"rtsSla": "",
		"rtsTime": "",
		"sellerDiscount": 0,
		"sellerIncomeAmount": 0,
		"sellerIncomeFreight": 0,
		"shippingFee": 0,
		"shippingFeePlatformDiscount": 0,
		"shippingFeeSellerDiscount": 0,
		"shippingProvider": "",
		"shippingProviderId": "",
		"shopId": "",
		"splitOrCombineTag": "",
		"state": "",
		"status": 0,
		"storeCode": "",
		"storeName": "",
		"streetName": "",
		"subTotal": 0,
		"tax": 0,
		"taxes": 0,
		"totalAmount": 0,
		"town": "",
		"trackingNumber": "",
		"ttsSla": "",
		"updateTime": "",
		"updateUser": 0,
		"zipcode": ""
	},
	"msg": "",
	"success": true
}
```