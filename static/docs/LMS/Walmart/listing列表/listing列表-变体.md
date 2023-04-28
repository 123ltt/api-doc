# listing列表-变体

> 作者：wuxin

## 作者
- 吴新

    
## 简要描述

- listing列表-变体查询

## 请求URL
- `/walmartlistingvariant/listVariant`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  | number |listing 主键ID   |

## 返回示例 

``` 
{
	"code": 0,
	"data": [
		{
			"walmartListingId": 0,
			"name": "",
			"costPrice": 0,
			"createDeptName": 0,
			"createTime": "",
			"createUserName": 0,
			"id": 0,
			"stock": 0,
			"isDeleted": 0,
			"itemId": 0,
			"productSku": "",
			"sellerSku": "",
			"listingStatus": null,
			"price": 0,
			"currency": "",
			"status": 0,
			"imageUrl": "",
			"itemPageUrl": "",
			"offerStartDate": "",
			"offerEndDate": "",
			"itemCreationDate": ""
			"itemLastUpdated": "",
			"updateTime": "",
			"updateUserName": "",
			"statusChangeReason": ""
		}
	],
	"msg": "",
	"success": true
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|walmartListingId |int   | walmart listing 主键ID  |
|name | string | 标题 |
|costPrice | number   | 成本价  |
|createDeptName |string   | 部门名 |
|createTime |int   | 创建时间  |
|createUserName | string   | 创建人  |
|id |int   | sku 主键ID  |
|stock |int   | 库存  |
|isDeleted | boolean   | 是否已删除  |
|itemId |int   | itemId  |
|productSku | string   | 产品SKU  |
|sellerSku | string   | sellerSku  |
|listingStatus| int | listing状态|
|price | number   | 价格  |
|currency | string   | 币种  |
|status | boolean   | 状态  |
|updateTime | data   | 更新时间  |
|updateUserName | string   | 更新人  |
|imageUrl | string   | 主图  |
|itemPageUrl | string   | 商品URL  |
|offerStartDate | data   | 上架开始时间  |
|offerEndDate | data   | 上架结束时间  |
|itemCreationDate | data   | 平台创建时间  |
|itemLastUpdated | data   | 平台修改时间  |
|statusChangeReason|string| 状态更改原因|


## 备注 

- 更多返回错误代码请看首页的错误代码描述