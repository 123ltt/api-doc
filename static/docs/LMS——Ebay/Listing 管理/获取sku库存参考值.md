# 获取sku库存参考值

> 作者：1638648874@qq.com

## 获取sku库存参考值


**接口地址**:`/ebay/listing/getSkuStock`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入sku集合和站点


**请求示例**:


```javascript
{
    "storeName":"",
	"siteCode": "US",
	"skus": ["QPADN035","SAY3B504PJ0"]
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ebayWarehourseStockDTO|ebayWarehourseStockDTO|body|true|EbayWarehourseStockDTO|EbayWarehourseStockDTO|
|&emsp;&emsp;storeName|店铺名称||true|string||
|&emsp;&emsp;siteCode|站点||true|string||
|&emsp;&emsp;skus|pms sku集合||true|array|string|


**响应结果各仓库库存类型**:

| 库存仓库类型 | 说明 | schema |
| -------- | -------- | ----- |
|LOCAL_STOCK|本地仓库存||
|ZEHUI_STOCK|泽汇仓库存||
|WYT_STOCK|万邑通库存||
|GC_STOCK|谷仓库存||
|TOTAL_STOCK|总库存||
|AVAILABLE_STOCK|可用库存|||

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«string,int»»|
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
        "QPADN035": {
            "LOCAL_STOCK": 1,
            "TOTAL_STOCK": 5,
            "ZEHUI_STOCK": 2,
            "WYT_STOCK": 3,
            "GC_STOCK": 4,
            "AVAILABLE_STOCK": 6
        },
        "SAY3B504PJ0": {
            "LOCAL_STOCK": 1,
            "TOTAL_STOCK": 5,
            "ZEHUI_STOCK": 2,
            "WYT_STOCK": 3,
            "GC_STOCK": 4,
            "AVAILABLE_STOCK": 6
        }
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a871601636351577472101112648"
    }
}
```