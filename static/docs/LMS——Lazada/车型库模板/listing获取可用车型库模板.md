# listing获取可用车型库模板

> 作者：yangruibo

## 获取listing可选的模板选项


**接口地址**:`/ebay/compatibility/templates/options`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"platCategoryId": "",
	"skus": [],
	"siteCode": ""
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|&amp;emsp;&amp;emsp;siteCode|站点||false|string||
|&amp;emsp;&amp;emsp;skus|SKU 集合||false|array|string|
|&amp;emsp;&amp;emsp;platCategoryId|平台类目ID||false|string|||

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«List«EbayCompatibilityTemplateVO对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array|EbayCompatibilityTemplateVO对象|
|&amp;emsp;&amp;emsp;createDept|创建部门|integer(int64)||
|&amp;emsp;&amp;emsp;createTime|创建时间|string(date-time)||
|&amp;emsp;&amp;emsp;createUser|创建人|integer(int64)||
|&amp;emsp;&amp;emsp;createUserName|创建人姓名|string||
|&amp;emsp;&amp;emsp;name|模板名称|string||
|&amp;emsp;&amp;emsp;platCategoryId|平台类目ID|string||
|&amp;emsp;&amp;emsp;siteCode|站点|string||
|&amp;emsp;&amp;emsp;status|业务状态|integer(int32)||
|&amp;emsp;&amp;emsp;updateTime|更新时间|string(date-time)||
|&amp;emsp;&amp;emsp;updateUser|更新人|integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"createDept": 0,
			"createTime": "",
			"createUser": 0,
			"createUserName": "",
			"isDeleted": 0,
			"name": "",
			"platCategoryId": "",
			"siteCode": "",
			"status": 0,
			"updateTime": "",
			"updateUser": 0
		}
	],
	"msg": "",
	"success": true
}
```