# listing列表

> 作者：xingzhen

## 作者
- 吴新

    
## 简要描述

- listing列表查询

## 请求URL
- `/walmartlisting/list`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current  |是  |number | 当前页	   |
|size  |是  |number | 每页大小	   |
|accountCodes  |否  |List&lt;string> | 账号	   |
|upOnlineTimeStart |否  |Number | 上架开始时间    |
|upOnlineTimeEnd     |否  |Number | 上架结束时间    |
|createTimeStart |否  |Number | 创建开始时间    |
|createTimeEnd     |否  |Number | 创建结束时间    |
|searchType     |否  |Number | 搜索类型  1-标题(单个) 2-内部sku 3-外部sku 4-itemId 5-UPC 6-listingId   |
|searchSort     |是  |number | 搜索类别 1-子sku 2-父sku  默认为:1    |
|searchContent     |否  |Array | 搜索内容    |
|createUser     |否  |Long | 创建人 id   |
|listingType     |否  |string | listing类型 Normal Variation Combo    |
|source     |否  |int | 数据来源  1-后台刊登  2-蝌蚪刊登  3-新系统刊登    |
|isOverseasWarehouses     |否  | Boolean | 是否海外仓  |
|listingStatus     |是  |Number | 状态 1-Draft 2-Approving 3-Uploading 4-Upload Failed 5-Online 6-Updating 7-Update Failed 8-Match Failed 9-Canceling 10-Canceled   |
|isGbcInfringe     |否  |boolean | 是否GBC   |
|infringementTypes     |否  |array |侵权类型, 是个数组   |
|infringementTypes     |否  |array |侵权类型, 是个数组   |
|isAutoPublish     |否  |BOOLEAN |是否自动刊登   |
|autoPublishType     |否  |int |自动刊登类型（1.指定sku 2.搬店）   |
|saleUser|否 |long | 负责人id |
|category|否 |string | 类目 |
|isFbword|否 |string | 是否有违禁词 |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
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
                "productSpu": "RYSYMBX",
				"sellerSku": "",
                "listingType": null,
                "listingStatus": null,
                "name": "50Pcs Dog Bone",
                "categoryId": null,
                "category": null,
                "mainImage": null,
                "costPrice": null,
                "price": null,
                "stock": null,
                "developUser": 1585,
                "saleUser": null,
                "isOnline": null,
                "source": 1,
                "timedUploadTime": null,
                "upOnlineTime": null,
                "auditTime": null,
				"site": null,
				"itemPageUrl": null,
                "variantNum": 2,
				"deliveryWarehouse": null
            }
        ],
        "total": 1,
        "size": 10,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |long   |条目id  |
|account |string   |店铺名  |
|name |string   |标题  |
|productSpu |string   |内部SKU  |
|sellerSku |string   |平台SKU  |
|groupId|string   |itemId  |
|mainImage |string   |主图  |
|listingStatus |int   |产品状态  |
|developUser |string   |开发人员  |
|saleUser |string   |销售人员  |
|createUser |string   |创建人  |
|timedUploadTime |date   |定时刊登时间  |
|upOnlineTime |date   |上架时间  |
|source |int   |刊登方式  |
|createTime |date   |创建时间  |
|updateTime |date   |审核时间&删除时间  |
|price |double   |价格  |
|costPrice |double   |成本价格  |
|stock | int | 库存|
|total |long   |总数  |
|listingType |String   |lsiting类型  |
|categoryId | number| 类目ID |
|auditTime | date | 审核时间 |
|category | string | 类目名 |
|site | string | 站点 |
|isOnline | boolean | 是否在线 |
|resultMsg |String   |结果信息  |
|itemPageUrl|string| walmart 跳转链接|
|size |long   |每页数量  |
|current |long   |当前页  |
|pages |long   |总页数  |
|variantNum |long   |子sku数量  |
|deliveryWarehouse|String| 交付仓库|
|isFbword|否 |boolean | 是否有违禁词 |
|fbwordMsg|否 |string | 违禁词内容 |
|infringementType|否 |int | 侵权类型 |


## 备注 

- 更多返回错误代码请看首页的错误代码描述