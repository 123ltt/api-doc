# 根据PMS_SKU获取平台、FN、第三方仓SKU信息

> 作者：wuxin

**简要描述：** 

- 根据PMS_SKU获取平台、FN、第三方仓SKU信息
- 说明： productSku必传，
-		1.传仓库id 会查第三方仓SKU信息；2.传平台账号会查平台、FNSKU信息
		3.入参的PMS_SKU会去找对应的牛蛙SKu的FBA_SKU的pms_sku,它如果能找到，也需要返回。  
- 作者：彭雨田

**请求URL：** 
- `/common/getPlatformAndThirdPartyAndFnSkuByPmsSku`
* pms
- `com.zhkj.pms.feign.CommonClient`
* cpms 
- `com.zhkj.cpms.feign.CommonClient`

  
**请求方式：**
- POST 

**请求示例(dev)：** 
```
{
  "data":[{
      "productSku":"P50V301597Q",
      "warehouseId":630,
      "platformCode":"AM",
      "account":""
  }]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
| productSku |String |SKU编码|是 （data最大不超过500）|
| warehouseId |Int |仓库id|否 |
| platformCode |String |平台code|否|
| account |String |账号|否|



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "SVM4M799HYS",
            "thirdWarehouseSkuVos": null,
            "platformFbaSkuVos": [
                {
                    "productSku": "SVM4M799HYS",
                    "nwSku": "XN1799B",
                    "platformSku": "OST-US-XN1799B",
                    "fnSku": "",
                    "platformCode": "AM",
                    "account": "overstep.us",
                    "warehouseId": null,
                    "goodsId": 0,
					"createTime": null,
					"updateTime": null
                }
            ],
            "fbaProductSku": "SVM4M7994JG",
            "fbaPlatformFbaSkuVos": [
                {
                    "productSku": "SVM4M7994JG",
                    "nwSku": "US356XN1799B",
                    "platformSku": "FBA-OST-US-XN1799B",
                    "fnSku": "X0033JJMR3",
                    "platformCode": "AM",
                    "account": "overstep.us",
                    "warehouseId": null,
                    "goodsId": 0,
					"createTime": null,
					"updateTime": null
                }
            ]
        }
    ],
    "msg": "操作成功",
    "msgDetail": null,
    "attachedMap": {
        "traceId": "c0a864281656583692803100332540"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String  |SKU编码|
|thirdWarehouseSkuVos |List&lt;ThirdWarehouseSkuVo> |第三方SKU信息 |
|-productSku|String|PMS_SKU|
|-nwSku|String|牛蛙SKU|
|-warehouseSku|String|第三方仓SKU|
|-warehouseIdStr|String|第三方SKU仓库名|
|-warehouseId|Integer|仓库id|
|-type|Integer|类型 1泽汇仓2谷仓3万邑通|
|platformFbaSkuVos |List&lt;PlatformFbaSkuVo> |平台、fnSKU信息 |
|-productSku|String|PMS_SKU|
|-nwSku|String|牛蛙SKU|
|-platformSku|String|平台SKU|
|-fnSku|String|FNSKU|
|-platformCode|String|平台|
|-account|String|店铺账号|
|fbaProductSku |String  |通過店铺找到的前缀+入参映射NWSKU的pms编码|
|fbaPlatformFbaSkuVos |List&lt;PlatformFbaSkuVo> |通過店铺找到的前缀+NWSKU获取到的SKU的平台、fnSKU信息 |
|-productSku|String|PMS_SKU|
|-nwSku|String|牛蛙SKU|
|-platformSku|String|平台SKU|
|-fnSku|String|FNSKU|
|-platformCode|String|平台|
|-account|String|店铺账号|