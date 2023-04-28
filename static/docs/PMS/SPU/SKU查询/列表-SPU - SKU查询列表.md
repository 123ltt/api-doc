# 列表-SPU/SKU查询列表

> 作者：wuxin

## SPU/SKU查询列表


**接口地址**:`/cpms/sku/skuQuery`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入sku


**请求示例**:


```javascript
{
	"companyId": "",
	"data": {
		"ascription": "",
		"ascriptionTenantOrDeptIds": "",
		"categoryIdStr": "",
		"categoryIds": [],
		"developLeadUserId": 0,
		"dockingUserId": 0,
		"lstStatus": [],
		"nwSkuList": [],
		"nwSpuList": [],
		"productName": "",
		"productSkuList": [],
		"productSpuList": [],
		"productSpusFromSkuAscriptionConfig": [],
		"status": 0,
		"type": 0,
		"types": [],
		"productIsCe": 1,
        "distributionType": 1,
        "isFba": 1,
		"isInfringe":1
	},
	"query": {
		"current": 0,
		"offset": 0,
		"size": 0
	},
	"requestId": "",
	"requestSource": 0,
	"tenantId": "",
	"userId": 0
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|requestVO|requestVO|body|true|RequestDTO«SkuQueryDTO»|RequestDTO«SkuQueryDTO»|
|&emsp;&emsp;companyId|||false|string||
|&emsp;&emsp;data|||false|SkuQueryDTO|SkuQueryDTO|
|&emsp;&emsp;&emsp;&emsp;ascription|||false|string||
|&emsp;&emsp;&emsp;&emsp;ascriptionTenantOrDeptIds|||false|string||
|&emsp;&emsp;&emsp;&emsp;categoryIdStr|||false|string||
|&emsp;&emsp;&emsp;&emsp;categoryIds|||false|array|string|
|&emsp;&emsp;&emsp;&emsp;developLeadUserId|||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;dockingUserId|||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;lstStatus|||false|array|integer|
|&emsp;&emsp;&emsp;&emsp;nwSkuList|||false|array|string|
|&emsp;&emsp;&emsp;&emsp;nwSpuList|||false|array|string|
|&emsp;&emsp;&emsp;&emsp;productName|||false|string||
|&emsp;&emsp;&emsp;&emsp;productSkuList|||false|array|string|
|&emsp;&emsp;&emsp;&emsp;productSpuList|||false|array|string|
|&emsp;&emsp;&emsp;&emsp;productSpusFromSkuAscriptionConfig|||false|array|string|
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)|
|&emsp;&emsp;&emsp;&emsp;type|||false|integer(int32)|
|&emsp;&emsp;&emsp;&emsp;types|||false|array|integer|
|&emsp;&emsp;&emsp;&emsp;productIsCe|欧代 1-是，2-否||false|int32|integer|
|&emsp;&emsp;&emsp;&emsp;isInfringe|是否侵权 0否 1是||false|int32|integer|
|&emsp;&emsp;&emsp;&emsp;distributionType|分销 0否 1 冠通 2 大建||false|int32|integer|
|&emsp;&emsp;&emsp;&emsp;isFba|fba 1 普通sku 2 FBAsku||false|int32|integer|
|&emsp;&emsp;query|||false|PmsQueryDTO|PmsQueryDTO|
|&emsp;&emsp;&emsp;&emsp;current|当前页||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;offset|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;size|每页的数量||false|integer(int32)||
|&emsp;&emsp;requestId|||false|string||
|&emsp;&emsp;requestSource|||false|integer(int32)||
|&emsp;&emsp;tenantId|||false|string||
|&emsp;&emsp;userId|||false|integer(int64)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«SkuQueryVO»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|IPage«SkuQueryVO»|IPage«SkuQueryVO»|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;hitCount||boolean||
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;records||array|SkuQueryVO|
|&emsp;&emsp;&emsp;&emsp;categoryId|分类id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;categoryPath|类目全路径名称||false|string||
|&emsp;&emsp;&emsp;&emsp;developLeadUserId|||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;dockingUserId|||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;id|主键id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;imageUrl|主图||false|string||
|&emsp;&emsp;&emsp;&emsp;nwProductCode|牛蛙产品编码||false|string||
|&emsp;&emsp;&emsp;&emsp;productCost|||false|string||
|&emsp;&emsp;&emsp;&emsp;productName|中文名称||false|string||
|&emsp;&emsp;&emsp;&emsp;productSku|SKU编码||false|string||
|&emsp;&emsp;&emsp;&emsp;productSpu|SPU编码||false|string||
|&emsp;&emsp;&emsp;&emsp;status|状态:0-审核中,1-审核失败,2-有效，3-无效||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stockList|||false|array|StockAvailableSpuVO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableStock|可用库存||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productAuthId|货权id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productOwnerId|货主id||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productSku|规格编码||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;warehouseCode|仓库代码||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;warehouseId|仓库ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;warehouseName|仓库名称||false|string||
|&emsp;&emsp;&emsp;&emsp;type|type||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;productIsCe|欧代1-是，2-否||false|int32|integer|
|&emsp;&emsp;&emsp;&emsp;distributionType|分销0否 -1 是  1 冠通 2 大建 ||false|int32|integer|
|&emsp;&emsp;&emsp;&emsp;isFba|fba 1 普通sku 2 FBAsku||false|int32|integer|
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;skuLogisticsAttrs|||false|List&lt;string>|物流分类|
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;total||integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"current": 0,
		"hitCount": true,
		"pages": 0,
		"records": [
			{
				"categoryId": 0,
				"categoryPath": "",
				"developLeadUserId": 0,
				"dockingUserId": 0,
				"id": 0,
				"imageUrl": "",
				"nwProductCode": "",
				"productCost": "",
				"productName": "",
				"productSku": "",
				"productSpu": "",
				"status": 0,
				"productIsCe": 1,
       			 "distributionType": 1,
        		"isFba": 1,
				"isInfringe": 1,
				"stockList": [
					{
						"availableStock": 0,
						"productAuthId": "",
						"productOwnerId": 0,
						"productSku": "",
						"warehouseCode": "",
						"warehouseId": 0,
						"warehouseName": ""
					}
				],
				"type": 0,
				"updateTime": "",
				"skuLogisticsAttrs": ["普货/普货1"]
			}
		],
		"searchCount": true,
		"size": 0,
		"total": 0
	},
	"msg": "",
	"success": true
}
```