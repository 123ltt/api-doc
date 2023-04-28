# Demo

> 作者：yun527292121@163.com

**简要描述：** 

- 搜索SKU TOP N

**请求URL：** 
- ` /api/sku/searchSkuTopN`
  
**请求方式：**
- POST 

**请求示例：**
```
{
    "data": {
		"categoryIds": [
            "1",
            "2"
        ],
        "productName": "SKU/SPU名称",
		"lstProductSku":["SKU1","SPU1"],
		"limit":10,
		"lstStatus":[1]
    }
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|categoryIds |String[]   |类目ID，多个,会递归搜索此id的子类目|否|
|productName |String   |SKU/SPU名称|否|
|lstProductSku |String[]   |SPU/SKU编码|否|
|limit |int   |[1-200]|是|
|lstStatus |Integer[]   |SKU状态:	AUDIT_ING(0, "审核中"),AUDIT_FAILED(1, "审核失败"),	VALID(2, "有效"),INVALID(3, "无效");|否|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "productName": "SKU或SPU名称",
                "productSku": SPU/SKU编码,
                "categoryPath": "美妆护肤->面部护理->眼霜眼精华",
                "categoryFullId": "类目全路径id,逗号分隔,全文检索",
                "categoryName": "眼霜眼精华",
                "categoryId": "类目叶子节点id",
				"status":1,
				"imageUrl":"主图URL"
        ]
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU或SPU编码，传了编码就是精确搜索哦|
|categoryId |String   |类目叶子节点id|
|categoryName |String   |类目叶子节点名称|
|categoryFullId |String   |类目全路径id,逗号分隔,全文检索|
|categoryPath |String   |类目全路径名称|
|productName |String   |SKU或SPU名称|
|satus |Integer   | SKU状态|
|imageUrl |String   |主图URL|

 **备注**