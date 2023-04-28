# TT 列表

> 作者：lijinghua@zehui.com

## 分页


**接口地址**:`/ttPlatOrderMain/page`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入ttPlatOrderMain


**请求参数**:


**请求参数**:

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|createdAtStart |date   |创建时间开始|否|
|createdAtEnd |date   |创建时间结束|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|storeNameListStr |String   |店铺编号列表|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
|fulfillmentType |String   |订单来源(0自发货订单,1平台发货订单)|否|
|searchType |Integer   |搜索类型:1-平台单号, 2-OMS单号, 3-在线SKU, 4-跟踪号, 5-收件人姓名|否|
|searchContent |String   |搜索内容|否|
|platOrderStatus |integer   |订单状态:全部:不传此参数 平台审核中:100 待发货:111 已发货:112 已取消:140 标记失败:2 |否|

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«TtPlatOrderMainVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«TtPlatOrderMainVO对象»|IPage«TtPlatOrderMainVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|TtPlatOrderMainVO对象|
|&emsp;&emsp;&emsp;&emsp;addressDetail|地址详情|string||
|&emsp;&emsp;&emsp;&emsp;buyerId|卖家ID|string||
|&emsp;&emsp;&emsp;&emsp;buyerMessage|买家信息|string||
|&emsp;&emsp;&emsp;&emsp;cancelOrderSla|平台指定的订单自动取消时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;cancelReason|取消订单原因|string||
|&emsp;&emsp;&emsp;&emsp;cancelUser|取消人|string||
|&emsp;&emsp;&emsp;&emsp;city|市|string||
|&emsp;&emsp;&emsp;&emsp;companyId|公司id|string||
|&emsp;&emsp;&emsp;&emsp;countryName|国家名称|string||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;&emsp;&emsp;deliveryOption|交付方法|string||
|&emsp;&emsp;&emsp;&emsp;deliveryTime|实际发货时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;district|区|string||
|&emsp;&emsp;&emsp;&emsp;extStatus|平台订单状态子状态|boolean||
|&emsp;&emsp;&emsp;&emsp;freightChargesAmount|客付运费|number||
|&emsp;&emsp;&emsp;&emsp;fulfillmentType|履行类型。只有履行类型为0的订单才能由商家发货|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;fullAddress|地址详细信息|string||
|&emsp;&emsp;&emsp;&emsp;goods|产品信息|array|TtPlatOrderGoodVO对象|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createTime|抓单时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|item创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderId|平台订单号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderItemId|订单商品编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productId|itemId|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productName|product_name|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|购买数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sellerSku|在线SKU|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuExtStatus|sku子状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuId|sku_id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuImage|图片url|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuName|sku名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuOriginalPrice|原价|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuPlatformDiscount|平台折扣|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuSalePrice|销售价|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skuSellerDiscount|卖家折扣|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;storeCode|店铺编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|item更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;houseNumber|房号address_line_list[2]|string||
|&emsp;&emsp;&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;markStatus|标记状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|收件人性名|string||
|&emsp;&emsp;&emsp;&emsp;omOrderId|omOrderId|string||
|&emsp;&emsp;&emsp;&emsp;omOrderStatus|OMS订单状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;omOrderStatusStr|OMS订单状态|string||
|&emsp;&emsp;&emsp;&emsp;omsMarkDate|oms标记时间(oms生成)|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;orderId|TT平台订单id|string||
|&emsp;&emsp;&emsp;&emsp;orderStatus|平台订单状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;orderStatusStr|订单状态:平台审核中 待发货订单 已发货订单 已完成订单 已取消订单 已取消订单 标记失败|string||
|&emsp;&emsp;&emsp;&emsp;orderTime|订单创建时间 (json中的create_time字段)|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型 （0：线上 1：手工）|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;orderTypeStr|订单来源|string||
|&emsp;&emsp;&emsp;&emsp;orderUpdateTime|订单信息变更时间（json中update_time字段）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;originalShippingFee|折扣前运费|number||
|&emsp;&emsp;&emsp;&emsp;originalTotalProductPrice|产品原价合计|number||
|&emsp;&emsp;&emsp;&emsp;packageList|Package IDs|string||
|&emsp;&emsp;&emsp;&emsp;paidTime|付款时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;paymentAmount|订单总金额|number||
|&emsp;&emsp;&emsp;&emsp;paymentMethod|付款方式|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机|string||
|&emsp;&emsp;&emsp;&emsp;platformDiscount|平台折扣|number||
|&emsp;&emsp;&emsp;&emsp;platformTradeAmount|平台交易费|number||
|&emsp;&emsp;&emsp;&emsp;pushed|是否已推送到OM:0-待推送,1-推送成功或者OM已存在,2-推送失败,3-不需要推送:老系统中已存在或者被过滤|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;receiverAddressUpdated|收件地址是否变更0: no update 1: udpated|boolean||
|&emsp;&emsp;&emsp;&emsp;region|国家|string||
|&emsp;&emsp;&emsp;&emsp;rtsSla|最晚发货时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;rtsTime|发货时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sellerDiscount|折扣由卖方|number||
|&emsp;&emsp;&emsp;&emsp;sellerIncomeAmount|卖家实收|number||
|&emsp;&emsp;&emsp;&emsp;sellerIncomeFreight|卖家实收运费|number||
|&emsp;&emsp;&emsp;&emsp;shippingFee|买方支付运费|number||
|&emsp;&emsp;&emsp;&emsp;shippingFeePlatformDiscount|运费折扣的平台|number||
|&emsp;&emsp;&emsp;&emsp;shippingFeeSellerDiscount|运费折扣由卖方|number||
|&emsp;&emsp;&emsp;&emsp;shippingProvider|物流商|string||
|&emsp;&emsp;&emsp;&emsp;shippingProviderId|物流商id|string||
|&emsp;&emsp;&emsp;&emsp;shopId|订单api对应的shop_id|string||
|&emsp;&emsp;&emsp;&emsp;splitOrCombineTag|订单是合并还是拆分|string||
|&emsp;&emsp;&emsp;&emsp;state|省，州|string||
|&emsp;&emsp;&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;storeCode|店铺编码|string||
|&emsp;&emsp;&emsp;&emsp;storeName|店铺名称|string||
|&emsp;&emsp;&emsp;&emsp;streetName|街道名address_line_list[0][1]|string||
|&emsp;&emsp;&emsp;&emsp;subTotal|买方支付了订单中所有sku的小计金额|number||
|&emsp;&emsp;&emsp;&emsp;tax|税费|number||
|&emsp;&emsp;&emsp;&emsp;taxes|税额|number||
|&emsp;&emsp;&emsp;&emsp;totalAmount|总金额|number||
|&emsp;&emsp;&emsp;&emsp;town|镇|string||
|&emsp;&emsp;&emsp;&emsp;trackingNumber|标记跟踪号|string||
|&emsp;&emsp;&emsp;&emsp;ttsSla|平台指定的最新采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;zipcode|邮编|string||
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