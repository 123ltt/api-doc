# SKU-牛蛙SKU转PMS-SKU

> 作者：pengyutian

**简要描述：** 

- 牛蛙SKU转PMS SKU

**请求URL：** 
- ` /api/sku/getPmsSkuByNwSku`
  
**请求方式：**
- POST 

**请求示例：**
```
{
    "data": ["nwSKu1","nwSKu2"]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|data |String[]   |牛蛙SKu编码数组|是|

**注意**
```
同一牛蛙SKU可能对应一个SKU和一个SPU 通过type区分  1SPU   2 SKU
```

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "nwSku": "KA0614HS",
            "pmsSku": "RXSYRN901",
			"pmsSpu": "RXSYRN9",
            "type": 2，
            "developLeadUserId": "110",
			"lstSkuCode":[
				{
					"sku": "OS9G0KH02",
					"count": 3
				}
			]
        }
    ],
    "msg": "OK"
}
```
 **返回参数说明 data** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|nwSku |String   |牛蛙SKU编码|
|pmsSku |String   |PMS SKU编码|
|pmsSpu |String   |PMS SPU编码|
|type |Integer   | 1:SPU 2:SKU 3:组合SKU|
|developLeadUserId |String   |开发责任人userId|
|lstSkuCode |CombineSkuVO[] |组合SKU的SKU数量 |
|└ sku |String |SKU编码 |
|└ count |Integer |sku数量 |



 **备注**