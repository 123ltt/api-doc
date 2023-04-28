# sku对照列表

> 作者：wuxin

## 简要描述

- sku对照列表

## 请求URL
- ` /pms/skuMapper/page `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|queryType |是  |int |查询类型 （1 系统子sku  2 平台sku）   |
|queryContent |是  |array(string) |查询内容   |
|platform |是  |string | 平台    |
|shopId     |否  |Long | 店铺ID    |
|updateTimeStart     |否  |date | 操作开始时间    |
|updateTimeEnd     |否  |date | 操作结束时间    |

## 请求示例 

``` 
{
    "current": 1,
    "size": 15,
    "queryType": 1,
    "queryContent": [],
    "platform": "",
    "shopId": null,
    "updateTimeStart": "",
    "updateTimeEnd": ""
}
```

## 返回示例 

``` 
{
  "code": 200,
  "success": true,
  "data": {
    "records": [
      {
    	"pmsSku":"aqw8-qaf9-wfd6",
		"parentPmsSku":"",
    	"sellerSku":"aqtr-qreyt9-wtrytd6",
		"parentSellerSku":"",
		"platform":"AM",
		"shopId": null,
        "status": 0,
        "createdTime": "2022-04-06 08:00:00",
        "updatedTime": "2022-04-06 08:00:00"，
		"updateUserName": ""
      }
    ],
    "total": 1,
    "size": 1,
    "current": 1,
    "orders": [],
    "optimizeCountSql": true,
    "hitCount": false,
    "searchCount": true,
    "pages": 1
  },
  "msg": "操作成功",
  "attachedMap": {
    "traceId": "c0a832c4163783405281610022236"
  }
}
```

## 返回参数说明 

|参数名|说明|
|:-----  |-----                           |
|pmsSku |系统子SKU  |
|parentPmsSku |系统父SKU  |
|sellerSku |平台子SKU  |
|parentSellerSku |平台父SKU  |
|platform |平台  |
|shopId |店铺ID  |
|status |状态 0 有效 1 无效  |
|createdTime |创建时间  |
|updatedTime |更新时间  |
|updateUserName |更新人  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述