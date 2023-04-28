# 同步-mjf

> 作者：1571221458@qq.com

## 同步listing


**接口地址**:`/wishlisting/syncFromPlatform`


**请求方式**:`POST`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入id


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|true|array|integer|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«boolean»|
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
    "code": 400,
    "success": false,
    "data": null,
    "msg": "itemID:5631cf853a698c63e7c838d7同步失败"
}
```