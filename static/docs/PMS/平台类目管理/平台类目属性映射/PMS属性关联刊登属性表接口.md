# PMS属性关联刊登属性表接口

> 作者：tanqichou

# PMS类目关联刊登属性表接口


## 添加或更新属性映射


**接口地址**:`/cpms/categoryPublishAttr/addAndUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入categoryPublishAttr


**请求示例**:


```javascript
{
	"attrBindList": [
		{
			"attrId": 0,
			"id": 0,
			"publishAttrCode": ""
		}
	],
	"categoryId": 0,
	"deleteIdList": [],
	"platformCode": "",
	"siteCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|attrAddAndUpdateDTO|添加更新属性映射|body|true|CategoryPublishAttrAddAndUpdateAddDTO对象|CategoryPublishAttrAddAndUpdateAddDTO对象|
|&emsp;&emsp;attrId|PMS属性ID||false|integer(int64)||
|&emsp;&emsp;categoryId|PMS类目ID||false|integer(int64)||
|&emsp;&emsp;id|||false|integer(int64)||
|&emsp;&emsp;platformCode|平台CODE||false|string||
|&emsp;&emsp;publishAttrCode|刊登属性CODE||false|string||
|&emsp;&emsp;siteCode|站点CODE||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```