# Fanno 获取店铺Listing 变体列表

> 作者：raojun

## 简要描述

- 获取店铺Listing 变体列表

## 请求URL
- `/listing/variant/list`

## 请求方式
- GET

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|listingId |是  |long |主键ID   |


## 返回示例

``` 
  {
    "code": 200,
    "success": true,
    "data": [
		{
			"productSku":"",
			"platformSku":"",
			"costPrice":0.00,
			"sellingPrice": 0.00,
			"availableStock": 0
		}
	],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|productSku |string   |产品SKU |
|platformSku |string   |平台SKU |
|costPrice |string   |成本 |
|sellingPrice |string   |售价 |
|availableStock |int   |库存 |
|variantItemId |String   |变体的全球item_id |


## 备注

- 更多返回错误代码请看首页的错误代码描述