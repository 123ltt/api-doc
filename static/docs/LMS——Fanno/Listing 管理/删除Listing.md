# 删除Listing

> 作者：wuxin

## 作者
- 吴新

## 删除listing


**接口地址**:`/listing/global/remove`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:
```
如果 listing 状态是 「Draft UploadFail DELETED 」 会被直接删除掉

其他状态下的 listing,会被移动到 「Deleting」 状态下

定时任务会和平台同步, 删除之后会将 Deleting 状态下的 listing 移动到 Deleted 状态下


```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|主键ID集合|body|false|integer||


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