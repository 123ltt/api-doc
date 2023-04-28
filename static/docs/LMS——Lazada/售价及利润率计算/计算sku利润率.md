# 计算sku利润率

> 作者：wuxin

**作者**:`吴新`

**接口地址**:`/common/calculateProfitRate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"platformCode":"LA",
	"siteCode":"US",
	"storeCode":"sunfayer",
	"warehouseId":1,
	"priceRateDTOList":[
		{
			"productSku":"RYSRRW105","price":55
		},
		{
			"productSku":"RYSJZ9H02","price":56
		}
	]
}
```

**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|calculateProfitRateDTO|calculateProfitRateDTO|body|true|CalculateProfitRateDTO|CalculateProfitRateDTO|
|&emsp;&emsp;platformCode|平台简码||true|string||
|&emsp;&emsp;siteCode|刊登站点||true|string||
|&emsp;&emsp;storeCode|店铺编码||true|string||
|&emsp;&emsp;warehouseId|仓库编码||true|string||
|&emsp;&emsp;priceRateDTOList|||true|array|ProfitRateDTO|
|&emsp;&emsp;&emsp;&emsp;price|售价||true|number||
|&emsp;&emsp;&emsp;&emsp;shippingPrice|运费||true|number||
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||true|string|||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«Map«string,bigdecimal»»|
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
        "RYSJZ9H02": {
            "profitRate": "0.5425",
			"shippingPrice": 123
        },
        "RYSRRW105": {
            "profitRate": "0.5386",
			"shippingPrice": 123
        }
    },
    "msg": "操作成功"
}