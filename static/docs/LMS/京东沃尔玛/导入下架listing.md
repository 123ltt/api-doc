# 导入下架listing

> 作者：1638648874@qq.com

## 导入下架listing


**接口地址**:`/jdwalmartListing/importForUnshelf`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"fileUrl": ""，
	"fileName": ""
}
```



**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jdwalmartUnshelfParamDTO|jdwalmartUnshelfParamDTO|body|true|JdwalmartImportUnshelfParamDTO|JdwalmartImportUnshelfParamDTO|
|&emsp;&emsp;fileUrl|||true|string||
|&emsp;&emsp;fileName|源文件名||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|boolean||
|msg|返回消息|string||
|msgDetail|返回消息(详情)|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"attachedMap": {},
	"code": 0,
	"data": true,
	"msg": "",
	"msgDetail": "",
	"success": true
}
```