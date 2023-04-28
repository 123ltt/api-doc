# listing新增

> 作者：1638648874@qq.com

**作者**:`胡雍`


**接口地址**:`/ebay/listing/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:`ebay Listing新增`


**请求示例**:


```javascript
{
    "videoIds":"ddddd,fffff",
    "vatPercent": 0.18,
    "siteCode": "US",
    "storeName": "sunfayer",
    "storeCode": "ebay_US_0048",
    "publishSiteCode": "UK",
	"skuSuffix":"169",
    "warehouseId": 1,
    "title": "测试多属性listing新增003",
    "stock": "1",
    "primaryCateId": "28009",
    "secondCateId": "",
    "storePrimaryCateId": "",
    "storeSecondCateId": "",
    "conditionId": "1000",
    "productIdType": "UPC",
    "isFromNumPool": 0,
    "listingDuration": "GTC",
    "saleType": "1",
    "description": "&lt;p>*******新增多属性，描述****&lt;/p>", 
    "descTemplateId": null,
	"compatibilityTemplateId":null
    "id": null,
    "developer": "1310857482650308609",
    "itemId": null,
    "spu": "RYSJZ9H",
    "listingType": "Variation",
	"isForceCheckSkuRepeat"：true,
	"needUpload"：true,
    "logical": "{\"deliveryGroupName\":\"EMS\",\"agentCode\":\"F06-01\",\"cost\":\"1\",\"timeliness\":\"5\",\"lightgoods\":-1,\"priceLow\":\"33\",\"priceHigh\":\"99999\",\"weight\":null}", 
    "productAttrs": "[{\"name\":\"Subject\",\"value\":[\"Alien: Covenant\"]}]",
    "productImageUrls":["https://i.loli.net/2021/01/19/McE834zlimoR1bJ.jpg"], 
    "ebayListingVariationDTO": [
        {
            "saleProfitRate": "",
            "sellingPrice": "100",
            "costPrice": "0.0",
            "actualProfitRate": 0.25,
            "id": null,
            "listingId": null,
            "listingSpecs":"[{\"name\":\"Color\",\"value\":\"Blue\"},{\"name\":\"Size\",\"value\":\"10cm\"}]",
            "stock": "1",
            "productSku": "RYSJZ9H01",
            "variationPictures":["https://i.loli.net/2021/01/19/McE834zlimoR1bJ.jpg","https://i.loli.net/2021/01/19/FJn64Odisawjb3R.jpg"]
        },
         {
            "saleProfitRate": "",
			"startPrice": "200",
			"buyItNowPrice": null,
            "costPrice": "0.0",
            "actualProfitRate": 0.25,
            "id": null,
            "listingId": null,
             "listingSpecs":"[{\"name\":\"Color\",\"value\":\"Yellow\"},{\"name\":\"Size\",\"value\":\"20cm\"}]",
            "stock": "2",
            "productSku": "RYSJZ9H02",
             "variationPictures":["https://i.loli.net/2021/01/19/Lg8K1mqpEzRHkWd.jpg"]
        },
         {
            "saleProfitRate": "",
            "sellingPrice": "300",
            "costPrice": "0.0",
            "actualProfitRate": 0.25,
            "id": null,
            "listingId": null,
            "stock": "3",
             "listingSpecs":"[{\"name\":\"Color\",\"value\":\"Yellow\"},{\"name\":\"Size\",\"value\":\"30cm\"}]",
            "productSku": "RYSJZ9H03",
             "variationPictures":["https://i.loli.net/2021/01/19/SF3zvfsEWCeQBwc.jpg"]
        }
    ], 
    "isFbwordConfirmed": false,
    "paymentInfo": {
        "autoPay": false,
        "paymentInstructions": "付款说明",
        "paymentProfileId": 156000000001,
        "paymentProfileName": "支付模板1",
        "paypalEmailAddress": "xxxxx@qq.com"
    },
    "returnInfo": {
        "description": "退货描述",
        "returnsAcceptedOption": "ReturnsAccepted",
        "refundOption": "MoneyBack",
        "returnProfileId": 156000000002,
        "returnProfileName": "退货模板1",
        "returnsWithinOption": "Days_30",
        "shippingCostPaidByOption": "Buyer"
    },
    "shippingInfo": {
    	"shippingProfileId": 156000000003,
        "shippingProfileName": "运输模板1",
        "location": "China,shenzhen",
        "postcode": "51800",
        "country": "CN",
        "dispatchTimeMax": 1,
        "domesticShippingServiceOptionList": [
            {
                "freeShipping": true,
				"shippingServiceName": "Expedited SpeedPAK from China/Hong Kong/Taiwan",
                "shippingService": "UK_ExpeditedShippingFromGC",
                "shippingServiceAdditionalCost": 2.00,
                "shippingServiceCost": 1.00,
                "shippingServicePriority": 1,
                "shippingToLocations": ["UK","US"]
            }
        ],
        "internationalServiceOptionsList": [
            {
                "freeShipping": true,
                "shippingService": "USPSPriorityMailInternational",
                "shippingServiceAdditionalCost": 0,
                "shippingServiceCost": 0,
                "shippingServicePriority": 1,
                "shippingToLocations":  ["DE","FR"]
            }
        ]
    },
    "buyerRequirementInfo": {
        "buyerRequirementProfileId": 156000000004,
        "buyerRequirementProfileName": "买家要求模板1",
        "disableBuyerRequirements":true,
        "itemMaximumItemCount": 2,
        "maximumUnpaidItemStrikesInfoCount": 2,
        "maximumUnpaidItemStrikesInfoPeriod": "Days_30",
        "minimumFeedbackScore": 2,
        "shipToRegistrationCountry": false
    }
}
```

**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ebayListingDTO|单属性直接从该对象取值|body|true|EbayListingDTO|EbayListingDTO|
|&emsp;&emsp;siteCode|店铺站点||true|string||
|&emsp;&emsp;storeName|店铺名称||true|string||
|&emsp;&emsp;storeCode|店铺编码||true|string||
|&emsp;&emsp;publishSiteCode|刊登站点||true|string||
|&emsp;&emsp;spu|SKU||true|string||
|&emsp;&emsp;combineSku|组合SKU（废弃） ||false|string||
|&emsp;&emsp;warehouseId|仓库ID||true|string||
|&emsp;&emsp;skuSuffix|sku后缀||true|string||
|&emsp;&emsp;title|标题||true|string||
|&emsp;&emsp;primaryCateId|平台分类ID(一)||true|string||
|&emsp;&emsp;secondCateId|平台分类ID（二）||false|string||
|&emsp;&emsp;storePrimaryCateId|店铺分类ID(一)||false|string||
|&emsp;&emsp;storeSecondCateId|店铺分类ID（二）||false|string||
|&emsp;&emsp;conditionId|Condition ID||true|string||
|&emsp;&emsp;productIdType|产品通用编码类型||true|string||
|&emsp;&emsp;isFromNumPool|是否从号码池获取||false|Integer||
|&emsp;&emsp;listingDuration|刊登天数||true|string||
|&emsp;&emsp;listingType|listing类型||true|number||
|&emsp;&emsp;saleType|销售类型||true|string||
|&emsp;&emsp;vatPercent|增值税率百分比||false|decimal||
|&emsp;&emsp;descTemplateId|描述模板ID||false|string||
|&emsp;&emsp;compatibilityTemplateId|车型库模板ID||false|long||
|&emsp;&emsp;productAttrs|属性||true|string||
|&emsp;&emsp;saleProfitRate| 销售利润率||optional|string||
|&emsp;&emsp;description| 描述||true|string||
|&emsp;&emsp;isFbwordConfirmed|违禁词是否已确认||false|boolean||
|&emsp;&emsp;`isForceCheckSkuRepeat`|是否强制校验sku重复性（是:true,否:false）||true|boolean||
|&emsp;&emsp;`needUpload`|是否保存并上传（是:true,否:false）||true|boolean||
|&emsp;&emsp;productImageUrls| 产品图片 ||true| List&lt;String>||
|&emsp;&emsp;logical| 物流信息 ||true|string||
|&emsp;&emsp;`videoIds`| 视频ID，多个以逗号隔开 ||false|string||
|ebayListingVariationDTO|多属性直接从该对象取值|body|true|EbayListingVariationDTO|EbayListingVariationDTO|
|&emsp;&emsp;productSku| SKU ||true|string||
|&emsp;&emsp;isOtherSku| 是否是Spu之外的sku  ||true|string||
|&emsp;&emsp;combineSku| 组合SKU明细 ||false|string||
|&emsp;&emsp;listingSpecs| 多属性信息 ||true|string||
|&emsp;&emsp;variationPictures| 多属性图片 ||true| List&lt;String>||
|&emsp;&emsp;productIdTypeValue| 产品通用编码值 ||true|string||
|&emsp;&emsp;epid| EPID(ebay标准产品编码) ||false|string||
|&emsp;&emsp;cost| 成本 ||true|string||
|&emsp;&emsp;actualProfitRate| 实际利润率 ||true|string||
|&emsp;&emsp;startPrice| 售价(拍卖类型为起拍价)||true|string||
|&emsp;&emsp;~~sellingPrice~~| 售价 ||true|string||
|&emsp;&emsp;buyItNowPrice| 一口价 ||false|string||
|&emsp;&emsp;stock| 库存 ||true|string||
|&emsp;&emsp;paymentInfo|支付信息||false|EbayListingPaymentDetails对象|EbayListingPaymentDetails对象|
|&emsp;&emsp;&emsp;&emsp;autoPay|是否立即支付，0:否,1:是||false|boolean||
|&emsp;&emsp;&emsp;&emsp;paymentInstructions|付款说明||false|string||
|&emsp;&emsp;&emsp;&emsp;paymentProfileId|支付模板ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;paymentProfileName|付款模板名称||false|string||
|&emsp;&emsp;&emsp;&emsp;paypalEmailAddress|paypal账号||false|string||
|&emsp;&emsp;returnInfo|退货信息||false|EbayListingReturnDetails对象|EbayListingReturnDetails对象|
|&emsp;&emsp;&emsp;&emsp;description|退货政策详情||false|string||
|&emsp;&emsp;&emsp;&emsp;returnsAcceptedOption|是否接受退货(ReturnsNotAccepted:否，ReturnsAccepted):是)||true|string||
|&emsp;&emsp;&emsp;&emsp;refundOption|退还方式选项||false|string||
|&emsp;&emsp;&emsp;&emsp;returnProfileId|退货政策ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;returnProfileName|退货政策名称||false|string||
|&emsp;&emsp;&emsp;&emsp;returnsWithinOption|退货天数选项||false|string||
|&emsp;&emsp;&emsp;&emsp;shippingCostPaidByOption|运费由谁负担选项||false|string||
|&emsp;&emsp;shippingInfo|运输信息||false|EbayListingShippingDetails对象|EbayListingShippingDetails对象|
|&emsp;&emsp;&emsp;&emsp;shippingProfileId|运输模板ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;shippingProfileName|运输模板名称||false|string||
|&emsp;&emsp;&emsp;&emsp;country|国家||false|string||
|&emsp;&emsp;&emsp;&emsp;location|商品所在地||false|string||
|&emsp;&emsp;&emsp;&emsp;postcode|邮编||false|string||
|&emsp;&emsp;&emsp;&emsp;dispatchTimeMax| 处理时间(买家付款后到卖家发货的最大处理天数)||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;domesticShippingServiceOptionList|国内运输方式明细||false|array|EbayListingShippingServiceDTO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;freeShipping|是否免运费||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServiceName|运输方式名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingService|运输方式||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServiceCost|运费||false|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServiceAdditionalCost|额外每件加收||false|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServicePriority|运输服务优先级序号（第一个为1，第一个为2，以此类推)||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingToLocations|可运送国家或区域||false|array|string|
|&emsp;&emsp;&emsp;&emsp;internationalServiceOptionsList|国际运输方式明细||false|array|EbayListingShippingServiceDTO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;freeShipping|是否免运费||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingService|运输方式||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServiceAdditionalCost|额外每件加收||false|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServiceCost|运费||false|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingServicePriority|运输服务优先级序号（第一个为1，第一个为2，以此类推)||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;shippingToLocations|可运送国家或区域||false|array|string|
|&emsp;&emsp;buyerRequirementInfo|买家要求信息||false|EbayListingBuyerRequirementDetails对象|EbayListingBuyerRequirementDetails对象|
|&emsp;&emsp;&emsp;&emsp;buyerRequirementProfileId|买家要求模板ID||false|integer(int64)||
|&emsp;&emsp;&emsp;&emsp;buyerRequirementProfileName|买家要求模板名称||false|string||
|&emsp;&emsp;&emsp;&emsp;disableBuyerRequirements|买家要求: true:允许所有买家购买，false：禁止以下买家购买||false|boolean||
|&emsp;&emsp;&emsp;&emsp;itemMaximumItemCount|最大购买个数||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;maximumUnpaidItemStrikesInfoCount|最多允许有多少个拒绝付款交易||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;maximumUnpaidItemStrikesInfoPeriod|拒绝付款交易天数||false|string||
|&emsp;&emsp;&emsp;&emsp;minimumFeedbackScore|最低买家评分||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shipToRegistrationCountry|注册地不在我的运输范围内||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- |
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- ||
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean|| |


**响应示例**:
```javascript
{
	"code": 200,
	"data": null,
	"msg": "操作成功",
	"success": true
}
```