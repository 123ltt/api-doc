# 获取Listing 变体列表

> 作者：1638648874@qq.com

## 简要描述

- 获取Listing 变体列表

## 请求URL
- `/ebay/listing/variant_list`

## 请求方式
- GET

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|listingId |是  |long |ListingID   |


## 返回示例

``` 
  {
    "code": 200,
    "success": true,
    "data": [
		{
			"listingId":0,
			"productSku":"",
			"sellerSku":"",
			"mainPictureUrl":"",
			"costPrice":0.00,
			"startPrice":0.00,
			"stock":0,
			"listingStatus":""
		}
	],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|listingId |long   |listingID |
|productSku |string   |产品SKU |
|sellerSku |string   |平台SKU |
|mainPictureUrl |string   |主图 |
|costPrice |bigdecimal   |成本 |
|~~sellingPrice~~ |bigdecimal   |售价 |
|startPrice |bigdecimal   |售价 |
|stock |int   |库存 |
|listingStatus |string   |listing状态 |

## 备注

- 更多返回错误代码请看首页的错误代码描述