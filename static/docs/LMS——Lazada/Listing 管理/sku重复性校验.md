# sku重复性校验

> 作者：1638648874@qq.com

## sku重复性校验

**作者**:`胡雍`

**接口地址**:`/lazada/product/checkSkuRepeat`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"listingId": null,
	"listingStatus": 1,
	"productSkuList": ["R32G82609DW","RDPG7121ZQX"],
	"publishSiteCode": "MY",
	"storeCode": "lazada_000G"
}
```



**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|lazadaSkuRepeatCheckDTO|lazadaSkuRepeatCheckDTO|body|true|LazadaSkuRepeatCheckDTO|LazadaSkuRepeatCheckDTO|
|&emsp;&emsp;listingId|listingId||true|integer(int64)||
|&emsp;&emsp;listingStatus|listing 状态，比如Draft 为1，APPROVING 为2，依次类推||false|integer(int32)||
|&emsp;&emsp;productSkuList|产品sku(支持多个)||true|array|string|
|&emsp;&emsp;publishSiteCode|刊登站点||true|string||
|&emsp;&emsp;storeCode|店铺编码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«string,boolean»»|
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
        "R32G82609DW": false,
        "RDPG7121ZQX": true
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a871601623929451821100513880"
    }
}
```