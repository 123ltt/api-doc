# listing修改

> 作者：1638648874@qq.com

**作者**:`胡雍`


**接口地址**:`/ebay/listing/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:`ebay Listing修改`


**请求示例**:


```javascript
{
    "videoIds":"",
    "id":"1356827089427447809",
    "vatPercent": 0.18,
    "siteCode": "US",
    "storeName": "sunfayer",
    "storeCode": "ebay_US_0048",
    "publishSiteCode": "UK",
    "warehouseId": "Z20",
	"skuSuffix":"169",
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
    "description": "&lt;p>*******修改模板，描述****&lt;/p>",
    "descTemplateId": null, 
	"compatibilityTemplateId":null,
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
			"startPrice": "100",
			"buyItNowPrice": null,
            "costPrice": "0.0",
            "actualProfitRate": 0.25,
            "id": 1356827089490362369,
            "listingId": 1356827089427447809,
            "listingSpecs":"[{\"name\":\"Color\",\"value\":\"Blue\"},{\"name\":\"Size\",\"value\":\"10cm\"}]",
            "stock": "1",
            "productSku": "RYSJZ9H01",
            "variationPictures":["https://i.loli.net/2021/01/19/McE834zlimoR1bJ.jpg","https://i.loli.net/2021/01/19/FJn64Odisawjb3R.jpg"],
			"optType":1,
        },
         {
            "saleProfitRate": "",
            "startPrice": "200",
			"buyItNowPrice": null,
            "costPrice": "0.0",
            "actualProfitRate": 0.25,
            "id": 1356827089507139585,
            "listingId": 1356827089427447809,
             "listingSpecs":"[{\"name\":\"Color\",\"value\":\"Yellow\"},{\"name\":\"Size\",\"value\":\"20cm\"}]",
            "stock": "2",
            "productSku": "RYSJZ9H02",
             "variationPictures":["https://i.loli.net/2021/01/19/Lg8K1mqpEzRHkWd.jpg"],
			 "optType":1,
        },
         {
            "saleProfitRate": "",
            "sellingPrice": "300",
            "costPrice": "0.0",
            "actualProfitRate": 0.25,
            "id": 1356827089519722498,
            "listingId": 1356827089427447809,
            "stock": "3",
            "listingSpecs":"[{\"name\":\"Color\",\"value\":\"Yellow\"},{\"name\":\"Size\",\"value\":\"30cm\"}]",
            "productSku": "RYSJZ9H03",
            "variationPictures":["https://i.loli.net/2021/01/19/SF3zvfsEWCeQBwc.jpg"],
			 "optType":1,
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
        "description": "退货描述1",
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
|ebayListingDto|单属性直接从该对象取值|body|true|EbayListingDto|EbayListingDto|
|  id|listing Id||true|number||
|  itemId|itemId||true|number||
|  siteCode|店铺站点||true|string||
|  storeName|店铺名称||true|string||
|  storeCode|店铺编码||true|string||
|  publishSiteCode|刊登站点||true|string||
|  spu|SKU||true|string||
|  sellerSku|平台SKU ||true|string||
|  combineSku|组合SKU（废弃） ||false|string||
|  warehouseId|仓库ID||true|string||
|  skuSuffix|sku后缀||true|string||
|  title|标题||true|string||
|  primaryCateId|平台分类ID(一)||true|string||
|  secondCateId|平台分类ID（二）||false|string||
|  primaryStoreCateId|店铺分类ID(一)||false|string||
|  storeSecondCateId|店铺分类ID（二）||false|string||
|  conditionId|Condition ID||true|string||
|  productIdType|产品通用编码类型||true|string||
|  isFromNumPool|是否从号码池获取||true|Integer||
|  listingDuration|刊登天数||true|string||
|  listingType|listing类型||true|number||
|  saleType|销售类型||true|string||
|  vatPercent|增值税百分比(%)||false|string||
|  descTemplateId|描述模板ID||true|string||
|  compatibilityTemplateId|车型库模板ID||true|long||
|  productAttrs|属性||false|string||
|  saleProfitRate| 销售利润率||optional|string||
|  description| 描述||true|string||
|  updateField| 修改字段||true|List&lt;Integer>||
|  isFbwordConfirmed|违禁词是否已确认（是:true,否:false）||false|boolean||
|  `isForceCheckSkuRepeat`|是否强制校验sku重复性（是:true,否:false）||true|boolean||
|  `needUpload`|是否保存并上传（是:true,否:false）||true|boolean||
|  productImageUrls| 产品图片 ||true| List&lt;String>||
|  logical| 物流信息 ||true|string||
|  productStatus| 产品状态 ||true|string||
|  `videoIds`| 视频ID，多个以逗号隔开 ||false|string||
|ebayListingVariationDTO|多属性直接从该对象取值|body|true|EbayListingVariationDTO|EbayListingVariationDTO|
|  id | 变体ID ||true|string||
|  productSku| SKU ||true|string||
|  isOtherSku| 是否是Spu之外的sku ||true|string||
|  combineSku| 组合SKU明细 ||false|string||
|  listingSpecs| 多属性信息 ||true|string||
|  variationPictures| variationPictures ||true| List&lt;String>||
|  productIdTypeValue| 产品通用编码值 ||true|string||
|  epid| EPID(ebay标准产品编码) ||false|string||
|  cost| 成本 ||true|string||
|  actualProfitRate|实际利润率  ||true|string||
|  startPrice| 售价(拍卖类型为起拍价)||true|string||
|  ~~sellingPrice~~| 售价 ||true|string||
|  buyItNowPrice| 一口价 ||false|string||
|  stock| 库存 ||true|string||
|  optType| 操作类型(1:重新刊登,2:删除,没操作时为空) ||false|Integer||
|  paymentInfo|支付信息||false|EbayListingPaymentDetails对象|EbayListingPaymentDetails对象|
|    autoPay|是否立即支付，0:否,1:是||false|boolean||
|    listingId|ebay listing 主表ID||false|integer(int64)||
|    paymentInstructions|付款说明||false|string||
|    paymentProfileId|支付模板ID||false|integer(int64)||
|    paymentProfileName|付款模板名称||false|string||
|    paypalEmailAddress|paypal账号||false|string||
|  returnInfo|退货信息||false|EbayListingReturnDetails对象|EbayListingReturnDetails对象|
|    description|退货政策详情||false|string||
|    returnsAcceptedOption|是否接受退货(ReturnsNotAccepted:否，ReturnsAccepted):是)||true|string||
|    refundOption|退还方式选项||false|string||
|    returnProfileId|退货政策ID||false|integer(int64)||
|    returnProfileName|退货政策名称||false|string||
|    returnsWithinOption|退货天数选项||false|string||
|    shippingCostPaidByOption|运费由谁负担选项||false|string||
|  shippingInfo|运输信息||false|EbayListingShippingDetails对象|EbayListingShippingDetails对象|
|    shippingProfileId|运输模板ID||false|integer(int64)||
|    shippingProfileName|运输模板名称||false|string||
|    country|国家||false|string||
|    location|商品所在地||false|string||
|    postcode|邮编||false|string||
|    dispatchTimeMax| 处理时间(买家付款后到卖家发货的最大处理天数)||false|integer(int32)||
|    domesticShippingServiceOptionList|国内运输方式明细||false|array|EbayListingShippingServiceDTO|
|      freeShipping|是否免运费||false|boolean||
|      shippingServiceName|运输方式名称||false|string||
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
|  buyerRequirementInfo|买家要求信息||false|EbayListingBuyerRequirementDetails对象|EbayListingBuyerRequirementDetails对象|
|    buyerRequirementProfileId|买家要求模板ID||false|integer(int64)||
|    buyerRequirementProfileName|买家要求模板名称||false|string||
|    disableBuyerRequirements|买家要求: true:允许所有买家购买，false：禁止以下买家购买||false|boolean||
|    itemMaximumItemCount|最大购买个数||false|integer(int32)||
|    maximumUnpaidItemStrikesInfoCount|最多允许有多少个拒绝付款交易||false|integer(int32)||
|    maximumUnpaidItemStrikesInfoPeriod|拒绝付款交易天数||false|string||
|    minimumFeedbackScore|最低买家评分||false|integer(int32)||
|    shipToRegistrationCountry|注册地不在我的运输范围内||false|boolean||


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