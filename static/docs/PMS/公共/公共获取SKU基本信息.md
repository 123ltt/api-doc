# 公共获取SKU基本信息

> 作者：pengyutian

**简要描述：** 

- 公共获取SKU基本信息
- 不做任何逻辑处理
- 作者：彭雨田

**请求URL：** 

- /common/getBySkuBasicDetails

```
 com.zhkj.pms.feign.CommonClient
 com.zhkj.cpms.feign.CommonClient

```
  
**请求方式：**
- POST 

**请求示例：** 
```
{
	"data":["SKU编码1","SKU编码2"]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
| data |String[] |SKU编码|是 |



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "RN086203P8S",
            "productName": "粉色带樱花图案猫爪杯",
            "productSpu": "RN086203"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281631955917585101114356"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|productName |String |中文名 |
|productSpu |String |SPU编码 |