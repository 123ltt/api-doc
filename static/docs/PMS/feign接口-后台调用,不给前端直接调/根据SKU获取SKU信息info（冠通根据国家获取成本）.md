# 根据SKU获取SKU信息info（冠通根据国家获取成本）

> 作者：pengyutian

**简要描述：** 

- 根据SKU获取SKU信息info（冠通根据国家获取成本）

* pms
		&lt;dependency>
            &lt;groupId>com.zhkj.cpms&lt;/groupId>
            &lt;artifactId>pms-api&lt;/artifactId>
            &lt;version>1.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
- `com.zhkj.pms.feign.SkuClient`
* cpms 
		&lt;dependency>
            &lt;groupId>com.zhkj.cpms&lt;/groupId>
            &lt;artifactId>cpms-api&lt;/artifactId>
            &lt;version>1.1.0-SNAPSHOT&lt;/version>
        &lt;/dependency>
- `com.zhkj.cpms.feign.SkuClient`

**请求URL：** 
- `  {{服务中心网关地址}}/api/sku/getSkuInfoByCodeOrExtend`
  
**请求方式：**
- PostMapping 

**请求示例：**
``` 
@PostMapping("/api/sku/getSkuInfoByCodeOrExtend")
R&lt;List&lt;SkuVO>> getSkuInfoByCodeOrExtend(@RequestParam RequestDTO&lt;List&lt;SkuInfoByCodeExtend>> skuInfoByCodeExtends)
{
	"data":[{
		"productSku":"SKU编码",
		"countryCode":"国家编码"
	}]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|skuDetailByCodeExtend |Object  |条件封装 |是|
|-productSku |String[]  |SKU编码 |是|
|-countryCode |String[]  |国家编码 |是|
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "GT349157600A",
            "productCost": "0.0000",
            "productName": "宠物小型犬猫EVA聚合泡棉包/手提包 大号灰色",
            "discountStr": "1.00",
            "developLeadUserId": 0,
            "dockingUserId": 0,
            "developMasterUserId": null,
            "grossWeight": 0.0,
            "logisticsAttr": "[]",
            "nwSku": "34915760",
            "customsPrice": "-1.0",
            "categoryPathId": null,
            "categoryPath": null,
            "categoryId": 0,
            "netWeight": 0.0,
            "packWeight": 750.0,
            "productIsCe": 2,
            "sizeHeightPack": 15.0,
            "sizeLongPack": 42.0,
            "sizeWidthPack": 35.0,
            "distributionType": 1,
            "status": 2,
            "regionalCost": [
                {
                    "stockCode": "SZ0001",
                    "sellingPrice": "121.05",
                    "countryCode": "US"
                }
            ],
			"isInfringe": false
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281637912921819101113168",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|productCost |BigDecimal   |成本|
|productName |String   |SKU或SPU中文名称|
|discountStr |String   |折扣比列|
|developLeadUserId |Long   |开发责任人userId|
|dockingUserId |Long   |对接人员id|
|developMasterUserId |Long   ||
|grossWeight |Double   |毛重|
|logisticsAttr |String   |物流属性，多个使用逗号隔开|
|nwSku |String |牛蛙SKU |
|customsPrice |BigDecimal |申报价格 |
|categoryPathId |String |类目路径ID |
|categoryPath |String |类目路径 |
|categoryId |String |类目id |
|netWeight |Double |产品净重 |
|packWeight |Double |打包重量 |
|productIsCe |Byte |是否需要CE标志：1-是，2-否 |
|sizeHeightPack |Double |打包尺寸高度 |
|sizeLongPack |Double |打包尺寸长度 |
|sizeWidthPack |Double |打包尺寸宽度 |
|distributionType |Integer |分销类型（0否 1 冠通 2 大建 3易念） |
|status |Integer |状态:0-审核中,1-审核失败,2-有效，3-无效 4-无效待审核 |
| discountRatio |Double |折扣比例 |
| regionalCost |Array |区域成本  |
| --stockCode |String |区域编码 |
| --sellingPrice |BigDecimal |成本 |
| --countryCode |String |国家编码 |
|isInfringe |Boolean |是否侵权（true 是 false 否） |


 **备注**