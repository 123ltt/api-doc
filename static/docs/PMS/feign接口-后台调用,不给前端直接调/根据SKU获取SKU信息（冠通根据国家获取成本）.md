# 根据SKU获取SKU信息（冠通根据国家获取成本）

> 作者：pengyutian

**简要描述：** 

- 根据SKU获取SKU信息（冠通根据国家获取成本）

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
- `  {{服务中心网关地址}}/api/sku/getSkuDetailBySkuCodeExtends`
  
**请求方式：**
- Post 

**请求示例：**
``` 
@PostMapping("/api/sku/getSkuDetailBySkuCodeExtends")
R&lt;List&lt;SkuVO>> postSkuDetailBySkuCodeExtends(@RequestParam List&lt;SkuDetailByCodeExtend> skuDetailByCodeExtends)

[{
		"productSku":"xx",
		"countryCode":"国家编码"
}]
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|skuDetailByCodeExtend |Object  |条件封装 |是|
|-productSku |String[]  |SKU编码 |是|
|-countryCode |String[]  |国家编码 |是|
|-skuTypes |Int[]  |SKU类型 |否（默认查PMS-SKU） 2PMS-SKU  5NW-SKU  com.zhkj.cpms.enums.SkuTypeEnum|
``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "productSku": SKU编码,
				"productSpu": SPU编码,
                "productName": "SKU或SPU名称",
				"productNameEn": "SKU或SPU英文名称",
				"imageUrl":"主图URL"
                "productCost": "1.0001",
                "type": "1",
                "developLeadUserId": "110",
				"developLeadUserName":"xxx",
				"status":1,
				"netWeight": 5.0,
                "packWeight": 2.0,
                "sizeLong":110.11,
                "sizeWidth":110.11,
                "sizeHeight":110.11,
                "sizeLongPack":110.11,
                "sizeWidthPack":110.11,
                "sizeHeightPack":110.11,
				"isFba": 1，
				"customsPrice":1.00,
				"customsCurrencyCode":"USD",
				"customsCode":"xxxx",
				"customsNameEn":"xxxx",
				"customsNameCn":"xxxx",
				"logisticsAttr":"1",
				"logisticsIdList":"1",
				"subLogisticsIdList":"1",
				"discountRatio":0.45，
				"colour": "Dark Grey",
           	    "size": "M",
				"regionalCost": [
                {
                    "stockCode": "SZ0001",
                    "sellingPrice": "121.05",
                    "countryCode": "US"
                }
            ]
        ]
    },
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|productSpu |String   |SPU编码|
|productName |String   |SKU或SPU中文名称|
|productNameEn |String   |SKU或SPU英文名称|
|imageUrl |String   |主图URL|
|productCost |BigDecimal   |成本价|
|type |Integer   |SKU类型|
|developLeadUserId |String   |开发责任人userId|
|developLeadUserName |String   |开发责任人user Name|
|status |Integer   |SKU状态|
| netWeight |String |产品净重 |
| packWeight |String |打包重量 |
| sizeLong |String |长 |
| sizeWidth |String |宽 |
| sizeHeight |String |高 |
| sizeLongPack |String |打包长 |
| sizeWidthPack |String |打包宽 |
| sizeHeightPack |String |打包高 |
| customsPrice |BigDecimal |申报价格USD |
| customsCurrencyCode |String |申报币种：默认USD |
| customsCode |String |海关编码 |
| customsNameEn |String |申报英文名称 |
| customsNameCn |String |申报中文名称 |
| colour |String |颜色 |
| size |String |尺寸 |
| logisticsAttr |String |物流属性，多个使用逗号隔开 |
| logisticsIdList |String |物流属性IdList，多个使用逗号隔开 |
| subLogisticsIdList |String |末级物流属性IdList，多个使用逗号隔开 |
| isFba |Byte |是否FBA（1 普通sku（默认） 2 FBAsku ） |
| discountRatio |Double |折扣比例 |
| regionalCost |Array |区域成本  |
| --stockCode |String |区域编码 |
| --sellingPrice |BigDecimal |成本 |
| --countryCode |String |国家编码 |

 **备注**