# case新增

> 作者：1638648874@qq.com

## 新增
**作者**:`胡雍`

**接口地址**:`/case/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入cmsCase


**请求示例**:


```javascript
{
	"case2ndReason": "",
	"caseReason": "",
	"caseStatus": 0,
	"caseType": 0,
	"createDept": 0,
	"createTime": "",
	"createUser": 0,
	"currency": "",
	"filePath": "",
	"omsOrderId": "",
	"platOrderId": "",
	"platform": "EB",
	"refundMsg": "",
	"refundType": 0,
	"sku": [
		{
			"pmsSku": null,
			"productQuantity": null,
			"prdouctSalePrice":null
		}
	],
	"storeCode": "",
	"storeName": "",
	"transactionId": ""
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|cmsCase|CmsCase对象|body|true|CmsCase对象|CmsCase对象|
|&emsp;&emsp;case2ndReason|CASE二级原因||false|string||
|&emsp;&emsp;caseReason|CASE原因||false|string||
|&emsp;&emsp;caseStatus|CASE状态(1开始、2跟进、3退款、4重寄、5关闭),具体查看数据字典接口||false|integer(int32)||
|&emsp;&emsp;caseType|CASE类型(1差评、2中评、3退款、4重寄、5售后宝、6其他)，具体查看数据字典接口||true|integer(int32)||
|&emsp;&emsp;currency|币种||false|string||
|&emsp;&emsp;filePath|图片链接||false|string||
|&emsp;&emsp;omsOrderId|OMS订单号||true|string||
|&emsp;&emsp;platOrderId|平台订单号||true|string||
|&emsp;&emsp;platform|平台CODE||true|string||
|&emsp;&emsp;refundMsg|退款留言||false|string||
|&emsp;&emsp;refundType|退款类型(1全额退款 , 2部分退款)||true|integer(int32)||
|&emsp;&emsp;sku|SKU信息(json类型)||false|array|CmsCaseSku|
|&emsp;&emsp;&emsp;&emsp;productQuantity|数量||true|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;prdouctSalePrice|价格||true|float||
|&emsp;&emsp;&emsp;&emsp;pmsSku|PMS SKU||true|string||
|&emsp;&emsp;storeCode|店铺CODE||true|string||
|&emsp;&emsp;storeName|店铺名||false|string||
|&emsp;&emsp;transactionId|交易号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|boolean||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
	"attachedMap": {},
	"code": 0,
	"data": true,
	"msg": "",
	"success": true
}
```