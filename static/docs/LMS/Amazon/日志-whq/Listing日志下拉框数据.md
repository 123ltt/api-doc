# Listing日志下拉框数据

> 作者：wuhuiqiang

## getMap


**接口地址**:`/constant/getMap`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:获取静态数据MAP


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 |
| -------- | -------- | ----- | -------- | -------- | ------ |
|key|操作类型：OPS_TYPE；更新类型：UPDATE_TYPE；日志状态：LOG_STATUS；|query|false|string|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«string,string»»|
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
  "code": 200,
  "success": true,
  "data": {
    "1": "创建",
    "2": "刊登",
    "3": "更新",
    "4": "下架"
  },
  "msg": "操作成功"
}
```