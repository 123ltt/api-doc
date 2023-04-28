# 计算sku售价

> 作者：1638648874@qq.com

**作者**:`胡雍`

**接口地址**:`/common/calculatePrice`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{"platformCode":"EB","siteCode":"US","storeCode":"sunfayer","warehouse":"Z20","isOversea":false,"paypalAccount":"li67bu87@163.com",
"priceDTOList":[{"productSku":"S0REZ4K01","saleProfitRate":0.27,
 "lmsChannelOptimizeDTOList":[
        {
            "channelCode": "F06-01",
            "cost": "1",
            "timeliness": "5",
            "resultMsg": null,
            "lightgoods": null,
            "priceLow": "33",
            "priceHigh": "55.3",
            "onlineChannel": 1
        },
        {
            "channelCode": "F02-01",
            "cost": "32.5",
            "timeliness": "3-18",
            "resultMsg": null,
            "lightgoods": 1.5,
            "priceLow": "0.333",
            "priceHigh": "5.38",
            "onlineChannel": 0
        }
    ]
},{"productSku":"S0REZ4K02","saleProfitRate":0.27,
 "lmsChannelOptimizeDTOList":[
        {
            "channelCode": "F06-01",
            "cost": "1",
            "timeliness": "5",
            "resultMsg": null,
            "lightgoods": null,
            "priceLow": "33",
            "priceHigh": "55.3",
            "onlineChannel": 1
        },
        {
            "channelCode": "F02-01",
            "cost": "32.5",
            "timeliness": "3-18",
            "resultMsg": null,
            "lightgoods": 1.5,
            "priceLow": "0.333",
            "priceHigh": "5.38",
            "onlineChannel": 0
        }
    ]
}]}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|calculatePriceDTO|calculatePriceDTO|body|true|CalculatePriceDTO|CalculatePriceDTO|
|&emsp;&emsp;platformCode|平台简码||true|string||
|&emsp;&emsp;siteCode|刊登站点||true|string||
|&emsp;&emsp;storeCode|店铺编码||true|string||
|&emsp;&emsp;warehouse|仓库编码(取最后一级仓库编码)||true|string||
|&emsp;&emsp;paypalAccount|Paypal账号||true|string||
|&emsp;&emsp;isOversea|是否海外仓(是：true，否:false)||true|boolean||
|&emsp;&emsp;priceDTOList|||true|array|PriceDTO|
|&emsp;&emsp;&emsp;&emsp;productSku|产品SKU||true|string||
|&emsp;&emsp;&emsp;&emsp;saleProfitRate|销售利润率||true|number|||
|&emsp;&emsp;&emsp;&emsp;lmsChannelOptimizeDTOList|物流渠道||true|array|||


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
            "deductRate": "0.870000000000000009922618282587336580036208033561706542968750",
            "price": "209.77",
            "profitRate": "0.5600",
            "matchedChannel": {
                "channelCode": null,
                "cost": "1",
                "timeliness": "5",
                "resultMsg": null,
                "onlineChannel": null,
                "lightgoods": -1,
                "priceLow": "33",
                "priceHigh": "9999"
            },
            "totalCost": "27.27"
        },
        "RY9YWBV01": {
            "deductRate": "0.870000000000000009922618282587336580036208033561706542968750",
            "price": "209.77",
            "profitRate": "0.5600",
            "matchedChannel": {
                "channelCode": null,
                "cost": "1",
                "timeliness": "5",
                "resultMsg": null,
                "onlineChannel": null,
                "lightgoods": -1,
                "priceLow": "33",
                "priceHigh": "9999"
            },
            "totalCost": "27.27"
        }
    },
    "msg": "操作成功"
}
```