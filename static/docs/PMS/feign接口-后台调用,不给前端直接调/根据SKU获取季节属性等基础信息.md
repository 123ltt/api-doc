# 根据SKU获取季节属性等基础信息

> 作者：wuxin

**简要描述：** 


根据SKU获取季节属性等基础信息





**请求URL：** 
```
 ` /ims/sku/imsGetSkuInfo

 com.zhkj.pms.feign.ImsClient
 com.zhkj.cpms.feign.ImsClient

```


  
**请求方式：**
- POST 

**请求示例：** 
```

 {
    "data":{
        "productSkus":["R0N42241C5Z"],
		"nwSkus":[]
    }
}


```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSkus |String[]   |PMS_SKU集合|否|
|nwSkus |String[]   |nw_SKU集合|否|




 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "nwSku": "JL241RM",
            "productSku": "R0N42241C5Z",
            "productSpu": "R0N42241",
            "productName": "宠物小斗篷衣服 红色M码",
            "productCreateTime": "2017-11-21 14:58:15",
            "developLeadUserId": 0,
            "isInfringe": 0,
            "bigGoodsAttr": "普货",
            "season": [
                "四季"
            ],
			"seasonValue":[
			 "四季"
			]
            "attrValueItemBOList": [
                {
                    "ifDefault": false,
                    "code": "四季",
                    "valueEn": "四季",
                    "value": "四季"
                }
            ],
            "skuLogisticsVO": {
                "productSku": "R0N42241C5Z",
                "netWeight": 0.0,
                "packWeight": 33.0,
                "contain": "",
                "packContain": "",
                "volumeWeight": 0.0,
                "customsWeight": 0.0,
                "customsCode": "",
                "customsPrice": 0.8,
                "packagingType": 18,
                "customsNameCn": "披风",
                "customsNameEn": "cloak",
                "imitation": "",
                "sizeLong": "8.0000",
                "sizeWidth": "6.0000",
                "sizeHeight": "2.0000",
                "sizeLongPack": "8.0000",
                "sizeWidthPack": "6.0000",
                "sizeHeightPack": "2.0000"
            },
            "categoryVOS": [
                {
                    "id": 3375301,
                    "parentId": 0,
                    "name": "运动与户外",
                    "nameEn": "Sports & Outdoors",
                    "level": 1,
                    "categoryPathId": "3375301",
                    "categoryPath": "运动与户外",
                    "isLeaf": 0,
					"nwName": "",
					"nwId": 123
                }
				...
            ]
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428164707259536810312076"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |pms_sku编码|
|productSpu |String   |pms_spu编码 |
|nwSku |String   |nw_sku |
|productCreateTime |Date   |产品创建时间|
|developLeadUserId |Long   |开发人员ID |
|isInfringe |int   |是否侵权（0未1有 与平台无关 有任意侵权则侵权） |
|bigGoodsAttr |String   |大货属性 |
|logisticsAttribute |List&lt;String>   |物流分类 |
|skuLogisticsVO |Obj   |物流信息 |
|-id |long  |ID |
|-netWeight |Double  |产品净重 |
|-packWeight |Double  |打包重量 |
|-contain |String  |尺寸 |
|-packContain |String  |包装尺寸 |
|-volumeWeight |Double  |体积重 |
|-customsWeight |Double  |申报重量 |
|-customsCode |String  |海关编码 |
|-customsPrice |Double  |申报价格 |
|-customsNameCn |String  |申报中文名称 |
|-packagingType |Integer  |包材类型 |
|-customsNameEn |String  |申报英文名称 |
|-sizeLong |String  |长 |
|-sizeWidth|String  |宽 |
|-sizeHeight |String  |高 |
|-sizeLongPack |String  |打包长 |
|-sizeWidthPack |String  |打包宽 |
|-sizeHeightPack |String  |打包高 |
|seasonValue |List&lt;String>   |季节属性 |
|season |List&lt;String>   |季节属性 弃用|
|attrValueItemBOList |List&lt;Obj>   |属性配置信息 弃用 |
|-ifDefault |Bo  |默认值 |
|-code |String  |编码 |
|-valueEn |String  |英文名 |
|-value |String  |值 |
|categoryVOS |List&lt;obj>   |多级类目 |
|-parentId |long  |上级id |
|-id |long  |ID |
|-name |String  |类目名字 |
|-level |int  |类目等级 |
|-nwName |string  |牛蛙类目名(中文) |
|-nwId |long  |牛蛙类目ID |