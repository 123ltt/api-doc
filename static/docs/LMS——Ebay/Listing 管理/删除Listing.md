# 删除Listing

> 作者：1638648874@qq.com

## 简要描述

- 删除Listing
- 在草稿箱删除的是本地listing，online删除是下架本地及平台listing

## 请求URL
- ` /ebay/listing/remove `

## 请求方式
- POST

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|`listingId` |是  |long |ListingID   |
|variations |否  |list&lt;long> |Listing变体ID列表   |
## 请求示例
```
{
    "listings": [
		{
			"listingId": 1343488912163753985,
			"variations": [
				1343488947710480386,
				1343488948029247489
			]
		},
		{
			"listingId": 1343488912163753985,
			"variations": [
				1343488947710480386,
				1343488948029247489
			]
		}
	]
}
```

## 返回示例

```
{
    "code": 200,
    "success": true,
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
| |   | |