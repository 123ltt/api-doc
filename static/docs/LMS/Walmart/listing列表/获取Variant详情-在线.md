# 获取Variant详情-在线

> 作者：wuxin

## 作者
- 吴新

    
## 简要描述

- 获取variant详情, 在线listing编辑使用

## 请求URL
- `/walmartlistingvariant/detail`
  
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
			"productIdType": null,
			"productId": null,
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
			"profitRate": null,
			"offerStartDate":null,
			"offerEndDate":null,
			"itemCreationDate":null,
			"itemLastUpdated":null,
			"description": "",
			"keyFeatures": "",
			"imageUrls": "",
			"productAttributes": "",
			"variantAttributes": "",
			"overseasWarehouses": null,
			"warehousesType": null,
			"isOverseasWarehouses": null,
			"salePrefix": null
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|&emsp;&emsp; id|true|long |skuId|
|&emsp;&emsp; walmartListingId|true|long |主表关联ID|
|&emsp;&emsp; itemId|true|long |平台ID|
|&emsp;&emsp; productSku|true|string |产品SKU|
|&emsp;&emsp; sellerSku|true|string |平台SKU|
|&emsp;&emsp; name|true|string |变体名称|
|&emsp;&emsp; publishStatus|true|string |发布状态|
|&emsp;&emsp; lifecycleStatus|true|string |商品状态|
|&emsp;&emsp; productType|true|string |产品类型|
|&emsp;&emsp; productIdType|true|string |产品ID类型 ISBN、UPC、EAN|
|&emsp;&emsp; productId|true|string |产品ID|
|&emsp;&emsp; imageUrl|true|string |主图|
|&emsp;&emsp; reviewsCount|true|number |评论数|
|&emsp;&emsp; averageRating|true|string |评分|
|&emsp;&emsp; itemPageUrl|true|string |商品URL|
|&emsp;&emsp; stock|true|number |库存|
|&emsp;&emsp; price|true|number |价格|
|&emsp;&emsp; currency|true|string |币种|
|&emsp;&emsp; costPrice|true|number |成本价|
|&emsp;&emsp; profitRate|true|number |利润率|
|&emsp;&emsp; offerStartDate|true|date |上架开始时间|
|&emsp;&emsp; offerEndDate|true|date |上架结束时间|
|&emsp;&emsp; itemCreationDate|true|date |平台创建时间|
|&emsp;&emsp; itemLastUpdated|true|date |平台修改时间|
|&emsp;&emsp; description|true|string |商品描述|
|&emsp;&emsp; keyFeatures|true|string |关键词|
|&emsp;&emsp; imageUrls|true|string |图片|
|&emsp;&emsp; productAttributes|true|string |产品属性|
|&emsp;&emsp; variantAttributes|true|string |变体属性|
|&emsp;&emsp; overseasWarehouses|true|string |海外仓编码|
|&emsp;&emsp; warehousesType|true|string |仓库编码|
|&emsp;&emsp; isOverseasWarehouses|true|string |是否海外仓|
|&emsp;&emsp; salePrefix|false|string |销售前缀|
## 备注 

- 更多返回错误代码请看首页的错误代码描述