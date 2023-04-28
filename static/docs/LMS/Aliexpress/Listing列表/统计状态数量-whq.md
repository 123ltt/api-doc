# 统计状态数量-whq

> 作者：wuhuiqiang

## 统计状态数量


**接口地址**:`/aliexpresslisting/statisticsStatus`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入aliexpresslisting


**请求示例**:


```javascript
跟listing列表保持一致
```


**请求参数**:


**请求参数**: 跟listing列表保持一致


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«string,int»»|
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
    "1": 6,
    "2": 1,
    "3": 1,
    "4": 2,
    "5": 17,
    "6": 1,
    "7": 138,
    "9": 1,
    "10": 598,
    "11": 1703,
    "12": 2,
    "13": 19887
  },
  "msg": "操作成功"
}
```