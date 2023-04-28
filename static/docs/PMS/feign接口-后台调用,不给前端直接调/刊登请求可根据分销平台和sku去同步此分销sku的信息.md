# 刊登请求可根据分销平台和sku去同步此分销sku的信息

> 作者：pengyutian

**简要描述：** 

- 刊登请求可根据分销平台和sku去同步此分销sku的信息


**请求URL：** 
- ` /lms/sku/getDistributionSku
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": [
			{
			"sku":"SKU编码",
			"distributionType":1,
			"storeCode":"xxx"
			}
		]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|data |List | |是|
	|-sku |String |分销平台sku编码|是|
	|-distributionType |Integer |分销sku类型 1 冠通 2 大建 3易链 4纵维分销SKU|是|
	|-storeCode |String | 店铺code |是(大建云必填)|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "sku": "WY000062EAA",
            "distributionType": 2,
            "productSku": "DJY3Z7DM0JEAA0A",
			"storeCode":"xx"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281626334805251102112624",
        "zhkj-req-id": "20210715144006971_4v6t"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|sku |String   |分销sku编码|
|distributionType |Integer   |分销sku类型 1 冠通 2 大建 3易链 4纵维分销SKU 201 大建云自提|
|productSku |String   |	pmsSku编码|