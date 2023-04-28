# SKU-获取sku一级类目

> 作者：lijinghua@zehui.com

**简要描述：** 

- 获取sku一级类目

**请求URL：** 
- ` /api/sku/getSkuRootCategoryId`
  
**请求方式：**
- GET 

**请求示例：**
```
	@GetMapping("/sku/getSkuRootCategoryId")
	public R&lt;List&lt;SkuRootCategoryVO>> getSkuRootCategoryId(@RequestParam List&lt;String> lstProductSku)

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|lstProductSku |String[]   |SKU编码|是|

 **返回示例**
``` 
{
	"code": 200,
	"success": true,
	"data": {
		"records": [{
			"productSku": "SKU编码",
			"rootCategoryId": "110",
			"categories": [{
					"id": "15690151",
					"parentId": null,
					"name": "汽车行业",
					"nameEn": null,
					"level": 1,
					"categoryPathId": null,
					"categoryPath": null,
					"isLeaf": 0
				},
				{
					"id": "2230642011",
					"parentId": null,
					"name": "汽车电子及配件",
					"nameEn": null,
					"level": 2,
					"categoryPathId": null,
					"categoryPath": null,
					"isLeaf": 0
				},
				{
					"id": "10981291",
					"parentId": null,
					"name": "汽车电子配件",
					"nameEn": null,
					"level": 3,
					"categoryPathId": null,
					"categoryPath": null,
					"isLeaf": 0
				}
			]
		}]
	},
	"msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU或SPU编码|
|rootCategoryId |Long   |一级类目id|
|categories |GetCategoryVO   |产品所在的所有类目|

GetCategoryVO

|参数名|类型|说明|
|:-----  |:-----|-----|
|level |int   |层级|
|name |string   |类目名称|


 **备注**