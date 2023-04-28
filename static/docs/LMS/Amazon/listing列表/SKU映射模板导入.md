# SKU映射模板导入

> 作者：wuxin

## SKU映射模板导入


**接口地址**:`/amazonlisting/skuUpload`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:file


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 |
| -------- | -------- | ----- | -------- | -------- |
|file|url路径|formData|true|string|


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
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|boolean||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": true,
	"msg": "",
	"success": true
}
```