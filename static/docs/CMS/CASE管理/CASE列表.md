# CASE列表

> 作者：lijinghua@zehui.com

## 分页

**开发人** : `李景华`

**接口地址**:`/case/page`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入cmsCase

**对接之前参考OMS原型地址** :

[OMS原型地址](http://pu-ng.zehui.local/OMS/#id=vwlytj&p=%E8%AE%A2%E5%8D%95%E8%AF%A6%E6%83%85%E4%BF%A1%E6%81%AF&g=1 "OMS原型地址")

**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|platform|平台CODE|query|false|string||
|storeCodes|店铺CODE|query|false|array|-|
|createUser|创建人|query|false|integer(int32)||
|fromCreateTime|开始创建时间|query|false|string||
|toCreateTime|结束创建时间|query|false|string||
|caseStatus|CASE状态|query|false|integer(int32)||
|caseType|CASE类型|query|false|integer(int32)||
|caseReason|CASE原因|query|false|string||
|omsOrderId|OMS订单号|query|false|string||
|platOrderId|平台订单号|query|false|string||
|current|当前页|query|false|integer(int32)||
|size|每页的数量|query|false|integer(int32)|-|


**请求参数取值**

**1. CASE状态**

从Dict接口数据字典中取值

|appCode|code|
|-------|----|
|CMS    | case_status|

{{service_gateaway_address}}dict/dict/client/dict/get-list?appCode=CMS&code=case_status

**2. 类型**

从Dict接口数据字典中取值

|appCode|code|
|-------|----|
|CMS    | case_type|

{{service_gateaway_address}}dict/dict/client/dict/get-list?appCode=CMS&code=case_type

**3. 原因**

从Dict接口数据字典中取值

|appCode|code|
|-------|----|
|CMS    | case_reason|

{{service_gateaway_address}}dict/dict/client/dict/get-list?appCode=CMS&code=case_reason


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«CmsCaseVO对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|-|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«CmsCaseVO对象»|IPage«CmsCaseVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|CmsCaseVO对象|
|&emsp;&emsp;&emsp;&emsp;case2ndReason|CASE二级原因|string||
|&emsp;&emsp;&emsp;&emsp;case2ndReasonDisplay|CASE二级原因展示|string||
|&emsp;&emsp;&emsp;&emsp;caseReason|CASE原因|string||
|&emsp;&emsp;&emsp;&emsp;caseReasonDisplay|CASE原因展示|string||
|&emsp;&emsp;&emsp;&emsp;caseStatus|CASE状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;caseStatusDisplay|CASE状态展示|string||
|&emsp;&emsp;&emsp;&emsp;caseType|CASE类型|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;caseTypeDisplay|CASE类型展示|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUserName|创建人名称|string||
|&emsp;&emsp;&emsp;&emsp;filePath|图片链接|string||
|&emsp;&emsp;&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;omsOrderId|OMS订单号|string||
|&emsp;&emsp;&emsp;&emsp;platOrderId|平台订单号|string||
|&emsp;&emsp;&emsp;&emsp;platform|平台CODE|string||
|&emsp;&emsp;&emsp;&emsp;skus|SKU信息实体类|array|CmsCaseSkuVO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productQuantity|SKU数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pmsSku|SKU|string||
|&emsp;&emsp;&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;storeCode|店铺CODE|string||
|&emsp;&emsp;&emsp;&emsp;storeName|店铺名|string||
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
				"case2ndReason": "",
				"case2ndReasonDisplay": "",
				"caseReason": "",
				"caseReasonDisplay": "",
				"caseStatus": 0,
				"caseStatusDisplay": "",
				"caseType": 0,
				"caseTypeDisplay": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"createUserName": "",
				"currency": "",
				"filePath": "",
				"id": 0,
				"isDeleted": 0,
				"omsOrderId": "",
				"platOrderId": "",
				"platform": "",
				"refundMsg": "",
				"refundType": 0,
				"sku": "",
				"skus": [
					{
						"quantity": 0,
						"sku": ""
					}
				],
				"status": 0,
				"storeCode": "",
				"storeName": "",
				"transactionId": "",
				"updateTime": "",
				"updateUser": 0
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