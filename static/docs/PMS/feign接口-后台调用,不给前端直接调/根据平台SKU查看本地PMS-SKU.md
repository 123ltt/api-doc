# 根据平台SKU查看本地PMS-SKU

> 作者：pengyutian

**简要描述：** 

根据平台SKU查看本地PMS-SKU。

步骤：
1.根据platform_sku查询nw_sku
2.分情况
	1>普通sku
		1>>根据nw_sku查询sku，若存在且此sku是非FBAsku，直接返回。
		2>FBAsku的判断nw_sku长度大于5，去掉前面5位，拿着去掉前五位的字符串查pms_sku，存在返回这个SKU对应的编码;
	2>组合SKU
		1.找到对应的子SKU
		2.重复1>的步骤



**请求URL：** 
- ` /common/getLocalPmsSkuByPlatformSku

- com.zhkj.cpms.feign.CommonClient
- com.zhkj.pms.feign.CommonClient
  
**请求方式：**
- POST 

**请求示例：** 
```
{
  "data":[
      {
          "platformSku":"B07TF78ZPK",
		  "account":"店铺"
      }
  ]
}

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|platformSku |String   |平台SKU|是|
|account |String   |平台店铺|是|



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "RA2CC353MY8",
            "nwSku": "HX0353A",
            "platformSku": "B07TF78ZPK",
			"account": "平台店铺",
			"isLocalSku":true,
			 "type": 3,
			"combinationVo":[{
				"combinationSku":"xx",
				"combinationNwSku":"xx",
				"count":2,
				 "isLocalSku": false
			}]
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281637288565779100712140",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |本地sku编码|
|nwSku |String   |本地牛蛙SKU编码|
|platformSku |String   |平台编码（入参platformSku）|
|account |String   |平台店铺|
|type |Integer   |SKU类型（2普通3组合）|
|isLocalSku |Boolean   |入参platformSku对应sku是否是本地sku（true 是/false不是 组合SKU无是否本地SKU  默认true）|
|combinationVo |Array   |子sku (子SKU默认type是普通SKU) |
|-- combinationSku |String   |本地子PMS_SKU|
|-- combinationNwSku |String   |本地子牛蛙SKU|
|-- count |Integer   |数量|
|--isLocalSku |Boolean   |入参platformSku对应sku是否是本地sku（true 是/false不是）|