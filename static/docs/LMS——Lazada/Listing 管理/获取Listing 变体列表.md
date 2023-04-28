# 获取Listing 变体列表

> 作者：wuxin

## 简要描述

- 获取Listing 变体列表

## 请求URL
- `/lazada/product/skus/variantList`

## 请求方式
- GET

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|spuId |是  |long |spu 主键ID   |


## 返回示例

``` 
  {
    "code": 200,
    "success": true,
    "data": [
		{
			"spuId":0,
			"sellerSku":"",
			"productSku":"",
			"masterImage":"",
			"costPrice":0.00,
			"specialPrice": 0.00,
			"price":0.00,
			"quantity":0,
			"id": 0,
			"productStatus": 1,
			"qcStatus": "",
			"myRetailPrice",
			"mySalesPrice",
			"sgRetailPrice",
			"sgSalesPrice",
			"thRetailPrice",
			"thSalesPrice",
			"phRetailPrice",
			"phSalesPrice",
			"idRetailPrice",
			"idSalesPrice",
			"vnRetailPrice",
			"vnSalesPrice",
			"viewUrl": "https://www.lazada.com.my/-i1986941933-s7928871983.html"
		}
	],
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
|id |long   |主键ID |
|spuId |long   |商品SPU_ID |
|productSku |string   |产品SKU |
|sellerSku |string   |平台SKU |
|masterImage |string   |主图 |
|costPrice |bigdecimal   |成本 |
|price |bigdecimal   |售价 |
|quantity |int   |库存 |
|productStatus |int   |产品状态(0:draft 1:active,2.inactive,3:deleted) |
|specialPrice |bigdecimal   |促销价 |
|qcStatus |string   |产品QC状态 |
|qcStatus |string   |产品QC状态 |
|myRetailPrice |bigdecimal   |MY站点售价 |
|mySalesPrice |bigdecimal   |MY站点促销价 |
|sgRetailPrice |bigdecimal   |SG站点售价 |
|sgSalesPrice |bigdecimal   |SG站促销价 |
|thRetailPrice |bigdecimal   |TH站点售价 |
|thSalesPrice |bigdecimal   |TH站促销价 |
|phRetailPrice |bigdecimal   |PH站点售价 |
|phSalesPrice |bigdecimal   |PH站促销价 |
|idRetailPrice |bigdecimal   |ID站点售价 |
|idSalesPrice |bigdecimal   |ID站促销价 |
|idRetailPrice |bigdecimal   |VN站点售价 |
|idSalesPrice |bigdecimal   |VN站促销价 |
|viewUrl |string   |lazada网址 |


## 备注

- 更多返回错误代码请看首页的错误代码描述