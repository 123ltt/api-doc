# Fanno Listing状态数量统计

> 作者：yangruibo

## Listing状态数量统计

**作者**:`杨锐波`

**接口地址**:`/listing/statusStatistics`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**: 统计各listing状态数量


**请求示例**:


```javascript
跟listing列表保持一致
```


**请求参数**:


**请求参数**:

|参数名|必选|类型|说明|
|--------    |--------|-------- |--------   |
|searchType |否  |Number |搜索类型 1-标题(单个) 2-内部sku 3-外部sku 4-Item Id 5-Listing Id   |
|searchContent |否  |Array |搜索内容   |
|searchSort |否  |int |1-子 2-父   |
|storeCodes |否  |array |店铺编号数组   |
|publishSite |否  |string |站点   |
|`listingType` |否  |string |Listing类型   |
|listingStatus |是 |int |Listing状态   |
|infringementTypes |否  |array |侵权类型   |
|isGbcInfringe |否  |Boolean |是否gbc侵权   |
|createUser |否  |Long |创建人   |
|fromCreateTime |否  |date |创建开始时间   |
|toCreateTime |否  |date |创建结束时间   |
|fromPublishTime |否  |date |上架开始时间   |
|toPublishTime |否  |date |上架结束时间   |
|isGlobalProduct |否  |Boolean |是否全球商品   |


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- |
|200|OK|R«Map«string,int»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": {
        "0": 2,
        "1": 2,
        "2": 1,
        "3": 3,
        "4": 4,
        "6": 2160,
        "7": 12,
        "10": 2040,
        "12": 1,
        "13": 194,
        "15": 10
    },
    "msg": "操作成功"
}
```