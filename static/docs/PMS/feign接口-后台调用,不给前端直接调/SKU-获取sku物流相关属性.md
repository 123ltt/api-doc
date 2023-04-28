# SKU-获取sku物流相关属性

> 作者：pengyutian

**简要描述：** 

- SKU-获取sku物流相关属性

**请求URL：** 
- ` /api/sku/getSkuLogisticsInfoByCode`

com.zhkj.cpms.feign.SkuClient
  
**请求方式：**
- GET 

**请求示例：**
```
	@GetMapping("/sku/getSkuLogisticsInfoByCode")
	public R&lt;List&lt;GetSkuLogisticsInfoByCodeVO>> getSkuLogisticsInfoByCode(@RequestParam List&lt;String> productSku)

```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSku |String[]   |SKU编码|是|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "RY8SC5F0M",
			"nwSku": "xx",
			"nwSpu": "xx",
			"productName":"xxx",
            "netWeight": 292,
            "packWeight": 302,
            "sizeLong": "26.0000",
            "sizeWidth": "20.0000",
            "sizeHeight": "3.0000",
            "sizeLongPack": "26.0000",
            "sizeWidthPack": "20.0000",
            "sizeHeightPack": "3.0000",
            "productCost": "22.9159",
			"categoryId": 172421,
             "categoryName": "摄录机",
			 "bigGoodsAttr": "普货"，
			 "thirdWarehouseSkuDtos": [
                {
                    "productSku": "QA11M075H34",
                    "nwSku": "ZT075US",
                    "warehouseSku": "ZT075US",
                    "warehouseIdStr": null,
                    "warehouseId": 629,
                    "type": 2
                }
				]
            "lstAttr": [
                1
            ],
			"seasonAttrName": "被合并sku",
            "seasonAttrCode": "14",
			"logisticsType": [
                {
                    "id": 55,
                    "name": "蜡烛"
                },
                {
                    "id": 56,
                    "name": "唇膏固体"
                }
            ],
            "combineSkuDetails": null
			
        },
        {
            "productSku": "S4D5A3B",
			"nwSku": "xx",
			"nwSpu": "xx",
			"productName":"xxx",
            "netWeight": 900,
            "packWeight": 900,
            "sizeLong": "42.0",
            "sizeWidth": "18.7883",
            "sizeHeight": "18.7883",
            "sizeLongPack": "43.0",
            "sizeWidthPack": "20.3207",
            "sizeHeightPack": "20.3207",
            "productCost": "59.3953",
			"seasonAttrName": "被合并sku",
            "seasonAttrCode": "14",
            "lstAttr": [
                1
            ],
			"model": "",
            "brandName": "",
            "customsCode": "",
            "customsNameCn": "长袍裙",
            "customsNameEn": "Robe skirt",
            "imageUrl": "xxxx200",
			"customsCode":"xx",
            "combineSkuDetails": [
                {
                    "productSku": "RZXMZ0S0D",
					"nwSku": "xx",
					"nwSpu": "xx",
					"productName":"xxx",
                    "count": 1,
                    "netWeight": 300,
                    "packWeight": 300,
                    "sizeLong": "25.0000",
                    "sizeWidth": "21.0000",
                    "sizeHeight": "12.0000",
                    "sizeLongPack": "26.0000",
                    "sizeWidthPack": "22.0000",
                    "sizeHeightPack": "13.0000",
                    "productCost": "24.0000",
					"categoryId": 172421,
                    "categoryName": "摄录机",
                    "lstAttr": [
                        1
                    ]，
					"bigGoodsAttr": "普货",
					"logisticsType": [
						{
							"id": 55,
							"name": "蜡烛"
						},
						{
							"id": 56,
							"name": "唇膏固体"
						}
           		 ]
                },
                {
                    "productSku": "RZXMZ0S08",
					"nwSku": "xx",
					"nwSpu": "xx",
					"productName":"xxx",
                    "count": 1,
                    "netWeight": 600,
                    "packWeight": 600,
                    "sizeLong": "42.0000",
                    "sizeWidth": "29.0000",
                    "sizeHeight": "7.0000",
                    "sizeLongPack": "43.0000",
                    "sizeWidthPack": "30.0000",
                    "sizeHeightPack": "8.0000",
                    "productCost": "35.3953",
					"categoryId": 172421,
                    "categoryName": "摄录机",
                    "lstAttr": [
                        1
                    ]，
					"model": "",
            "brandName": "",
            "customsCode": "",
            "customsNameCn": "长袍裙",
            "customsNameEn": "Robe skirt",
            "imageUrl": "xxxx200",
			"customsCode":"xx",
					"logisticsType": [
						"普货"
					],
					"bigGoodsAttr": "普货",
					"seasonAttrName": "被合并sku",
            		"seasonAttrCode": "14",
					"logisticsType": [
						{
							"id": 55,
							"name": "蜡烛"
						},
						{
							"id": 56,
							"name": "唇膏固体"
						}
					]
                }
            ]
        }
    ],
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|  
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|nwSku |String   |牛蛙SKU|
|nwSpu |String   |SPU编码|
|productName |String   |中文名称|
| netWeight |String |产品净重 |
| packWeight |String |打包重量 |
| sizeLong |String |长 |
| sizeWidth |String |宽 |
| sizeHeight |String |高 |
| sizeLongPack |String |打包长 |
| sizeWidthPack |String |打包宽 |
| sizeHeightPack |String |打包高 |
| lstAttr |String[] |物流属性id |
|productCost|number|产品成本
|categoryId|number|类目编码 id
|categoryName|String|类目名称
|model|String|型号
|brandName|String|品牌
|customsCode|String|海关编码
|customsNameCn|String|申报中文名称
|customsNameEn|String|申报英文名称
|imageUrl|String|首图
|logisticsType|logisticsType[]|物流分类|
|└id|Long|物流分类id|
|└id|String|物流分类name|
|BigGoodsAttr|String|物流属性-大货类型|
|seasonAttrName|String|季节类型name|
|seasonAttrCode|String|季节类型code|
|thirdWarehouseSkuDtos|Array|第三方SKU对象|
|└ productSku |String   |SKU编码|
|└ nwSku |String   |NW编码|
|└ warehouseSku |String   |仓库SKU编码|
|└ warehouseId |String   |仓库ID|
|└ type |int   |仓库类型 （1泽汇仓2谷仓3万邑通）|
|combineSkuDetails|Object|组合sku明细|
|└ productSku |String   |SKU编码|
|└ count|int|sku数量|
|└ netWeight |String |产品净重 |
|└ packWeight |String |打包重量 |
|└ sizeLong |String |长 |
|└ sizeWidth |String |宽 |
|└ sizeHeight |String |高 |
|└ sizeLongPack |String |打包长 |
|└ sizeWidthPack |String |打包宽 |
|└ sizeHeightPack |String |打包高 |
|└ lstAttr |String[] |物流属性id |
|└ productCost|number|产品成本
|└model|String|型号
|└brandName|String|品牌
|└customsCode|String|海关编码
|└customsNameCn|String|申报中文名称
|└customsNameEn|String|申报英文名称
|└imageUrl|String|首图
|└categoryId|number|类目编码 id
|└categoryName|String|类目名称
|└BigGoodsAttr|String|物流属性-大货类型
|seasonAttrName|String|季节类型name|
|seasonAttrCode|String|季节类型code|
|└logisticsType|logisticsType[]|物流分类|
|└└id|Long|物流分类id|
|└└id|String|物流分类name|


 **备注**