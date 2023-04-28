# 公共获取SKU类目信息

> 作者：pengyutian

**简要描述：** 

- 公共获取SKU类目信息 
- 不做任何逻辑处理
- 作者：彭雨田

**请求URL：** 

- /common/getBySkuBasicDetailsCategory

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
| data |String[] |SKU编码|是  最大10000|



 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "T7R5G813S0G",
            "categoryId": 10184604011,
            "categoryName": "配件和钥匙扣登山扣",
            "nwCategoryId": 2127,
            "nwCategoryName": "户外小工具"
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
|categoryId |Long |PMS类目ID |
|categoryName |String |PMS类目名称 |
|nwCategoryId |Long |牛蛙类目ID |
|nwCategoryName |String |牛蛙类目名称 |