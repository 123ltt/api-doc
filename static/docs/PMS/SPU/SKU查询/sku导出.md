# sku导出

> 作者：pengyutian

## SPU/SKU查询列表


**接口地址**:`/cpms/sku/export`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入sku


**请求示例**:


```javascript
{
	"data": {
		"nwSkuList": [],
		"nwSpuList": [],
		"productSkuList": [],
		"productSpuList": [],
		"status": null,
		"type": null
	}
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|requestVO|requestVO|body|true|RequestDTO«SkuQueryDTO»|RequestDTO«SkuQueryDTO»|

|nwSkuList|||false|array|string|
|nwSpuList|||false|array|string|
|productSkuList|||false|array|string|
|productSpuList|||false|array|string|
|status|||false|integer(int32)|
|type|||false|integer(int32)|

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«SkuQueryVO»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": "",
    "msg": "导出任务已创建，请到下载中心下载结果",
    "msgDetail": null,
    "attachedMap": {
        "traceId": "c0a864281656058812925100833688"
    }
}
```