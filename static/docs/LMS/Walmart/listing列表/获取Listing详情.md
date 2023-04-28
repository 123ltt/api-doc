# 获取Listing详情

> 作者：wuxin

## 作者
- 吴新

    
## 简要描述

- 获取Listing详情

## 请求URL
- `/walmartlisting/detail`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |long |主键ID   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1345192019629039618",
        "createUser": "1065",
        "createDept": null,
        "createTime": "2020-12-30 17:34:39",
        "updateUser": null,
        "updateTime": null,
        "status": null,
        "isDeleted": null,
        "account": "cn1520259440ikxx",
        "accountCode": null,
        "groupId": 1005001972515683,
        "productSpu": "RYSYMBX",
		"sellerSku": "RYSYMBX",
        "listingType": null,
        "listingStatus": null,
        "name": "50Pcs Dog Bone Cutouts Wooden Blank Crafts Decor For Arts & Crafts Projects Ornaments Wedding Table Scatter Decor",
        "site": null,
        "categoryId": null,
        "category": null,
        "mainImage": "http://ae01.alicdn.com/kf/Ha7d229687b7b4bff9df29c8227f4979f6.jpg;http://ae01.alicdn.com/kf/H7cb2581485144daf906c5e098f759a89I.jpg;http://ae01.alicdn.com/kf/Hb94218b7e7d540238b16517f5dbab317o.jpg;http://ae01.alicdn.com/kf/Hfe27af84a53c401284b5fba4877e8b94l.jpg;http://ae01.alicdn.com/kf/Hf71e374773594526ba046545050b7549P.jpg;http://ae01.alicdn.com/kf/H6f00e17b44474b0790ef47d598629e34d.jpg",
        "costPrice": null,
		"salePrefix": null,
        "developUser": 200297146,
        "customerUser": null,
        "saleUser": null,
        "isOnline": 4,
        "source": 1,
        "timedUploadTime": "0.050",
        "upOnlineTime": 510838971,
        "auditTime": null,
		"overseasWarehouses": null,
		"warehousesType": null,
		"deliveryWarehouse": null,
		"variants": [
            {
                "id": "1345192019796811777",
                "createUser": null,
                "createDept": null,
                "createTime": null,
                "updateUser": null,
                "updateTime": null,
                "status": null,
                "isDeleted": null,
                "walmartListingId": "1345192019629039618",
                "itemId": 1005001972515683,
                "skuId": "14:200004889;200007763:201336100",
                "productSku": "RYSYMBX01",
                "sellerSku": "RG0479A",
                "name": null,
                "publishStatus": null,
                "statusChangeReason": 999,
                "lifecycleStatus": null,
                "productType": null,
                "shipMethods": null,
                "wpid": "2.56",
                "productId": null,
				"productIdType": null,
                "gtin": null,
                "shelfName": null,
                "imageUrl":null,
				"catPath":null,
				"itemPageUrl":null,
				"reviewsCount":null,
				"averageRating":null,
				"searchable":null,
				"stock":null,
				"price":null,
				"currency":null,
				"costPrice":null,
				"shippingPrice": null,
				"shippingWeight": null,
				"isPrimaryVariant": true,
				"offerStartDate":null,
				"offerEndDate":null,
				"itemCreationDate":null,
				"itemLastUpdated":null,
				 "description": "",
				 "keyFeatures": "",
				 "imageUrls": "",
				 "productAttributes": "",
				 "variantAttributes": ""
            },
            {
                "id": "1345192019796811777",
                "createUser": null,
                "createDept": null,
                "createTime": null,
                "updateUser": null,
                "updateTime": null,
                "status": null,
                "isDeleted": null,
                "walmartListingId": "1345192019629039618",
                "itemId": 1005001972515683,
                "skuId": "14:200004889;200007763:201336100",
                "productSku": "RYSYMBX01",
                "sellerSku": "RG0479A",
                "name": null,
                "publishStatus": null,
                "statusChangeReason": 999,
                "lifecycleStatus": null,
                "productType": null,
                "shipMethods": null,
                "wpid": "2.56",
                "productId": null,
				"productIdType": null,
                "gtin": null,
                "shelfName": null,
                "imageUrl":null,
				"catPath":null,
				"itemPageUrl":null,
				"reviewsCount":null,
				"averageRating":null,
				"searchable":null,
				"stock":null,
				"price":null,
				"currency":null,
				"costPrice":null,
				"shippingPrice": null,
				"shippingWeight": null,
				"isPrimaryVariant": true,
				"offerStartDate":null,
				"offerEndDate":null,
				"itemCreationDate":null,
				"itemLastUpdated":null,
				 "description": "",
				 "keyFeatures": "",
				 "imageUrls": "",
				 "productAttributes": "",
				 "variantAttributes": ""
            }
        ]
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id|long |id|
|account|string |店铺名|
|accountCode|string |店铺名CODE|
|listingType|string |listing类型|
|listingStatus|number |listing状态|
|productSpu|string |产品spu|
|sellerSku|string |sellerSku|
|name|string |商品标题|
|categoryId|number |类目ID|
|category|string |类目名|
|groupId|number |平台父ID|
|site|string |站点|
|mainImage|string |主图列表 ;分隔|
|costPrice|number |成本价|
|salePrefix|string|销售前缀|
|overseasWarehouses|string|发货仓库编码|
|warehousesType|string|仓库编码|
|deliveryWarehouse|string|交付仓库|
|source|number| 刊登方式|
|variants|array |sku变体信息|
|&emsp;&emsp; id|long |skuId|
|&emsp;&emsp; walmartListingId|long |主表关联ID|
|&emsp;&emsp; itemId|long |平台ID|
|&emsp;&emsp; productSku|string |产品SKU|
|&emsp;&emsp; sellerSku|string |平台SKU|
|&emsp;&emsp; name|string |变体名称|
|&emsp;&emsp; publishStatus|string |发布状态|
|&emsp;&emsp; lifecycleStatus|string |商品状态|
|&emsp;&emsp; productType|string |产品类型|
|&emsp;&emsp; productId|string |产品ID|
|&emsp;&emsp; productIdType|string |产品ID类型 ISBN、UPC、EAN|
|&emsp;&emsp; imageUrl|string |主图|
|&emsp;&emsp; reviewsCount|number |评论数|
|&emsp;&emsp; averageRating|string |评分|
|&emsp;&emsp; itemPageUrl|string |商品URL|
|&emsp;&emsp; stock|number |库存|
|&emsp;&emsp; price|number |价格|
|&emsp;&emsp; currency|string |币种|
|&emsp;&emsp; costPrice|number |成本价|
|&emsp;&emsp; shippingPrice|double |物流费用|
|&emsp;&emsp; shippingWeight|double |运输重量|
|&emsp;&emsp; isPrimaryVariant|boolean |是否主SKU|
|&emsp;&emsp; offerStartDate|date |上架开始时间|
|&emsp;&emsp; offerEndDate|date |上架结束时间|
|&emsp;&emsp; itemCreationDate|date |平台创建时间|
|&emsp;&emsp; itemLastUpdated|date |平台修改时间|
|&emsp;&emsp; description|string |商品描述|
|&emsp;&emsp; keyFeatures|string |关键词|
|&emsp;&emsp; imageUrls|string |图片|
|&emsp;&emsp; productAttributes|string |产品属性|
|&emsp;&emsp; variantAttributes|string |变体属性|
## 备注 

- 更多返回错误代码请看首页的错误代码描述