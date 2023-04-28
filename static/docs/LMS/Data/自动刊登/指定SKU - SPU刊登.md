# 指定SKU/SPU刊登

> 作者：wuxin

## 新增


**接口地址**:`/autoPublishRecord/assignAutoPublishSave`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入batchFeed


**请求示例**:


```javascript
{
	"accounts":[
		{
			"platformCode" : "WH",
			"storeCode" : ["bbss", "lajiaojiang"]
		}
	],
	"skus":[],
	"grossProfit":0.2,
	"stockType":1,
	"stock":10,
	"isDraft":false,
	"salePrefix": null
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | 是否必须 | 数据类型 |
| -------- | -------- | -------- | -------- |
|accounts|账号参数|true|string|
|skus|SKU参数 例：["xxx", "aaa"]|true|string|
|isDraft|是否草稿 例：true|true|string|
|stockType|库存设置 例：1默认库存，2实际库存，3指定库存|true|int|
|stock|指定库存数量 例：10|false|int|
|grossProfit|指定利润率 例：0.2|false|int|
|storeDiscount|店铺折扣(速卖通专用) 例：0.2|false|int|
|isNew|价格计算方式(速卖通专用) |false|boolean|
|perKgFreightFee|每公斤运费(速卖通专用) |false|int|
|registeredFee|挂号费(速卖通专用) |false|int|
|salePrefix | 销售前缀(walmart专用) | false | string|



**响应状态**:


| 状态码 | 说明 |
| -------- | -------- |
|200|OK|
|201|Created|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|


**响应参数**:


| 参数名称 | 参数说明 | 类型 |
| -------- | -------- | ----- |-
|code|状态码|integer(int32)|
|data|承载数据|object|
|msg|返回消息|string|
|success|是否成功|boolean|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"success": true
}
```