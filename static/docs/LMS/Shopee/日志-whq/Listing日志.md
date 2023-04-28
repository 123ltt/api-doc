# Listing日志

> 作者：1571221458@qq.com

## Listing日志列表


**接口地址**:`/shopeelistinglog/list`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeListingLog


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 |
| -------- | -------- | ----- | -------- | -------- |
|relationId|关联ID|query|true|integer(int64)|
|relationSku|关联sku|query|true|string|
|createUser|操作人|query|false|integer(int64)|
|updateType|更新类型|query|false|integer(int64)|
|operationType|操作类型|query|false|integer(int64)|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«AmazonListingLogVO对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- |
|content|内容|false|string|
|createTime|操作时间|false|string(date-time)|
|createUserName|操作人|false|string|
|executeStatus|执行状态|false|integer(int64)|
|id|主键id|false|integer(int64)|
|operationType|操作类型|false|integer(int64)|
|relationId|关联ID|false|integer(int64)|
|relationSku|关联SKU|false|string|
|resultMsg|结果信息|false|string|
|updateType|更新类型|false|integer(int64)|
|descs|倒序字段|string|比如:create_time|


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
				"content": "",
				"createDept": 0,
				"createTime": "",
				"createUser": 0,
				"executeStatus": "",
				"id": 0,
				"isDeleted": 0,
				"operationType": "",
				"relationId": 0,
				"relationSku": 0,
				"resultMsg": "",
				"status": 0,
				"updateTime": "",
				"updateType": "",
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