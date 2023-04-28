# Listing列表

> 作者：xingzhen

## 分页


**接口地址**:`/shopeelisting/page`


**请求方式**:`POST`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入shopeeListing


**请求参数**:

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current  |是  |number | 当前页	   |
|size  |是  |number | 每页大小	   |
|accounts  |否  |List&lt;string> | 账号	   |
|upOnlineTimeStart |否  |Number | 上架开始时间    |
|upOnlineTimeEnd     |否  |Number | 上架结束时间    |
|createTimeStart |否  |Number | 创建开始时间    |
|createTimeEnd     |否  |Number | 创建结束时间    |
|searchType     |否  |Number | 搜索类型  1-标题(单个) 2-内部sku 3-外部sku 4-ItemId 5-listingId   |
|searchSort     |是  |number | 搜索类别 1-子sku 2-父sku  默认为:1    |
|searchContent     |否  |Array | 搜索内容    |
|createUser     |否  |Long | 创建人 id   |
|listingType     |否  |string | listing类型 Normal Variation Combo    |
|isShopeeUpload     |否  |integer | 数据来源  1-后台刊登 2.蝌蚪刊登 3-新系统刊登    |
|isDiscount     |否  |boolean | 是否含有活动价    |
|isPreOrder     |否  |boolean | 是否预售产品    |
|listingStatus     |是  |Number | 状态  3-Uploading 4-Upload Failed 5-Online 6-Updating 7-Update Failed 8-Match Failed 9-Canceling 10-Canceled   |
|isGbcInfringe     |否  |boolean |是否gbc侵权|
|infringementTypes     |否  |List&lt;Integer> |侵权类型: 1 外观专利侵权，2 设计专利侵权，3 商标侵权(关键词侵权)，4 图片侵权(盗图)，5 著作侵权，6 发明专利侵权，7 平台禁售|
|likes  |否  |number | 收藏量	   |
|views  |否  |number | 浏览量	   |
|sales  |否  |number | 销量	   |
|ratingStar  |否  |double | 星级数	   |
|likesSign  |否  |Stirng | 收藏量符号	   |
|viewsSign  |否  |Stirng | 浏览量符号	   |
|salesSign  |否  |Stirng | 销量符号	   |
|ratingStarSign  |否  |Stirng | 星级数符号	   |


## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "id": "1341329897006415873",
				"shopId": 12313,
                "createUser": "104",
                "createTime": "2018-09-10 18:50:34",
                "updateUser": null,
                "updateTime": null,
                "itemId": "5b964c78efb674161aff4464",
                "account": "himotherandbaby",
                "name": "Portable Mischievous ",
                "listingType": null,
                "listingStatus": null,
                "sellerSku": "JURDSS155546591955",
                "productSpu": "4321",
                "stock": null,
                "isEnabled": null,
                "price": null,
                "costPrice": null,
                "imageUrl": "https://canary.contestimg.shopee.com/",
                "isOnline": null,
                "isShopeeUpload": false,
                "timedUploadTime": null,
                "upOnlineTime": "2018-09-10 08:00:00",
                "developUser": null,
                "saleUser": null,
                "dateUploaded": null,
                "lastUpdated": null,
                "developUserName": null,
                "saleUserName": null,
                "createUserName": "廖莉萍-00019",
                "variantNum": 1,
                "productSku": null，
				"isPreOrder": false,
				"daysToShip": null
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
|shopId|integer| 店铺id|
|name |string   |标题  |
|productSku |string   |内部SKU  |
|sellerSku |string   |平台SKU  |
|itemId|string   |itemId  |
|imageUrl |string   |主图  |
|listingStatus |int   |产品状态  |
|developUser |string   |开发人员  |
|saleUser |string   |销售人员  |
|createUser |string   |创建人  |
|timedUploadTime |date   |定时刊登时间  |
|upOnlineTime |date   |上架时间  |
|isShopeeUpload |int   |是否shopee后台上传  |
|createTime |date   |创建时间  |
|updateTime |date   |审核时间&删除时间  |
|price |double   |活动价  |
|originalPrice |double   |原价  |
|discountId |long   |活动价id(为null或者为0都代表没有活动)  |
|costPrice |double   |成本价格  |
|stock | int | 库存|
|total |long   |总数  |
|listingType |String   |lsiting类型  |
|resultMsg |String   |结果信息  |
|size |long   |每页数量  |
|current |long   |当前页  |
|pages |long   |总页数  |
|isPreOrder |boolean   |是否预售  |
|cmtCount |int   |评论数  |
|sales |int   |销量  |
|views |int   |浏览量  |
|likes |int   |收藏量  |
|ratingStar |double   |星级数  |
|variantNum |long   |子sku数量  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述