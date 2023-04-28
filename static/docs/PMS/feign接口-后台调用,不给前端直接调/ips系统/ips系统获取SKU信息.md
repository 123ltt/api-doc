# ips系统获取SKU信息

> 作者：pengyutian

**简要描述：** 

- ips系统获取SKU信息
- 作者：彭雨田

**请求URL：** 

- xxx/api/cpms/ips/skuInfo

```
 com.zhkj.cpms.feign.IpsClient

```
  
**请求方式：**
- POST 

**请求示例：** 
```
 {
       "productSkuList":["SRDF62892QD"],
       "type":2
    }

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
| productSkuList |String[] |SKU编码|是  |
| type |int |SKU类型 默认2|否  |



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1393126730197749762",
            "productSku": "SRDF62892QD",
            "nwSku": null,
            "type": 2,
            "customsNameCn": "哨子",
            "customsCompany": "个",
            "brandName": "",
            "model": ""
        }
    ],
    "msg": "操作成功",
    "msgDetail": null,
    "attachedMap": {
        "traceId": "c0a864281655805626419100530904"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|type |int |SKU类型 |
|customsNameCn |String |申报中文名 |
|customsCompany |String |申报单位 |
|brandName |String |品牌 |
|model |String |型号 |