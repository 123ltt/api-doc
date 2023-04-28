# 计算sku售价

> 作者：xingzhen

**作者**:`吴新`

**接口地址**:`/common/calculatePrice`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{"platformCode":"LZ","siteCodes":["MY", "SG"],"storeCode":"sunfayer","warehouseId":1,
	"priceDTOList":[
		{
		"productSku":"S0REZ4K01","saleProfitRate":0.27, "productCost": 12,
		},
		{
		"productSku":"S0REZ4K02","saleProfitRate":0.27,"productCost": 13,
		}
]}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|calculatePriceDTO|calculatePriceDTO|body|true|CalculatePriceDTO|CalculatePriceDTO|
|&emsp;&emsp;platformCode|平台简码||true|string||
|&emsp;&emsp;siteCodes|刊登站点||true|string||
|&emsp;&emsp;storeCode|店铺编码||true|string||
|&emsp;&emsp;warehouseId|仓库编码||true|string||
|&emsp;&emsp;priceDTOList|||true|array|PriceDTO|
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||true|string||
|&emsp;&emsp;&emsp;&emsp;saleProfitRate|销售利润率||true|number|||
|&emsp;&emsp;&emsp;&emsp;productCost|价格(成本+折扣率 或 销售指定价格)||true|number|||


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
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean|||


**响应示例**:
```javascript
 "data": {
        "RY9YWBV02": {
				"MY":{
				 "deductRate": "0.870000000000000009922618282587336580036208033561706542968750",
					"price": "209.77",
					"profitRate": "0.5600",
					"specialPrice": "123",
					 "totalCost": "27.27",
					 "shippingPrice": 1.2
				},
				"SG":{
				 "deductRate": "0.870000000000000009922618282587336580036208033561706542968750",
					"price": "209.77",
					"profitRate": "0.5600",
					"specialPrice": "123",
					 "totalCost": "27.27",
					 "shippingPrice": 1.2
			}
        },
        "RY9YWBV01": {
            "MY":{
				 "deductRate": "0.870000000000000009922618282587336580036208033561706542968750",
				"price": "209.77",
				"profitRate": "0.5600",
				"totalCost": "27.27",
				"shippingPrice": 1.2
			},
			"SG":{
			     "deductRate": "0.870000000000000009922618282587336580036208033561706542968750",
				"price": "209.77",
				"profitRate": "0.5600",
				"totalCost": "27.27",
				"shippingPrice": 1.2
			}
           
        }
    },
    "msg": "操作成功"
}
```