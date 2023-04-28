# 详情-获取SPU/SKU详情

> 作者：wuxin

## 简要描述

- 获取SPU/SKU详情

## 请求URL
- `/blade-product/sku/getSkuDetail?id={#id}`
  
## 请求方式
- GET

## 请求示例
``` 
/blade-product/sku/getSkuDetail?id=110
```

## 参数

|参数名|说明|是否必选|类型|
|:----    |:---|:----- |-----   |
|id |ID|true |String |

## 返回示例 

``` 
{
    "data": {
		"artInfo":{
			"ifCanCreateTask":true
		},
        "baseInfo": {
            "id": "1304677047599685633",
        	"imageUrl":"图片地址",
            "productSpu": "SPU编码",
            "productSku": "SKU编码",
            "categoryId": "类目:1306038355158994945",
            "status": 1,
			"ifOnSale":1,
            "nwSku": "牛蛙SKU编码",
            "productName": "男士T恤",
            "productNameEn": "Men T-shirt",
            "ascription": "SKU归属：1公司独享、2平台共享",
            "isRestrictPublish": false,
            "isSampling": false,
            "sampleSku": "采样SKU编码",
            "referenceUrl": "平台参考连接1:https://www.baidu.com",
            "referenceUrl2": "平台参考连接2:https://www.baidu.com",
            "model": "型号",
            "isRefundDuty": false,
            "minimumOrder":1,
            "deliveryDay":2,
            "devType":1,
            "brandType": "品牌类型:1-无品牌，2-自有品牌，3-公司品牌",
            "brandName": "品牌名",
            "keywords": "关键词：Men T-shirt",
            "feature": "feature描述:Men T-shirt2",
			"descriptionPlain":"纯文本描述(英文)",
			"descriptionHtml":"富文本描述",
			"packageDescription":"包裹描述(英文)",
            "type": 1,
			"ifCanUpdate":true,
			"ifCanUpdateSampleSku":true,
            "lstAttr": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "假期2222",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "是否假期",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ],
			"relationAssembleSkuVOS":[
				{
					"productSku": "12",
					"title": "123",
					"imageUrl": "http://123.jpg",
					"quantity": 1
				}
			]
        },
		"flowInfo":{
			"flowId":"流程ID1234"
		},
        "handlerInfo": {
            "developUserName": "张三",
            "safeAuditUserName": "张四",
            "logisticsAuditUserName": "张五",
            "picAuditUserName": "张六",
            "developMasterUserName": "张七",
			"purchaseUserName":"",
			"dockingUserName":""
        },
		"imageInfo":{
			"ifCanUpdate":true,
			"img":[
			{
				"id":"110",
				"imageUrl":"http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
				"isPrime":1，
				"widthHeight":"1500*1500",
				"imageName" : ""
			}
			],
			"img800WH":[
			{
				"id":"110",
				"imageUrl":"http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
				"isPrime":1，
				"widthHeight":"1500*1500",
				"imageName" : ""
			}
			],
			"img1000WH":[
			{
				"id":"110",
				"imageUrl":"http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
				"isPrime":1，
				"widthHeight":"1500*1500",
				"imageName" : ""
			}
			],
			"imgDiyWH":[
			{
				"id":"110",
				"imageUrl":"http://192.168.114.176:9000/2daa417c868d9f68a381d2498b58b3fa.png",
				"isPrime":1，
				"widthHeight":"1500*1500",
				"imageName" : ""
			}
			],
			"video":["videoUrl"],
			"attachment":["url1"],
			"skuStockPrices": [
                {
                    "sellingPrice": "148.74",
                    "countryCode": "US"
                }
            ]
		},
        "logisticsInfo": {
			"ifCanUpdate":true,
            "netWeight": 5.0,
            "packWeight": 2.0,
        	"sizeLong":110.11,
        	"sizeWidth":110.11,
        	"sizeHeight":110.11,
        	"sizeLongPack":110.11,
        	"sizeWidthPack":110.11,
        	"sizeHeightPack":110.11,
            "customsWeight": 3.0,
            "customsPrice": 4.0,
            "customsCode": "2",
            "customsNameCn": "申报中文名称",
            "customsNameEn": "申报英文名称",
            "volumeWeight": 5.0,
            "lstAttr": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "假期2222",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "是否假期",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ]
        },
        "multiLangInfo": [
            {
                "countryCode": "JP",
                "country": "日语",
                "description": "描述",
                "feature": "feature描述",
                "keywords": "关键词",
                "productName": "名称"
            }
        ],
        "safetyAuditInfo": {
			"ifCanUpdate":true,
			"isInfringe":1,
			"infringementSuspectedType":2,
        	"infringementType":"侵权类型，0:无,1:专利侵权, 2:商标侵权, 3:版权侵权",
        	"infringementLevel":"侵权级别，0:无, 1:低, 2:中, 3:高",
        	"infringementReason":"侵权原因",
			"infringeContent":"侵权对象",
			"skuInfringeDetaileds":[{
				"productSku":"SKU编码",
				"platform":"站点",
				"sites":[],
				"qinQuanSource":"美国，英国",
				"infringementType":1
			}],
            "lstAttr": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "假期2222",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "是否假期",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ]
        },
        "supplierInfo": {
            "supplierSku": "供应商产品编码",
            "supplierPrice": "供货价格",
            "supplierCode": "供应商编码",
        },
        "warehouseInfo": {
            "fbaStock": 22,
            "id": "1304677047599685633",
            "localLocation": "88",
            "localStock": 667,
            "localWarehouse": "77",
            "overseaLocation": "11",
            "overseaStock": 55,
            "overseaWarehouse": "99",
            "productSku": "10000",
            "productSpu": "10000",
            "qcType": 1,
            "transitingQuantity": 44,
            "lstAttr": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "假期2222",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "是否假期",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ]
        },
		"saleInfo": {
			"lowestSellingPrice":1,
		}
		"specificationsInfo": {
			"specificationList": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "规格属性一",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ],
			"categoryList": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "类目属性一",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ],
			"extensionList": [
                {
                    "attrType": 1,
                    "showType": 2,
                    "configType": 2,
                    "attrName": "扩展属性一",
                    "cutType": 5,
                    "attrNameEn": null,
                    "cutName": "是,否",
                    "attributeId": "1307951651843334145",
                    "cutTypePerson": 1,
                    "defaultValue": "",
                    "fieldName": "是否假期",
                    "fieldId": "1308310315221385217",
                    "fieldValue": "否"
                }
            ]
        }
    }
}
```

## 返回参数说明 data.records
|参数名|类型|说明|
|:-----  |:-----|-----|
|artInfo |ArtInfoVO   |美工任务信息|
|└ ifCanCreateTask |Boolean |是否显示创建、批量创建按钮|
|baseInfo |SkuVO   |基础信息|
|└ id |String   |产品ID|
|└ imageUrl |String   |图片URL|
|└ productSpu |String   |SPU编码|
|└ productSku |String   |SKU编码|
|└ categoryId |String   |类目ID:1306038355158994945|
|└ status |Int   |SKU状态|
|└ ifOnSale |Int   |是否可售:0-N,1-Y|
|└ nwSku |String   |牛蛙SKU编码|
|└ productName |String   |产品中文名称：男士T恤|
|└ productNameEn |String   |产品英文名称：Men T-shirt|
|└ ascription |Int   |SKU归属：1公司独享、2平台共享|
|└ isRestrictPublish |Boolean   |是否限制刊登范围|
|└ isSampling |Boolean   |是否需要采样|
|└ sampleSku |String   |采样SKU编码 |
|└ referenceUrl |String   |平台参考连接1:https://www.baidu.com|
|└ referenceUrl2 |String   |平台参考连接2:https://www.baidu.com|
|└ model |String   |型号|
|└ isRefundDuty |Boolean   |是否退税|
|└ minimumOrder |Int   |最小起订量|
|└ deliveryDay |Int   |交期(天)|
|└ devType |Int   |开发模式, 0:铺货, 1:精品|
|└ brandType |String   |品牌类型:1-无品牌，2-自有品牌，3-公司品牌|
|└ brandName |String |品牌名 |
|└ keywords |String |关键词：Men T-shirt |
|└ feature |String |feature描述:Men T-shirt2 |
|└ descriptionPlain |String |纯文本描述(英文) |
|└ descriptionHtml |String |富文本描述 |
|└ packageDescription |String |包裹描述(英文) |
|└ descriptionCn |String |中文描述 |
|└ ascriptionTenantOrDeptIds |数组 |SKU归属下的租户或者部门id |
|└ type |Int |1 |
|└ purchasePrice |double |最新采购价 |
|└ productCost |double |产品成本价 |
|└ skuStockPrices |Obj |区域成本对象 （只有分销SKU有此对象，目前分销只有冠通有） |
|　└ sellingPrice | double|区域成本 |
|　└ countryCode |String |国家编码 |
|└ ifCanUpdate |Boolean |是否显示保存按钮 |
|└ ifCanUpdateSampleSku |Boolean |是否能修改样品SKU编码 |
|└ lstAttr |AttributeVO[] |关联的属性 |
|　└ attrType |Int |属性类型 基础属性(1),物流属性(2),仓储库存属性(3),销售属性(4),侵权属性(5) |
|　└  showType |Int |展示类型 单字段属性(1),多字段属性(2) |
|　└  configType |Int |配置类型 标准(1),配置(2) |
|　└  attrName |String |属性名称:假期 |
|　└  cutType |Int |父级取值类型 单选列表框(1),多选列表框(2),文本框(3),长文本框(4),复杂取值(5),单选按钮(6),多选按钮(7) |
|　└ attrNameEn |String |属性英文名 |
|　└ cutName |String |下拉列表选项：华为,苹果,三星 |
|　└ attributeId |String |属性ID |
|　└ cutTypePerson |String |子级取值类型 单选列表框(1),多选列表框(2),文本框(3),长文本框(4),单选按钮(5),多选按钮(6) |
|　└ defaultValue |String |字段默认值 |
|　└ fieldName |String |字段名 |
|　└ fieldId |String |字段id |
|　└ fieldValue |String |字段值 |
|└ relationAssembleSkuVOS|RelationAssembleSkuContentVO|组装加工SKU信息 |
|└ productSku |String |产品SKU |
|└ title |String |标题 |
|└ imageUrl |String |图片 |
|└ quantity |String |数量 |
|| | |
|handlerInfo|SkuHandlerVO|处理人信息 |
|└ developUserName |String |产品开发人 |
|└ safeAuditUserName |String |安全审核人 |
|└ logisticsAuditUserName |String |物流审核人 |
|└ picAuditUserName |String |图片审核人 |
|└ developMasterUserName |String |开发负责人 |
|└ purchaseUserName|String|采购人
|└ dockingUserName|String|对接人
|| | |
|imageInfo|SkuImageInfoVO|图片信息 |
|└ ifCanUpdate |Boolean |是否显示保存按钮 |
|└ img|	1500*1500图片	|	SkuImageVO		|
|　└ id|	String		|	图片id	|
|　└ imageUrl|	String		|	图片URL	|
|　└ isPrime|	Boolean	|	是否主图		|
|　└ widthHeight|	String	|	分辨率		|
|　└ imageName|	String	|	图片名称		|
|└ img800WH|	800*800图片	|	SkuImageVO		|
|└ img1000WH|	1000*1000图片	|	SkuImageVO		|
|└ imgDiyWH|	diy*diy图片	|	SkuImageVO		|
|└ video	|	String[]|	视频url		|
|└ attachment	|	String[]|	附件url		|
|| | |
|logisticsInfo|SkuLogisticsVO|物流信息 |
|└ netWeight |String |产品净重 |
|└ packWeight |String |打包重量 |
|└ sizeLong |String |长 |
|└ sizeWidth |String |宽 |
|└ sizeHeight |String |高 |
|└ sizeLongPack |String |打包长 |
|└ sizeWidthPack |String |打包宽 |
|└ sizeHeightPack |String |打包高 |
|└ customsWeight |String |申报重量 |
|└ customsPrice |String |申报价格 |
|└ customsCode |String |海关编码 |
|└ customsNameCn |String |申报中文名称 |
|└ customsNameEn |String |申报英文名称 |
|└ volumeWeight |String |体积重 |
|└ ifCanUpdate |Boolean |是否显示保存按钮 |
|└ lstAttr |AttributeVO[] |关联的属性 |
|└ logisticsAttrIds |数组 |物流属性id |
|| | |
|multiLangInfo|SkuLanguageVO[]|多语言信息 |
|└ countryCode |String |JP |
|└ country |String |日语 |
|└ description |String |描述 |
|└ feature |String |feature描述 |
|└ keywords |String |关键词 |
|└ productName |String |名称 |
|| | |
|safetyAuditInfo|SkuInfringeVO|安全审核信息 |
|└ forbiddenPlatformCountryList |ForbiddenPlatformCountryVO[] |禁止上架平台 保留计划删除|
|　└ platform |String |平台编码  保留计划删除|
|　└ ifAll |Boolean |是否所有站点 保留计划删除|
|　└ countryList |String[] |站点编码 保留计划删除 |
|└ skuInfringeDetaileds	|SkuInfringeDetailed[] |禁止上架平台 （新） |
|　└ platform |String |平台编码 |
|　└ sites |String[] |站点 |
|　└ qinQuanSource |String[] |侵权来源 |
|　└ infringementType |String[] |侵权类型  1 外观专利侵权，2 设计专利侵权，3 商标侵权(关键词侵权)，4 图片侵权(盗图)，5 著作侵权，6 发明专利侵权，7 平台禁售 |
|└ ifCanUpdate |Boolean |是否显示保存按钮 |
|└ isInfringe |Integer |是否侵权:0-N,1-Y |
|└ infringementSuspectedType |Integer |疑似侵权类型:1产品侵权，2疑似侵权 |
|└ infringementType |String |侵权类型，0:无,1:专利侵权, 2:商标侵权, 3:版权侵权 |
|└ infringementLevel |String |侵权级别，0:无, 1:低, 2:中, 3:高 |
|└ infringementReason |String |侵权原因 |
|└ infringeContent |String |侵权对象 |
|└ lstAttr |AttributeVO[] |关联的属性 |
|| | |
|supplierInfo|SupplierInfoVO|供应商信息 |
|└ supplierSku |String |供应商产品编码 |
|└ supplierPrice |String |供货价格 |
|└ supplierCode |String |供应商编码 |
|| | |
|warehouseInfo|SkuWarehouseVO|仓储信息 |
|└ localWarehouse |String |本地备货仓库 |
|└ localStock |Integer |本地库存数量 |
|└ localLocation |String |本地仓库位信息 |
|└ overseaWarehouse |String |海外备货仓库 |
|└ overseaStock |Integer |海外库存数量 |
|└ overseaLocation |String |海外仓库位信息 |
|└ fbaStock |Integer |FBA库存数量 |
|└ transitingQuantity |Integer |在途库存数量 |
|└ qcType |Integer |质检标准:1全检 2抽检 3免检 |
|└ lstAttr |AttributeVO[] |关联的属性 |
|└ mainWarehouseCode|String|主仓编码|
|└ mainWarehouseName|String|主仓名称|
|| | |
|saleInfo|SaleInfoVO|销售信息 |
|└ lowestSellingPrice |double |最低销售价 |
|└ ifCanUpdate |Boolean |是否显示保存按钮 |
|| | |
|flowInfo|FlowInstanceVO|流程信息 |
|└ flowId |String |流程Id |
|| | |
|specificationsInfo|SpecificationsInfoVO|规格/类目/扩展属性Tab |
|└ specificationList |AttributeVO[] |规格属性 |
|└ categoryList |AttributeVO[] |类目属性 |
|└ extensionList |AttributeVO[] |扩展属性 |