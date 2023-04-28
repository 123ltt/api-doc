# SPU/SKU列表

> 作者：lixizhou

**简要描述：** 

- 批量修改功能 - SPU/SKU列表

**请求URL：** 
- `/sku/pageSpuSku`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "query": {
        "current": 1,
        "size": 10
    },
    "data": {
        "categoryIds": [
            1,
            2
        ],
        "productCodes": [
            "a",
            "b"
        ],
        "nwProductCodes": [
            "c",
            "d"
        ],
        "supplierName": "djdiosfj",
		"isBatchUpdated": 1
    }
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|categoryIds |数组   |类目ID，多个|否|
|productCodes |数组   |SPU/SKU编码|否|
|nwProductCodes |数组   |牛蛙SPU/SKU编码|否|
|supplierName |string   |供应商名称|否|
|isBatchUpdated |int   |是否触发过批量修改 0否 1是 2是否都有|否|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
				"id":13647826478578,
                "imageUrl": "http://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com/upload/20201019/29ee72efaf8e214f7ccc364524de35ff.png",
                "type": 1,
                "productCode": null,
                "productName": "华为Matebook222",
                "nwCode": null,
                "status": 0
            }
        ],
        "total": 447401,
        "size": 1,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 447401
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|id |long   |id|
|imageUrl |String   |图片地址|
|type |int   |1spu 2sku|
|productCode |String   |编码|
|productName |String   |中文名称|
|nwCode |String   |牛蛙编码|
|status |int   |状态|

 **备注** 

- 更多返回错误代码请看首页的错误代码描述