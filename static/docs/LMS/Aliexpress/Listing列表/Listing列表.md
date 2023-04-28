# Listing列表

> 作者：xuxiaofei

## 分页


**接口地址**:`/aliexpresslisting/page`


**请求方式**:`POST`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:传入aliexpresslisting


**请求参数**:

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|current  |是  |number | 当前页	   |
|size  |是  |number | 每页大小	   |
|accounts  |否  |List&lt;string> | 账号	   |
|warehouseIds  |否  |List&lt;string> | 仓库	   |
|upOnlineTimeStart |否  |Number | 上架开始时间    |
|upOnlineTimeEnd     |否  |Number | 上架结束时间    |
|createTimeStart |否  |Number | 创建开始时间    |
|createTimeEnd     |否  |Number | 创建结束时间    |
|gmtModifiedStart |否  |Number | 后台更新开始时间    |
|gmtModifiedEnd     |否  |Number | 后台更新结束时间    |
|updateTimeStart |否  |Number | 系统更新开始时间    |
|updateTimeEnd     |否  |Number | 系统更新结束时间    |
|searchType     |否  |Number | 搜索类型  1-标题(单个) 2-内部sku 3-外部sku 4-ItemId    |
|searchSort     |是  |number | 搜索类别 1-子sku 2-父sku  默认为:1    |
|searchContent     |否  |Array | 搜索内容    |
|createUser     |否  |Long | 创建人 id   |
|listingType     |否  |string | listing类型 Normal Variation Combo    |
|isAmazonUpload     |否  |boolean | 数据来源  false-刊登系统 true-后台或第三方    |
|productStatus     |是  |Number | 状态 1-Draft 2-Approving 3-Uploading 4-Upload Failed 5-Online 6-Updating 7-Update Failed 8-Match Failed 9-Canceling 10-Canceled   |
|isNoPriceChangeBool     |否  |boolean |是否不可调价|
|isGbcInfringe     |否  |boolean |是否gbc侵权|
|infringementTypes     |否  |List&lt;Integer> |侵权类型: 1 外观专利侵权，2 设计专利侵权，3 商标侵权(关键词侵权)，4 图片侵权(盗图)，5 著作侵权，6 发明专利侵权，7 平台禁售|
|isNationQuote     |否  |boolean |是否区域调价|
|nationQuoteCountry     |否  |String |区域调价国家|
|freightTemplateId     |否  |Long | 运费模板id   |
|saleUser |否  |long   |负责人  |
|categoryId |否  |long   |类目Id  |
|ascs     |否  |string |正序排序<br>（创建时间：create_time;系统更新时间：update_time;上架时间：up_online_time;后台更新时间：gmt_modified）|
|descs     |否  |string |倒序排序<br>（创建时间：create_time;系统更新时间：update_time;上架时间：up_online_time;后台更新时间：gmt_modified）|

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
                "createTime": "2020-12-30 17:34:39",
                "updateTime": null,
                "aliexpressListingVariantVOList": null,
                "account": "cn1520259440ikxx",
                "accountCode": null,
                "itemId": 1005001972515683,
                "productSpu": "RYSYMBX",
                "listingType": null,
                "listingStatus": null,
                "subject": "50Pcs Dog Bone",
                "developUser": 1585,
                "saleUser": null,
                "isAliexpressUpload": false,
                "timedUploadTime": null,
                "upOnlineTime": null,
                "auditTime": null,
                "variantNum": 2
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
|subject |string   |标题  |
|productSku |string   |内部SKU  |
|sellerSku |string   |平台SKU  |
| itemId|string   |itemId  |
|displayImageUrl |string   |主图  |
|listingStatus |int   |产品状态  |
|developUser |string   |开发人员  |
|saleUser |string   |销售人员  |
|createUser |string   |创建人  |
|timedUploadTime |date   |定时刊登时间  |
|upOnlineTime |date   |上架时间  |
|isAliexpressUpload |int   |是否速卖通后台上传  |
|createTime |date   |创建时间  |
|updateTime |date   |审核时间&删除时间  |
|productPrice |double   |价格  |
|costPrice |double   |成本价格  |
|quantity | int | 库存|
|total |long   |总数  |
|listingType |String   |lsiting类型  |
|resultMsg |String   |结果信息  |
|size |long   |每页数量  |
|current |long   |当前页  |
|pages |long   |总页数  |
|variantNum |long   |子sku数量  |
|errorMsg |String   |报错信息  |
|freightTemplateName |String   |运费模板名称  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述