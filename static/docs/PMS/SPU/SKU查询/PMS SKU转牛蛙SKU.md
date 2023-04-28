# PMS SKU转牛蛙SKU

> 作者：pengyutian

**简要描述：** 

- PMS SKU转牛蛙SKU

**请求URL：** 
- `1./api/sku/getNwSkuByPmsSku`
  
**请求方式：**
- POST 

**请求示例：**

```
[
    "SC2HM331DGD",
    "RG485031Z7W"
]
```


- `2./api/sku/getNwSkuByPmsSkuOrExtend`

**请求方式：**
- POST 

**请求示例：**

```
{
  "skuCodes":[ "SC2HM331DGD"],
  "skuTypes":[]
}
```
|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
| skuCodes   |String[]|PMS—sku或PMS——spu |是   |
| skuTypes   |Int[]|支持查询编码类型（支持 SPU-1 SKU-2 组合SKU-3，默认2,3） | 否  |




 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "nwSku": "ZA0031E",
            "pmsSku": "RG485031Z7W",
			"type": 2
        },
        {
            "nwSku": "LJ1331ZM",
            "pmsSku": "SC2HM331DGD",
			"type": 2
        }
    ],
    "msg": "操作成功",
}
```

 **返回参数说明 data** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|nwSku |String   |牛蛙SKU编码 若是spu则返回是牛蛙spu|
|pmsSku |String   |PMS SKU编码|
|type |int   |sku 类型（1 SPU 2 SKU 3组合SKU）|
|lstSkuCode |Array   |combine sku 详情信息|
|-productSku |String   |子Sku编码|


 **备注**