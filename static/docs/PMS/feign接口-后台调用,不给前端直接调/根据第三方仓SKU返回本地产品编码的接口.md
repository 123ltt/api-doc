# 根据第三方仓SKU返回本地产品编码的接口

> 作者：pengyutian

**简要描述：** 

根据平台SKU 返回本地产品编码的接口。

**请求URL：** 
- ` /common/getPmsSkuWarehouseSku
  
**请求方式：**
- POST 

**请求示例：** 
```
{
  "data":[{
      "warehouseSku":"ZT075US",
      "warehouseId":630
  }]
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|warehouseSku |String   |仓库SKU|是|
|warehouseId |Int   |仓库id|否|



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "QA11M075H34",
            "nwSku": "ZT075US",
            "warehouseSku": "ZT075US",
            "warehouseIdStr": null,
            "warehouseId": 630,
            "type": 2
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428163650871080310054092",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |sku编码|
|nwSku |String   |牛蛙SKU编码|
|warehouseSku |String   |仓库SKU编码|
|warehouseId |int   |仓库id|
|type |int   |仓库类型（1泽汇2谷仓3万邑通）|