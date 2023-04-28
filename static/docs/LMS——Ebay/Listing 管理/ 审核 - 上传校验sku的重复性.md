#  审核/上传校验sku的重复性

> 作者：1638648874@qq.com

## 审核/上传校验sku的重复性

**作者**:`胡雍`

**接口地址**:`/ebay/listing/checkBatchListingSkuRepeat`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|主键ID集合|query|true|string||
|isForceCheck|isForceCheck|query|true|boolean|||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«long,boolean»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
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
        "1405086136162947073": false,
        "1405086143700111362": false
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a871601642148101962100312516"
    }
}
```