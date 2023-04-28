# 根据店铺获取自提SKU标识

> 作者：pengyutian

**简要描述：** 


		刊登请求可根据分销平台和sku去同步此分销sku的信息时会保存大建云自提（201)SKU信息





**请求URL：** 
- ` /api/sku/getSelfMentionSku

- com.zhkj.cpms.feign.SkuClient
- com.zhkj.pms.feign.SkuClient
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": [
            {
            "distributionType":2,
            "storeCode":null
            }
        ]
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeName |String   |店铺name|大建云必传storeName或storeCode|
|storeCode |String   |店铺Code|大建云必传storeName或storeCode|
|distributionType |int   |分销类型|是 |



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "storeName": null,
            "storeCode": null,
            "isSelfMention": null,
            "enterDistributionType": 2,
            "distributionType": null,
            "success": false,
            "msg": "分销类型是大建云时入参店铺name和code不能同时为空"
        },
        {
            "storeName": null,
            "storeCode": "xxx",
            "isSelfMention": true,
            "enterDistributionType": 2,
            "distributionType": 201,
            "success": true,
            "msg": null
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428164506361249910034260",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|storeName |String   |店铺name|
|storeCode |String   |店铺code|
|discountStr |int   |类型 201 大建云自提|
|enterDistributionType |int   |入参分销类型|
|isSelfMention |Boolean   |此店铺的SKU是否自提|

|success |Boolean   |成功/失败|
|msg |String   |原因描述|