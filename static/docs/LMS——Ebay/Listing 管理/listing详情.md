# listing详情

> 作者：1638648874@qq.com

**简要描述：**

- **作者**:`谢智华`&lt;br/>获取listing内容详情

**请求URL：**
- ` /ebay/listing/detail `

**请求方式：**
- get `application/x-www-form-urlencoded` 

**参数：**

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |必选  |number |主键id |

 **返回示例**

```
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1356827089427447809",
        "createUser": null,
        "createDept": null,
        "createTime": null,
        "updateUser": null,
        "updateTime": null,
        "status": 1,
        "isDeleted": 0,
        "siteCode": "US",
        "publishSiteCode": "UK",
        "storeName": "sunfayer",
        "storeCode": "ebay_US_0048",
        "itemId": null,
        "primaryCateId": "28009",
        "primaryCatePath": "Art/Art Posters",
        "secondCateId": "",
        "storePrimaryCateId": "",
        "storeSecondCateId": "",
        "listingType": "Variation",
        "spu": "RYSJZ9H",
        "sellerSku": "ebay_US_004830BR-RYSJZ9H",
        "title": "测试多属性listing新增003",
        "mainPictureUrl": "https://i.loli.net/2021/01/19/McE834zlimoR1bJ.jpg",
        "saleType": "1",
        "conditionId": "1000",
        "conditionName": "New",
        "postcode": null,
        "country": null,
        "descTemplateId": null,
		"compatibilityTemplateId":null,
        "descTemplateName": null,
        "developer": "1310857482650308609",
        "isBackPublish": false,
        "publishTime": null,
        "listingDuration": "GTC",
        "warehouseId": 1,
        "saleProfitRate": null,
        "saleUser": "1331853515296534530",
        "productStatus": 1,
        "productIdType": "UPC",
        "vatPercent": "0.180",
        "logical": "{\"deliveryGroupName\":\"EMS\",\"agentCode\":\"F06-01\",\"cost\":\"1\",\"timeliness\":\"5\",\"lightgoods\":-1,\"priceLow\":\"33\",\"priceHigh\":\"99999\",\"weight\":null}",
        "listingVariations": [
            {
                "listingId": "1356827089427447809",
                "productSku": "RYSJZ9H01",
                "sellerSku": "ebay_US_004830BR-RYSJZ9H01",
                "mainPicture": null,
                "costPrice": "0.00",
                "sellingPrice": "100.00",
                "stock": 1,
                "listingStatus": 1,
                "id": "1356827089490362369",
                "variationPictures": [
                    "https://i.loli.net/2021/01/19/McE834zlimoR1bJ.jpg",
                    "https://i.loli.net/2021/01/19/FJn64Odisawjb3R.jpg"
                ],
                "combineSku": null,
                "startPrice": null,
                "productIdTypeValue": null,
                "listingSpecs": "[{\"name\":\"Color\",\"value\":\"Blue\"},{\"name\":\"Size\",\"value\":\"10cm\"}]",
                "actualProfitRate": "0.2500",
                "epid": null
            },
            {
                "listingId": "1356827089427447809",
                "productSku": "RYSJZ9H02",
                "sellerSku": "ebay_US_004830BR-RYSJZ9H02",
                "mainPicture": null,
                "costPrice": "0.00",
                "startPrice": "200.00",
				"buyItNowPrice": null,
                "stock": 2,
                "listingStatus": 1,
                "id": "1356827089507139585",
                "variationPictures": [
                    "https://i.loli.net/2021/01/19/Lg8K1mqpEzRHkWd.jpg"
                ],
                "combineSku": null,
                "startPrice": null,
                "productIdTypeValue": null,
                "listingSpecs": "[{\"name\":\"Color\",\"value\":\"Yellow\"},{\"name\":\"Size\",\"value\":\"20cm\"}]",
                "actualProfitRate": "0.2500",
                "epid": null
            },
            {
                "listingId": "1356827089427447809",
                "productSku": "RYSJZ9H03",
                "sellerSku": "ebay_US_004830BR-RYSJZ9H03",
                "mainPicture": null,
                "costPrice": "0.00",
                "sellingPrice": "300.00",
                "stock": 3,
                "listingStatus": 1,
                "id": "1356827089519722498",
                "variationPictures": [
                    "https://i.loli.net/2021/01/19/SF3zvfsEWCeQBwc.jpg"
                ],
                "combineSku": null,
                "startPrice": null,
                "productIdTypeValue": null,
                "listingSpecs": "[{\"name\":\"Color\",\"value\":\"Yellow\"},{\"name\":\"Size\",\"value\":\"30cm\"}]",
                "actualProfitRate": "0.2500",
                "epid": null
            }
        ],
        "listingText": null,
        "paymentInfo": {
            "id": "1356827099447640066",
            "createUser": "1310857482650308609",
            "createDept": "1306782213614407681",
            "createTime": "2021-02-03 12:49:24",
            "updateUser": "1310857482650308609",
            "updateTime": "2021-02-04 09:16:10",
            "status": 1,
            "isDeleted": 0,
            "listingId": "1356827089427447809",
            "paymentProfileId": 156000000001,
            "paymentProfileName": "支付模板1",
            "autoPay": false,
            "paypalEmailAddress": "xxxxx@qq.com",
            "paymentInstructions": "付款说明"
        },
        "shippingInfo": {
            "id": "1356827115478269954",
            "createUser": "1310857482650308609",
            "createDept": "1306782213614407681",
            "createTime": "2021-02-03 12:49:28",
            "updateUser": "1310857482650308609",
            "updateTime": "2021-02-04 09:16:37",
            "status": 1,
            "isDeleted": 0,
            "listingId": "1356827089427447809",
            "shippingProfileId": 156000000003,
            "shippingProfileName": "运输模板1",
            "postcode": "51800",
            "country": "CN",
            "location": "China,shenzhen",
            "dispatchTimeMax": 1,
            "shippingType": "Flat",
            "domesticShippingServiceOptionList": [
                {
                    "shippingService": "UK_ExpeditedShippingFromGC",
                    "shippingServiceCost": 1,
                    "shippingServiceAdditionalCost": 2,
                    "freeShipping": true,
                    "shippingServicePriority": 1,
                    "shippingToLocations": "[UK, US]"
                }
            ],
            "internationalServiceOptionsList": [
                {
                    "shippingService": "USPSPriorityMailInternational",
                    "shippingServiceCost": 0,
                    "shippingServiceAdditionalCost": 0,
                    "freeShipping": true,
                    "shippingServicePriority": 1,
                    "shippingToLocations": "[DE, FR]"
                }
            ]
        },
        "returnInfo": {
            "id": "1356827140090445826",
            "createUser": "1310857482650308609",
            "createDept": "1306782213614407681",
            "createTime": "2021-02-03 12:49:33",
            "updateUser": "1310857482650308609",
            "updateTime": "2021-02-04 09:16:39",
            "status": 1,
            "isDeleted": 0,
            "listingId": "1356827089427447809",
            "returnProfileId": 156000000002,
            "returnProfileName": "退货模板1",
            "returnsAcceptedOption": "ReturnsAccepted",
            "returnsWithinOption": "Days_30",
            "refundOption": "MoneyBack",
            "shippingCostPaidByOption": "Buyer",
            "description": "退货描述1"
        },
        "buyerRequirementInfo": {
            "id": "1356827141986271234",
            "createUser": "1310857482650308609",
            "createDept": "1306782213614407681",
            "createTime": "2021-02-03 12:49:34",
            "updateUser": "1310857482650308609",
            "updateTime": "2021-02-04 09:16:39",
            "status": 1,
            "isDeleted": 0,
            "listingId": "1356827089427447809",
            "buyerRequirementProfileId": 156000000004,
            "buyerRequirementProfileName": "买家要求模板1",
            "shipToRegistrationCountry": false,
            "maximumUnpaidItemStrikesInfoCount": 2,
            "maximumUnpaidItemStrikesInfoPeriod": "Days_30",
            "minimumFeedbackScore": 2,
            "itemMaximumItemCount": 2,
            "itemMinimumFeedbackScore": 20,
            "zeroFeedbackScore": false,
			"disableBuyerRequirements"：false
        }
    },
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |
|conditionId |string  |Condition-ID
|conditionName |string  |Condition-Name
|country |string  |国家
|createDept |integer  |创建部门
|createTime |string  |创建时间
|createUser |integer  |创建人
|descTemplateId |string  |描述模板ID
|compatibilityTemplateId |long  |车型库模板ID
|descTemplateName |string  |描述模板名称
|developer |integer  |开发人员
|id |integer  |主键id
|isBackPublish |boolean  |是否后台刊登
|isDeleted |integer  |是否已删除
|itemId |string  |Item-Id
|listingDuration |string  |刊登天数
|listingType |string  |商品类型:Normal、Variation、Combo
|mainPictureUrl |string  |主图(缩略图)
|productImageUrls |array&lt;string>  |产品图片url列表
|postcode |string  |邮编
|primaryCateId |string  |平台分类ID(一)
|primaryCatePath |string  |平台分类树
|productIdType |string  |产品通用编码类型
|productStatus |integer  |产品状态
|publishSiteCode |string  |刊登站点
|publishTime |string(  |刊登时间
|saleProfitRate |number  |销售利润率
|saleType |string  |销售类型：默认Fixed(固定价)、Auction(拍卖)
|saleUser |integer  |负责人(销售员)
|secondCateId |string  |台分类ID(二)
|sellerSku |string  |平台SKU
|siteCode |string  |站点
|spu |string  |商品SPU，在非vary-listing情况下，该字段可为空
|status |integer  |业务状态
|storeCode |string  |店铺编码
|storeName |string  |店铺名称
|storePrimaryCateId |string  |店铺分类ID(一)
|storeSecondCateId |string  |店铺分类ID（二）
|title |string  |标题
|updateTime |string  |更新时间
|updateUser |integer  |更新人
|vatPercent |number  |增值税率百分比(%)
|warehouseId |integer  |仓库ID(1:本地仓，2：虚拟海外仓，3：真实海外仓)
|logical |string  |物流信息
| `videoIds`|string | 视频ID，多个以逗号隔开 ||false|string||
|listingText |Object  |listing属性&描述相关信息|﹀▼
|> conditionDesc |string  |item-condition-desc|listingText
|> description |string  |产品描述|listingText
|> id |integer  |主键|listingText
|> listingId |integer  |listingId|listingText
|> productAttrs |string  |产品属性|listingText
|listingVariations |array(Object)  |变体属性对象|﹀▼
|> combineSku |string  |组合sku|listingVariations
|> costPrice |number  |成本价|listingVariations
|> epid |string  |EPID(ebay标准产品编码)|listingVariations
|> id |integer  |ID|listingVariations
|> listingId |integer  |ListingID|listingVariations
|> listingSpecs |string  |多属性值（json格式)|listingVariations
|> listingStatus |string  |listing状态|listingVariations
|> ~~logical~~ |string  |物流信息|listingVariations
|> mainPicture |string  |主图(缩略图)|listingVariations
|> ~~packageWeight~~ |number  |包裹重量|listingVariations
|> productIdTypeValue |string  |产品通用编码|listingVariations
|> productSku |string  |产品SKU|listingVariations
|> actualProfitRate |string  |实际利润率|listingVariations
|> sellerSku |string  |平台sku|istingVariations
|> ~~sellingPrice~~ |number  |价格|listingVariations
|> ~~shippingCost~~ |number  |运费|listingVariations
|> startPrice |number  |售价(拍卖类型为起拍价)|listingVariations
|> buyItNowPrice |number  |一口价|listingVariations
|> stock |integer  |库存|listingVariations
|> variationPictures |array&lt;string>  |多属性图片|listingVariations
|paymentInfo|支付信息||false|EbayListingPaymentDetails对象|EbayListingPaymentDetails对象|
|    autoPay|是否立即支付，0:否,1:是||false|boolean||
|    listingId|ebay listing 主表ID||false|integer(int64)||
|    paymentInstructions|付款说明||false|string||
|    paymentProfileId|支付模板ID||false|integer(int64)||
|    paymentProfileName|付款模板名称||false|string||
|    paypalEmailAddress|paypal账号||false|string||
|returnInfo|退货信息||false|EbayListingReturnDetails对象|EbayListingReturnDetails对象|
|    description|退货政策详情||false|string||
|    returnsAcceptedOption|是否接受退货(ReturnsNotAccepted:否，ReturnsAccepted):是)||true|string||
|    refundOption|退还方式选项||false|string||
|    returnProfileId|退货政策ID||false|integer(int64)||
|    returnProfileName|退货政策名称||false|string||
|    returnsWithinOption|退货天数选项||false|string||
|    shippingCostPaidByOption|运费由谁负担选项||false|string||
|shippingInfo|运输信息||false|EbayListingShippingDetails对象|EbayListingShippingDetails对象|
|    shippingProfileId|运输模板ID||false|integer(int64)||
|    shippingProfileName|运输模板名称||false|string||
|    country|国家||false|string||
|    location|商品所在地||false|string||
|    postcode|邮编||false|string||
|    dispatchTimeMax| 处理时间(买家付款后到卖家发货的最大处理天数)||false|integer(int32)||
|    domesticShippingServiceOptionList|国内运输方式明细||false|array|EbayListingShippingServiceDTO|
|      freeShipping|是否免运费||false|boolean||
|      shippingService|运输方式||false|string||
|      shippingServiceCost|运费||false|number||
|      shippingServiceAdditionalCost|额外每件加收||false|number||
|      shippingServicePriority|运输服务优先级序号（第一个为1，第一个为2，以此类推)||false|integer(int32)||
|      shippingToLocations|可运送国家或区域||false|array|string|
|    internationalServiceOptionsList|国际运输方式明细||false|array|EbayListingShippingServiceDTO|
|      freeShipping|是否免运费||false|boolean||
|      shippingService|运输方式||false|string||
|      shippingServiceAdditionalCost|额外每件加收||false|number||
|      shippingServiceCost|运费||false|number||
|      shippingServicePriority|运输服务优先级序号（第一个为1，第一个为2，以此类推)||false|integer(int32)||
|      shippingToLocations|可运送国家或区域||false|array|string|
|buyerRequirementInfo|买家要求信息||false|EbayListingBuyerRequirementDetails对象|EbayListingBuyerRequirementDetails对象|
|    buyerRequirementProfileId|买家要求模板ID||false|integer(int64)||
|    buyerRequirementProfileName|买家要求模板名称||false|string||
|    disableBuyerRequirements|买家要求: true:允许所有买家购买，false：禁止以下买家购买||false|boolean||
|    itemMaximumItemCount|最大购买个数||false|integer(int32)||
|    maximumUnpaidItemStrikesInfoCount|最多允许有多少个拒绝付款交易||false|integer(int32)||
|    maximumUnpaidItemStrikesInfoPeriod|拒绝付款交易天数||false|string||
|    minimumFeedbackScore|最低买家评分||false|integer(int32)||
|    shipToRegistrationCountry|注册地不在我的运输范围内||false|boolean||
 **备注**

- `2021-01-15:新增logical字段;listingVariations删除shippingCost、packageWeight、logical字段`&lt;br/>2021-01-08:新增productImageUrls:产品图片url列表字段