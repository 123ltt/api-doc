# 列表-SPU/SKU管理列表

> 作者：lixizhou

**简要描述：** 

- SPU/SKU管理列表查询

**请求URL：** 
- ` /sku/page`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": {
		"type":1,
        "categoryIds": [
            "1",
            "2"
        ],
        "productSku": "SKU编码",
        "productNameSku": "SKU名称",
        "productSpu": "SPU编码",
        "productNameSpu": "SPU名称",
        "status": "1"
    },
    "page": {
        "current": 1,
        "size": 20
    }
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|categoryIds |String[]   |类目ID，多个|否|
|productNameSku |String   |SKU名称|否|
|productNameSpu |String   |SPU名称|否|
|status |int   |SKU/SPU状态:0-审核中,1-审核失败,2-有效，3-无效,后续可能还会有下架等状态|否|
|type |int   |产品类型1spu,2sku|是|
|productSkuList |数组   |SKU编码|否|
|productSpuList |数组   |SPU编码|否|
|nwSkuList |数组   |牛蛙SKU编码|否|
|nwSpuList |数组   |牛蛙SPU编码|否|
|isSyncNw|int|是否同步|0否 1是
|developLeadUserId|long|精品专员|否|
|dockingUserId|long|精铺专员|否|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": 1111111111111,
                "imageUrl": "https://csdnimg.cn/medal/1024@240.png",
                "productName": "1313123213",
                "productSpu": "111",
				"productSku": "111",
				"skuCount": 123,
				"status": "1",
				"developLeadUserId":1,
				"dockingUserId":2
        ],
        "total": 5,
        "size": 10,
        "current": 1
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|id |int   |编号|
|imageUrl |String   |图片地址|
|productName |String   |名称|
|productSpu |String   |SPU编码|
|productSku |String   |SKU编码|
|skuCount |Integer   |SKU数量|
|status |int   |状态|
|nwProductCode|string|牛蛙产品编码（sku列表对应牛蛙sku编码 spu列表对应牛蛙spu编码）|
|productCost|string|产品成本|
|developLeadUserId|long|精品专员|
|dockingUserId|long|精铺专员|

 **备注** 

- 更多返回错误代码请看首页的错误代码描述