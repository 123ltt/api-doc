# Listing-修改

> 作者：xuxiaofei

## 作者
-  吴新
    
## 简要描述

- 修改listing

## 请求URL
- ` http://xxx/aliexpresslisting/update`
  
## 请求方式
- POST 

## 参数

|参数名|必填|类型|说明|
|:----|:---|:----- |-----|
|id|true|number |主键ID|
|account|true|string |店铺名|
|accountCode|true|string |店铺名CODE|
|itemId|true|number |平台ID|
|productSpu|true|string |产品spu|
|listingType|true|string |listing类型|
|listingStatus|true|number |listing状态|
|subject|true|string |商品标题|
|detail|true|string |商品描述|
|addUnit|false|number |计重时每增加件数|
|addWeight|false|string |计重时对应增加的重量,保留三位小数,公斤|
|baseUnit|false|number |计重时购买几件以内不增加运费|
|bulkDiscount|false|number |批发折扣。扩大100倍，存整数。取值范围:1-99。注意：这是折扣，不是打折率。 如,打68折,则存32。批发最小数量和批发折扣需同时有值或无值。|
|bulkOrder|false|number |批发最小数量|
|categoryId|true|number |类目ID|
|categoryName|true|string |类目名|
|deliveryTime|true|number |备货期,取值范围:1-60;单位:天|
|freightTemplateId|true|number |运费模版ID|
|detailTemplateName |false |string | 产品信息模板名 |
|grossWeight|true|string|商品毛重,保留三位小数,公斤|
|groupId|false|number |分组ID|
|groupIds|false|array |分组列表|
|imageUrls|true|string |主图列表 ;分隔|
|isPackSell|true|boolean |是否支持是自定义计重|
|lotNum|true|number |每包件数|
|packageLength|true|number |长|
|packageWidth|true|number |宽|
|packageHeight|true|number |高|
|productPrice|true|number |单品价格|
|productStatusType|true|string |产品的状态|
|productUnit|true|number |商品单位|
|promiseTemplateId|true|number |服务模版|
|reduceStrategy|true|string |库存扣减策略|
|sizechartId|true|number |尺码模版|
|packageType|true|boolean |打包销售: true 非打包销售:false|
|carAttrTemplateId|false|number|车型库模板id|
|nationQuoteTemplateId|false|number|区域调价模板id|
|nationQuoteCountry|false|array|区域调价国家|
|fbwordConfirm|true|boolean |敏感词确认|
|developUser|true|number |开发人员|
|needUpload|false|boolean |是否需要上传|
|isNewCalculateWay|false|boolean|价格计算方式(true:新, false:旧)|
|perKgFreightFee|false|number|每公斤运费|
|registeredFee|false|number|挂号费|
|marketImages|false|array|营销图|
|&emsp;&emsp; url|false|string |营销图片URL|
|&emsp;&emsp; imageType|false|number |	1：代表长图，大小为750×1000; 2：代表方图，大小为800×800|
|
|property|true|array |商品属性信息|
|&emsp;&emsp; attrNameId|false|number |属性名ID。不可填入sku属性。 自定义属性名时,该项不填.|
|&emsp;&emsp; attrValueId|false|number |属性值ID 不可填入sku属性。 自定义属性值时,该项不填|
|&emsp;&emsp; attrName|false|string |自定义属性名属性名。 自定义属性名时,该项必填.|
|&emsp;&emsp; attrValue|true|string |自定义属性值。自定义属性名时,该项必填。 当自定义属性值内容为区间情况时，建议格式2 - 5 kg。(注意，数字'-'单位三者间是要加空格的！)|
|&emsp;&emsp; attrValueUnit|false|string |自定义属性值单位|
|&emsp;&emsp; attrValueStart|false|string |自定义属性值的开始端|
|&emsp;&emsp; attrValueEnd|false|string |自定义属性值的结束端|
|
|variants|true|array |sku变体信息|
|&emsp;&emsp; itemId|true|number |平台ID|
|&emsp;&emsp; skuId|true|string |skuId|
|&emsp;&emsp; productSku|true|string |产品SKU|
|&emsp;&emsp; sellerSku|true|string |平台SKU|
|&emsp;&emsp; ipmSkuStock|true|number |库存|
|&emsp;&emsp; skuPrice|true|number |价格|
|&emsp;&emsp; skuDiscountPrice|false|number |促销价|
|&emsp;&emsp; costPrice|true|number |成本价|
|&emsp;&emsp; skuProperty|false|array |sku属性|
|&emsp;&emsp;&emsp;&emsp; skuPropertyId|true|number |属性Id|
|&emsp;&emsp;&emsp;&emsp; propertyValueId|true|number |属性值Id|
|&emsp;&emsp;&emsp;&emsp; skuImage|false|string |自定义图片|
|&emsp;&emsp;&emsp;&emsp; propertyValueDefinitionName|false|string |属性自定义名称|




## 请求示例 

``` 
{
	"id": 1,
	"account": "123",
	"accountCode": "1234",
	"itemId": 1234568,
	"productSpu":"sdf2525"
	"listingType": "Variation",
	"listingStatus": 1,
	"subject": "",
	"detail": "",
	"addUnit": 1,
	"addWeight": "123.456",
	"baseUnit": 1,
	"bulkDiscount": 80,
	"bulkOrder": 10,
	"categoryId":4151615,
	"categoryName": "sdfa",
	"deliveryTime": 3,
	"freightTemplateId": 15231561,
	"detailTemplateName": "a",
	"grossWeight": "123.456",
	"groupId": 1234564,
	"groupIds": [123,456,789],
	"imageUrls": "http://aaa.jpg;http://bbb.jpg",
	"isPackSell": false,
	"lotNum": 10,
	"packageLength": 1,
	"packageWidth": 2,
	"packageHeight": 3,
	"productPrice": 10,
	"productStatusType": "onSelling",
	"productUnit": 000001,
	"promiseTemplateId": 156156,
	"reduceStrategy": "",
	"sizechartId": 1561616,
	"packageType": true,
	"property":[
		{
			"attrNameId": 123,
			"attrValueId": 456,
			"attrName": "sdf",
			"attrValue": "qwe",
			"attrValueUnit": "UN",
			"attrValueStart": "123",
			"attrValueEnd": "456",
		},
		{
			"attrNameId": 456,
			"attrValueId": 789,
			"attrName": "sdf",
			"attrValue": "qwe",
			"attrValueUnit": "UN",
			"attrValueStart": "123",
			"attrValueEnd": "456",
		}
	],
	"variants":[
		{
			"itemId": 123,
			"skuId": "45678:6458;49115:10020",
			"sellerSku": "sdaf123",
			"ipmSkuStock": 999,
			"skuPrice": 12.32,
			"skuDiscountPrice": 8.1,
			"costPrice": 1,
			"skuProperty":[
				{
					"skuPropertyId": 45678,
					"propertyValueId": 6458,
					"skuImage": "http://qqq.jpg",
					"propertyValueDefinitionName": "zzzz"
				},
				{
					"skuPropertyId": 49115,
					"propertyValueId": 10020
				}
			]
		},
		{
			"itemId": 123,
			"skuId": "45678:6458;49115:8521",
			"sellerSku": "sdaf123",
			"ipmSkuStock": 999,
			"skuPrice": 12.32,
			"skuDiscountPrice": 8.1,
			"costPrice": 1,
			"skuProperty":[
				{
					"skuPropertyId": 45678,
					"propertyValueId": 6458,
					"skuImage": "http://qqq.jpg",
					"propertyValueDefinitionName": "zzzz"
				},
				{
					"skuPropertyId": 49115,
					"propertyValueId": 8521
				}
			]
		}
	]
}
```

## 返回示例 

``` 
  {
    "msg": "操作成功",
    "code": 200,
    "data": null
  }
```

## 备注 

- code | 201 | 警告