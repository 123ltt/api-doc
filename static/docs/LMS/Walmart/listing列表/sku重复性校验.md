# sku重复性校验

> 作者：1638648874@qq.com

## sku重复性校验


**接口地址**:`/walmartlisting/checkSkuRepeat`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"listingId": null,
	"productSkuList": ["S6A8T054Bq3"],
	"storeCode": "walmart_US_003d"
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|walmartSkuRepeatCheckDTO|walmartSkuRepeatCheckDTO|body|true|WalmartSkuRepeatCheckDTO|WalmartSkuRepeatCheckDTO|
|&emsp;&emsp;isForceCheck|是否强制校验||true|boolean||
|&emsp;&emsp;listingId| listingId,新增listing Id 为空，编辑需必填||false|integer(int64)||
|&emsp;&emsp;productSkuList|产品sku(支持多个)||true|array|string|
|&emsp;&emsp;storeCode|店铺编码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«string,boolean»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|attachedMap||object||
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
        "S6A8T054Bq3": true
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a871601657011194849100218144"
    }
}
```