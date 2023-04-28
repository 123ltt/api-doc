# 根据code得到SPU信息（牛蛙SKU\SPU\PMSSPU\PMSSKU）

> 作者：pengyutian

**简要描述：** 
- 获取当前用户可以刊登的SPU详情,会做刊登约束检验，无权限刊登的spu不会返回
- 可入参牛蛙SKU\SPU\PMSSPU\PMSSKU  
- 同时入参spu和sku时以spu为准，单独入参sku时返回它的spu

**请求URL：** 
- ` /lms/sku/getCodeDetail

**类路劲：** 
- com.zhkj.pms.feign.LmsSkuClient
- com.zhkj.cpms.feign.LmsSkuClient

  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": {
        "lstProductSku":["SKU编码1","SKU编码2"],
        "platformCode":"AM",
        "storeCode":"店铺编号",
		"siteCode":"站点",
		"languageType":""
	},
	"isDetailed":true
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|lstProductSku |String[] |SKU编码|是|
|platformCode |String |平台编码|是|
|storeCode |String|店铺编号|是|
|siteCode |String|站点|否|
|languageType |String|语言类型|否（默认en）en/zh|
|true |Boolean|是否需要详细信息|否(默认不返回)|
 **返回示例**
``` 
{
	"code": 200,
	"success": true,
	"data": {
		"productSku": "SPU编码",
		"productName": "产品名称、标题",
		"categoryId": "叶子类目id",
		"rootCategoryId": "顶级类目id",
		"pcCategoryIdPath": "619,180012,181227,38093",
		"pcCategoryNamePath": "fg,gf,dfg,fdg",
		"pcCategoryId": "38093",
		"brandName": "品牌",
		"productCost": "0.0000",
		"netWeight": 5.0,
		"packWeight": 2.0,
		"sizeLong": 110.11,
		"sizeWidth": 110.11,
		"sizeHeight": 110.11,
		"sizeLongPack": 110.11,
		"sizeWidthPack": 110.11,
		"sizeHeightPack": 110.11,
		"keywords": "关键词：Men T-shirt",
		"descriptionPlain": "纯文本描述",
		"descriptionHtml": "富文本描述",
		"developLeadUserId": "110",
		"spuSpecificationAttrs": ["1", "2"],
		"lstSku": [{
			"productSku": "SKU编码",
			"productCost": "0.0000",
			"netWeight": 5.0,
			"packWeight": 2.0,
			"sizeLong": 110.11,
			"sizeWidth": 110.11,
			"sizeHeight": 110.11,
			"sizeLongPack": 110.11,
			"sizeWidthPack": 110.11,
			"sizeHeightPack": 110.11,
			"lstAttrSpecification": [{
				"fieldName": "颜色"
				"fieldNameEn": "Color",
				"fieldValue": "Red"
			}, {
				"fieldName": "尺寸"
				"fieldNameEn": "Size",
				"fieldValue": "XXL"
			}],
			"imgInfo": [{
				"widthHeight": "1500*1500",
				"lstImage": [{
					"imageUrl": "http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
					"isPrime": 1， "imageName": "",
					"imageTags": "100,200"
				}]
			}]
		}],
		"customizeKeyProperties": "["【Unique】 Halloween ghost decoration is the unique charm of your home.You can hang itfor decoration in your home.",
		"【Occasion】 Suitable for Halloween party indoor and outdoor decoration, front yard, drainage pipe,trees,flag poles,lamp posts,front porch columns,
		windows,etc.",
		"【Size】 8 * 9 cm、 7 * 8 cm、 6 * 7 cm（ 3 PCS） ",
		"【Include】 3 sticks, 1 threading needle, 1 rope, 3 fluffy balls, and 3 ghost ornaments.",
		"【Gift】 They are also holiday / housewarming gifts for friends or neighbors."]"
	},
	"msg": "操作成功"
}
```
 **返回参数说明 data** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|source|int|来源 1pms 2牛蛙|
|productSku |String   |SKU编码|
|productName |String   |产品中文名称：男士T恤|
|categoryId |String   |叶子类目ID|
|rootCategoryId |String   |顶级类目ID|
|pcCategoryIdPath|String | 刊登类目ID树|
|pcCategoryNamePath|String | 刊登类目名称树|
|pcCategoryId|String | 刊登类目ID|
|brandName |String |品牌名 |
|productCost |String |成本价 |
|netWeight |String |产品净重 |
|packWeight |String |打包重量 |
|sizeLong |String |长 |
|sizeWidth |String |宽 |
|sizeHeight |String |高 |
|sizeLongPack |String |打包长 |
|sizeWidthPack |String |打包宽 |
|sizeHeightPack |String |打包高 |
|keywords |String |关键词：Men T-shirt |
|descriptionPlain |String |纯文本描述(英文) |
|descriptionHtml |String |富文本描述 |
|developLeadUserId |String |开发责任人userId |
|categoryPathId |String |类目全路径id |
|categoryPath |String |类目全路径 |
|spuSpecificationAttrs|String[]|spu规格属性
|└ imageInfo |ImageInfoVO[] |图片|
|　└ widthHeight |String |分辨率 |
|　└ lstImage |ImageInfoVO[] |图片 |
|　　└ imageUrl|	String		|	图片URL	|
|　　└ isPrime|	Boolean	|	是否主图		|
|　　└ imageName|	String	|	图片名称		|
|lstSku |SkuDetailVO[] |SKU信息|
|└ productSku |String   |SKU编码|
|└productCost |String |成本价 |
|└ netWeight |String |产品净重 |
|└ packWeight |String |打包重量 |
|└ sizeLong |String |长 |
|└ sizeWidth |String |宽 |
|└ sizeHeight |String |高 |
|└ sizeLongPack |String |打包长 |
|└ sizeWidthPack |String |打包宽 |
|└ sizeHeightPack |String |打包高 |
|└ productName |String |中文名称 |
|└ productNameEn |String |英文名称 |
|└ isFba|string|	是否FBA（1 普通sku（默认） 2 FBAsku ）|
|└ isInfringe	|Boolean|	是否侵权|
|discountRatio|double|折扣比例|
|└ lstAttrSpecification |AttrValueVO[] | 规格属性 |
|　└ fieldName |String |中文名 |
|　└ fieldNameEn |String |英文名 |
|　└ fieldValue |String |属性值 |
|└ imageInfo |ImageInfoVO[] |图片|
|　└ widthHeight |String |分辨率 |
|　└ lstImage |ImageInfoVO[] |图片 |
|　　└ imageUrl|	String		|	图片URL	|
|　　└ isPrime|	Boolean	|	是否主图		|
|　　└ imageName|	String	|	图片名称		|
|　　└ imageTags|	String	|	图片标签（100白底主图 200非白底主图 300细节图 400尺寸图 500副图）多个用，分开 可能为null			|
|customizeKeyProperties|string|	自定义关键属性|
|subTitleObjList|TitleVO[]|	副标题|
|　└ id |Long |ID |
|　└ productSpu |String |产品spu |
|　└ title |String |副标题 |
|　└ languageType |String |语言类型 |