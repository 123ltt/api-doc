# 水印图code

> 作者：xingzhen

**作者**:`邢振`

**接口地址**:`/shopeeShopWatermark/getWatermarkCode`


**请求方式**:`GET`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|account|店铺名|url|true|Number|店铺名|



**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- ||
|200|OK|R«Map«string,bigdecimal»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- |
|code|状态码|integer(int32)|integer(int32)|
|watermarkCode|水印base64码|number||
|type|类型1：图片水印 2：文字水印|number||
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": {
        "watermarkCode": "MDAwMDAwL3RlbXAvMjAyMTA5MDgvYzc1ODJlODZlYjViMGM0OGJhODhjMTIyYzhmZjc2NDAucG5n",
        "type": 1
    },
    "msg": "操作成功"
}
```