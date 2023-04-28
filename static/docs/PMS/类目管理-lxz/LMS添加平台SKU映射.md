# LMS添加平台SKU映射

> 作者：pengyutian

**简要描述：** 

- platformSku（平台SKU） + account（店铺账号）+platformCode(平台code)保证唯一
- 入参为null 修改时会修改为null 租户id累加
- PMS-SKU编码和平台code必须在pms存在

**请求URL：** 
- ` /lms/sku/addPlatformFbaSkuList
  
- com.zhkj.pms.feign.LmsSkuClient

- com.zhkj.cpms.feign.LmsSkuClient
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data":[{
        "productSku":"P03EV0461SD",
        "platformSku":"SC0004",
        "platformCode":"AM",
        "account":"Silvercell US",
        "suffix":"xx",
        "saleUserId":xxx
    }],
	"tenantId":"000000"
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSku |String|PMS-SKU编码|是|
|platformSku |String|平台SKU |是|
|platformCode |平台code| |是|
|account |String| 店铺账号|是|
|suffix |String| 海外仓SKU后缀 |否|
|saleUserId |String| 销售ID|是|
|tenantId |String|租户id|是|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "P03EV0461SD",
            "nwSku": null,
            "msg": "ok",
            "success": true,
            "account": "Silvercell US",
            "platformSku": "SC0004"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281639385049314101410664",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 


|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|nwSku |String |牛蛙SKU |
|account |String | 店铺账号 |
|platformSku |String | 平台SKU |
|success |Boolean | 成功 true 失败 false |
|msg |String | 说明 |