# 获取list分页

> 作者：xingzhen

## 获取list分页


**接口地址**:`/shopeelogistic/list`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeLogistic


**请求参数**:
注意:分页size可设置为999,current=1 基本没个店铺数量就几条,可以拿到所有物流数据
必传店铺，根据店铺获取物流数据

**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|account|店铺名|query|true|string||
|current|当前页|query|true|integer(int32)||
|size|每页的数量|query|true|integer(int32)||



**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«ShopeeLogisticVO对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«ShopeeLogisticVO对象»|IPage«ShopeeLogisticVO对象»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|ShopeeLogisticVO对象|
|&emsp;&emsp;&emsp;&emsp;account|店铺名||false|string||
|&emsp;&emsp;&emsp;&emsp;createDept|创建部门||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createUser|创建人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;&emsp;&emsp;feeType|费用类型||false|string||
|&emsp;&emsp;&emsp;&emsp;hasCod|是否支持COD||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;isDeleted|是否已删除||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;itemMaxDimension|包裹限制||false|string||
|&emsp;&emsp;&emsp;&emsp;logisticId|平台物流ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;logisticName|平台物流名称||false|string||
|&emsp;&emsp;&emsp;&emsp;site|站点||false|string||
|&emsp;&emsp;&emsp;&emsp;sizes|支持尺寸||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务状态||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateUser|更新人||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;weightLimits|重量限制||false|string||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;total||integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"current": 0,
		"hitCount": true,
		"pages": 0,
		"records": [
			{
				"account": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"enabled": true,
				"feeType": "",
				"hasCod": true,
				"id": 0,
				"isDeleted": 0,
				"itemMaxDimension": "",
				"logisticId": 0,
				"logisticName": "",
				"site": "",
				"sizes": "",
				"status": 0,
				"updateTime": "",
				"updateUser": 0,
				"weightLimits": ""
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