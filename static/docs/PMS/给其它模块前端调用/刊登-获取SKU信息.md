# 刊登-获取SKU信息

> 作者：pengyutian

**简要描述：** 

- 获取当前用户可以刊登的SKU详情,会做刊登约束检验，

**请求URL：** 
- ` /lms/sku/getSkuDetail
  
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
		}
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|lstProductSku |String[] |SKU编码|是|
|platformCode |String |平台编码|是|
|storeCode |String|店铺编号|是|
|languageType |String|语言类型|否（默认en）en/zh|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {
		"productSku":"SKU编码",
		"productName":"产品名称、标题",
		"type":1,
		"categoryId":"叶子类目id",
		"rootCategoryId":"顶级类目id",
		"pcCategoryIdPath": "619,180012,181227,38093",
		"pcCategoryNamePath": "fg,gf,dfg,fdg",
		"pcCategoryId": "38093",
		"brandName":"品牌",
        "productCost": "0.0000",
		"netWeight": 5.0,
        "packWeight": 2.0,
        "sizeLong":110.11,
        "sizeWidth":110.11,
        "sizeHeight":110.11,
        "sizeLongPack":110.11,
        "sizeWidthPack":110.11,
        "sizeHeightPack":110.11,
		"keywords": "关键词：Men T-shirt",
		"descriptionPlain":"纯文本描述",
        "descriptionHtml":"富文本描述",
        "developLeadUserId": "110",
		"status" : 2,
		"riskLevel": 1,
		"lstSkuCode":[
                {
                    "sku": "OS9G0KH02",
                    "count": 3
                }
            ],
		"imgInfo":[
			{
				"widthHeight":"1500*1500",
				"lstImage":[
					{
						"imageUrl":"http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
						"isPrime":1，
						"imageName" : "",
						"imageTags":"500"
					}
				]
			},
			{
				"widthHeight":"1000*1000",
				"lstImage":[
					{
						"imageUrl":"http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
						"isPrime":1，
						"imageName" : "",
						"imageTags":"500"
					}
				]
			}
		],
	"spuimageinfo": [
	  				{
                    "widthHeight": "800*800",
                    "lstImage": [ {
                            "imageName": "ZA0031.jpg",
                            "imageUrl": "https://image.izehui.com/PIC_800/ZA/ZA0031/ZA0031.jpg",
                            "isPrime": 0,
							"imageTags":"100"
                        },
                        {
                            "imageName": "ZA0031A (1).jpg",
                            "imageUrl": "https://image.izehui.com/PIC_800/ZA/ZA0031/ZA0031A (1).jpg",
                            "isPrime": 0,
							"imageTags":"500"
                        }]
                },
                {
                    "widthHeight": "1000*1000",
                    "lstImage": [
                        {
                            "imageName": "ZA0031.jpg",
                            "imageUrl": "https://image.izehui.com/PIC_1000/ZA/ZA0031/ZA0031.jpg",
                            "isPrime": 0，
							"imageTags":"500"
                        },
                        {
                            "imageName": "ZA0031A (1).jpg",
                            "imageUrl": "https://image.izehui.com/PIC_1000/ZA/ZA0031/ZA0031A (1).jpg",
                            "isPrime": 0,
							"imageTags":"500"
                        }
						    ]
                },"skuSpecificationAttrs": [
                "Color"
            ],
            "lstAttrSpecification": [
                {
                    "fieldName": "颜色",
                    "fieldNameEn": "Color",
                    "fieldValue": "Purple"
                }
            ],
				 "isFba": 1,
				 "customizeKeyProperties": "["【Unique】Halloween ghost decoration is the unique charm of your home. You can hang it for decoration in your home.","【Occasion】Suitable for Halloween party indoor and outdoor decoration, front yard, drainage pipe, trees, flag poles, lamp posts, front porch columns, windows, etc.","【Size】8*9cm、7*8cm、6*7cm（3 PCS）","【Include】3 sticks, 1 threading needle, 1 rope, 3 fluffy balls, and 3 ghost ornaments.","【Gift】They are also holiday/housewarming gifts for friends or neighbors."]"
				  "skuInfringeDetailedVos": [
                        {
                            "productSku": "RXR3M067XQC",
                            "platform": "EB",
                            "sites": null,
                            "site": "All",
                            "qinQuanSource": "gbc,china,usa,uk,germany,france,italy,spanish,canada,australia,other",
                            "qinQuanSources": null,
                            "infringementType": 5
                        }
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|productName |String   |产品中文名称：男士T恤|
|type |Integer   |产品类型1spu,2-normal sku,3-组合sku	|
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
|volumeWeight |String |体积重 |
|purchasePrice |String |最新采购价 |
|mainWarehouseCode |String |主仓编码 |
|discountRatio|double|折扣比例|
|logisticsAttrIds |String |物流属性 |
|status |int   |SKU状态（0.审核中、1.审核失败、2.有效3.无效4.无效待审核）|
|lstSkuCode |CombineSkuVO[] |组合SKU的SKU数量 |
|└ sku |String |SKU编码 |
|└ count |Integer |sku数量 |
|imageInfo |ImageInfoVO[] |图片|
|└ widthHeight |String |分辨率 |
|└ lstImage |ImageInfoVO[] |图片 |
|　└ imageUrl|	String		|	图片URL	|
|　└ isPrime|	Boolean	|	是否主图		|
|　└ imageName|	String	|	图片名称		|
|　└ imageTags|	String	|	图片标签（100白底主图 200非白底主图 300细节图 400尺寸图 500副图） 多个用，分开 可能为null		|
|spuimageinfo |ImageInfoVO[] |此sku对应spu下所有sku的图片|
|└ widthHeight |String |分辨率 |
|└ lstImage |ImageInfoVO[] |图片 |
|　└ imageUrl|	String		|	图片URL	|
|　└ isPrime|	Boolean	|	是否主图		|
|　└ imageName|	String	|	图片名称		|
|　└ imageTags|	String	|	图片标签（100白底主图 200非白底主图 300细节图 400尺寸图 500副图） 多个用，分开 可能为null		|
|isFba|	Byte	|	是否FBA（1 普通sku 2 FBAsku ）		|
|customizeKeyProperties|string|自定义关键属性|
|lstAttrSpecification |AttrValueVO[] | 规格属性 |
|└ fieldName |String |中文名 |
|└ fieldNameEn |String |英文名 |
|└ fieldValue |String |属性值 |
|skuInfringeDetailedVos|String[]|侵权信息
|riskLevel |int   |0 无 1高危|
|└ productSku |String   |SKU编码|
|└ platform |String   |平台|
|└ site |String   |站点|
|└ qinQuanSource |String   |侵权来源|
|└ infringementType |int   |侵权类型|