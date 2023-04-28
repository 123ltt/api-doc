# Listing删除-邢振

> 作者：wuxin

## 逻辑删除


**接口地址**:`/amazonlisting/remove`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入ids和产品状态


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|AmazonListingDTO对象|listing 对象集合|query|true|string||
|&emsp;&emsp;id|id|query|true|Integer||
|&emsp;&emsp;sellerSku|平台sku|query|true|String||
|listingStatus|产品状态|query|true|Integer||
|variantIds|变体ID|query|true|string||| 

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
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
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```