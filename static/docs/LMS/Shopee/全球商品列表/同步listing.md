# 同步listing

> 作者：wuhuiqiang

## 同步listing


**接口地址**:`/shopeeGlobalListing/syncItem`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入id


**请求示例**:


```javascript
[222222222222,33333333333333]
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|ids|body|true|array|integer|


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
|success|是否成功|boolean||


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