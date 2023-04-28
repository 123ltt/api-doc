# 从后台同步listing

> 作者：1638648874@qq.com

## 从后台同步listing

**作者**: 胡雍

**接口地址**:`/joomProduct/syncListing`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:从后台同步listing


**请求示例**:


```javascript
[
    1352141656904290306
]
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listingIds|listingIds|body|true|array|long|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«List«string»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|-|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array||
|msg|返回消息|string||
|success|是否成功|boolean|-|


**响应示例**:
```json
{
    "code": 200,
    "success": true,
    "data": [
        {
            "itemId": null,
            "code": 400,
            "success": false,
            "listingId": "1346076490040782849",
            "message": "itemId 为空"
        },
        {
            "itemId": "184456788424",
            "code": 200,
            "success": true,
            "listingId": "1352141656904290306",
            "message": "同步完成"
        }
    ],
    "msg": "操作成功"
}
```