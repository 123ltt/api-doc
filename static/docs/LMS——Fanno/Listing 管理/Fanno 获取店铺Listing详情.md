# Fanno 获取店铺Listing详情

> 作者：yangruibo

**作者：**
- 杨锐波

**简要描述：**

- 获取店铺Listing详情

**请求URL：**
- ` /listing/detail `

**请求方式**
- POST

**参数：**

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |必选  |Long |主键id |

 **返回示例**

```
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1356827089427447809",
        "storeName": "sunfayer",
		"productSpu": "sunfayer",
		"productSkus": ["sunfayer"],
        "categoryId": 12356,
		"title": "123",
		"mainImage": "123",
		"extendImages": ["123"],
		"attributes": "123",
		"description": "123",
		"packageHeight": null,
		"packageLength": null,
		"packageWidth": null,
		"packageWeight": null,
		"warrantyId": "123",
		"warrantyPolicy": "123",
		"publishedSite": "123",
        "variants": [
            {
                "id": 1356827089427447809,
				"saleAttrs": [{"id": 1232131, “name”: "Colour", "value": "red", "image": ""}, {"id": 1232131, “name”: "Specification", "value": "XL"}],
                "productSku": "ebay_US_004830BR-RYSJZ9H01",
                "productCost": "1.00",
                "profitRate": "0.00",
                "sellingPrice": "1.00",
                "freight": "1.00",
                "availableStock": 11
        ]
    },
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |
|id |integer  |主键id
|storeCore |string  |店铺编号
|storeName |string  |店铺名称
|productSpu |string  |商品SPU
|productSkus |array(string)  |商品SKU集
|categoryId |integer  |分类ID
|title |string  |标题
|mainImage |string  |主图
|extendImages |array(string)  |扩展图集
|description |string  |商品描述
|packageLength |integer  |长
|packageWidth |integer  |宽
|packageHeight |integer  |高
|packageWeight |string  |重量
|warrantyPeriod |integer  |服务期限
|warrantyPolicy |string  |服务条款
|publishedSite |string  |已发布站点
|variants.id |long  | 变体ID（本地）
|variants.productSku |long  | 商品SKU
|variants.productCost |string  | 成本价
|variants.profitRate |string  | 利润率
|variants.sellingPrice |string  | 销售价
|variants.freight |string  | 运费
|variants.availableStock |long  | 库存
|variants.saleAttrs.id |long  | 变体属性ID
|variants.saleAttrs.name |string  | 变体属性名
|variants.saleAttrs.value |string  | 变体属性值
|variants.saleAttrs.image |string  | 变体属性图片

 **备注**