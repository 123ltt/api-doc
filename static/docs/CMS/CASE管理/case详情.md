# case详情

> 作者：1638648874@qq.com

## 详情
**作者**:`胡雍`


**接口地址**:`/case/detail`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入cmsCase



**请求参数**:


|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |必选  |number |主键id |


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«CmsCaseVO对象»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|CmsCaseVO对象|CmsCaseVO对象|
|&emsp;&emsp;case2ndReason|CASE二级原因|string||
|&emsp;&emsp;case2ndReasonDisplay|CASE二级原因展示|string||
|&emsp;&emsp;caseReason|CASE原因|string||
|&emsp;&emsp;caseReasonDisplay|CASE原因展示|string||
|&emsp;&emsp;caseStatus|CASE状态(1开始、2跟进、3退款、4重寄、5关闭)|integer(int32)||
|&emsp;&emsp;caseStatusDisplay|CASE状态展示|string||
|&emsp;&emsp;caseType|CASE类型(1差评、2中评、3退款、4重寄、5售后宝、6其他)|integer(int32)||
|&emsp;&emsp;caseTypeDisplay|CASE类型展示|string||
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;createUserName|创建人名称|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;filePath|图片链接|string||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;omsOrderId|OMS订单号|string||
|&emsp;&emsp;platOrderId|平台订单号|string||
|&emsp;&emsp;platform|平台CODE|string||
|&emsp;&emsp;refundMsg|退款留言|string||
|&emsp;&emsp;refundType|退款类型(1全额退款 , 2部分退款)|integer(int32)||
|&emsp;&emsp;sku|SKU数据库内容|string||
|&emsp;&emsp;skus|SKU信息实体类|array|CmsCaseSkuVO|
|&emsp;&emsp;&emsp;&emsp;pmsSku||string||
|&emsp;&emsp;&emsp;&emsp;productQuantity||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;productSalePrice||number||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;storeCode|店铺CODE|string||
|&emsp;&emsp;storeName|店铺名|string||
|&emsp;&emsp;transactionId|交易号|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;updateUser|更新人|integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
	"attachedMap": {},
	"code": 0,
	"data": {
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
				"pmsSku": "",
				"productQuantity": 0,
				"productSalePrice": 0
			}
		],
		"status": 0,
		"storeCode": "",
		"storeName": "",
		"transactionId": "",
		"updateTime": "",
		"updateUser": 0
	},
	"msg": "",
	"success": true
}
```