# 根据平台SKU 返回本地产品编码的接口。

> 作者：pengyutian

**简要描述：** 

根据平台SKU 返回本地产品编码的接口。

**请求URL：** 
- ` /common/getPmsSkuPlatformSku
  
**请求方式：**
- POST 

**请求示例：** 
```
{
  "data":[{
      "platformSku":"FBA-RBB-YW2732A",
      "platformCode":"AM",
      "account":"StayWhky.us",
	  "fnSku":"李军荣"
  }]
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|platformSku |String   |平台SKU|platformSku/fnSku不能都空 且为了查询速度不能同时入参|
|fnSku|String|fnSku|platformSku/fnSku不能都空 且为了查询速度不能同时入参
|platformCode |String   |平台code|否|
|account|String|账号|否


 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "SWDRE73213R",
            "nwSku": "US589YW2732A",
            "platformSku": "FBA-RBB-YW2732A",
            "fnSku": "",
            "platformCode": "AM",
            "account": "StayWhky.us"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428163650830970110034092",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |sku编码|
|nwSku |String   |牛蛙SKU编码|
|platformSku |String   |平台SKU编码|
|platformCode |String   |平台|
|account |String   |账号|