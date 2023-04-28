# 给oms-ifBlockPkg提供SKU信息

> 作者：pengyutian

**简要描述：** 

- 给oms-ifBlockPkg提供SKU信息 由于仓库出库需要速度专门提供
- 作者：彭雨田

**请求URL：** 

- /api/sku/getOmsIfBlockPkgSkuInfo

```
 com.zhkj.pms.feign.SkuClient
 com.zhkj.cpms.feign.SkuClient

```
  
**请求方式：**
- POST 

**请求示例：** 
```
["SKU编码1","SKU编码2"]

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|  |String[] |SKU编码|是  |



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "T7R5G813S0G",
            "packWeight": 200.0,
			"netWeight": 200.0,
            "sizeLong": "7.5000",
            "sizeWidth": "7.5000",
            "sizeHeight": "7.5000",
            "sizeLongPack": "13.5000",
            "sizeWidthPack": "13.0000",
            "sizeHeightPack": "7.5000",
			 "customsNameEn": "Dinner plate",
			 "customsNameCn": "餐盘",
			 "logisticsAttr": "1443039390841569282"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281651110018182100813920"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|packWeight |Double |打包重量 |
|netWeight |Double |净重 |
|sizeLong |BigDecimal |长 |
|sizeWidth |BigDecimal |宽 |
|sizeHeight |BigDecimal |高 |
|sizeLongPack |BigDecimal |打包长 |
|sizeWidthPack |BigDecimal |打包宽 |
|sizeHeightPack |BigDecimal |打包高 |
|customsNameEn |String |申报英文名称 |
|customsNameCn |String |申报中文名称 |
|logisticsAttr |String |物流屬性（多個,分割） |